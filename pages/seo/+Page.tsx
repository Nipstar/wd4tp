import { Button } from '@/components/ui/button'
import { TrendingUp, FileText } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'
import { BUSINESS_DETAILS } from '@/lib/constants'

const FAQS = [
    {
        question: 'How long does SEO take to work?',
        answer: 'Generally, you can expect to see noticeable improvements in rankings and traffic within 3 to 6 months. However, SEO is a long-term strategy, and the best results compound over time.'
    },
    {
        question: 'Do you guarantee number 1 rankings?',
        answer: 'No reputable SEO agency can guarantee a #1 ranking due to the ever-changing nature of search algorithms. We do guarantee to implement proven strategies that maximize your visibility and chances of ranking highly.'
    },
    {
        question: 'Do I need a new website for your SEO services?',
        answer: 'Not necessarily. We can optimize your existing website. However, if your current site is very slow, outdated, or poorly structured, we might recommend a rebuild to get the best results from your SEO investment.'
    }
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO for Tradespeople",
    "description": "Local SEO services for trades. Google Business Profile setup, on-page optimisation, and content strategy.",
    "provider": {
        "@type": "ProfessionalService",
        "name": BUSINESS_DETAILS.name,
        "telephone": BUSINESS_DETAILS.phoneLink,
        "url": "https://webdesignfortradespeople.co.uk"
    },
    "areaServed": "United Kingdom",
    "serviceType": "SEO for Tradespeople"
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
                { name: 'SEO', item: 'https://webdesignfortradespeople.co.uk/seo' }
            ]} />
            <section className="bg-brand-dark pt-20 pb-32 text-center text-white relative">
                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                        Get Found When People <span className="text-brand-amber">Search For What You Do</span>
                    </h1>
                    <p className="text-xl text-brand-cream/80 max-w-3xl mx-auto mb-10">
                        SEO isn't magic. It's making sure when someone types your trade into Google, your name comes up — not the bloke paying £50 a lead on MyBuilder.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-brand-cream border-b border-brand-slate/10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">"My mate said SEO is a scam."</h2>
                            <div className="prose prose-lg text-brand-slate mb-8 leading-relaxed">
                                <p>
                                    Some of it is. The blokes charging £2,000/month to send a PDF nobody reads — yeah, that's a scam.
                                </p>
                                <p>
                                    We build your site properly, set up your Google listing, make content match what people search for. Not magic. Just basics done right, consistently. Most trades see movement in 60-90 days. Proper results in 6 months.
                                </p>
                                <p className="font-semibold text-brand-dark mt-4">
                                    And once your website ranks and the AI chatbot handles enquiries 24/7, you've got a lead machine that works while you sleep. Checkatrade can't say that.
                                </p>
                            </div>
                            <Button asChild size="lg" className="bg-brand-dark text-white font-display font-bold hover:bg-slate-800">
                                <a href="/pricing">View SEO Pricing in Full Works</a>
                            </Button>
                        </div>

                        <div className="grid gap-4">
                            <div className="bg-white p-6 rounded-xl border border-brand-slate/10 shadow-sm flex items-start gap-4">
                                <div className="bg-green-100 text-green-600 p-3 rounded-lg"><TrendingUp className="h-6 w-6" /></div>
                                <div>
                                    <h4 className="font-display font-bold text-lg text-brand-dark">Local SEO Dominance</h4>
                                    <p className="text-sm text-brand-slate mt-1">We dominate local search intent. E.g "Plumber in Andover".</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-brand-slate/10 shadow-sm flex items-start gap-4">
                                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg"><FileText className="h-6 w-6" /></div>
                                <div>
                                    <h4 className="font-display font-bold text-lg text-brand-dark">Google Business Profile</h4>
                                    <p className="text-sm text-brand-slate mt-1">Setup and monthly optimisation of your GBP map pack listing.</p>
                                </div>
                            </div>
                            <div>
                                <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-brand-slate/10 p-4 shadow-sm">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
