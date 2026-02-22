import { BUSINESS_DETAILS } from '@/lib/constants'
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup'

export function Page() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Home', item: 'https://webdesignfortradespeople.co.uk' },
                { name: 'Terms of Service', item: 'https://webdesignfortradespeople.co.uk/terms' }
            ]} />

            <section className="bg-brand-dark pt-32 pb-16 text-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
                    <p className="text-brand-cream/70">Last updated: February 2026</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl prose prose-lg text-brand-slate">
                    <h2 className="font-display text-brand-dark">Overview</h2>
                    <p>
                        These terms govern your use of the {BUSINESS_DETAILS.name} website and our web design services.
                        By using our website or engaging our services, you agree to these terms.
                    </p>

                    <h2 className="font-display text-brand-dark">Services</h2>
                    <p>We provide web design, SEO, and AI receptionist services for tradespeople. Specific deliverables and timelines are agreed upon in individual project proposals.</p>

                    <h2 className="font-display text-brand-dark">Payment Terms</h2>
                    <p>Payment terms are as outlined in your individual quote or service agreement. Monthly subscriptions can be cancelled with 30 days' notice.</p>

                    <h2 className="font-display text-brand-dark">Intellectual Property</h2>
                    <p>Upon full payment, you own the rights to your website content and design. We retain the right to showcase work in our portfolio unless otherwise agreed.</p>

                    <h2 className="font-display text-brand-dark">Limitation of Liability</h2>
                    <p>We are not liable for any indirect or consequential losses arising from the use of our services or website.</p>

                    <h2 className="font-display text-brand-dark">Contact</h2>
                    <p>For questions about these terms, contact us at {BUSINESS_DETAILS.email} or call {BUSINESS_DETAILS.phone}.</p>
                </div>
            </section>
        </>
    )
}
