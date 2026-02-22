import { BUSINESS_DETAILS } from '@/lib/constants'

const FOOTER_LINKS = {
    Trades: [
        { label: 'Electricians', href: '/electricians' },
        { label: 'Plumbers', href: '/plumbers' },
        { label: 'Roofers', href: '/roofers' },
        { label: 'Builders', href: '/builders' },
        { label: 'Landscapers', href: '/landscapers' },
        { label: 'Plasterers', href: '/plasterers' },
        { label: 'Carpenters', href: '/carpenters' },
    ],
    Company: [
        { label: 'About', href: '/about' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'AI Receptionist', href: '/ai-receptionist' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Contact', href: '/contact' },
    ],
    Legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
    ]
}

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-brand-dark text-brand-cream border-t border-brand-slate/20">
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <img
                            src="/logo.svg"
                            alt="Web Design for Tradespeople Logo"
                            className="h-10 w-auto object-contain self-start"
                        />
                        <p className="text-brand-cream/70 text-sm max-w-sm">
                            We build websites specifically for tradespeople. No waffle, no jargon, just sites that rank on Google and answer your phone when you can't.
                        </p>
                        <div className="flex flex-col gap-2 mt-2">
                            <a href={`tel:${BUSINESS_DETAILS.phoneLink}`} className="text-xl font-display font-bold text-brand-amber hover:text-brand-amber-hover transition-colors">
                                {BUSINESS_DETAILS.phone}
                            </a>
                            <span className="text-sm text-brand-cream/60 flex flex-col gap-1">
                                <span>{BUSINESS_DETAILS.hours.weekdays}</span>
                                <span>{BUSINESS_DETAILS.hours.weekends}</span>
                            </span>
                        </div>
                    </div>

                    {/* Trades Nav */}
                    <div>
                        <h4 className="font-display font-semibold text-lg mb-6 text-white">Trades</h4>
                        <ul className="flex flex-col gap-4">
                            {FOOTER_LINKS.Trades.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-brand-cream/70 hover:text-brand-amber transition-colors text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Nav */}
                    <div>
                        <h4 className="font-display font-semibold text-lg mb-6 text-white">Company</h4>
                        <ul className="flex flex-col gap-4">
                            {FOOTER_LINKS.Company.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-brand-cream/70 hover:text-brand-amber transition-colors text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact</h4>
                        <address className="not-italic text-sm text-brand-cream/70 flex flex-col gap-4">
                            <p>{BUSINESS_DETAILS.address}</p>
                            <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:text-brand-amber transition-colors">
                                {BUSINESS_DETAILS.email}
                            </a>
                        </address>

                        <h4 className="font-display font-semibold text-lg mt-8 mb-4 text-white">Social</h4>
                        <div className="flex flex-wrap gap-4">
                            {BUSINESS_DETAILS.socials && Object.entries(BUSINESS_DETAILS.socials).map(([network, url]) => (
                                <a key={network} href={url} target="_blank" rel="noopener noreferrer" className="text-brand-cream/70 hover:text-brand-amber transition-colors capitalize text-sm">
                                    {network}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-brand-slate/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-cream/60">
                    <p>© {currentYear} {BUSINESS_DETAILS.name}. All rights reserved.</p>
                    <ul className="flex items-center gap-6">
                        {FOOTER_LINKS.Legal.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-brand-cream transition-colors">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
