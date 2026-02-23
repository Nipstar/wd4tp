import { ArrowRight, Home, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BUSINESS_DETAILS } from '@/lib/constants'

export function Page() {
    return (
        <section className="relative bg-brand-dark pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden min-h-[80vh] flex items-center">
            {/* Background — same as home hero */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/home-hero-bg.webp"
                    alt=""
                    role="presentation"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    width={1920}
                    height={1080}
                />
                <div className="absolute inset-0 bg-brand-dark/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

                    <span className="text-8xl md:text-9xl font-display font-bold text-brand-amber mb-4">
                        404
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-[1.1]">
                        This page has gone <span className="text-brand-amber">on a tea break.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-brand-cream/80 max-w-xl mb-12 leading-relaxed">
                        We couldn't find what you're looking for. It might have moved, or it might never have existed. Either way, let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto text-lg h-14 px-8 bg-brand-amber hover:bg-brand-amber-hover text-brand-dark font-display font-bold"
                        >
                            <a href="/">
                                <Home className="mr-2 h-5 w-5" />
                                Back to Home
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto text-lg h-14 px-8 border-2 text-white border-white/20 hover:bg-white/10 font-display font-bold"
                        >
                            <a href={`tel:${BUSINESS_DETAILS.phoneLink}`}>
                                <Phone className="mr-2 h-5 w-5" />
                                Give Us a Ring
                            </a>
                        </Button>
                    </div>

                    <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 text-brand-cream/60 text-sm">
                        <a href="/pricing" className="hover:text-brand-amber transition-colors flex items-center gap-1">
                            See Our Prices <ArrowRight className="h-4 w-4" />
                        </a>
                        <a href="/portfolio" className="hover:text-brand-amber transition-colors flex items-center gap-1">
                            View Our Work <ArrowRight className="h-4 w-4" />
                        </a>
                        <a href="/contact" className="hover:text-brand-amber transition-colors flex items-center gap-1">
                            Get In Touch <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
