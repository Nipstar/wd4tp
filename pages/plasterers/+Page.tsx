import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'
import { BUSINESS_DETAILS } from '@/lib/constants'

const FAQS = [
    {
        question: 'What areas do your plastering web design services cover?',
        answer: 'We provide web design services for plasterers across the UK, focusing on local SEO to help you get found in your specific service area.'
    },
    {
        question: 'Do you offer free quotes for plastering websites?',
        answer: 'Yes, we offer free, no-obligation quotes for all our web design packages. Contact us today to discuss your specific needs.'
    },
    {
        question: 'What types of plastering services can my website highlight?',
        answer: 'Your website can highlight all your services, including skimming, rendering, dry lining, coving, and domestic or commercial plastering.'
    },
    {
        question: 'How long does it take to build a plastering website?',
        answer: 'Most plastering websites take between 2 to 4 weeks to complete, depending on the package you choose and the content required.'
    },
    {
        question: 'Will my plastering website be mobile-friendly?',
        answer: 'Absolutely. All our websites are designed mobile-first, ensuring they look great and function perfectly on smartphones, tablets, and desktops.'
    }
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plasterer Website Design",
    "description": "Professional websites designed exclusively for plasterers to showcase their smooth finishes and attract more local work.",
    "provider": {
        "@type": "ProfessionalService",
        "name": BUSINESS_DETAILS.name,
        "telephone": BUSINESS_DETAILS.phoneLink,
        "url": "https://www.webdesignfortradespeople.co.uk"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Web Design for Plasterers"
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
                { name: 'Plasterers', item: 'https://www.webdesignfortradespeople.co.uk/plasterers' }
            ]} />

            <section className="relative bg-brand-dark pt-32 pb-32 lg:pt-48 lg:pb-48 text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/hero-plasterers-bg.webp')" }}
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-dark/80 z-0" />
                <div className="container mx-auto px-4 relative z-10 max-w-4xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-display font-bold mb-6 leading-[1.1]">
                        Plasterer Websites That Get You <br className="hidden md:block" />
                        <span className="text-brand-amber">More Work</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                        When people are looking for a smooth finish, they search online. If your website looks like a bodge job, they'll call someone else.
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
                    <h2 className="text-3xl font-display font-bold text-center mb-12">What a good plasterer website includes:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Clear service lists — skimming, rendering, dry lining",
                            "High-quality galleries showing smooth finishes",
                            "Trust badges to prove you're reliable",
                            "Local area pages to dominate your town's search results",
                            "Easy-to-use quote request forms",
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
                        It's hard to answer the phone when your hands are covered in plaster. Our AI receptionist picks up, asks what needs doing, and sends you a text with the details. You can call them back when you're cleaned up. No more missed leads.
                    </p>
                    <Button asChild size="lg" className="bg-white text-brand-ai font-display font-bold hover:bg-white/90">
                        <a href="/ai-receptionist">Learn about AI Add-ons</a>
                    </Button>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-display font-bold mb-8 text-center text-brand-dark">Plasterer Website FAQs</h2>
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
