# Enrichly Landing Page — Integration Guide

No existing project files were shared with this request, so these files are built as
drop-in additions to a standard Next.js **App Router** project. Copy the folders below
into your repo at matching paths. Nothing here touches routing you didn't ask for —
only `/`, `/privacy`, `/terms`, `/contact`, plus `sitemap.xml` and `robots.txt`.

## Files created

```
app/
  page.tsx              → Homepage: composes all sections, full metadata + 5 JSON-LD schemas
  sitemap.ts            → Dynamic sitemap (/, /privacy, /terms, /contact)
  robots.ts             → robots.txt generator
  privacy/page.tsx       → Privacy Policy page
  terms/page.tsx         → Terms of Service page
  contact/page.tsx       → Contact page (static, mailto — no form backend assumed)

components/landing/
  Header.tsx             → Sticky nav, Buy Now CTA
  Hero.tsx                → Headline, CTAs, signature "refinement bar", dashboard screenshot slot
  ProblemSection.tsx      → Why Apollo-style pricing hurts
  SolutionSection.tsx     → How Enrichly solves it
  Features.tsx            → 11 feature cards
  HowItWorks.tsx           → 5-step pipeline (numbered — this is a real sequence)
  Documentation.tsx        → 19 included-document cards
  VideoDemo.tsx            → Native <video> demo embed, no JS library
  Screenshots.tsx           → Lazy-loaded Next Image gallery
  WhoIsItFor.tsx             → 6 audience segments
  TechStack.tsx               → Stack badges
  FAQ.tsx                      → 15 SEO-optimized FAQs, native <details>/<summary> accordion
  Pricing.tsx                   → One-time purchase card
  Footer.tsx                     → Legal links
  icons.tsx                      → Hand-rolled inline SVGs (no icon library dependency)

lib/data/content.ts          → All copy, feature/FAQ/doc data — single source of truth
lib/seo/jsonld.ts             → JSON-LD generators (SoftwareApplication, Organization,
                                 Product, FAQPage, BreadcrumbList)
```

## Why it's almost 100% Server Components

The only interactive UI on the page — the FAQ accordion and the video play button —
use native HTML (`<details>/<summary>` and `<video controls>`), so **zero components
in this feature need `"use client"`**. That satisfies the "minimal JavaScript, Server
Components wherever possible" requirement directly rather than as an afterthought.

## What you need to merge into your existing config (don't overwrite blindly)

**1. Tailwind color/font tokens** — add these to your `tailwind.config.ts` `theme.extend`:

```ts
theme: {
  extend: {
    colors: {
      bg: "#0A0E14",
      surface: "#10151F",
      border: "#1B2230",
      text: "#E8EAED",
      muted: "#8B95A5",
      amber: "#F0A93B",
      teal: "#4FD1C5",
    },
    fontFamily: {
      display: ["var(--font-space-grotesk)", "sans-serif"],
      sans: ["var(--font-inter)", "sans-serif"],
      mono: ["var(--font-jetbrains-mono)", "monospace"],
    },
  },
},
```

**2. Fonts** — in your root `app/layout.tsx`, load via `next/font/google` and expose as
CSS variables (merge into whatever `<html>`/`<body>` className you already have):

```ts
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

// className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
```

**3. Background/text defaults** — add to `globals.css`:

```css
body {
  background-color: #0A0E14;
  color: #E8EAED;
}
```

**4. Update `lib/data/content.ts`**:
- Replace `site.domain` with your real production domain.
- Replace `#GUMROAD_URL_PLACEHOLDER` with your live Gumroad product URL (search/replace
  is safe — it's only referenced from `site.gumroadUrl`).
- Replace `support@enrichly.dev` in `app/contact/page.tsx` with your real inbox.

**5. Images** — the following paths are referenced but not generated (drop in real
assets or update the paths): `/screenshots/dashboard-placeholder.png`,
`/screenshots/discovery.png`, `/screenshots/crawl-status.png`,
`/screenshots/lead-scoring.png`, `/screenshots/csv-export.png`,
`/screenshots/demo-poster.png`, `/demo/enrichly-demo.mp4`, `/og-image.png`,
`/logo.png`.

## Design tokens reference

- **Palette**: deep blue-black background (not pure black), amber (`#F0A93B`) as the
  primary accent — chosen to echo the raw-data → refined-lead metaphor rather than the
  generic green/vermilion dark-mode default — plus a cool teal (`#4FD1C5`) secondary.
- **Type**: Space Grotesk (display) + Inter (body) + JetBrains Mono (stats, file types,
  the refinement-bar labels) — mono reinforces the "structured data" feel throughout.
- **Signature element**: the horizontal "refinement bar" in the hero (`raw contact →
  enriched lead`), echoed structurally by the numbered pipeline in How It Works.
