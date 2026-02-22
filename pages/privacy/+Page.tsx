import { BUSINESS_DETAILS } from '@/lib/constants'
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup'

export function Page() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Home', item: 'https://webdesignfortradespeople.co.uk' },
                { name: 'Privacy Policy', item: 'https://webdesignfortradespeople.co.uk/privacy' }
            ]} />

            <section className="bg-brand-dark pt-32 pb-16 text-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
                    <p className="text-brand-cream/70">Last updated: February 2026</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl prose prose-lg text-brand-slate">
                    <h2 className="font-display text-brand-dark">Who We Are</h2>
                    <p>
                        {BUSINESS_DETAILS.name}, based at {BUSINESS_DETAILS.address}.
                        You can contact us at {BUSINESS_DETAILS.email} or call {BUSINESS_DETAILS.phone}.
                    </p>

                    <h2 className="font-display text-brand-dark">What Data We Collect</h2>
                    <p>When you use our contact or quote forms, we collect your name, phone number, email address, and any message you provide. We use this solely to respond to your enquiry.</p>

                    <h2 className="font-display text-brand-dark">How We Use Your Data</h2>
                    <p>We use your personal information to respond to your enquiries, provide quotes, and deliver our web design services. We do not sell or share your data with third parties for marketing purposes.</p>

                    <h2 className="font-display text-brand-dark">Cookies</h2>
                    <p>This website uses essential cookies only. No tracking or advertising cookies are used.</p>

                    <h2 className="font-display text-brand-dark">Your Rights</h2>
                    <p>Under UK GDPR, you have the right to access, rectify, or delete your personal data. Contact us at {BUSINESS_DETAILS.email} to exercise these rights.</p>

                    <h2 className="font-display text-brand-dark">Contact</h2>
                    <p>For privacy-related queries, email {BUSINESS_DETAILS.email}.</p>
                </div>
            </section>
        </>
    )
}
