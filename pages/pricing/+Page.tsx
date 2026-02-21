import { Button } from '@/components/ui/button'
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const FAQS = [
    {
        q: "How much does a trade website actually cost?",
        a: "Starter is from £X/month. 5-page website, works on phones, shows up on Google. No big upfront cost."
    },
    {
        q: "What's in the monthly fee?",
        a: "Hosting, SSL, security updates, basic content changes, email support. We keep it running so you don't have to think about it."
    },
    {
        q: "Can I cancel anytime?",
        a: "Yes. No long contracts. We're confident you'll stay because it works, not because you're locked in."
    },
    {
        q: "Do I need the AI add-ons?",
        a: "Need? No. But if you're missing calls on jobs — and most trades are — the AI receptionist pays for itself with one captured job. Try the 14-day trial."
    },
    {
        q: "What if I already have a website?",
        a: "We redesign it. Trades Pro and Full Works include migrating your content and setting up redirects so you don't lose Google rankings."
    },
    {
        q: "How long does it take?",
        a: "Starter: 1-2 weeks. Trades Pro: 2-3 weeks. Full Works: 3-4 weeks."
    },
    {
        q: "Do you work outside Hampshire?",
        a: "Yes. Based in Hampshire, build for trades across the UK. Most work is remote."
    },
    {
        q: "What makes you different?",
        a: "We specialise in trades (not 'also do trades'), and we're the only ones offering AI voice agents and chatbots. Your website doesn't just sit there — it answers your phone and chats to your customers."
    }
]

