import { Zap, Droplets, Home, Hammer, Leaf, Paintbrush, Wrench, ShieldCheck } from 'lucide-react'

const TRADES = [
    { icon: Zap, name: 'Electricians', hook: 'Get more callouts for rewires and faults.', href: '/electricians', image: '/images/trade-electricians.webp' },
    { icon: Droplets, name: 'Plumbers', hook: 'Win more local emergency and heating jobs.', href: '/plumbers', image: '/images/trade-plumbers.webp' },
    { icon: Home, name: 'Roofers', hook: 'Stand out from the cowboys and win big jobs.', href: '/roofers', image: '/images/trade-roofers.webp' },
    { icon: Hammer, name: 'Builders', hook: 'Show off your extensions and renovations.', href: '/builders', image: '/images/trade-builders.webp' },
    { icon: Leaf, name: 'Landscapers', hook: 'Stunning galleries for your outdoor transformations.', href: '/landscapers', image: '/images/trade-landscapers.webp' },
    { icon: Paintbrush, name: 'Plasterers', hook: 'Smooth websites that get you booked solid.', href: '/plasterers', image: '/images/trade-plasterers.webp' },
    { icon: Wrench, name: 'Carpenters', hook: 'Bespoke sites for bespoke craftsmanship.', href: '/carpenters', image: '/images/trade-carpenters.webp' },
    { icon: ShieldCheck, name: 'Other Trades', hook: 'We build for any service-based trade.', href: '/contact', image: '/images/trade-other.webp' },
]

export function TradeGrid() {
    return (
        <section className="py-24 bg-brand-cream relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-dark mb-4">
                        Built for Your Trade
                    </h2>
                    <p className="text-lg text-brand-slate max-w-2xl mx-auto">
                        Every site we build is mobile-first, fast-loading, and built to rank on Google. Because page 4 doesn't exist.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
                    {TRADES.map((trade) => {
                        const Icon = trade.icon
                        return (
                            <a
                                key={trade.name}
                                href={trade.href}
                                className="group relative flex flex-col justify-end h-[320px] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${trade.image})` }}
                                />
                                {/* Gradient Overlays for readability */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors duration-300" />

                                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-amber scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-20" />

                                {/* Content */}
                                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                                    <div className="h-10 w-10 bg-brand-amber text-brand-dark rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-2">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-white mb-2">{trade.name}</h3>
                                    <p className="text-sm text-brand-cream/80 leading-relaxed font-medium">{trade.hook}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
