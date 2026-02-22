import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from './PageShell'
import type { PageContextServer } from './types'

const BASE_URL = 'https://webdesignfortradespeople.co.uk'

export async function onRenderHtml(pageContext: PageContextServer) {
    const { Page, pageProps } = pageContext

    let pageHtml = ''
    if (Page) {
        pageHtml = renderToString(
            <PageShell pageContext={pageContext}>
                <Page {...(pageProps || {})} />
            </PageShell>
        )
    }

    const title = pageContext.config?.title || 'Trade Websites That Get You More Work | Hampshire & UK'
    const desc = pageContext.config?.description || 'Trade websites built to get you more work. No waffle, just websites that rank on Google and answer your calls using AI.'
    const canonicalUrl = `${BASE_URL}${pageContext.urlPathname === '/' ? '' : pageContext.urlPathname}`

    return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${desc}" />
        <link rel="canonical" href="${canonicalUrl}" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="${canonicalUrl}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:image" content="${BASE_URL}/og-image.png" />
        <meta property="og:site_name" content="Web Design for Tradespeople" />
        <meta property="og:locale" content="en_GB" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${desc}" />
        <meta name="twitter:image" content="${BASE_URL}/og-image.png" />
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
