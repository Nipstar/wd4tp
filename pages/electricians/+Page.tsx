import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'
import { BUSINESS_DETAILS } from '@/lib/constants'

const FAQS = [
    {
        question: "Do you offer emergency callouts?",
        answer: "Yes, we have a fast-response team for emergency electrical issues."
    },
    {
        question: "Are you a registered electrician?",
        answer: "Yes, we are fully qualified and registered professionals."
    }
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Electrician Website Design",
    "description": "Professional websites designed for electricians. Rank on Google for emergency callouts and local searches.",
    "provider": {
        "@type": "ProfessionalService",
        "name": BUSINESS_DETAILS.name,
        "telephone": BUSINESS_DETAILS.phoneLink,
        "url": "https://www.webdesignfortradespeople.co.uk"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Web Design for Electricians"
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
                { name: 'Electricians', item: 'https://www.webdesignfortradespeople.co.uk/electricians' }
            ]} />

            <section className="relative bg-brand-dark pt-32 pb-32 lg:pt-48 lg:pb-48 text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/hero-electricians-bg.webp')" }}
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-dark/80 z-0" />
                <div className="container mx-auto px-4 relative z-10 max-w-4xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-display font-bold mb-6 leading-[1.1]">
                        Electrician Website Design That Gets You More <br className="hidden md:block" />
                        <span className="text-brand-amber">Callouts</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                        When someone's got a tripped fuse at 9pm, they're not scrolling through Yell. They're typing "electrician near me" into Google.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg" className="bg-brand-amber text-brand-dark font-display font-bold hover:bg-brand-amber-hover">
                            <a href="/contact">Get a Quote</a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white font-display font-bold hover:bg-white/10">
                            <a href="/portfolio">View Recent Websites</a>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-cream text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <p className="text-xl text-brand-slate leading-relaxed">
                        If you're not showing up, that's a £200 callout going to someone else. Your website should do three things: show up on Google, make you look professional, and make it dead easy to call you. No fancy animations. No waffle. Just clear services, your area, your number, and proof you're good at what you do.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white border-b border-brand-slate/10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-display font-bold text-center mb-12">What a good electrician website includes:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Click-to-call emergency button — one tap",
                            "Service breakdown — rewires, fuse boards, testing, EV",
                            "Areas covered with local keywords",
                            "NICEIC / NAPIT / Part P badges",
                            "Case studies with before/after work",
                            "Google review integration"
                        ].map((feat, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-brand-slate/10 bg-brand-cream/50">
                                <CheckCircle2 className="text-brand-amber h-6 w-6 shrink-0" />
                                <span className="font-bold text-brand-dark">{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-ai text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-display font-bold mb-6">The Secret Weapon: AI Receptionist</h2>
                    <p className="text-xl text-brand-cream/90 leading-relaxed mb-8">
                        You're up a ladder, elbow-deep in a consumer unit. Phone rings. Our AI picks up, gets the details, and sends you a text summary. Emergency? Forwarded to you. Quote? Call back when you're done. No more missed £200 callouts.
                    </p>
                    <Button asChild size="lg" className="bg-white text-brand-ai font-display font-bold hover:bg-white/90">
                        <a href="/ai-receptionist">Learn about AI Add-ons</a>
                    </Button>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-display font-bold mb-8 text-center text-brand-dark">Electrician Website FAQs</h2>
                    <Accordion type="single" collapsible className="w-full bg-brand-cream rounded-xl border border-brand-slate/10 p-4 shadow-sm">
                        {FAQS.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-brand-slate/10 last:border-0">
                                <AccordionTrigger className="text-left font-display font-bold text-brand-dark hover:text-brand-amber px-2">
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
        </>
    )
}
