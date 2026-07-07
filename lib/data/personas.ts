// lib/data/personas.ts
// Single source of truth for /for/[slug] persona pages. Add an audience by
// appending here — app/for/page.tsx, app/for/[slug]/page.tsx, and
// app/sitemap.ts all render from this data.

export interface Persona {
  slug: string; // used as /for/[slug]
  audience: string; // display name, e.g. "Agencies"
  metaTitle: string;
  description: string; // meta description
  headline: string; // page H1
  intro: string;
  painPoints: { title: string; body: string }[];
  howEnrichlyHelps: string[];
  closingNote: string;
}

export const personas: Persona[] = [
  {
    slug: "agencies",
    audience: "Agencies",
    metaTitle: "Lead Generation Software for Agencies — Self-Hosted, No Per-Client Fees",
    description:
      "Run lead generation for every client from one self-hosted platform, with no per-seat or per-client subscription fees eating into your margin.",
    headline: "Lead generation for agencies, without the per-client tax",
    intro:
      "Agencies running lead generation for multiple clients hit the same wall with SaaS tools: pricing scales per seat or per workspace, so every new client you onboard quietly increases your own cost of delivery.",
    painPoints: [
      { title: "Per-client cost eats your margin", body: "Most SaaS enrichment tools charge per seat or per workspace, so running lead gen for 10 clients can cost 10x a single client's tool cost — directly against the margin you're trying to protect." },
      { title: "Client data shouldn't sit in a shared vendor account", body: "Managing multiple clients inside one shared SaaS account raises real questions about data separation and confidentiality that a self-hosted setup avoids entirely." },
      { title: "White-labeling is usually blocked or extra-cost", body: "Reselling enriched leads as part of your service often runs into a vendor's terms of service, or requires an expensive agency-tier plan just to remove someone else's branding." },
    ],
    howEnrichlyHelps: [
      "One-time payment covers unlimited internal use — no per-client or per-seat multiplier as you onboard more accounts",
      "Full source code means you can deploy a separate instance per client if data separation matters, without extra licensing cost",
      "Check the included license file for white-labeling and resale terms for your purchased tier",
      "REST API lets you fold enrichment directly into your existing client reporting or delivery pipeline",
    ],
    closingNote:
      "If you're already running lead gen as a service, the math tends to favor a flat one-time cost the moment you cross 2-3 active clients on a per-seat tool.",
  },
  {
    slug: "recruiters",
    audience: "Recruiters",
    metaTitle: "Lead & Contact Discovery for Recruiters — Self-Hosted Sourcing Tool",
    description:
      "Discover companies and hiring contacts directly from public sources, without paying per-lookup sourcing tool fees.",
    headline: "Company and hiring contact discovery for recruiters",
    intro:
      "Sourcing tools built for recruiters often bill per credit or per contact reveal, which adds up fast when you're building a candidate or client pipeline continuously rather than occasionally.",
    painPoints: [
      { title: "Per-reveal pricing punishes volume sourcing", body: "Recruiting is inherently high-volume outreach — paying per contact reveal turns a core, everyday workflow into a recurring cost that scales with exactly the activity you need to do more of." },
      { title: "Client-side contact discovery is a separate cost center", body: "Finding decision-makers at target client companies (for business development) usually requires a second tool beyond your ATS, adding yet another subscription." },
      { title: "Data freshness depends entirely on the vendor's crawl schedule", body: "You have no visibility into when a hosted tool last verified a contact — a stale record wastes an outreach attempt with no way to know beforehand." },
    ],
    howEnrichlyHelps: [
      "Discover target companies by industry and location, then crawl for named contacts and titles directly from company sites",
      "Verified email extraction reduces the guesswork behind a cold outreach attempt",
      "No per-lookup cost — run discovery as often as your pipeline needs without a growing invoice",
      "Runs on your own infrastructure, so you control exactly when data gets refreshed",
    ],
    closingNote:
      "Whether you're sourcing candidates or targeting new client companies for business development, a flat-cost tool fits a workflow that runs daily far better than a metered one.",
  },
  {
    slug: "saas-founders",
    audience: "SaaS Founders",
    metaTitle: "Lead Enrichment for SaaS Founders — Validate Markets Without a Tool Bill",
    description:
      "A self-hosted, one-time-payment lead enrichment tool built for early-stage founders validating markets and finding first customers on a tight budget.",
    headline: "Find early customers without adding a recurring tool bill",
    intro:
      "Early-stage founders are often told to 'just use Apollo' for outbound — but a per-seat, credit-metered subscription is a strange fit for a stage where cash discipline matters more than almost anything else.",
    painPoints: [
      { title: "Recurring costs compound at the worst possible stage", body: "Pre-revenue or early-revenue, every new monthly subscription is real runway — and enrichment tools are rarely the only SaaS line item competing for that same limited budget." },
      { title: "You're testing messaging, not running mature outbound", body: "Early-stage outreach is about testing which message and audience resonates, which means variable, exploratory usage that doesn't map cleanly onto a fixed monthly credit allotment." },
      { title: "You'll want the pipeline to evolve with your ICP", body: "Your ideal customer profile will likely shift multiple times before product-market fit — a closed-source tool can't be reshaped as fast as your assumptions change." },
    ],
    howEnrichlyHelps: [
      "One-time cost fits founder-stage cash constraints far better than a recurring subscription",
      "Full source code means you can adjust discovery criteria and scoring logic as your ICP evolves",
      "A $6/mo VPS is enough to run it, keeping infrastructure cost close to negligible",
      "REST API makes it straightforward to pull enriched leads directly into whatever CRM or spreadsheet you're already using to track early customer conversations",
    ],
    closingNote:
      "The right tool at this stage is one you can afford to run continuously through the messy, iterative period before you've found what's actually working.",
  },
  {
    slug: "sales-teams",
    audience: "Sales Teams",
    metaTitle: "Lead Enrichment for Sales Teams — No Seat Limits, No Credit Caps",
    description:
      "Build and export prospect lists for your sales team without waiting on a data vendor or hitting a monthly credit cap.",
    headline: "Prospect lists for sales teams, without a seat-based bill",
    intro:
      "Growing a sales team usually means growing your enrichment tool bill right alongside it — every new SDR is another seat, and every SDR prospecting harder is more credits burned.",
    painPoints: [
      { title: "Headcount growth becomes a pricing penalty", body: "Add a second or third rep and most enrichment tools push you into the next pricing tier, regardless of whether that tier's other features are relevant to you." },
      { title: "Credit caps throttle exactly the reps who prospect hardest", body: "Your most active rep hitting a monthly credit ceiling mid-month is a productivity problem created entirely by the pricing model, not by anything about the market." },
      { title: "Exported lists live across scattered CSVs", body: "Manually exporting from a SaaS tool into your CRM introduces duplication and version drift across a growing team without a shared source of truth." },
    ],
    howEnrichlyHelps: [
      "No per-seat cost — add your whole team without a pricing conversation",
      "No credit ceiling — your pipeline volume is limited by your own infrastructure, not a vendor's monthly cap",
      "Centralized MongoDB storage keeps every rep's discovered and enriched leads in one place, not scattered across individual exports",
      "Configurable lead scoring means the whole team works from the same prioritization logic",
    ],
    closingNote:
      "For teams that expect to keep growing, removing the seat multiplier from the enrichment line item alone can offset a meaningful chunk of the cost of adding new headcount.",
  },
  {
    slug: "consultants",
    audience: "Consultants",
    metaTitle: "Lead Generation Tool for Consultants — Deliver Lists as a Service",
    description:
      "A self-hosted lead discovery and enrichment tool consultants can use to deliver lead lists as a service, priced however they choose.",
    headline: "Deliver lead lists as a service, without a per-project tool cost",
    intro:
      "Consultants who deliver lead generation or market research as part of an engagement often end up paying for a SaaS enrichment seat per active project, which quietly narrows the margin on fixed-fee work.",
    painPoints: [
      { title: "Project-based work doesn't map to monthly subscriptions", body: "A one-off engagement paying for a full month of a SaaS subscription, regardless of how much of that month is actually used, is a mismatch that erodes project profitability." },
      { title: "Reselling enriched data may violate a vendor's terms", body: "Many SaaS platforms restrict reselling or delivering their data as a client deliverable, which puts consultants delivering lead lists in a gray area worth checking carefully." },
      { title: "Every new client relationship means re-learning someone else's UI", body: "Consultants juggling multiple tools across different client contexts benefit from one consistent, self-owned system rather than whatever platform each client happens to already use." },
    ],
    howEnrichlyHelps: [
      "One-time payment means the tool cost doesn't scale with how many projects or clients you're running concurrently",
      "Check the license file for exact terms on delivering enriched data as part of client work",
      "Full source code and REST API let you build your own reporting or delivery format around your existing consulting workflow",
      "Runs on infrastructure you control, keeping every client engagement's data appropriately separated",
    ],
    closingNote:
      "For fixed-fee or project-based delivery, a flat one-time tool cost is simply easier to price into an engagement than an ongoing subscription with no clean start or end date.",
  },
  {
    slug: "real-estate-agencies",
    audience: "Real Estate Agencies",
    metaTitle: "B2B Lead Discovery for Real Estate Agencies & Commercial Brokers",
    description:
      "Discover and enrich business contacts for commercial real estate outreach, property management leads, and B2B partnerships — self-hosted, one-time cost.",
    headline: "Business contact discovery for real estate and commercial brokers",
    intro:
      "Commercial real estate professionals often need to reach business decision-makers — property managers, facilities leads, expanding companies — which is a B2B contact discovery problem more than a residential listings problem, and most real estate-specific tools aren't built for it.",
    painPoints: [
      { title: "Real estate CRMs aren't built for B2B contact discovery", body: "Most real estate-specific software focuses on listings and transaction management, leaving a gap for finding and verifying business contacts at target companies." },
      { title: "Generic B2B tools are priced for sales teams, not brokerages", body: "Mainstream enrichment platforms price around per-seat sales team usage, which doesn't map cleanly onto a smaller brokerage team's actual usage pattern." },
      { title: "Expansion and relocation signals are hard to track manually", body: "Identifying companies actively expanding or relocating — prime commercial real estate leads — usually requires manually monitoring news and job postings without a dedicated pipeline." },
    ],
    howEnrichlyHelps: [
      "Discover companies by industry and location, useful for identifying businesses in a target market or submarket",
      "Crawl and extract verified contacts at facilities, operations, or leadership roles from company websites",
      "One-time cost fits a smaller brokerage team's usage pattern better than a per-seat sales tool",
      "Export clean CSVs directly into whatever CRM your brokerage already uses",
    ],
    closingNote:
      "This isn't a replacement for a real estate CRM — it's the B2B contact discovery layer most real estate-focused tools don't cover.",
  },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug);
}