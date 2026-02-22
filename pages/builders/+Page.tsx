import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'
import { BUSINESS_DETAILS } from '@/lib/constants'

const FAQS = [
    {
        question: 'What is the typical response time for an emergency callout?',
        answer: 'We aim to respond to emergency calls within 1 hour, depending on your location and the nature of the emergency.'
    },
    {
        question: 'Do you offer free quotes for building services?',
        answer: 'Yes, we offer free, no-obligation quotes for all our building services. Contact us today to schedule yours.'
    },
    {
        question: 'What types of building services do you provide?',
        answer: 'We offer a wide range of services, including extensions, loft conversions, renovations, and more.'
    },
    {
        question: 'Are you insured and licensed?',
        answer: 'Yes, we are fully insured and licensed to operate in your area. Your peace of mind is our priority.'
    },
    {
        question: 'Do you handle commercial building projects?',
        answer: 'Yes, we handle both residential and commercial building projects of all sizes.'
    }
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Builder Website Design",
    "description": "Premium websites for builders showcasing extensions, renovations, and new builds to attract higher-paying clients.",
    "provider": {
        "@type": "ProfessionalService",
        "name": BUSINESS_DETAILS.name,
        "telephone": BUSINESS_DETAILS.phoneLink,
        "url": "https://webdesignfortradespeople.co.uk"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Web Design for Builders"
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
                { name: 'Home', item: 'https://webdesignfortradespeople.co.uk' },
                { name: 'Builders', item: 'https://webdesignfortradespeople.co.uk/builders' }
            ]} />

            <section className="relative bg-brand-dark pt-32 pb-32 lg:pt-48 lg:pb-48 text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/hero-builders-bg.webp')" }}
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-dark/80 z-0" />
                <div className="container mx-auto px-4 relative z-10 max-w-4xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-display font-bold mb-6 leading-[1.1]">
                        Builder Websites For High-End <br className="hidden md:block" />
                        <span className="text-brand-amber">Projects</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Showcase your extensions, renovations, and new builds with a premium website that consistently attracts higher-paying clients.
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

            <section className="py-24 bg-white border-b border-brand-slate/10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-display font-bold text-center mb-12">What a good builder website includes:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Project galleries — extensions, lofts, renovations",
                            "Clear step-by-step process explanation",
                            "Trust badges — FMB, TrustMark, etc.",
                            "Area pages targeting local affluent towns",
                            "Long-form case studies with before/afters",
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
                    <h2 className="text-3xl font-display font-bold mb-6">The Secret Weapon: AI Chatbot</h2>
                    <p className="text-xl text-brand-cream/90 leading-relaxed mb-8">
                        People research big building projects in the evenings and on weekends. While you're relaxing, our AI chatbot engages visitors on your site, answers their initial "do you do double-story extensions?" questions, and captures their contact details. You wake up on Monday to warm leads.
                    </p>
                    <Button asChild size="lg" className="bg-white text-brand-ai font-display font-bold hover:bg-white/90">
                        <a href="/ai-receptionist">Learn about AI Add-ons</a>
                    </Button>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-display font-bold mb-8 text-center text-brand-dark">Builder Website FAQs</h2>
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
