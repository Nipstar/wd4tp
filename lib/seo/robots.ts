// Simple function to generate robots.txt content at build time in Vike
// This will be written directly to the public folder during the build process, or served via a custom server route.
// For static site generation, we typically just put robots.txt in the `public` directory.

export const generateRobotsTxt = (baseUrl: string) => {
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`
}
