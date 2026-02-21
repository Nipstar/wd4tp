import { useState, useEffect } from 'react'
import { Menu, Phone } from 'lucide-react'
import { BUSINESS_DETAILS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/ai-receptionist', label: 'AI Receptionist' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-brand-dark/95 backdrop-blur-md shadow-md py-4'
                    : 'bg-brand-dark py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 z-50">
                    <img
                        src="/logo.svg"
                        alt="Web Design for Tradespeople Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                        width={300}
                        height={150}
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-brand-cream hover:text-brand-amber transition-colors font-medium text-sm lg:text-base"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        asChild
                        className="bg-brand-amber hover:bg-brand-amber-hover text-brand-dark font-bold font-display px-6 h-11"
                    >
                        <a href={`tel:${BUSINESS_DETAILS.phoneLink}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            {BUSINESS_DETAILS.phone}
                        </a>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <div className="flex lg:hidden items-center gap-4">
                    <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="text-brand-amber hover:text-brand-amber hover:bg-brand-amber/10 h-10 w-10"
                    >
                        <a href={`tel:${BUSINESS_DETAILS.phoneLink}`} aria-label="Call us">
                            <Phone className="h-5 w-5" />
                        </a>
                    </Button>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-brand-cream hover:text-brand-cream hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-brand-dark border-l-brand-slate text-brand-cream pt-20">
                            <nav className="flex flex-col gap-6 text-xl font-display">
                                {NAV_LINKS.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-brand-amber transition-colors border-b border-brand-slate/20 pb-4"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <div className="pt-4">
                                    <Button
                                        asChild
                                        className="w-full bg-brand-amber hover:bg-brand-amber-hover text-brand-dark font-bold text-lg h-14 mt-4"
                                    >
                                        <a href={`tel:${BUSINESS_DETAILS.phoneLink}`}>
                                            <Phone className="mr-2 h-5 w-5" />
                                            {BUSINESS_DETAILS.phone}
                                        </a>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
