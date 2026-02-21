# WDFT MASTER BUILD PROMPT & STYLE GUIDE

> **Project:** webdesignfortradespeople.co.uk — Complete Rebuild  
> **Stack:** Vite + React + Vike (SSG) + Tailwind CSS v4 + shadcn/ui + Motion  
> **Hosting:** VPS (primary) or Vercel (alternative)  
> **CMS:** Sanity (headless)  
> **Date:** February 2026

---

## PROJECT OVERVIEW

Build a complete website rebuild for webdesignfortradespeople.co.uk — a UK web design agency that builds websites exclusively for tradespeople (plumbers, electricians, roofers, builders, etc.). The site must be built on Vite + React using Vike for SSG (static site generation) so all marketing pages are pre-rendered as HTML for SEO.

This agency has a unique differentiator no competitor in this space offers: as a Certified Retell AI Partner, it provides **AI voice receptionists** and **AI chatbots** as optional add-ons to every website package. The positioning is: *"We don't just build your website — we make sure you never miss a call again."*

### CRITICAL REQUIREMENTS

- Every page must be SSG pre-rendered (not client-side rendered) for SEO
- Mobile-first design — sticky click-to-call bar on mobile, phone number in header on desktop
- Sub-2 second page load, target 90+ PageSpeed score
- JSON-LD schema on every page (ProfessionalService, Service, FAQPage, Article, BreadcrumbList)
- All copy must use a matesy, straight-talking, anti-pitch tone — like a mate who builds websites, not a marketing agency
- Three conversion channels: sticky click-to-call (primary), multi-step quote form (secondary), WhatsApp button (tertiary)
- Transparent pricing page with 3 website tiers + AI add-on options
- 10-15 unique trade-specific landing pages (NOT template-swapped copies)
- AI voice agent and chatbot showcased as premium differentiator throughout
- Live demo chatbot embedded on the site itself as proof of concept
- Deployable to VPS via Docker/Node or to Vercel with zero-config

---

## TECH STACK

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Vite + React 18 | Vike for SSG/SSR routing |
| Rendering | Vike (vite-plugin-ssr) | SSG for all marketing pages, client hydration for forms/interactive |
| Styling | Tailwind CSS v4 | Utility-first, purged CSS |
| Components | shadcn/ui + Radix UI | Accessible, customisable |
| Animations | Motion + GSAP ScrollTrigger | Page transitions + scroll-triggered reveals |
| Scroll | Lenis | Smooth scroll |
| Portfolio | react-compare-slider | Before/after website showcases |
| CMS | Sanity | Headless — trade pages, portfolio, blog |
| Hosting | VPS (Docker/Node) or Vercel | VPS: `vike build` → Express/Fastify behind Nginx + Cloudflare CDN. Vercel: `@vike/vercel` adapter. |
| Images | Cloudflare Images or Cloudinary | On-the-fly AVIF/WebP, responsive srcset |
| Analytics | Plausible or Fathom | Privacy-first, no cookie banner |
| Forms | React Hook Form + n8n webhook | Multi-step form → n8n → CRM + notifications |
| AI Chatbot | Retell AI / AAVAC Bot widget | Embedded on site as live demo + client product |
| AI Voice | Retell AI | Demo phone number on site — "Call our AI receptionist now" |

### Hosting — VPS Setup

```bash
# Build
npm run build  # vike outputs to dist/

# Run with PM2
pm2 start dist/server/index.js --name wdft

# Nginx reverse proxy
server {
    listen 80;
    server_name webdesignfortradespeople.co.uk;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /assets/ {
        proxy_pass http://127.0.0.1:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
# Cloudflare in front for CDN + SSL + DDoS
```

