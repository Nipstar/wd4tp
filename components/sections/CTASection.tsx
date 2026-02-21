import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BUSINESS_DETAILS } from '@/lib/constants'

export function CTASection() {
    return (
        <section className="py-24 bg-brand-amber text-brand-dark">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
                        Ready to stop losing work to your competitors?
                    </h2>

                    <p className="text-xl max-w-2xl mb-12 font-medium opacity-90">
                        Give us a bell or fill in the form. We'll get back to you within 2 hours. No sales pitch, promise.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto text-lg h-14 px-8 bg-brand-dark hover:bg-slate-800 text-white font-display font-bold"
                        >
                            <a href={`tel:${BUSINESS_DETAILS.phoneLink}`}>
                                <Phone className="mr-2 h-5 w-5" />
                                {BUSINESS_DETAILS.phone}
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto text-lg h-14 px-8 border-2 border-brand-dark hover:bg-brand-dark/10 text-brand-dark font-display font-bold"
                        >
                            <a href="/contact">
                                Get a Quote Online
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}
