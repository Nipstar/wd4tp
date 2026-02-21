import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'
import { ChatWidget } from '@/components/ai/ChatWidget'

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col font-body bg-brand-cream text-brand-slate">
            <Header />
            <main className="flex-1 pt-20">
                {children}
            </main>
            <Footer />
            <MobileStickyBar />
            <ChatWidget />
        </div>
    )
}
