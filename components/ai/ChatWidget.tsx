import { MessageSquare, X } from 'lucide-react'
import { useState } from 'react'

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Widget Trigger */}
            <button
                title="Chat with our Demo AI"
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 h-14 w-14 bg-brand-ai hover:bg-brand-ai-dark text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                aria-label="Toggle chat widget"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <MessageSquare className="h-6 w-6" />
                )}
            </button>

            {/* Chat Windows Shell */}
            {isOpen && (
                <div className="fixed bottom-[144px] lg:bottom-24 right-4 lg:right-6 z-50 w-[350px] max-w-[calc(100vw-32px)] h-[500px] max-h-[calc(100vh-160px)] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-brand-slate/10 animate-in slide-in-from-bottom-5">
                    {/* Header */}
                    <div className="bg-brand-dark p-4 flex flex-col gap-1">
                        <h3 className="text-white font-display font-bold">WDFT Demo AI</h3>
                        <p className="text-brand-cream/70 text-sm">Ask me about prices, websites, or trades.</p>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 bg-brand-cream overflow-y-auto flex flex-col gap-4">
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start text-brand-slate text-sm">
                            <p>Hi there! 👋 I'm the AI demo assistant.</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border-l-2 border-brand-ai shadow-sm max-w-[85%] self-start text-brand-slate text-sm">
                            <p>If you're a tradesperson, I can handle your website enquiries exactly like this 24/7. What trade are you in?</p>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="bg-white p-4 border-t border-brand-slate/10">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full bg-brand-cream border border-brand-slate/20 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-ai focus:border-transparent text-brand-slate"
                            />
                            <button
                                title="Send Message"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-ai hover:bg-brand-ai-dark text-white rounded-full transition-colors hidden sm:block"
                            >
                                <MessageSquare className="h-3 w-3" />
                                <span className="sr-only">Send Message</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
