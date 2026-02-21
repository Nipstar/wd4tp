import React from 'react'
import { Layout } from '@/components/layout/Layout'
import type { PageContext } from './types'

export function PageShell({
    children
}: {
    children: React.ReactNode
    pageContext: PageContext
}) {
    return (
        <React.StrictMode>
            <Layout>
                {children}
            </Layout>
        </React.StrictMode>
    )
}