### Hosting — Vercel Alternative

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": null
}
```

---

## PROJECT STRUCTURE

```
/
├── pages/
│   ├── index/+Page.tsx               # Homepage
│   ├── pricing/+Page.tsx             # Pricing + AI add-ons
│   ├── ai-receptionist/+Page.tsx     # AI voice + chatbot landing
│   ├── portfolio/+Page.tsx           # Case studies
│   ├── about/+Page.tsx               # Andy's story
│   ├── contact/+Page.tsx             # Contact + click-to-call
│   ├── blog/
│   │   ├── +Page.tsx                 # Blog hub
│   │   └── @slug/+Page.tsx           # Blog post template
│   ├── seo/
│   │   ├── +Page.tsx                 # SEO hub
│   │   ├── electricians/+Page.tsx
│   │   ├── plumbers/+Page.tsx
│   │   └── roofers/+Page.tsx
│   ├── electricians/+Page.tsx        # Trade pages
│   ├── plumbers/+Page.tsx
│   ├── roofers/+Page.tsx
│   ├── builders/+Page.tsx
│   ├── landscapers/+Page.tsx
│   ├── plasterers/+Page.tsx
│   ├── painters/+Page.tsx
│   ├── carpenters/+Page.tsx
│   ├── kitchen-fitters/+Page.tsx
│   ├── cleaners/+Page.tsx
│   ├── scaffolders/+Page.tsx
│   ├── andover/+Page.tsx             # Location pages
│   └── hampshire/+Page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx
│   │   ├── MobileStickyBar.tsx
│   │   └── Breadcrumbs.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TradeGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── PricingCards.tsx
│   │   ├── AIShowcase.tsx
│   │   ├── AIPricingAddOns.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── CTASection.tsx
│   ├── forms/
│   │   ├── MultiStepQuoteForm.tsx
│   │   └── ContactForm.tsx
│   ├── seo/
│   │   ├── SchemaMarkup.tsx
│   │   ├── MetaTags.tsx
│   │   └── BreadcrumbSchema.tsx
│   └── ai/
│       ├── ChatWidget.tsx
│       ├── VoiceDemoButton.tsx
│       └── AIFeatureCards.tsx
├── lib/
│   ├── constants.ts
│   ├── types.ts
│   └── utils.ts
├── content/trades/
├── public/
│   ├── _redirects
│   ├── robots.txt
│   └── favicon.svg
├── server/index.ts                    # Express server for VPS
└── renderer/
    ├── +onRenderHtml.tsx
    └── +config.ts
```

---

## SITE ARCHITECTURE & URLS

### Core Pages (Launch)

| URL | Page | Title Tag |
|-----|------|-----------|
| `/` | Homepage | Trade Websites That Get You More Work \| Hampshire & UK |
| `/pricing/` | Pricing + AI Add-ons | Website Prices for Tradespeople \| From £X/month |
| `/ai-receptionist/` | AI Voice & Chatbot | AI Receptionist for Tradespeople \| Never Miss a Call Again |
| `/portfolio/` | Case Studies | Trade Websites We've Built \| Real Results |
| `/about/` | About | About Us \| Hampshire Web Design for Trades |
| `/contact/` | Contact | Get in Touch \| Call, WhatsApp or Message |
| `/blog/` | Blog | Tips & Guides for Tradespeople Going Online |
| `/seo/` | SEO Services | SEO for Tradespeople \| Get Found on Google |

### Trade Pages — Tier 1 (Launch)

| URL | GSC Impressions (3mo) | Title Tag |
|-----|----------------------|-----------|
| `/electricians/` | 5,003 | Electrician Website Design \| Get More Callouts |
| `/plumbers/` | 3,828 | Plumber Website Design \| Win More Local Jobs |
| `/roofers/` | 2,450 | Roofer Website Design \| Stand Out From the Cowboys |
| `/builders/` | 651 | Builder Website Design \| Show Off Your Best Work |
| `/landscapers/` | 250 | Landscaper Website Design \| Before & After Galleries |

### Trade Pages — Tier 2 (Month 2)

`/plasterers/` · `/painters/` · `/carpenters/` · `/kitchen-fitters/` · `/cleaners/`

### Trade Pages — Tier 3 (Quarter 2)

`/scaffolders/` · Tilers · Locksmiths · Heating Engineers · Bathroom Fitters · Driveways

### SEO Sub-Pages

`/seo/electricians/` (468 imp) · `/seo/plumbers/` (241 imp) · `/seo/roofers/` (3,002 imp)

### Location Pages

`/andover/` (5,073 imp) · `/hampshire/` (107 imp)

---

## 301 REDIRECT MAP

```
# Core
/services/                /               301
/legal/                   /privacy/       301

# Non-core trades → homepage
/driving-instructors/     /               301
/taxi/                    /               301
/gyms/                    /               301
/pubs/                    /               301
/car-repair/              /               301
/accountants/             /               301
/dentists/                /               301
/it-support/              /               301
/photographers/           /               301
/personal-trainers/       /               301
/hairdressing-salons/     /               301
/beauty-salons/           /               301

# Consolidation
/pressure-wash/           /cleaners/      301

