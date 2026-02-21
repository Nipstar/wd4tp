import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from './PageShell'
import type { PageContextServer } from './types'

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

    const { documentProps } = pageContext.exports || {}
    const title = (documentProps && documentProps.title) || 'Trade Websites That Get You More Work | Hampshire & UK'
    const desc = (documentProps && documentProps.description) || 'Trade websites built to get you more work. No waffle, just websites that rank on Google and answer your calls using AI.'

    return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
