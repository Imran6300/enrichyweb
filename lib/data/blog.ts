// lib/data/blog.ts
// Single source of truth for blog content. Add a new post by appending to this
// array — app/blog/page.tsx and app/blog/[slug]/page.tsx render from this data,
// and app/sitemap.ts pulls slugs from here automatically. No new files needed
// per post.

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string; // used for meta description + card excerpt, keep under ~155 chars
  category: string;
  date: string; // ISO format, e.g. "2026-07-06"
  readingTime: string; // e.g. "6 min read"
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "self-hosted-lead-enrichment-tools",
    title: "Self-Hosted Lead Enrichment Tools: What to Look For in 2026",
    description:
      "A practical guide to evaluating self-hosted lead enrichment and B2B data tools — what actually matters versus what's marketing noise.",
    category: "Guide",
    date: "2026-07-06",
    readingTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Most B2B lead enrichment tools follow the same playbook: a polished dashboard, a per-seat subscription, and your company data living permanently on someone else's servers. That model works fine for teams that don't mind the recurring cost. It works less well for teams who've done the math on what a $99–$300/seat/month tool actually costs over three years, or who simply don't want a third party holding a copy of their entire lead pipeline.",
          "Self-hosted alternatives exist for exactly this reason. But 'self-hosted' isn't automatically the right choice for everyone, and not all self-hosted tools are built the same way. Here's what actually matters when you're evaluating one.",
        ],
      },
      {
        heading: "1. Where does the enriched data actually live?",
        paragraphs: [
          "The whole point of self-hosting is that your leads, your scraped data, and your export history stay on infrastructure you control — not on a vendor's cloud. Before trusting any tool with that label, check whether it genuinely runs standalone (Docker, a VPS, your own server) or whether it's a 'self-hosted' front-end that still phones home to a hosted API for the actual enrichment work. A lot of tools use the term loosely.",
        ],
      },
      {
        heading: "2. Pricing model: per-seat vs one-time",
        paragraphs: [
          "SaaS lead enrichment platforms are almost always priced per seat, per month, which means the cost scales with your team size forever. Self-hosted tools are more likely to use a one-time license or a flat fee — you pay once, and adding a fifth or fifteenth teammate doesn't change the bill. If your team is growing, this difference compounds fast over a few years.",
        ],
      },
      {
        heading: "3. Can you actually see and modify the scoring logic?",
        paragraphs: [
          "Most SaaS tools treat lead scoring as a black box — you get a number, not the reasoning. Tools that ship with visible, editable scoring configuration (domain match weight, page completeness, email confidence, etc.) let you tune the model to your actual ICP instead of accepting someone else's default assumptions.",
        ],
      },
      {
        heading: "4. Does it include source code, or just a binary?",
        paragraphs: [
          "This is the difference between 'self-hosted' and 'source-available.' A tool that ships full source code means you can audit exactly what it's doing with scraped data, patch it yourself if something breaks, and you're never dependent on a vendor staying in business. A closed binary you just happen to run on your own server gives you infrastructure control but not real transparency.",
        ],
      },
      {
        heading: "5. Export flexibility",
        list: [
          "Clean CSV export with deduplication, not a locked-in proprietary format",
          "No artificial export caps disguised as a 'fair use' policy",
          "The ability to re-run enrichment on your own exported data later without re-paying",
        ],
      },
      {
        heading: "The honest tradeoff",
        paragraphs: [
          "Self-hosting means you're responsible for running the thing — no support ticket queue, no guaranteed uptime SLA, no one else patching it for you. For a solo founder or small team comfortable with Docker, that tradeoff is usually a clear win on cost and control. For a large sales org that wants zero infrastructure responsibility and 24/7 vendor support, a managed SaaS platform is still the more sensible choice. There's no universally 'right' answer — only the right fit for how your team actually operates.",
        ],
      },
    ],
  },
  {
    slug: "how-to-extract-business-emails-legally",
    title: "How to Extract Business Emails From a Website Without Getting Blocked (or Sued)",
    description:
      "The practical, legal-aware approach to extracting business contact emails from company websites — rate limits, public-data rules, and what to avoid.",
    category: "Guide",
    date: "2026-07-06",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Extracting business emails from a company's own website — its team page, contact page, or footer — is one of the most common tasks in lead generation. It's also one of the most misunderstood, legally and technically. Here's the practical version of what actually matters.",
        ],
      },
      {
        heading: "What's generally fine",
        paragraphs: [
          "Publicly published business contact information — a 'contact us' email, a named team member's work email listed on a company's own about page — exists specifically so people can reach that business. Crawling a public page a human could visit in a browser and extracting that public information is a fundamentally different activity than breaching a login wall or scraping private data.",
        ],
      },
      {
        heading: "What actually gets you in trouble",
        list: [
          "Ignoring robots.txt and a site's explicit crawl rules",
          "Hammering a domain with requests fast enough to functionally be a denial-of-service",
          "Scraping personal (not business) emails at scale for spam purposes",
          "Bypassing authentication or paywalls to reach data that isn't public",
          "Ignoring a domain's Terms of Service when they explicitly prohibit automated access — this is a genuine legal gray area that varies by jurisdiction",
        ],
      },
      {
        heading: "The technical practices that keep you out of trouble",
        list: [
          "Respect robots.txt and crawl-delay directives",
          "Rate-limit your own crawler — a real visitor doesn't load 200 pages a second",
          "Identify your crawler with a real user-agent string, not a spoofed browser identity",
          "Only extract what's on the public page — don't attempt to bypass any access control",
          "Keep a suppression list and honor removal requests promptly",
        ],
      },
      {
        heading: "Verification matters as much as extraction",
        paragraphs: [
          "An extracted email is only useful if it's actually deliverable. Pattern-based extraction (matching common formats like first.last@domain.com) combined with verification against the page content itself produces meaningfully better data than raw scraping alone — and reduces the bounce rate that gets sending domains flagged.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "This isn't legal advice — laws around automated data collection vary by country and are actively evolving, and if you're building a large-scale commercial operation on this, a real conversation with a lawyer familiar with your jurisdiction is worth having. But for the common case — respectfully crawling public company websites for public business contact details, at a reasonable rate, without bypassing any access controls — you're operating well inside normal, widely-practiced lead generation activity.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}