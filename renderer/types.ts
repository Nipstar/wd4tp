// https://vike.dev/PageContext
import type { PageContextBuiltInServer } from 'vike/types'

type PageProps = Record<string, unknown>
type Page = any

export type PageContextCustom = {
    Page: (pageProps: PageProps) => React.ReactElement
    pageProps?: PageProps
    exports: {
        documentProps?: {
            title?: string
            description?: string
        }
    }
}

export type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom
export type PageContextClient = PageContextCustom
export type PageContext = PageContextClient | PageContextServer
