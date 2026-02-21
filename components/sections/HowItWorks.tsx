import { Phone, Users, Rocket } from 'lucide-react'

const STEPS = [
    {
        icon: Phone,
        title: 'Have a chat',
        description: "Tell us about your trade, your area, what you want. 15 minutes, no sales pitch."
    },
    {
        icon: Users,
        title: 'We build it',
        description: "You carry on working. We'll show you progress and ask for feedback."
    },
    {
        icon: Rocket,
        title: 'Go live',
        description: "Your new website's out there getting you found. Add the AI receptionist and you'll never miss a lead again."
    }
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-brand-cream border-t border-brand-slate/10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-16">
                    How It Works
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative relative">
                    {/* Connector Line hidden on mobile */}
                    <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-brand-slate/10 z-0"></div>

                    {STEPS.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-20 w-20 bg-white rounded-2xl shadow-xl shadow-brand-dark/5 flexItems-center justify-center mb-6 border-2 border-brand-amber text-brand-dark relative group">
                                    <div className="absolute inset-0 m-auto flex items-center justify-center">
                                        <Icon className="h-8 w-8 text-brand-amber group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 h-8 w-8 bg-brand-dark text-white rounded-full flex items-center justify-center font-display font-bold shadow-md">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                                <p className="text-brand-slate/80 leading-relaxed">{step.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
