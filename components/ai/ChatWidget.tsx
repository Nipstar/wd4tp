import { MessageSquare, X, Phone, PhoneOff, Mic, Send, Loader2, Volume2 } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { RetellWebClient } from 'retell-client-js-sdk'

type CallState = 'idle' | 'connecting' | 'connected' | 'ended'
type WidgetMode = 'chat' | 'voice'
interface ChatMessage { role: 'user' | 'agent'; text: string }

const GREETING = "Hi! I'm the WDFT AI. Ask me about websites, pricing, or AI tools for your trade."

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [mode, setMode] = useState<WidgetMode>('chat')
    const [callState, setCallState] = useState<CallState>('idle')
    const [isAgentSpeaking, setIsAgentSpeaking] = useState(false)
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
        { role: 'agent', text: GREETING }
    ])
    const [inputText, setInputText] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [chatId, setChatId] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const retellClient = useRef<RetellWebClient | null>(null)
    const chatEndRef = useRef<HTMLDivElement>(null)

    // Listen for external "open chat widget" requests (optionally with mode)
    useEffect(() => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent<{ mode?: WidgetMode }>).detail
            if (detail?.mode) setMode(detail.mode)
            setIsOpen(true)
        }
        window.addEventListener('open-chat-widget', handler)
        return () => window.removeEventListener('open-chat-widget', handler)
    }, [])

    // Initialize Retell SDK (dynamic import for SSR safety)
    useEffect(() => {
        let mounted = true

        import('retell-client-js-sdk').then(({ RetellWebClient }) => {
            if (!mounted) return
            const client = new RetellWebClient()
            retellClient.current = client

            client.on('call_started', () => {
                setCallState('connected')
                setErrorMessage(null)
            })

            client.on('call_ended', () => {
                setCallState('ended')
                setIsAgentSpeaking(false)
                setTimeout(() => setCallState('idle'), 1500)
            })

            client.on('agent_start_talking', () => setIsAgentSpeaking(true))
            client.on('agent_stop_talking', () => setIsAgentSpeaking(false))

            client.on('error', () => {
                setErrorMessage('Connection error. Please try again.')
                setCallState('idle')
                setIsAgentSpeaking(false)
            })
        })

        return () => {
            mounted = false
            retellClient.current?.stopCall()
        }
    }, [])

    // Auto-scroll chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [chatMessages, isSending])

    // Stop voice call when closing panel or switching to chat
    const stopCallIfActive = useCallback(() => {
        if (callState === 'connected' || callState === 'connecting') {
            retellClient.current?.stopCall()
            setCallState('idle')
            setIsAgentSpeaking(false)
        }
    }, [callState])

    const handleClose = () => {
        stopCallIfActive()
        setIsOpen(false)
    }

    const handleModeSwitch = (newMode: WidgetMode) => {
        if (newMode === 'chat' && mode === 'voice') {
            stopCallIfActive()
        }
        setMode(newMode)
        setErrorMessage(null)
    }

    // ── Voice Call ──
    const startVoiceCall = async () => {
        setErrorMessage(null)

        // Check microphone permission
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true })
        } catch {
            setErrorMessage('Microphone access denied. Please allow microphone access and try again.')
            return
        }

        setCallState('connecting')

        try {
            const res = await fetch('/api/retell-create-call', { method: 'POST' })
            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.error || 'Failed to create call')
            }
            const data = await res.json()

            await retellClient.current?.startCall({
                accessToken: data.access_token,
                sampleRate: 24000,
                captureDeviceId: 'default',
            })
        } catch (err) {
            setErrorMessage(err instanceof Error ? err.message : 'Failed to connect. Please try again.')
            setCallState('idle')
        }
    }

    const endVoiceCall = () => {
        retellClient.current?.stopCall()
    }

    const handleCallButton = () => {
        if (callState === 'idle' || callState === 'ended') {
            startVoiceCall()
        } else {
            endVoiceCall()
        }
    }

    // ── Text Chat ──
    const sendMessage = async () => {
        const text = inputText.trim()
        if (!text || isSending) return

        setChatMessages(prev => [...prev, { role: 'user', text }])
        setInputText('')
        setIsSending(true)

        try {
            const res = await fetch('/api/retell-text-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, chat_id: chatId }),
            })

            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.error || 'Failed to send message')
            }

            const data = await res.json()
            if (data.chat_id) setChatId(data.chat_id)
            if (data.response) {
                setChatMessages(prev => [...prev, { role: 'agent', text: data.response }])
            }
        } catch {
            setChatMessages(prev => [...prev, { role: 'agent', text: 'Sorry, something went wrong. Please try again.' }])
        } finally {
            setIsSending(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    // ── Voice Status Text ──
    const getStatusText = () => {
        switch (callState) {
            case 'idle': return 'Tap to start a voice call'
            case 'connecting': return 'Connecting...'
            case 'connected': return isAgentSpeaking ? 'AI is speaking...' : 'Listening...'
            case 'ended': return 'Call ended'
        }
    }

    return (
        <>
            {/* Floating Button */}
            <button
                title="Chat with our AI"
                onClick={() => isOpen ? handleClose() : setIsOpen(true)}
                className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 h-14 w-14 bg-brand-ai hover:bg-brand-ai-dark text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                aria-label="Toggle chat widget"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </button>

            {/* Panel */}
            {isOpen && (
                <div className="fixed bottom-[144px] lg:bottom-24 right-4 lg:right-6 z-50 w-[350px] max-w-[calc(100vw-32px)] h-[500px] max-h-[calc(100vh-160px)] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-brand-slate/10">
                    {/* Header */}
                    <div className="bg-brand-dark p-4 flex items-center justify-between">
                        <div>
                            <h3 className="text-white font-display font-bold text-sm">WDFT AI</h3>
                            <p className="text-brand-cream/60 text-xs">Talk to me or type below</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="text-brand-cream/60 hover:text-white transition-colors"
                            aria-label="Close chat"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Mode Toggle */}
                    <div className="bg-white px-3 py-2 border-b border-brand-slate/10">
                        <div className="flex gap-1 bg-brand-cream rounded-lg p-1">
                            <button
                                onClick={() => handleModeSwitch('chat')}
                                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                                    mode === 'chat'
                                        ? 'bg-brand-ai text-white shadow-sm'
                                        : 'text-brand-slate hover:text-brand-dark'
                                }`}
                            >
                                <MessageSquare className="h-3 w-3" />
                                Chat
                            </button>
                            <button
                                onClick={() => handleModeSwitch('voice')}
                                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                                    mode === 'voice'
                                        ? 'bg-brand-ai text-white shadow-sm'
                                        : 'text-brand-slate hover:text-brand-dark'
                                }`}
                            >
                                <Volume2 className="h-3 w-3" />
                                Voice
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    {mode === 'chat' ? (
                        <>
                            {/* Messages */}
                            <div className="flex-1 p-4 bg-brand-cream overflow-y-auto flex flex-col gap-3">
                                {chatMessages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                                            msg.role === 'user'
                                                ? 'self-end bg-brand-ai text-white rounded-br-sm'
                                                : 'self-start bg-white text-brand-slate shadow-sm rounded-bl-sm'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                                {isSending && (
                                    <div className="self-start bg-white text-brand-slate/50 shadow-sm p-3 rounded-xl rounded-bl-sm text-sm italic max-w-[85%]">
                                        Thinking...
                                    </div>
                                )}
                                <div ref={chatEndRef} />
                            </div>

                            {/* Input */}
                            <div className="bg-white p-3 border-t border-brand-slate/10">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={inputText}
                                        onChange={e => setInputText(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type a message..."
                                        disabled={isSending}
                                        className="flex-1 bg-brand-cream border border-brand-slate/20 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-ai focus:border-transparent text-brand-slate disabled:opacity-50"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={isSending || !inputText.trim()}
                                        className="p-2.5 bg-brand-ai hover:bg-brand-ai-dark text-white rounded-full transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                        title="Send message"
                                    >
                                        <Send className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        /* Voice Mode */
                        <div className="flex-1 bg-brand-cream flex flex-col items-center justify-center gap-5 p-6">
                            {/* Call Button */}
                            <div className="relative">
                                {/* Ripple rings when connected */}
                                {callState === 'connected' && (
                                    <>
                                        <span className="absolute inset-0 rounded-full bg-brand-ai/20" style={{ animation: 'ripple 2s ease-out infinite' }} />
                                        <span className="absolute inset-0 rounded-full bg-brand-ai/10" style={{ animation: 'ripple 2s ease-out 0.5s infinite' }} />
                                    </>
                                )}
                                <button
                                    onClick={handleCallButton}
                                    className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-lg ${
                                        callState === 'idle' || callState === 'ended'
                                            ? 'bg-brand-ai hover:bg-brand-ai-dark text-white hover:scale-105'
                                            : callState === 'connecting'
                                                ? 'bg-amber-500 text-white animate-pulse'
                                                : 'bg-red-500 hover:bg-red-600 text-white'
                                    }`}
                                    aria-label={callState === 'connected' ? 'End call' : 'Start voice call'}
                                >
                                    {callState === 'connecting' ? (
                                        <Loader2 className="h-8 w-8 animate-spin" />
                                    ) : callState === 'connected' ? (
                                        <PhoneOff className="h-8 w-8" />
                                    ) : (
                                        <Phone className="h-8 w-8" />
                                    )}
                                </button>
                            </div>

                            {/* Audio Visualizer */}
                            {callState === 'connected' && (
                                <div className="flex items-end gap-1 h-8">
                                    {[0, 1, 2, 3, 4].map(i => (
                                        <div
                                            key={i}
                                            className="w-1 rounded-full bg-brand-ai"
                                            style={{
                                                height: isAgentSpeaking ? undefined : '6px',
                                                animation: isAgentSpeaking ? `wave 0.8s ease-in-out ${i * 0.1}s infinite` : 'none',
                                                transformOrigin: 'bottom',
                                                minHeight: '6px',
                                                maxHeight: '32px',
                                            }}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Status */}
                            <p className="text-sm font-medium text-brand-slate">{getStatusText()}</p>

                            {/* Mic indicator when connected */}
                            {callState === 'connected' && (
                                <div className="flex items-center gap-2 text-xs text-brand-slate/70">
                                    <Mic className="h-3.5 w-3.5" />
                                    <span>{isAgentSpeaking ? 'Agent responding' : 'Your turn to speak'}</span>
                                </div>
                            )}

                            {/* Error */}
                            {errorMessage && (
                                <p className="text-xs text-red-500 text-center max-w-[250px]" role="alert">
                                    {errorMessage}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
