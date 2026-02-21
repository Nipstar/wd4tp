import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const FAQS = [
    {
        question: 'What is the typical response time for an emergency callout?',
        answer: 'We aim to respond to emergency calls within 1 hour, depending on your location and the nature of the emergency.'
    },
    {
        question: 'Do you offer free quotes for landscaping services?',
        answer: 'Yes, we offer free, no-obligation quotes for all our landscaping services. Contact us today to schedule yours.'
    },
    {
        question: 'What types of landscaping services do you provide?',
        answer: 'We offer a wide range of services, including garden design, lawn care, tree pruning, patio installation, and more.'
    },
    {
        question: 'Are you insured and licensed?',
        answer: 'Yes, we are fully insured and licensed to operate in your area. Your peace of mind is our priority.'
    },
    {
        question: 'Do you handle commercial landscaping projects?',
        answer: 'Yes, we handle both residential and commercial landscaping projects of all sizes.'
    }
]

export function Page() {
    return (
        <>
            <section className="bg-brand-dark pt-20 pb-32 text-center text-white relative">
                <div className="container mx-auto px-4 relative z-10 max-w-4xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-display font-bold mb-6 leading-[1.1]">
                        Professional Landscaping Websites for <br className="hidden md:block" />
                        <span className="text-brand-amber">Growth</span>
                    </h1>
                    <p className="text-xl text-brand-cream/80 max-w-3xl mx-auto mb-10">
                        Landscaping is visual. Your website needs to let your previous work do the talking, showing off those stunning before and afters.
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
                    <h2 className="text-3xl font-display font-bold text-center mb-12">What a good landscaper website includes:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Stunning before/after photo sliders",
                            "Clear services — paving, turfing, design, fencing",
                            "Trust badges — Marshalls Register, APL, etc.",
                            "Area pages targeting local towns",
                            "Seasonal service highlights",
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
                        When you're running a whacker plate or mixing cement, you can't hear your phone. Our AI answers, finds out if it's a £5k patio quote or a £50 mowing job, and sends you details by text. Call back when the mixer is off. No lost leads.
                    </p>
                    <Button asChild size="lg" className="bg-white text-brand-ai font-display font-bold hover:bg-white/90">
                        <a href="/ai-receptionist">Learn about AI Add-ons</a>
                    </Button>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-display font-bold mb-8 text-center text-brand-dark">Landscaper Website FAQs</h2>
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
