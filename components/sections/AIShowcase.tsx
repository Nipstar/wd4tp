import { Bot, PhoneIncoming, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BUSINESS_DETAILS } from '@/lib/constants'

export function AIShowcase() {
    return (
        <section className="py-24 bg-brand-slate text-white border-y-[6px] border-brand-ai relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 800 800" className="w-full h-full text-brand-ai/50" fill="currentColor">
                    <circle cx="400" cy="400" r="300" opacity="0.2" />
                    <circle cx="400" cy="400" r="200" opacity="0.4" />
                    <circle cx="400" cy="400" r="100" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ai/20 text-brand-ai font-medium text-sm mb-6 border border-brand-ai/30">
                            <Bot className="h-4 w-4" />
                            Certified Retell AI Partner
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
                            Your website answers the phone when you can't.
                        </h2>

                        <div className="prose prose-lg prose-invert text-white/80 mb-8">
                            <p>
                                You're on a roof. You're under a sink. You're driving. And your phone rings. You can't answer it, and that's a job gone to someone who can.
                            </p>
                            <p>
                                Our AI receptionist picks up for you. It sounds like a real person, answers questions about your services, takes the caller's details, and sends you a summary. No missed calls. No voicemail that nobody leaves. Just leads, captured.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button asChild size="lg" className="bg-brand-ai hover:bg-brand-ai-dark text-white font-display font-bold h-14 px-8 text-lg">
                                <a href="/ai-receptionist">See AI Add-Ons &rarr;</a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-brand-ai text-brand-ai hover:bg-brand-ai/10 font-display font-bold h-14 px-8 text-lg bg-transparent">
                                <a href={`tel:${BUSINESS_DETAILS.phoneLink}`}>
                                    Call Our AI Demo
                                </a>
                            </Button>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-brand-ai/20 p-5 rounded-xl">
                                <div className="bg-brand-ai/20 h-10 w-10 rounded flex items-center justify-center mb-4">
                                    <PhoneIncoming className="h-5 w-5 text-brand-ai" />
                                </div>
                                <h4 className="font-display font-bold mb-2">AI Voice Agent</h4>
                                <p className="text-sm text-brand-cream/70 leading-relaxed">Handles missed calls 24/7. Sounds natural, books jobs.</p>
                            </div>
                            <div className="bg-white/5 border border-brand-ai/20 p-5 rounded-xl">
                                <div className="bg-brand-ai/20 h-10 w-10 rounded flex items-center justify-center mb-4">
                                    <MessageSquare className="h-5 w-5 text-brand-ai" />
                                </div>
                                <h4 className="font-display font-bold mb-2">Website Chatbot</h4>
                                <p className="text-sm text-brand-cream/70 leading-relaxed">Engages visitors instantly. Qualifies leads while you sleep.</p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Visual/Demo */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-ai/20 to-brand-ai-dark/20 rounded-2xl blur-3xl transform -rotate-6" />
                        <div className="bg-brand-dark rounded-2xl border border-brand-ai/30 p-1 shadow-2xl relative z-10 overflow-hidden isolate aspect-[4/5] sm:aspect-auto">
                            {/* Fake phone UI */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                            <div className="h-full w-full bg-slate-950 rounded-xl p-6 flex flex-col pt-16 h-[500px]">
                                <div className="flex-1 overflow-y-auto pr-2 space-y-4 font-mono text-sm leading-relaxed">
                                    <div className="text-brand-ai font-bold">WDFT AI Started</div>
                                    <div className="border border-brand-ai/20 rounded p-3 text-brand-cream/80 bg-brand-ai/5">
                                        "Hi there, you've reached {BUSINESS_DETAILS.name}. I'm the AI assistant, how can I help?"
                                    </div>
                                    <div className="border border-white/10 rounded p-3 text-brand-cream bg-white/5 ml-8 text-right">
                                        "Do you cover Andover?"
                                    </div>
                                    <div className="border border-brand-ai/20 rounded p-3 text-brand-cream/80 bg-brand-ai/5 mr-8">
                                        "Yes, we build websites for tradespeople across Hampshire, including Andover. What trade are you in?"
                                    </div>
                                    <div className="border border-white/10 rounded p-3 text-brand-cream bg-white/5 ml-8 text-right">
                                        "I'm a plumber."
                                    </div>
                                    <div className="border border-brand-ai/20 rounded p-3 text-brand-cream/80 bg-brand-ai/5 mr-8">
                                        "Great, Plumbers are one of our main specialties. Would you like me to take your details so Andy can call you back with a quote?"
                                    </div>
                                </div>
                                <div className="mt-4 border-t border-brand-ai/20 pt-4 flex gap-2 w-full">
                                    <div className="h-12 border border-brand-ai/30 rounded flex-1 bg-brand-dark flex items-center px-4 animate-pulse duration-1000">
                                        <span className="h-2 w-2 rounded-full bg-brand-ai mr-2" />
                                        <span className="text-xs text-brand-ai">AI Listening...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
