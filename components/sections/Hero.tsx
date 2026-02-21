import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
    return (
        <section className="relative bg-brand-dark pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
            {/* Background decoration with generated image */}
            <div className="absolute inset-0 z-0 bg-brand-dark">
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat Mix-blend-overlay"
                    style={{ backgroundImage: 'url(/images/home-hero-bg.webp)' }}
                />
                {/* Gradient overlay to ensure text legibility on the left side */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-[1.1]">
                        Trade websites that <br className="hidden md:block" />
                        <span className="text-brand-amber">actually get you work.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-brand-cream/80 max-w-2xl mb-12 leading-relaxed">
                        No waffle. No jargon. Just a website that looks as good as the job you do — and gets your phone ringing.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto text-bg text-lg h-14 px-8 bg-brand-amber hover:bg-brand-amber-hover text-brand-dark font-display font-bold"
                        >
                            <a href="/pricing">
                                See Our Prices
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto text-lg h-14 px-8 border-2 text-white border-white/20 hover:bg-white/10 font-display font-bold"
                        >
                            <a href="/portfolio">
                                View Our Work
                            </a>
                        </Button>
                    </div>

                    {/* Trust Strip */}
                    <div className="mt-16 pt-8 border-t border-brand-slate/20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-brand-cream/60 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>50+ trade websites built</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-amber-400 text-lg">★★★★★</span>
                            <span>4.9 Google Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Hampshire & UK Wide</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
