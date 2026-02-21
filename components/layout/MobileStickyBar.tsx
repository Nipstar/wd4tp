import { useState, useEffect } from 'react'
import { Phone, ClipboardList } from 'lucide-react'
import { BUSINESS_DETAILS } from '@/lib/constants'

export function MobileStickyBar() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero section (approx 400px)
            setIsVisible(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark border-t border-brand-slate/20 p-3 flex items-center gap-3 lg:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.3)] touch-none">
            <a
                href={`tel:${BUSINESS_DETAILS.phoneLink}`}
                className="flex-1 flex items-center justify-center gap-2 bg-brand-amber hover:bg-brand-amber-hover text-brand-dark font-display font-bold rounded-md h-12 transition-colors active:scale-[0.98]"
            >
                <Phone className="h-5 w-5" />
                Call Now
            </a>
            <a
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-brand-amber text-brand-amber hover:bg-brand-amber/10 font-display font-bold rounded-md h-12 transition-colors active:scale-[0.98]"
            >
                <ClipboardList className="h-5 w-5" />
                Get a Quote
            </a>
        </div>
    )
}