# Village pages → location hubs
/ludgershall/             /andover/       301
/tidworth/                /andover/       301
/shipton-bellinger/       /andover/       301
/upper-enham/             /andover/       301
/picket-piece/            /andover/       301
/upper-clatford/          /andover/       301
/over-wallop/             /andover/       301
/goodworth-clatford/      /andover/       301
/st-mary-bourne/          /andover/       301
/weyhill/                 /andover/       301
/thruxton/                /andover/       301
/stockbridge/             /hampshire/     301
/forton/                  /hampshire/     301
/basingstoke-and-deane/   /hampshire/     301
/kings-somborne/          /hampshire/     301
/sutton-scotney/          /hampshire/     301

# Blog case studies → clean blog URLs
/web-design-for-tradespeople-develops-local-seo-for-bathroom-installers-in-eastleigh/     /blog/bathroom-installer-eastleigh/     301
/web-design-for-tradespeople-creates-booking-forms-for-window-cleaners-in-kingsclere/     /blog/window-cleaner-kingsclere/        301
/web-design-for-tradespeople-optimizes-conversion-for-gardeners-in-newbury/               /blog/gardener-newbury-conversion/      301
/web-design-for-tradespeople-optimizes-seo-for-electricians-in-basingstoke/               /blog/electrician-basingstoke-seo/      301
/web-design-for-tradespeople-builds-mobile-first-sites-for-heating-engineers-in-andover/  /blog/heating-engineer-andover/         301
/web-design-for-tradespeople-optimizes-speed-for-removal-companies-in-hook/               /blog/removal-company-hook/             301
/web-design-for-tradespeople-creates-quote-calculators-for-roofers-in-whitchurch/         /blog/roofer-whitchurch-calculator/     301
/web-design-for-tradespeople-develops-responsive-design-for-solar-installers-in-oakley-2/ /blog/solar-installer-oakley/           301
/web-design-for-tradespeople-develops-area-maps-for-tree-surgeons-in-overton/             /blog/tree-surgeon-overton/             301
/web-design-for-tradespeople-develops-service-pages-for-carpet-cleaners-in-stockbridge/   /blog/carpet-cleaner-stockbridge/       301
/web-design-for-tradespeople-builds-trust-signals-for-handymen-in-alton/                  /blog/handyman-alton-trust/             301
/web-design-for-tradespeople-builds-emergency-call-systems-for-gas-engineers-in-fleet/    /blog/gas-engineer-fleet/               301
```

---

## VISUAL STYLE GUIDE

### Colours

| Name | Hex | Tailwind | Usage |
|------|-----|---------|-------|
| Dark Charcoal | `#0F172A` | `slate-900` | Heroes, header, footer |
| Amber | `#F59E0B` | `amber-500` | All CTAs, accents, hovers |
| Warm Off-White | `#FAFAF9` | `stone-50` | Content backgrounds |
| Slate Grey | `#475569` | `slate-600` | Body text |
| Success Green | `#16A34A` | `green-600` | Checkmarks, trust |
| White | `#FFFFFF` | `white` | Cards, forms |
| AI Blue | `#3B82F6` | `blue-500` | AI sections, chatbot UI |
| AI Blue Dark | `#1D4ED8` | `blue-700` | AI hovers, AI backgrounds |

### Typography

| Element | Font | Size / Weight |
|---------|------|--------------|
| Display Headlines | Space Grotesk | 48-72px / 700 |
| Section Headlines | Space Grotesk | 28-36px / 600 |
| Body Text | Inter | 16-18px / 400 |
| Navigation | Inter | 14-16px / 500 |
| Buttons | Space Grotesk | 16-18px / 600 |
| Captions | Inter | 12-14px / 400 |

No serifs. No scripts. No decorative fonts.

### Tailwind Config

```ts
export default {
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0F172A',
          amber: '#F59E0B',
          'amber-hover': '#D97706',
          cream: '#FAFAF9',
          slate: '#475569',
          ai: '#3B82F6',
          'ai-dark': '#1D4ED8',
        }
      }
    }
  }
}
```

---

## COMPONENT PATTERNS

### Header
- Desktop: Logo left. Big clickable phone number right. Nav: Trades | Pricing | AI Receptionist | Portfolio | About | Contact
- Mobile: Logo left. Phone icon right. Hamburger menu.
- Sticky on scroll with backdrop blur

### Hero
- Full viewport dark bg, Space Grotesk headline, staggered Motion reveal
- Two CTAs: amber primary + ghost secondary
- Trust strip: "X sites built · 4.9★ · Hampshire & UK"
- Text-led, no image

### Trade Grid
- Bento grid, 8 cards at launch
- Icon + name + hook + link per card
- Hover: lift + shadow + amber border-bottom
- Mobile: 2-col, 48px touch targets

