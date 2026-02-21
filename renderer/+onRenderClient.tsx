import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'
import './index.css'

export async function onRenderClient(pageContext: PageContextClient) {
    const { Page, pageProps } = pageContext
    if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')

    const container = document.getElementById('page-view')
    if (!container) throw new Error('DOM element #page-view not found')

    hydrateRoot(
        container,
        <PageShell pageContext={pageContext}>
            <Page {...(pageProps || {})} />
        </PageShell>
    )
}