export function Page() {
    return (
        <>
            <div className="bg-brand-cream border-t border-brand-slate/10 py-20 lg:py-32">
                <div className="container mx-auto px-4 max-w-6xl">

                    <div className="text-center mb-16 lg:mb-24">
                        <h1 className="text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-6">
                            Straight-up pricing.<br />No hidden fees. No surprises.
                        </h1>
                        <p className="text-xl text-brand-slate max-w-2xl mx-auto">
                            You quote for a living. So do we. Here's what it costs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-6 mb-24">

                        <div className="bg-white rounded-2xl border border-brand-slate/10 overflow-hidden shadow-sm flex flex-col">
                            <div className="p-8 border-b border-brand-slate/10">
                                <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">STARTER</h3>
                                <p className="text-brand-slate text-sm min-h-[40px]">Best for sole traders starting out</p>
                                <div className="mt-6 flex items-end gap-1">
                                    <span className="text-4xl font-display font-bold text-brand-dark">£X</span>
                                    <span className="text-brand-slate/60 mb-1">/mo</span>
                                </div>
                                <p className="text-xs text-brand-slate/60 mt-1">or £X one-off</p>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        5 pages
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        Mobile-ready
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        Basic on-page SEO
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        Standard contact form
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        Email Support
                                    </li>
                                </ul>
                                <Button asChild className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold h-12">
                                    <a href="/contact">Get Started</a>
                                </Button>
                            </div>
                        </div>

                        <div className="bg-brand-dark rounded-2xl border border-brand-amber overflow-hidden shadow-xl transform md:-translate-y-4 flex flex-col relative z-10">
                            <div className="absolute top-0 inset-x-0 bg-brand-amber text-brand-dark text-xs font-bold font-display text-center py-1 uppercase tracking-wider">
                                Most Popular
                            </div>
                            <div className="p-8 border-b border-white/10 mt-6">
                                <h3 className="text-2xl font-display font-bold text-white mb-2">TRADES PRO</h3>
                                <p className="text-brand-cream/70 text-sm min-h-[40px]">Best for established trades wanting more work</p>
                                <div className="mt-6 flex items-end gap-1">
                                    <span className="text-4xl font-display font-bold text-white">£X</span>
                                    <span className="text-brand-cream/50 mb-1">/mo</span>
                                </div>
                                <p className="text-xs text-brand-cream/50 mt-1">or £X one-off</p>
                            </div>
                            <div className="p-8 flex-1 flex flex-col bg-brand-dark">
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3 text-sm text-brand-cream/90">
                                        <CheckCircle2 className="h-5 w-5 text-brand-amber shrink-0" />
                                        8-10 pages
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-cream/90">
                                        <CheckCircle2 className="h-5 w-5 text-brand-amber shrink-0" />
                                        Full local SEO setup
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-cream/90">
                                        <CheckCircle2 className="h-5 w-5 text-brand-amber shrink-0" />
                                        Google Business Profile setup
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-cream/90">
                                        <CheckCircle2 className="h-5 w-5 text-brand-amber shrink-0" />
                                        Before/after gallery
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-cream/90">
                                        <CheckCircle2 className="h-5 w-5 text-brand-amber shrink-0" />
                                        Quote request form
                                    </li>
                                    <li className="flex items-start gap-3 text-sm font-semibold text-brand-ai bg-brand-ai/10 p-2 rounded border border-brand-ai/20">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                                        14-day free AI Chatbot trial
                                    </li>
                                </ul>
                                <Button asChild className="w-full bg-brand-amber hover:bg-brand-amber-hover text-brand-dark font-bold h-12">
                                    <a href="/contact">Get Started</a>
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-brand-slate/10 overflow-hidden shadow-sm flex flex-col">
                            <div className="p-8 border-b border-brand-slate/10">
                                <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">FULL WORKS</h3>
                                <p className="text-brand-slate text-sm min-h-[40px]">Best for trades wanting website + SEO + the lot</p>
                                <div className="mt-6 flex items-end gap-1">
                                    <span className="text-4xl font-display font-bold text-brand-dark">£X</span>
                                    <span className="text-brand-slate/60 mb-1">/mo</span>
                                </div>
                                <p className="text-xs text-brand-slate/60 mt-1">or £X one-off</p>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        Unlimited Pages
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        Ongoing monthly SEO
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        GBP setup + optimisation
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        Video + before/after gallery
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-brand-slate">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        Multi-step form + WhatsApp
                                    </li>
                                    <li className="flex items-start gap-3 text-sm font-semibold text-brand-ai bg-brand-ai/10 p-2 rounded border border-brand-ai/20">
                                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                        3-month free AI Chatbot trial
                                    </li>
                                </ul>
                                <Button asChild className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold h-12">
                                    <a href="/contact">Get Started</a>
                                </Button>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mb-24 max-w-2xl mx-auto italic text-brand-slate/80">
                        "Not sure which one? Give us a call. We'll tell you honestly which one makes sense. No upsell, no pressure."
                    </div>

                    <div className="mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-dark mb-4">
                                Bolt on an AI brain. <span className="text-brand-ai">Optional extras that pay for themselves.</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                            <div className="bg-brand-dark text-white rounded-2xl border-t-[6px] border-t-brand-ai p-8 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-brand-ai/20 p-2 rounded">
                                        <MessageSquare className="h-6 w-6 text-brand-ai" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold">AI CHATBOT</h3>
                                </div>
                                <p className="text-brand-cream/80 text-sm mb-6 min-h-[60px]">
                                    Chat widget on your website. Answers FAQs, captures leads, sends you summaries. 24/7.
                                </p>
                                <div className="space-y-4 mb-8 text-sm">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                                        <strong className="block text-brand-ai mb-1">Best for</strong>
                                        <span className="text-brand-cream/70">Enquiries from your website at night and weekends</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                                        <strong className="block text-brand-ai mb-1">What you get</strong>
                                        <span className="text-brand-cream/70">Lead notifications by email/SMS, conversation logs, monthly report</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 border-t border-white/10 pt-6 mb-6">
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm text-brand-cream/60">Monthly</span>
                                        <span className="font-bold text-lg">From £X/mo</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm text-brand-cream/60">Setup</span>
                                        <span className="font-medium text-sm">£X one-off</span>
                                    </div>
                                </div>
                                <Button className="w-full bg-brand-ai hover:bg-brand-ai-dark text-white font-bold h-12">
                                    Chat with our Demo &rarr;
                                </Button>
                            </div>

                            <div className="bg-brand-dark text-white rounded-2xl border-t-[6px] border-t-brand-amber p-8 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-brand-amber/20 p-2 rounded">
                                        <Phone className="h-6 w-6 text-brand-amber" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold">AI RECEPTIONIST</h3>
                                </div>
                                <p className="text-brand-cream/80 text-sm mb-6 min-h-[60px]">
                                    AI answers your actual phone. Takes messages, books jobs, handles enquiries. Sounds like a real person.
                                </p>
                                <div className="space-y-4 mb-8 text-sm">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                                        <strong className="block text-brand-amber mb-1">Best for</strong>
                                        <span className="text-brand-cream/70">Never missing calls when you're on a job</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                                        <strong className="block text-brand-amber mb-1">What you get</strong>
                                        <span className="text-brand-cream/70">Call summaries by SMS, voicemail transcriptions, job booking notifications</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 border-t border-white/10 pt-6 mb-6">
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm text-brand-cream/60">Monthly</span>
                                        <span className="font-bold text-lg">From £X/mo</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm text-brand-cream/60">Setup</span>
                                        <span className="font-medium text-sm">£X one-off</span>
                                    </div>
                                </div>
                                <Button asChild className="w-full border-2 border-brand-amber text-brand-amber hover:bg-brand-amber/10 font-bold h-12 bg-transparent">
                                    <a href="tel:443333357920">
                                        Call our AI &rarr;
                                    </a>
                                </Button>
                            </div>

                        </div>

                        <p className="text-center mt-8 text-sm text-brand-slate font-medium bg-brand-ai/10 inline-block py-2 px-6 rounded-full mx-auto flex max-w-max border border-brand-ai/20">
                            Every site comes with a free 14-day chatbot trial. No obligation, no card details.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-display font-bold text-brand-dark mb-8 text-center">Pricing FAQ</h2>
                        <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-brand-slate/10 p-4 shadow-sm">
                            {FAQS.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b-brand-slate/10 last:border-0">
                                    <AccordionTrigger className="text-left font-display font-bold text-brand-dark hover:text-brand-amber px-2">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-brand-slate/80 px-2 leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </>
    )
}