### AI Showcase Section (Homepage)
- Blue accent styling to differentiate from amber web design sections
- Headline: "Your website answers the phone when you can't."
- Split: copy left, interactive chatbot demo right
- Three feature cards: AI Receptionist / AI Chatbot / Smart Routing
- CTA: "See AI Add-Ons" + "Try the Demo"

### Pricing Cards
- 3 website tiers, middle highlighted
- Monthly headline, one-off secondary
- Green checkmark feature lists
- **AI Add-On section below** with blue accent:
  - AI Chatbot card + AI Receptionist card side by side
  - "Try Demo" + "Call Demo" buttons
  - "Free 14-day chatbot trial with every site"

### Mobile Sticky Bar
- Fixed bottom, appears after hero scroll
- "Call Now" (amber) + "Get a Quote" (outline)
- 48px height, z-50, thumb zone
- Chat widget floats above it

### Multi-Step Quote Form
- Step 1: "What's your trade?" — 6-8 clickable tiles
- Step 2: "What do you need?" — New site / Redesign / SEO + checkbox: "I'm interested in AI chatbot/receptionist"
- Step 3: Name, phone, postcode — 3 fields
- Progress bar, submit to n8n webhook
- Success: "Nice one. We'll give you a bell within 2 hours."

---

## COPYWRITING GUIDE

### The Voice

Imagine a bloke at the trade counter who knows about websites. Not selling. Just telling you straight: you need a website, here's what a good one looks like, here's what it costs. Oh, and he can set you up with an AI that answers your phone when you're elbow-deep in a boiler.

### Banned vs. Approved Language

| NEVER write this | ALWAYS write this instead |
|-----------------|--------------------------|
| Passionate about helping your business grow | We build websites that get you more work |
| Bespoke solutions tailored to your unique needs | A website built for your trade |
| Cutting-edge / state of the art | Modern, fast, works on phones |
| At [company], we believe... | Here's the thing... |
| Your success is our success | If your phone's not ringing, we haven't done our job |
| Leverage your digital footprint | Get found on Google |
| Optimise your online presence | Show up when people search |
| We're excited to work with you | Let's get cracking |
| Robust digital performance | A website that actually works |
| Comprehensive managed services | We handle the faff |
| AI-powered virtual receptionist solution | Answers your phone when you can't |
| Intelligent conversational AI interface | It chats to your customers for you |
| Eliminate missed revenue opportunities | Never miss a call again |
| Dynamic / innovative / synergy | DELETE THE SENTENCE |

---

## PAGE-BY-PAGE COPY

### HOMEPAGE

**Hero Headline:** Trade websites that actually get you work.

**Subhead:** No waffle. No jargon. Just a website that looks as good as the job you do — and gets your phone ringing.

**CTA 1:** See Our Prices  
**CTA 2:** View Our Work  
**Trust Strip:** [X] trade websites built · 4.9★ Google · Hampshire & UK

**Section: The Problem**

Your competitors are on page 1 of Google. Where are you?

When someone in your area types "electrician near me" or "roofer in [town]", do they find you — or someone else? If you're relying on word of mouth, Checkatrade, or that Facebook page you set up in 2019, you're leaving work on the table.

A proper website isn't a luxury. It's your 24/7 shopfront. It works while you're on a job, while you're in the van, while you're having your tea.

**Section: What We Do**

We build websites specifically for tradespeople. Plumbers, electricians, roofers, builders, landscapers — that's our thing. We know what your customers are searching for, what makes them pick up the phone, and what makes them scroll past.

