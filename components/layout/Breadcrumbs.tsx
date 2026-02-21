import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center gap-2 text-sm text-brand-slate/80">
                <li>
                    <a href="/" className="hover:text-brand-dark transition-colors flex items-center justify-center p-1">
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Home</span>
                    </a>
                </li>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1
                    return (
                        <li key={item.label} className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-brand-slate/40" />
                            {isLast || !item.href ? (
                                <span className="text-brand-dark font-medium" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <a href={item.href} className="hover:text-brand-dark transition-colors">
                                    {item.label}
                                </a>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
