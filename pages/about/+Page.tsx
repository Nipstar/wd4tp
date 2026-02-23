import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Web Design for Tradespeople",
    "url": "https://www.webdesignfortradespeople.co.uk/about"
}

export function Page() {
    return (
        <>
            <SchemaMarkup schema={aboutSchema} />
            <BreadcrumbSchema items={[
                { name: 'Home', item: 'https://www.webdesignfortradespeople.co.uk' },
                { name: 'About', item: 'https://www.webdesignfortradespeople.co.uk/about' }
            ]} />
            <section className="bg-brand-dark pt-32 pb-32 lg:pt-40 lg:pb-40 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/hero-about-bg.webp')" }}
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-dark/80 z-0" />

                <div className="container mx-auto px-4 relative z-10 max-w-4xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-display font-bold mb-6 leading-[1.1]">
                        We build websites for people who'd rather be <br className="hidden md:block" />
                        <span className="text-brand-amber">on site than online.</span>
                    </h1>
                </div>
            </section>

            <section className="py-24 bg-white border-b border-brand-slate/10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="prose prose-lg text-brand-slate leading-relaxed">
                            <p>
                                I'm Andy, based in Hampshire. I've spent 30+ years in service businesses, so I know what it's like trying to win work, manage jobs, and still find time to sort out your online presence (spoiler: you don't).
                            </p>
                            <p>
                                That's why I started building websites specifically for trades. Not restaurants. Not accountants. Trades. People who do real work and need a website that gets them more of it.
                            </p>
                            <p className="font-semibold text-brand-dark">
                                I know your world. I speak your language. And I won't waste your time with jargon.
                            </p>
                        </div>
                        <div className="bg-brand-cream border border-brand-slate/10 p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-display font-bold text-brand-dark mb-6">What you get:</h3>
                            <ul className="space-y-4">
                                {[
                                    "A real person to talk to (me), not a ticket system",
                                    "A website built by someone who understands your trade",
                                    "Ongoing support — we don't disappear after launch",
                                    "AI tools that save you money and win you work",
                                    "Straight answers. If you don't need something, we'll say so."
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-brand-slate">
                                        <CheckCircle2 className="text-brand-amber h-6 w-6 shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-ai text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-display font-bold mb-6">The AI Receptionist Story</h2>
                    <p className="text-xl text-brand-cream/90 leading-relaxed mb-12 text-left">
                        The AI receptionist and chatbot thing? That came from watching trades miss calls all day. You're on a job, phone rings, can't answer, customer calls someone else. Madness. So we built a solution. Our AI picks up when you can't, gets the details, sends them to you. Not replacing you — catching the work you'd otherwise miss. We're a Certified Retell AI Partner. We build and customise AI voice agents specifically for UK trades. Your business, your services, your tone.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="bg-white text-brand-ai font-display font-bold hover:bg-white/90">
                            <a href="/ai-receptionist">Explore AI Features</a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white font-display font-bold hover:bg-white/10">
                            <a href="/pricing">View Pricing</a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
