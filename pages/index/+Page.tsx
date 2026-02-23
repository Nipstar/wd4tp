import { Hero } from '@/components/sections/Hero'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { TradeGrid } from '@/components/sections/TradeGrid'
import { AIShowcase } from '@/components/sections/AIShowcase'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'
import { BUSINESS_DETAILS } from '@/lib/constants'

const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": BUSINESS_DETAILS.name,
    "url": "https://www.webdesignfortradespeople.co.uk",
    "telephone": BUSINESS_DETAILS.phoneLink,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Andover",
        "addressRegion": "Hampshire",
        "addressCountry": "GB"
    },
    "areaServed": ["Hampshire", "United Kingdom"],
    "priceRange": "££",
    "serviceType": ["Web Design", "SEO", "AI Chatbot", "AI Voice Agent"]
}

export function Page() {
    return (
        <>
            <SchemaMarkup schema={homepageSchema} />
            <BreadcrumbSchema items={[
                { name: 'Home', item: 'https://www.webdesignfortradespeople.co.uk' }
            ]} />
            <Hero />
            <ProblemSection />
            <TradeGrid />
            <AIShowcase />
            <HowItWorks />
            <TestimonialCarousel />
            <CTASection />
        </>
    )
}
