import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'
import { BUSINESS_DETAILS } from '@/lib/constants'

const FAQS = [
    {
        question: 'What areas do your carpentry web design services cover?',
        answer: 'We provide web design services for carpenters across the UK, using local SEO strategies to help you get found in your target areas.'
    },
    {
        question: 'Do you offer free quotes for carpentry websites?',
        answer: 'Yes, we offer free, no-obligation quotes. Get in touch to discuss what you need for your carpentry business.'
    },
    {
        question: 'What types of carpentry services can my website highlight?',
        answer: 'Your website can feature all your services, such as bespoke furniture, fitted wardrobes, door hanging, roofing timber, and general 1st and 2nd fix carpentry.'
    },
    {
        question: 'How long does it take to build a carpenter website?',
        answer: 'Most trades websites take between 2 to 4 weeks to complete, depending on the features and content you require.'
    },
    {
        question: 'Will my carpentry website look good on a phone?',
        answer: 'Yes, all our websites are mobile-first. They adapt perfectly to look great and be easy to use on any device, from smartphones to desktop computers.'
    }
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Carpenter Website Design",
    "description": "Professional websites designed exclusively for carpenters and joiners to showcase their craftsmanship and win better projects.",
    "provider": {
        "@type": "ProfessionalService",
        "name": BUSINESS_DETAILS.name,
        "telephone": BUSINESS_DETAILS.phoneLink,
        "url": "https://www.webdesignfortradespeople.co.uk"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Web Design for Carpenters"
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
                { name: 'Carpenters', item: 'https://www.webdesignfortradespeople.co.uk/carpenters' }
            ]} />

            <section className="relative bg-brand-dark pt-32 pb-32 lg:pt-48 lg:pb-48 text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/hero-carpenters-bg.webp')" }}
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-dark/80 z-0" />
                <div className="container mx-auto px-4 relative z-10 max-w-4xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-display font-bold mb-6 leading-[1.1]">
                        Bespoke Websites For <br className="hidden md:block" />
                        <span className="text-brand-amber">Carpenters & Joiners</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Showcase your craftsmanship with a premium website that consistently attracts higher-paying clients who value quality work.
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
                    <h2 className="text-3xl font-display font-bold text-center mb-12">What a good carpenter website includes:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "High-resolution galleries of your bespoke work",
                            "Clear categories (e.g., fitted wardrobes, kitchens, 2nd fix)",
                            "Trust badges to show you're a qualified tradesperson",
                            "Local area pages targeting affluent towns",
                            "Interactive project case studies",
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
                        Can't hear your phone over the circular saw? Our AI receptionist answers your calls, asks the customer what they need built, and sends you a summary. Call them back when the noise stops. Never lose a lead to missing a call.
                    </p>
                    <Button asChild size="lg" className="bg-white text-brand-ai font-display font-bold hover:bg-white/90">
                        <a href="/ai-receptionist">Learn about AI Add-ons</a>
                    </Button>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-display font-bold mb-8 text-center text-brand-dark">Carpenter Website FAQs</h2>
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