Every site we build is mobile-first (because your customers are searching on their phones), fast-loading (because nobody waits), and built to rank on Google (because page 4 doesn't exist).

**Section: AI Showcase** *(blue accent)*

Your website answers the phone when you can't.

You're on a roof. You're under a sink. You're driving. And your phone rings. You can't answer it, and that's a job gone to someone who can.

Our AI receptionist picks up for you. It sounds like a real person, answers questions about your services, takes the caller's details, and sends you a summary. No missed calls. No voicemail that nobody leaves. Just leads, captured.

And if you want, we'll put a chatbot on your website too. It handles the "how much do you charge?" and "do you cover my area?" questions at 2am on a Sunday. You wake up to enquiries instead of silence.

We're the only trade web design agency in the UK that offers this. It's not a gimmick — it's a tool that pays for itself in the first week.

[CTA: See AI Add-Ons →]  
[CTA: Try the Demo — Call Our AI Now →]

**Section: How It Works**

Step 1: **Have a chat.** Tell us about your trade, your area, what you want. 15 minutes, no sales pitch.

Step 2: **We build it.** You carry on working. We'll show you progress and ask for feedback.

Step 3: **Go live.** Your new website's out there getting you found. We handle hosting, updates, and the techy bits. Add the AI receptionist and you'll never miss a lead again.

**Section: Social Proof**

"I was getting all my work through Checkatrade and paying through the nose for it. They built me a website, sorted my Google listing, and within a month I was getting 4-5 enquiries a week direct. Then I added the AI receptionist — now I don't miss calls even when I'm on a job. Best money I've spent."
— [Name], Electrician, [Town]

*(Use real testimonials. If you don't have them yet, do 2-3 spec builds and collect them.)*

**Bottom CTA:** Ready to stop losing work to your competitors? Give us a bell on [phone] or fill in the form. We'll get back to you within 2 hours.

---

### PRICING PAGE

**Headline:** Straight-up pricing. No hidden fees. No surprises.

**Subhead:** You quote for a living. So do we. Here's what it costs.

#### Website Packages

| | STARTER | TRADES PRO | FULL WORKS |
|--|---------|-----------|------------|
| Best for | Sole traders starting out | Established trades wanting more work | Trades wanting website + SEO + the lot |
| Pages | 5 pages | 8-10 pages | Unlimited |
| Mobile-ready | ✓ | ✓ | ✓ |
| SEO setup | Basic on-page | Full local SEO | Ongoing monthly SEO |
| Google Business Profile | — | Setup included | Setup + monthly optimisation |
| Gallery | Basic | Before/after | Video + before/after |
| Contact form | Standard | Quote request form | Multi-step + WhatsApp |
| AI Chatbot | 14-day free trial | 14-day free trial | 3-month free trial |
| Support | Email | Phone + email | Priority phone |
| Monthly | From £X/month | From £X/month | From £X/month |
| One-off option | £X | £X | £X |

"Not sure which one? Give us a call. We'll tell you honestly which one makes sense. No upsell, no pressure."

#### AI Add-Ons *(blue accent section)*

**Headline:** Bolt on an AI brain. Optional extras that pay for themselves.

| | AI CHATBOT | AI RECEPTIONIST |
|--|-----------|----------------|
| What it does | Chat widget on your website. Answers FAQs, captures leads, sends you summaries. 24/7. | AI answers your actual phone. Takes messages, books jobs, handles enquiries. Sounds like a real person. |
| Best for | Enquiries from your website at night and weekends | Never missing calls when you're on a job |
| How it works | We build it, train it on your services and prices, you approve everything | We set up the voice with your business info, you approve the script. Urgent calls forward to you. |
| What you get | Lead notifications by email/SMS, conversation logs, monthly report | Call summaries by SMS, voicemail transcriptions, job booking notifications |
| Monthly | From £X/month | From £X/month |
| Setup | £X one-off | £X one-off |
| Try it | Chat with our demo → | Call our AI → [tel: link] |

"Every site comes with a free 14-day chatbot trial. No obligation, no card details."

#### Pricing FAQ

1. **How much does a trade website actually cost?** Starter is from £X/month. 5-page website, works on phones, shows up on Google. No big upfront cost.

2. **What's in the monthly fee?** Hosting, SSL, security updates, basic content changes, email support. We keep it running so you don't have to think about it.

3. **Can I cancel anytime?** Yes. No long contracts. We're confident you'll stay because it works, not because you're locked in.

4. **Do I need the AI add-ons?** Need? No. But if you're missing calls on jobs — and most trades are — the AI receptionist pays for itself with one captured job. Try the 14-day trial.

5. **What if I already have a website?** We redesign it. Trades Pro and Full Works include migrating your content and setting up redirects so you don't lose Google rankings.

6. **How long does it take?** Starter: 1-2 weeks. Trades Pro: 2-3 weeks. Full Works: 3-4 weeks.

7. **Do you work outside Hampshire?** Yes. Based in Hampshire, build for trades across the UK. Most work is remote.

8. **What makes you different?** We specialise in trades (not "also do trades"), and we're the only ones offering AI voice agents and chatbots. Your website doesn't just sit there — it answers your phone and chats to your customers.

---

### AI RECEPTIONIST PAGE (`/ai-receptionist/`)

**Headline:** Never miss a call again. Your AI receptionist handles it.

**Subhead:** You're on a job. Your phone rings. You can't answer. That used to mean a lost customer. Not anymore.

**The Problem**

The average tradesperson misses 3-5 calls per day while on jobs. At £200 per job, that's up to £1,000 a day in potential work going to whoever picks up first.

Voicemail? Nobody leaves one anymore. They just call the next plumber on Google.

**AI Voice Receptionist — How It Works**

Your phone rings. You can't answer. Our AI picks up. It sounds natural — not like a robot. It:

- Greets callers by your business name
- Asks what they need (emergency, quote, general)
- Collects name, number, postcode
- Answers common questions ("Do you cover my area?", "What do you charge?")
- Sends you an SMS summary within seconds
- Flags urgent calls and forwards them to you

You call them back when you're free. Job booked. No missed leads.

**AI Website Chatbot — How It Works**

A chat bubble on your website that:

- Answers "how much?" and "do you cover?" automatically
- Captures name and phone number
- Qualifies leads (service needed, urgency, location)
- Sends you details by email or SMS
- Works at 2am on a Sunday

Both trained on your business. Your services, your prices, your area, your tone. You approve everything.

**Why This Isn't a Gimmick**

- We're a Certified Retell AI Partner — we build these, not resell them
- Voices sound natural — callers often don't realise
- You control everything: script, responses, forwarding rules
- Costs less than a part-time receptionist
- Works 24/7/365 including bank holidays

One captured job pays for months of the service. That's not a pitch, that's maths.

**Live Demos**

[Embedded chatbot widget — "Chat with our demo bot. Ask it anything."]

[Phone number — "Call [number] right now. Talk to our AI. Takes 30 seconds."]

**FAQ**

1. **Does it sound robotic?** No. Most callers don't realise. You choose the voice.
2. **What about urgent calls?** You set the rules. Emergencies forward to your mobile immediately.
3. **Can it book in my diary?** Yes — integrates with Google Calendar, Calendly, or your system.
4. **What if it gets something wrong?** You approve every response. Unknown questions → takes a message.
5. **Setup time?** Chatbot: 2-3 days. Voice: 3-5 days.
6. **Can I try first?** 14-day chatbot trial, 7-day voice trial. No card, no obligation.

---

### TRADE LANDING PAGE TEMPLATE

Every page MUST have unique copy — not find-and-replace.

**Structure:**
1. Hero: [Trade] Website Design That Gets You More [Outcome]
2. Problem specific to that trade
3. What a good [trade] website includes (trade-specific features)
4. AI hook — one paragraph on how AI receptionist/chatbot helps this specific trade
5. Example screenshots / case study
6. 3-step process: Chat → Build → Live
7. FAQ: 5 trade-specific questions (FAQPage schema)
8. CTA: phone + quote form

### Example: Electricians

**Headline:** Electrician Website Design That Gets You More Callouts

When someone's got a tripped fuse at 9pm, they're not scrolling through Yell. They're typing "electrician near me" into Google. If you're not showing up, that's a £200 callout going to someone else.

Your website should do three things: show up on Google, make you look professional, and make it dead easy to call you. No fancy animations. No waffle about your "journey." Just clear services, your area, your number, and proof you're good at what you do.

**Includes:**
- Click-to-call button — front and centre, works on mobile
- Service pages — rewires, consumer units, testing, whatever you do
- Service area map — so people know you cover their town
- NICEIC / NAPIT badge display — trust matters in electrics
- Google-friendly structure — "electrician [your town]" finds you
- Photo gallery — your boards, your work, your van. Real, not stock.

**AI hook:** And here's what most electricians don't have: when someone calls at 9pm with a tripped fuse and you can't answer, our AI receptionist picks up, gets their details, and texts you the summary. You call back in 10 minutes. Job booked. Without the AI, that call goes to voicemail and they've already called your competitor.

**FAQ:** How much does an electrician website cost? · Do I need one if I'm on Checkatrade? · How long to build? · Will it show up on Google? · Can I update it myself?

### Example: Plumbers

**Headline:** Plumber Website Design That Wins You More Local Jobs

Every time someone's got a leaking tap, a broken boiler, or a bathroom that needs fitting, they Google it. "Plumber near me." "Emergency plumber [town]." If your website doesn't show up — or if you don't have one — that's work going to the bloke down the road.

**Includes:**
- Emergency callout button — prominent, one tap
- Service breakdown — boilers, bathrooms, leaks, heating
- Areas covered with local keywords
- Gas Safe / CIPHE badges
- Before/after photo gallery — nothing sells plumbing like a bathroom transformation
- Google review integration

**AI hook:** Most plumbers miss 3-5 calls a day while under someone's sink. Our AI answers, finds out if it's emergency or quote, sends you details by text. Emergency? Forwarded to you. Quote? Call back when you're free. No lost leads.

---

### ABOUT PAGE

**Headline:** We build websites for people who'd rather be on site than online.

I'm Andy, based in Hampshire. I've spent 30+ years in service businesses, so I know what it's like trying to win work, manage jobs, and still find time to sort out your online presence (spoiler: you don't).

That's why I started building websites specifically for trades. Not restaurants. Not accountants. Trades. People who do real work and need a website that gets them more of it.

I know your world. I speak your language. And I won't waste your time with jargon.

The AI receptionist and chatbot thing? That came from watching trades miss calls all day. You're on a job, phone rings, can't answer, customer calls someone else. Madness. So we built a solution. Our AI picks up when you can't, gets the details, sends them to you. Not replacing you — catching the work you'd otherwise miss.

We're a Certified Retell AI Partner. We build and customise AI voice agents specifically for UK trades. Your business, your services, your tone.

**What you get:**
- A real person to talk to (me), not a ticket system
- A website built by someone who understands your trade
- Ongoing support — we don't disappear after launch
- AI tools that save you money and win you work
- Straight answers. If you don't need something, we'll say so.

---

### SEO PAGES

**Pattern:** SEO for [Trade] — Get Found When People Search for What You Do

**Example: /seo/roofers/**

SEO for roofers isn't magic. It's making sure when someone types "roofer in [town]" into Google, your name comes up — not the bloke paying £50 a lead on MyBuilder.

We set up your website, your Google Business Profile, and your local listings so Google knows who you are, where you work, and what you do. Most roofers see movement in 60-90 days. Proper results in 6 months.

**"My mate said SEO is a scam."**

Some of it is. The blokes charging £2,000/month to send a PDF nobody reads — yeah, that's a scam. We build your site properly, set up your Google listing, make content match what people search for. Not magic. Just basics done right, consistently.

And once your website ranks and the AI chatbot handles enquiries 24/7, you've got a lead machine that works while you sleep. Checkatrade can't say that.

---

### CONTACT PAGE

**Headline:** Let's have a chat. No sales pitch, promise.

Three methods, equal prominence:
1. **Call us:** [Phone] — big, bold, clickable. "Best for: a quick chat."
2. **WhatsApp:** [Link] — "Best for: sending photos of your current site."
3. **Fill in the form:** Multi-step. "Best for: when you want us to come prepared."

Below form: "We'll get back within 2 hours during business hours. After hours? Our AI chatbot's probably already answered your question — check the chat bubble."

---

## SEO TECHNICAL SPEC

### Schema — Per Page

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Web Design for Tradespeople",
  "url": "https://webdesignfortradespeople.co.uk",
  "telephone": "+44-XXXX-XXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Andover",
    "addressRegion": "Hampshire",
    "addressCountry": "GB"
  },
  "areaServed": ["Hampshire", "United Kingdom"],
  "priceRange": "££",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "XX"
  },
  "serviceType": ["Web Design", "SEO", "AI Chatbot", "AI Voice Agent"]
}
```

**Trade Pages:** Service schema + FAQPage schema  
**AI Page:** Service schema + FAQPage schema  
**Blog:** Article schema + BreadcrumbList  

### Meta Tags — Every Page

- Title: 50-60 chars, keyword-first
- Description: 150-160 chars with CTA
- OG title, description, image
- Canonical (self-referencing)
- Hreflang: `en-gb`

### Technical Checklist

- [ ] XML sitemap at `/sitemap.xml`
- [ ] `robots.txt` → sitemap
- [ ] Breadcrumbs + BreadcrumbList schema
- [ ] Internal linking: every trade page → `/seo/`, `/pricing/`, `/ai-receptionist/`, + 2 related trades
- [ ] Images: AVIF/WebP, explicit dimensions, lazy below fold
- [ ] Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Preload hero fonts + above-fold images
- [ ] Initial JS bundle < 100KB compressed
- [ ] Cloudflare CDN in front of VPS

### Content Length Targets

| Page Type | Words |
|-----------|-------|
| Homepage | 1,500-2,000 |
| Trade pages | 1,500-2,500 (unique each) |
| SEO pages | 1,200-1,800 |
| AI receptionist | 1,500-2,000 |
| Pricing | 800-1,200 |
| About | 600-1,000 |
| Blog posts | 1,000-2,000 |
| Location pages | 800-1,500 |

---

## BUILD PHASES

### Phase 1: Scaffold

```
Scaffold Vite + React + Vike project:
- SSG default for all pages
- Tailwind v4 with custom theme (colours + fonts from style guide)
- Space Grotesk + Inter preloaded
- shadcn/ui init
- Motion, Lenis, React Hook Form installed
- Express server entry for VPS
- Vercel adapter config as alt
- Project structure per spec
- _redirects with full redirect map
- robots.txt
```

### Phase 2: Layout

```
Core layout components:
1. Header — logo, phone, nav, sticky, backdrop blur
2. Footer — dark, nav, phone, socials, company info
3. MobileStickyBar — "Call Now" + "Get a Quote", appears after hero
4. Breadcrumbs + schema
5. ChatWidget shell — blue bubble, bottom-right, above sticky bar
```

### Phase 3: Homepage

```
Sections in order:
1. Hero — dark bg, headline, Motion reveal, CTAs, trust strip
2. Problem — "Your competitors are on page 1..."
3. Trade grid — bento, 8 cards
4. AI Showcase — blue accent, demo embed, 3 feature cards
5. How it works — 3 steps
6. Social proof — testimonials
7. Mini pricing — 3 tiers preview
8. Bottom CTA — form or phone
+ ProfessionalService + WebSite schema
```

### Phase 4: Pricing + AI Add-Ons

```
/pricing/:
- 3 website tiers, middle highlighted
- AI add-on section (blue accent) with chatbot + receptionist cards
- Demo buttons (chatbot opens widget, voice links to tel:)
- Free trial callout
- FAQ accordion (8 Qs) + FAQPage schema
```

### Phase 5: AI Receptionist Page

```
/ai-receptionist/:
- Hero: "Never miss a call again"
- Problem: missed calls stats
- Voice + chatbot explainers
- Live demos embedded
- Certified Partner trust section
- FAQ + schema
- CTAs: "Add to package" + "Try free"
```

### Phase 6: Trade Landing Pages

```
5 pages with UNIQUE copy:
/electricians/ /plumbers/ /roofers/ /builders/ /landscapers/
Each: hero, problem, features, AI hook, process, FAQ, CTA
Service + FAQPage schema
Internal links to /seo/, /pricing/, /ai-receptionist/
```

### Phase 7: Remaining Pages

```
/portfolio/ — case studies, before/after, trade filter
/about/ — Andy, photo, Retell Partner
/contact/ — phone, WhatsApp, form, map
/seo/ — hub + /seo/electricians/ + /seo/plumbers/ + /seo/roofers/
/andover/ + /hampshire/
```

### Phase 8: Blog + Polish

```
Blog system:
- /blog/ hub, card layout
- Post template + Article schema
- First 3 posts:
  1. "5 Things Every Electrician Website Needs"
  2. "Checkatrade vs Your Own Website"
  3. "AI Receptionists for Trades: Gimmick or Game-Changer?"

Final:
- Lighthouse audit
- Accessibility (axe-core)
- Sitemap + robots.txt
- 301 redirects verified
- GSC submission
- GBP updated
- AI chatbot live on production
```

---

## CONVERSION & ANALYTICS

### Track These Events

- `tel:` link clicks (primary conversion)
- Quote form completions (all 3 steps)
- WhatsApp clicks
- AI chatbot: opened, messaged, lead captured
- AI voice demo calls
- "Add AI to package" clicks
- Pricing page views
- Trade → pricing journeys
- Blog 75%+ scroll

### n8n Integration

Form + chatbot leads → n8n webhook:
1. Email notification
2. CRM lead creation
3. SMS to Andy
4. Google Sheets log
5. Optional: Retell AI callback to lead

### KPIs

| Metric | Target (Month 3) | Baseline |
|--------|------------------|----------|
| Organic clicks | 200+/month | 57/3mo |
| Average position | Under 25 | 39 |
| Phone clicks | 20+/month | — |
| Form submissions | 10+/month | — |
| AI chatbot leads | 5+/month | N/A |
| PageSpeed mobile | 85+ | — |
| Pricing page views | 30% of visitors | — |

---

## EIGHT PAIN POINTS TO ADDRESS

Every section should tackle at least one:

1. **No time** — "We handle everything. You answer a few questions."
2. **Tech confusion** — "No jargon. We build, host, update. You run your trade."
3. **Checkatrade frustration** — "Stop renting leads. Own your website. Own your customers."
4. **Embarrassing website** — "If your website doesn't look as good as your work, it's costing you jobs."
5. **Outranked** — "Your competitors are on page 1. Shouldn't you be?"
6. **Price shock** — "From £X/month. No big upfront. Cancel anytime."
7. **ROI doubt** — "Dave's website paid for itself in 3 weeks. The AI receptionist in 3 days."
8. **Missed calls** — "You miss 3-5 calls a day on jobs. That's £1,000 in work. Our AI catches every one."

---

*End of master build prompt. Work through phases sequentially. Ship each as you go.*
