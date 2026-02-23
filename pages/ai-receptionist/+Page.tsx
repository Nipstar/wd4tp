import { Button } from '@/components/ui/button'
import { CheckCircle2, Bot, Phone, MessageSquare } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'
import { BUSINESS_DETAILS } from '@/lib/constants'

const FAQS = [
    {
        question: "How does the AI receptionist work?",
        answer: "Our AI answers your calls, handles common questions like pricing or availability, and captures lead information. It then texts or emails you all the details instantly."
    },
    {
        question: "Can I keep my current business number?",
        answer: "Yes, absolutely. You can easily set up call forwarding from your existing number to your new AI receptionist."
    }
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Receptionist & Chatbot for Tradespeople",
    "description": "AI voice receptionist and website chatbot for trades. Answers calls, captures leads, and books jobs 24/7.",
    "provider": {
        "@type": "ProfessionalService",
        "name": BUSINESS_DETAILS.name,
        "telephone": BUSINESS_DETAILS.phoneLink,
        "url": "https://www.webdesignfortradespeople.co.uk"
    },
    "areaServed": "United Kingdom",
    "serviceType": "AI Receptionist for Tradespeople"
}

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
}

export function Page() {
    return (
        <>
            <SchemaMarkup schema={serviceSchema} />
            <SchemaMarkup schema={faqSchema} />
            <BreadcrumbSchema items={[
                { name: 'Home', item: 'https://www.webdesignfortradespeople.co.uk' },
                { name: 'AI Receptionist', item: 'https://www.webdesignfortradespeople.co.uk/ai-receptionist' }
            ]} />
            <div className="bg-brand-dark overflow-hidden">
                <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 text-white border-b-8 border-brand-ai overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: "url('/images/hero-ai-receptionist-bg.webp')" }}
                    />
                    {/* Dark overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-brand-dark/80 z-0" />
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_60%)] pointer-events-none" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 max-w-5xl flex flex-col items-center">

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ai/20 text-brand-ai font-medium text-sm mb-8 border border-brand-ai/30">
                            <Bot className="h-4 w-4" />
                            Certified Retell AI Partner
                        </div>

                        <h1 className="text-4xl lg:text-6xl text-white font-display font-bold mb-6 leading-[1.1]">
                            Never miss a call again.<br />
                            <span className="text-brand-ai">Your AI receptionist handles it.</span>
                        </h1>

                        <p className="text-xl text-brand-cream/80 max-w-2xl mx-auto mb-12">
                            You're on a job. Your phone rings. You can't answer. That used to mean a lost customer. Not anymore.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-brand-ai hover:bg-brand-ai-dark text-white font-display font-bold h-14 px-8 text-lg">
                                <a href="/contact">Add to Package &rarr;</a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-brand-ai text-brand-ai hover:bg-brand-ai/10 font-display font-bold h-14 px-8 text-lg bg-transparent">
                                <a href="#demo">Try Free Demo</a>
                            </Button>
                        </div>

                    </div>
                </section>

                <section className="py-24 bg-brand-cream text-brand-dark">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-display font-bold mb-6">The £1,000/day Problem</h2>
                        <div className="prose prose-lg mx-auto text-brand-slate text-center leading-relaxed">
                            <p>
                                The average tradesperson misses 3-5 calls per day while on jobs. At £200 per job, that's up to £1,000 a day in potential work going to whoever picks up first.
                            </p>
                            <p className="font-semibold text-xl text-brand-dark mt-4">
                                Voicemail? Nobody leaves one anymore. They just call the next plumber on Google.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16">

                            <div className="bg-brand-cream p-8 md:p-12 rounded-2xl border border-brand-slate/10 shadow-sm">
                                <div className="h-16 w-16 bg-brand-amber/20 text-brand-amber rounded-2xl flex items-center justify-center mb-6">
                                    <Phone className="h-8 w-8" />
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-4">AI Voice Receptionist</h3>
                                <p className="text-brand-slate mb-8 leading-relaxed">
                                    Your phone rings. You can't answer. Our AI picks up. It sounds natural — not like a robot.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Greets callers by your business name",
                                        "Asks what they need (emergency, quote, general)",
                                        "Collects name, number, postcode",
                                        "Answers common questions ('Do you cover my area?')",
                                        "Sends you an SMS summary within seconds",
                                        "Flags urgent calls and forwards them to you"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-brand-slate">
                                            <CheckCircle2 className="h-6 w-6 text-brand-amber shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-4 bg-brand-amber/10 border border-brand-amber/20 rounded-lg text-brand-dark font-medium italic">
                                    "You call them back when you're free. Job booked. No missed leads."
                                </div>
                            </div>

                            <div className="bg-brand-dark p-8 md:p-12 rounded-2xl border border-brand-ai/30 shadow-xl shadow-brand-ai/10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-ai/10 rounded-full blur-3xl" />
                                <div className="relative z-10">
                                    <div className="h-16 w-16 bg-brand-ai/20 text-brand-ai rounded-2xl flex items-center justify-center mb-6">
                                        <MessageSquare className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold mb-4">AI Website Chatbot</h3>
                                    <p className="text-brand-cream/80 mb-8 leading-relaxed">
                                        A chat bubble on your website that works at 2am on a Sunday.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "Answers 'how much?' and 'do you cover?' automatically",
                                            "Captures name and phone number",
                                            "Qualifies leads (service needed, urgency, location)",
                                            "Sends you details by email or SMS"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-brand-cream/80">
                                                <CheckCircle2 className="h-6 w-6 text-brand-ai shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-4 bg-brand-ai/10 border border-brand-ai/20 rounded-lg text-white font-medium italic">
                                        "Both trained on your business. Your services, your prices, your area, your tone. You approve everything."
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-24 bg-brand-ai text-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-12">Why This Isn't a Gimmick</h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 text-left">
                            {[
                                "We build these, not resell them.",
                                "Voices sound natural — callers often don't realise.",
                                "You control everything: script, responses, forwarding rules.",
                                "Costs less than a part-time receptionist.",
                                "Works 24/7/365 including bank holidays."
                            ].map((reason, i) => (
                                <div key={i} className="bg-white/10 border border-white/20 p-6 rounded-xl text-brand-cream/90 font-medium flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
                                    <span>{reason}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-2xl font-display font-bold px-4 py-3 bg-white text-brand-ai rounded-full inline-block">
                            One captured job pays for months of the service.
                        </p>
                    </div>
                </section>

                <section id="demo" className="py-24 bg-brand-dark text-white text-center border-t border-white/10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-5xl font-display font-bold mb-16">Live Demos</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">

                            <div className="flex-1 bg-white/10 border border-brand-ai/40 p-8 rounded-2xl flex flex-col items-center">
                                <MessageSquare className="h-12 w-12 text-brand-ai mb-6" />
                                <h3 className="text-2xl font-bold font-display mb-4 text-white">Chatbot Demo</h3>
                                <p className="text-brand-cream/80 mb-8">Chat with our AI bot. Ask it anything right here on the site.</p>
                                <Button onClick={() => window.dispatchEvent(new Event('open-chat-widget'))} className="w-full bg-brand-ai hover:bg-brand-ai-dark text-white font-bold h-12">
                                    Open Chat Widget
                                </Button>
                            </div>

                            <div className="flex-1 bg-white/10 border border-brand-amber/40 p-8 rounded-2xl flex flex-col items-center">
                                <Phone className="h-12 w-12 text-brand-amber mb-6" />
                                <h3 className="text-2xl font-bold font-display mb-4 text-white">Voice Demo</h3>
                                <p className="text-brand-cream/80 mb-8">Talk to our AI voice agent. It picks up instantly and sounds human.</p>
                                <Button onClick={() => window.dispatchEvent(new CustomEvent('open-chat-widget', { detail: { mode: 'voice' } }))} className="w-full bg-brand-amber hover:bg-brand-amber-hover text-brand-dark font-bold h-12">
                                    Call Our AI &rarr;
                                </Button>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-24 bg-brand-cream">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-display font-bold text-brand-dark mb-8 text-center">AI FAQ</h2>
                        <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-brand-slate/10 p-4 shadow-sm">
                            {FAQS.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b-brand-slate/10 last:border-0">
                                    <AccordionTrigger className="text-left font-display font-bold text-brand-dark hover:text-brand-ai px-2">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-brand-slate/80 px-2 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

            </div>
        </>
    )
}
