import { Button } from '@/components/ui/button'
import { TrendingUp, ArrowRight } from 'lucide-react'

export function Page() {
    return (
        <>
            <section className="bg-brand-dark pt-20 pb-24 text-center text-white relative">
                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                        Websites That Actually <span className="text-brand-amber">Work</span>
                    </h1>
                    <p className="text-xl text-brand-cream/80 max-w-2xl mx-auto mb-10">
                        We build sites that don't just look pretty—they capture leads, answer calls, and get you found.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-brand-cream">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Our Recent Projects</h2>
                        <p className="text-brand-slate text-lg">
                            A selection of our latest mobile-first websites tailored for the trades. Case studies with live metrics coming soon.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Plumber Project */}
                        <div className="bg-white rounded-xl border border-brand-slate/10 overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-64 bg-brand-slate/5 border-b border-brand-slate/10 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: 'url(/images/portfolio-plumber.webp)' }}
                                />
                                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-brand-dark mb-1">City Plumbers</h3>
                                        <p className="text-sm text-brand-slate font-medium">London, UK</p>
                                    </div>
                                    <span className="bg-brand-amber/20 text-brand-amber font-display font-bold text-xs px-2 py-1 rounded">Plumber</span>
                                </div>
                                <p className="text-sm text-brand-slate/80 mb-6">Emergency-focused site with integrated AI receptionist answering nighttime calls and booking jobs.</p>
                                <div className="flex items-center gap-4 text-sm font-medium text-brand-dark">
                                    <div className="flex items-center gap-1 text-brand-ai font-bold"><TrendingUp className="h-4 w-4 text-brand-ai" /> AI Add-on</div>
                                </div>
                            </div>
                        </div>

                        {/* Landscaper Project */}
                        <div className="bg-white rounded-xl border border-brand-slate/10 overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-64 bg-brand-slate/5 border-b border-brand-slate/10 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: 'url(/images/portfolio-landscaper.webp)' }}
                                />
                                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-brand-dark mb-1">Premium Landscapes</h3>
                                        <p className="text-sm text-brand-slate font-medium">Surrey, UK</p>
                                    </div>
                                    <span className="bg-brand-amber/20 text-brand-amber font-display font-bold text-xs px-2 py-1 rounded">Landscaping</span>
                                </div>
                                <p className="text-sm text-brand-slate/80 mb-6">Gallery-focused design showcasing high-end patio and garden transformations to attract premium clients.</p>
                                <div className="flex items-center gap-4 text-sm font-medium text-brand-dark">
                                    <div className="flex items-center gap-1"><TrendingUp className="h-4 w-4 text-green-500" /> 40% More Leads</div>
                                </div>
                            </div>
                        </div>

                        {/* Electrician Project */}
                        <div className="bg-white rounded-xl border border-brand-slate/10 overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-64 bg-brand-slate/5 border-b border-brand-slate/10 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: 'url(/images/portfolio-electrician.webp)' }}
                                />
                                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-brand-dark mb-1">Local Electrician</h3>
                                        <p className="text-sm text-brand-slate font-medium">Hampshire, UK</p>
                                    </div>
                                    <span className="bg-brand-amber/20 text-brand-amber font-display font-bold text-xs px-2 py-1 rounded">Electrician</span>
                                </div>
                                <p className="text-sm text-brand-slate/80 mb-6">Complete website rebuild featuring emergency callouts and Google Business integration.</p>
                                <div className="flex items-center gap-4 text-sm font-medium text-brand-dark">
                                    <div className="flex items-center gap-1"><TrendingUp className="h-4 w-4 text-green-500" /> Ranked #1</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <Button asChild size="lg" className="bg-brand-dark hover:bg-slate-800 text-white font-display font-bold">
                            <a href="/contact">Want results like these? Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
