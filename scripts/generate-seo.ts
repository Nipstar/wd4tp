import fs from 'fs'
import path from 'path'
import { generateRobotsTxt } from '../lib/seo/robots'
import { generateSitemap } from '../lib/seo/sitemap'

const BASE_URL = 'https://webdesignfortradespeople.co.uk'
const PUBLIC_DIR = path.resolve(__dirname, 'public')

async function generate() {
    console.log('Generating SEO files...')

    // Ensure public directory exists
    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR, { recursive: true })
    }

    // Generate robots.txt
    const robotsTxt = generateRobotsTxt(BASE_URL)
    fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt)
    console.log('✓ robots.txt generated')

    // Generate sitemap.xml
    const sitemapXml = generateSitemap(BASE_URL)
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml)
    console.log('✓ sitemap.xml generated')
}

generate().catch(console.error)
