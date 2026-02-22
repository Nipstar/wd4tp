// Simple sitemap generator for Vike SSG

const pages = [
    '',
    '/about',
    '/pricing',
    '/portfolio',
    '/contact',
    '/ai-receptionist',
    '/seo',
    '/electricians',
    '/plumbers',
    '/roofers',
    '/builders',
    '/landscapers',
    '/plasterers',
    '/carpenters',
    '/privacy',
    '/terms'
]

export const generateSitemap = (baseUrl: string) => {
    const date = new Date().toISOString()

    const urls = pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}
