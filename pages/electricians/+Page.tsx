import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

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

export function Page() {
    return (
        <>
            <section className="relative bg-brand-dark pt-32 pb-32 lg:pt-48 lg:pb-48 text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                </div>
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

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-display font-bold text-center mb-12">What a good electrician website includes:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Click-to-call button — front and centre, works on mobile",
                            "Service pages — rewires, consumer units, testing, whatever you do",
                            "Service area map — so people know you cover their town",
                            "NICEIC / NAPIT badge display — trust matters in electrics",
                            "Google-friendly structure — 'electrician [your town]' finds you",
                            "Photo gallery — your boards, your work, your van. Real, not stock."
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
                        And here's what most electricians don't have: when someone calls at 9pm with a tripped fuse and you can't answer, our AI receptionist picks up, gets their details, and texts you the summary. You call back in 10 minutes. Job booked. Without the AI, that call goes to voicemail and they've already called your competitor.
                    </p>
                    <Button asChild size="lg" className="bg-white text-brand-ai font-display font-bold hover:bg-white/90">
                        <a href="/ai-receptionist">Learn about AI Add-ons</a>
                    </Button>
                </div>
            </section>

            <section className="py-24 bg-brand-cream border-y border-brand-slate/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display font-bold mb-12">How it works</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-xl font-medium text-brand-slate">
                        <div>1. Chat</div>
                        <div className="text-brand-amber hidden md:block">&rarr;</div>
                        <div>2. Build</div>
                        <div className="text-brand-amber hidden md:block">&rarr;</div>
                        <div>3. Go Live</div>
                    </div>
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
