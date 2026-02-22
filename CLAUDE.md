# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Web Design for Tradespeople** marketing website built with Vike (React SSR framework), focusing on lead generation for trade-specific web design services (plumbers, electricians, builders, etc.).

## Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build (auto-generates SEO files first)
npm run build

# Run production server
npm run server

# Preview production build
npm run preview
```

## Tech Stack & Architecture

### Core Technologies
- **Vike** (v0.4.x) - SSR framework with file-based routing and prerendering
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS v4** - Styling (uses new `@theme` directive)
- **Framer Motion** - Animations
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form handling

### Routing (Vike File-Based)

Pages use Vike's folder-based routing convention:
- `pages/index/+Page.tsx` → `/`
- `pages/plumbers/+Page.tsx` → `/plumbers`
- `pages/contact/+Page.tsx` → `/contact`

Each page exports a `Page` component. The renderer is configured in `renderer/+config.ts` with:
- Client-side routing enabled
- Prerendering enabled (static site generation)
- Hydration can be aborted

### Directory Structure

```
pages/              # Vike pages (file-based routing with +Page.tsx convention)
renderer/           # Vike renderer (PageShell, config, render functions)
components/
  ├── ui/           # Radix UI wrappers (button, sheet, accordion)
  ├── sections/     # Page sections (Hero, CTASection, etc.)
  ├── layout/       # Layout components (Header, Footer, Layout)
  ├── forms/        # Form components (QuoteForm, ContactForm)
  ├── ai/           # AI-related UI (ChatWidget)
  └── seo/          # SEO components (SchemaMarkup)
lib/
  ├── constants.ts  # Business details and constants
  ├── utils.ts      # Utility functions
  └── seo/          # SEO generation utilities
scripts/
  └── generate-seo.ts  # Build-time script for robots.txt & sitemap.xml
public/             # Static assets (images, auto-generated SEO files)
content/trades/     # Content data for trade-specific pages
```

### Path Aliases

Two path aliases are configured in `tsconfig.json` and `vite.config.ts`:
- `@/` → project root (e.g., `@/components/layout/Header`)
- `#/` → absolute root (e.g., `#/pages/index`)

### Styling (TailwindCSS v4)

**Important**: This project uses TailwindCSS v4 with the new `@theme` directive (in `renderer/index.css`).

Custom brand colors and fonts are defined in CSS:
```css
@theme {
  --font-display: "Space Grotesk"  # Headings
  --font-body: "Inter"              # Body text

  --color-brand-dark: #0F172A      # Dark blue/slate
  --color-brand-amber: #F59E0B     # Primary accent
  --color-brand-cream: #FAFAF9     # Background
  --color-brand-slate: #475569     # Text
  --color-brand-ai: #3B82F6        # AI features
}
```

Use these tokens in components: `bg-brand-dark`, `text-brand-amber`, `font-display`, etc.

### Build Process & SEO

The build command runs `tsx scripts/generate-seo.ts` before `vite build` to auto-generate:
- `public/robots.txt`
- `public/sitemap.xml`

These files are generated from `lib/seo/robots.ts` and `lib/seo/sitemap.ts` using the base URL `https://webdesignfortradespeople.co.uk`.

### Page Structure Pattern

Each page follows this structure:
1. Import section components from `@/components/sections/`
2. Define Schema.org markup for SEO
3. Export `Page` component that renders sections

Example:
```tsx
import { Hero } from '@/components/sections/Hero'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

const pageSchema = { /* Schema.org JSON-LD */ }

export function Page() {
  return (
    <>
      <SchemaMarkup schema={pageSchema} />
      <Hero />
      {/* Other sections */}
    </>
  )
}
```

### Layout System

The `renderer/PageShell.tsx` wraps all pages with the `Layout` component, which includes:
- `Header` (navigation)
- `Footer`
- `MobileStickyBar` (mobile CTA)
- `ChatWidget` (AI chat interface)

All pages automatically get these shared layout elements.

### Business Constants

Business contact details are centralized in `lib/constants.ts` as `BUSINESS_DETAILS`. Always reference this object rather than hardcoding business information.

## Development Guidelines

### Adding a New Page

1. Create `pages/{slug}/+Page.tsx`
2. Export a `Page` component
3. Add the route to `lib/seo/sitemap.ts` for SEO
4. Include Schema.org markup using `SchemaMarkup` component
5. Run `npm run build` to regenerate sitemap

### Working with Forms

Forms use React Hook Form. See `components/forms/QuoteForm.tsx` or `ContactForm.tsx` for examples.

### Adding Sections

Section components go in `components/sections/`. Each section should be self-contained and accept minimal props. Most sections use data inline rather than props.

### Styling Components

- Use Tailwind utility classes with brand color tokens
- Prefer `font-display` for headings, `font-body` for text
- Use `container mx-auto px-4` for consistent page width
- Follow existing spacing patterns (e.g., `py-24` for sections)

### Icons

Icons are from `lucide-react`. Import named icons: `import { CheckCircle2 } from 'lucide-react'`
