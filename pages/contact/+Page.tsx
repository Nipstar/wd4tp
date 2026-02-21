import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { QuoteForm } from '@/components/forms/QuoteForm'

export function Page() {
    return (
        <>
            <section className="bg-brand-dark pt-32 pb-32 lg:pt-48 lg:pb-48 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/hero-contact-bg.webp')" }}
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-dark/80 z-0" />

                <div className="container mx-auto px-4 relative z-10 max-w-4xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-display font-bold mb-6 leading-[1.2]">
                        Let's have a chat.<br />
                        <span className="text-brand-amber">No sales pitch, promise.</span>
                    </h1>
                </div>
            </section>

            <section className="py-24 bg-brand-cream border-b border-brand-slate/10 -mt-20">
                <div className="container mx-auto px-4 max-w-6xl">

                    <div className="grid md:grid-cols-3 gap-6 mb-16 relative z-20">
                        <a href="tel:443333357920" className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-t-brand-amber text-center group hover:-translate-y-2 transition-transform">
                            <div className="h-16 w-16 bg-brand-amber/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Phone className="h-8 w-8 text-brand-amber" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">Call us</h3>
                            <p className="text-xl font-bold text-brand-amber mb-4">0333 335 7920</p>
                            <p className="text-sm text-brand-slate/80">Best for: a quick chat to see if we're a good fit.</p>
                        </a>

                        <a href="https://wa.me/443333357920" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-t-green-500 text-center group hover:-translate-y-2 transition-transform">
                            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <MessageCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">WhatsApp</h3>
                            <p className="text-xl font-bold text-green-600 mb-4">Message Us</p>
                            <p className="text-sm text-brand-slate/80">Best for: sending us links or photos of your current site.</p>
                        </a>

                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-t-brand-ai text-center">
                            <div className="h-16 w-16 bg-brand-ai/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="h-8 w-8 text-brand-ai" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">Email</h3>
                            <p className="text-sm text-brand-slate/80">Best for: out of hours or detailed enquiries.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto items-start">

                        <div className="order-2 lg:order-1">
                            <ContactForm />
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="bg-brand-dark rounded-2xl p-6 md:p-8 shadow-xl border-t-[6px] border-t-brand-amber text-white">
                                <h2 className="text-3xl font-display font-bold mb-4">Get a Quote Online</h2>
                                <p className="text-brand-cream/80 mb-8">
                                    We'll give you a price range straight away based on your needs. No sales pitch.
                                </p>
                                <QuoteForm />
                            </div>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-2 text-brand-slate/80 text-sm bg-brand-cream py-3 px-6 rounded-lg border border-brand-slate/10 shadow-sm">
                            <MapPin className="h-5 w-5 text-brand-slate/50" />
                            Based in Hampshire. Building for trades across the UK.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
