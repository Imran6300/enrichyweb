// lib/data/comparisons.ts
// Single source of truth for /compare/[slug] pages. Add a new competitor by
// appending to this array — app/compare/page.tsx, app/compare/[slug]/page.tsx,
// and app/sitemap.ts all render from this data. No new files needed per
// competitor.

export interface ComparisonRow {
  label: string;
  enrichly: string;
  competitor: string;
}

export interface Comparison {
  slug: string; // used as /compare/[slug]
  competitorName: string;
  metaTitle: string;
  description: string; // meta description, keep under ~155 chars
  intro: string;
  rows: ComparisonRow[];
  whenCompetitorBetter: string;
  whenEnrichlyBetter: string;
  tradeoff: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "apollo-alternative",
    competitorName: "Apollo.io",
    metaTitle: "Enrichly vs Apollo.io: Self-Hosted vs SaaS Lead Enrichment",
    description:
      "A direct comparison of self-hosted lead enrichment (Enrichly) against SaaS platforms like Apollo.io — pricing model, data ownership, and who each approach fits.",
    intro:
      "Apollo.io is a solid tool — this isn't about which one is objectively \u201cbetter.\u201d It's about two fundamentally different models for getting the same job done, and which one fits how your team actually operates.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Per-seat, credit-metered subscription" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source" },
      { label: "Seat limits", enrichly: "No per-seat cost, unlimited internal use", competitor: "Cost scales per teammate added" },
      { label: "Customization", enrichly: "Editable scoring logic and pipeline", competitor: "Fixed feature set per vendor roadmap" },
      { label: "Setup effort", enrichly: "Self-hosted deploy (Docker)", competitor: "Sign up and go" },
      { label: "Support model", enrichly: "Documentation + community", competitor: "Vendor support included in subscription" },
    ],
    whenCompetitorBetter:
      "If your team wants zero infrastructure responsibility, needs guaranteed uptime SLAs, or relies heavily on vendor support and onboarding, Apollo's managed platform is the more sensible choice. You're paying for someone else to run and maintain everything, and that has real value.",
    whenEnrichlyBetter:
      "If you're comfortable running a Docker container, want your lead data to never leave infrastructure you control, or you've done the math on what a per-seat, credit-metered tool costs over two or three years, a one-time payment with full source code access removes the recurring cost and the dependency on a vendor's pricing decisions.",
    tradeoff:
      "Self-hosting means you own the uptime, the updates, and the infrastructure. That's a real cost, just a different kind than a monthly invoice. For teams who value control and predictable one-time pricing over hands-off convenience, that tradeoff is usually worth it.",
  },
  {
    slug: "clearbit-alternative",
    competitorName: "Clearbit",
    metaTitle: "Enrichly vs Clearbit: Self-Hosted vs Enterprise Enrichment API",
    description:
      "Clearbit (now HubSpot Breeze Intelligence) targets enterprise buyers with usage-based API pricing. Here's how a self-hosted alternative compares.",
    intro:
      "Clearbit, now part of HubSpot's Breeze Intelligence, is built for mid-market and enterprise teams that need deep firmographic data at API scale. For a smaller team, the comparison usually comes down to whether you need that enterprise depth or a simpler, flatter-cost pipeline.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Usage-based API pricing, enterprise contracts" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud, HubSpot ecosystem" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source, API-only" },
      { label: "Best fit team size", enrichly: "Solo founders to small teams", competitor: "Mid-market and enterprise" },
      { label: "Data depth", enrichly: "Crawled + verified business emails and firmographics", competitor: "Extensive firmographic and technographic datasets" },
      { label: "Setup effort", enrichly: "Self-hosted deploy (Docker)", competitor: "API integration, often via HubSpot" },
    ],
    whenCompetitorBetter:
      "If your team is already deep in the HubSpot ecosystem and needs enterprise-grade firmographic and technographic depth at API scale, Clearbit's dataset and integrations are hard to match with a smaller self-hosted tool.",
    whenEnrichlyBetter:
      "If you're an early-stage team enriching a few hundred to a few thousand leads a month and don't need enterprise firmographic depth, a flat one-time cost avoids paying for scale and integrations you're not using yet.",
    tradeoff:
      "Clearbit's pricing and depth are built for teams that have outgrown a lightweight pipeline. If that's not you yet, you're likely paying for headroom you won't use for a while.",
  },
  {
    slug: "hunter-io-alternative",
    competitorName: "Hunter.io",
    metaTitle: "Enrichly vs Hunter.io: Self-Hosted Pipeline vs Email Lookup Tool",
    description:
      "Hunter.io is fast for one-off email lookups. Here's how a self-hosted, continuous enrichment pipeline compares for recurring lead generation.",
    intro:
      "Hunter.io built its reputation on being the fastest way to find a single email address for a single domain. That's a different job than running a continuous enrichment pipeline against a growing lead list — here's how the two compare.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Monthly credit-based subscription" },
      { label: "Core use case", enrichly: "Continuous pipeline: discovery, crawl, verify, score", competitor: "Ad-hoc single-domain lookups" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source" },
      { label: "Scaling cost", enrichly: "Flat, regardless of volume", competitor: "Cost rises with lookup/credit volume" },
      { label: "Automation", enrichly: "Runs on a schedule against your own lists", competitor: "Manual lookups or API calls you build yourself" },
    ],
    whenCompetitorBetter:
      "For occasional lookups, checking a specific person's email before a warm intro, or low-volume prospecting, Hunter's simplicity and instant results are genuinely hard to beat.",
    whenEnrichlyBetter:
      "Once the workflow shifts to recurring, high-volume enrichment where credit costs scale with pipeline size, a self-hosted pipeline with no per-lookup cost and full control of the crawl and verification logic fits better.",
    tradeoff:
      "Hunter trades pipeline ownership for convenience. Enrichly trades convenience for a flat cost and full control. Which matters more depends on how often you're actually running lookups.",
  },
  {
    slug: "zoominfo-alternative",
    competitorName: "ZoomInfo",
    metaTitle: "Enrichly vs ZoomInfo: Self-Hosted Tool vs Enterprise Data Platform",
    description:
      "ZoomInfo is a large enterprise data platform with annual contracts. See how a self-hosted, one-time-payment alternative compares for smaller teams.",
    intro:
      "ZoomInfo is built around large, pre-aggregated B2B contact and intent datasets sold on annual contracts. It's a different category of tool than a lightweight, self-hosted pipeline, and the comparison mostly comes down to contract size and commitment.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Annual contract, typically five-figure minimums" },
      { label: "Contract commitment", enrichly: "None", competitor: "Usually 12-month minimum" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source" },
      { label: "Best fit team size", enrichly: "Solo founders to small teams", competitor: "Mid-market and enterprise sales orgs" },
      { label: "Data breadth", enrichly: "Crawled and verified from public sources on demand", competitor: "Massive pre-aggregated database with intent signals" },
    ],
    whenCompetitorBetter:
      "Large sales organizations that need intent data, org charts, and a massive pre-built database at enterprise scale are exactly what ZoomInfo is built for, and its breadth is difficult to replicate with a lightweight self-hosted tool.",
    whenEnrichlyBetter:
      "If an annual five-figure contract is out of reach or overkill for your team size, a one-time-payment tool that crawls and verifies data on demand covers the core enrichment need without the commitment.",
    tradeoff:
      "ZoomInfo's scale comes with scale-sized contracts. For teams not yet at that scale, that commitment is the actual cost being compared, not just the sticker price.",
  },
  {
    slug: "lusha-alternative",
    competitorName: "Lusha",
    metaTitle: "Enrichly vs Lusha: Self-Hosted Enrichment vs Credit-Based Browser Tool",
    description:
      "Lusha is popular as a browser-extension contact finder billed by credits. Here's how a self-hosted enrichment pipeline compares for teams scaling outreach.",
    intro:
      "Lusha is popular for its browser extension that reveals contact details while browsing LinkedIn or a company site. That's a genuinely convenient workflow for individual reps, but it's a different model than a pipeline built to enrich lists in bulk.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Monthly credit-based subscription" },
      { label: "Core workflow", enrichly: "Bulk discovery, crawl, verify, score", competitor: "Browser-extension lookups, one contact at a time" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source" },
      { label: "Seat scaling", enrichly: "No per-seat cost", competitor: "Credits and seats both scale with team size" },
    ],
    whenCompetitorBetter:
      "For individual reps doing manual prospecting on LinkedIn who want a quick contact reveal without any setup, Lusha's browser extension is the more convenient day-to-day tool.",
    whenEnrichlyBetter:
      "For teams that want to enrich lead lists in bulk on a recurring basis without a growing credit bill, a self-hosted pipeline with a flat one-time cost fits better once volume picks up.",
    tradeoff:
      "Lusha optimizes for per-contact convenience during manual prospecting. Enrichly optimizes for bulk, repeatable pipeline runs. The right choice depends on whether your team prospects manually or in bulk.",
  },
  {
    slug: "snov-io-alternative",
    competitorName: "Snov.io",
    metaTitle: "Enrichly vs Snov.io: Self-Hosted Pipeline vs All-in-One Outreach Suite",
    description:
      "Snov.io bundles email finding, verification, and outreach automation in one subscription. See how it compares to a self-hosted, one-time-payment pipeline.",
    intro:
      "Snov.io positions itself as an all-in-one suite covering email finding, verification, and outreach sequencing. That breadth is convenient if you want one subscription for everything, but it also means paying for outreach automation even if you already have a sending tool.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Monthly subscription, tiered by credits/seats" },
      { label: "Scope", enrichly: "Discovery, crawl, verification, scoring", competitor: "Discovery, verification, plus built-in outreach sequencing" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source" },
      { label: "Best fit", enrichly: "Teams that already have a sending/outreach tool", competitor: "Teams wanting one subscription for the whole funnel" },
    ],
    whenCompetitorBetter:
      "If you want enrichment and outreach sequencing bundled under a single subscription with no separate sending tool to manage, Snov.io's all-in-one scope is the more convenient pick.",
    whenEnrichlyBetter:
      "If you already use a dedicated outreach or sequencing tool and only need the enrichment layer, a focused self-hosted pipeline avoids paying recurring cost for automation features you won't use.",
    tradeoff:
      "Snov.io's breadth is a strength if you want it all in one place, and unnecessary cost if you don't. Enrichly is deliberately scoped to enrichment only.",
  },
  {
    slug: "rocketreach-alternative",
    competitorName: "RocketReach",
    metaTitle: "Enrichly vs RocketReach: Self-Hosted Pipeline vs Contact Lookup Search",
    description:
      "RocketReach is a search-first contact lookup tool billed by credits. Here's how it compares to a self-hosted, one-time-payment enrichment pipeline.",
    intro:
      "RocketReach is primarily a search interface — you look up a person or company and get contact details back, billed per lookup credit. That's a different shape of tool than a pipeline that discovers, crawls, and verifies leads on a recurring schedule.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Monthly credit-based subscription" },
      { label: "Core workflow", enrichly: "Automated pipeline: discovery, crawl, verify, score", competitor: "Manual or API-driven search lookups" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source" },
      { label: "Cost as volume grows", enrichly: "Flat, no per-lookup charge", competitor: "Scales directly with credits consumed" },
    ],
    whenCompetitorBetter:
      "For quick, occasional lookups when you already know exactly who you're trying to reach, RocketReach's search-first interface is faster to use with zero setup.",
    whenEnrichlyBetter:
      "For teams running enrichment against growing lead lists on a recurring basis, a flat-cost, self-hosted pipeline avoids the credit cost scaling with every lookup.",
    tradeoff:
      "RocketReach charges per lookup by design; that model works well at low volume and gets expensive at high volume. Enrichly inverts that trade-off with infrastructure responsibility instead.",
  },
  {
    slug: "clay-alternative",
    competitorName: "Clay",
    metaTitle: "Enrichly vs Clay: Self-Hosted Enrichment vs Workflow Orchestration Platform",
    description:
      "Clay orchestrates multiple third-party enrichment providers behind a credit-based workflow builder. Here's how a self-hosted, standalone pipeline compares.",
    intro:
      "Clay is a workflow orchestration layer that routes your data through many third-party enrichment providers based on rules you configure, billed in credits that reflect the underlying providers' costs. It's powerful, but it's also a meta-layer on top of other paid data sources rather than a standalone pipeline.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Monthly subscription plus pass-through credit costs" },
      { label: "Data source", enrichly: "Own crawling and verification pipeline", competitor: "Routes to third-party enrichment providers" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud, dependent on provider APIs" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source, workflow builder UI" },
      { label: "Setup complexity", enrichly: "Docker deploy, fixed pipeline", competitor: "Custom workflow building per use case" },
    ],
    whenCompetitorBetter:
      "If you need to combine dozens of different enrichment providers into custom logic-driven workflows, Clay's orchestration flexibility is purpose-built for that and hard to replicate elsewhere.",
    whenEnrichlyBetter:
      "If you want a single, self-contained pipeline that doesn't depend on stitching together and paying for multiple third-party provider credits, a standalone self-hosted tool is simpler to reason about and cost.",
    tradeoff:
      "Clay's flexibility comes from depending on other paid providers underneath it. Enrichly's simplicity comes from owning the full pipeline itself, with less configurability in exchange.",
  },
  {
    slug: "cognism-alternative",
    competitorName: "Cognism",
    metaTitle: "Enrichly vs Cognism: Self-Hosted Tool vs Compliance-Focused Enterprise Platform",
    description:
      "Cognism targets enterprise, compliance-heavy sales orgs (especially in the EU) with annual contracts. See how a self-hosted alternative compares.",
    intro:
      "Cognism focuses heavily on compliance (GDPR-aligned data) and phone-verified contact data for enterprise sales teams, particularly in Europe, sold on annual contracts. It's built for a different scale and compliance posture than a lightweight self-hosted tool.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Annual enterprise contract" },
      { label: "Compliance posture", enrichly: "You control data handling directly", competitor: "Vendor-managed compliance framework" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source" },
      { label: "Best fit team size", enrichly: "Solo founders to small teams", competitor: "Enterprise sales orgs, especially EU-focused" },
    ],
    whenCompetitorBetter:
      "For enterprise sales organizations that need vendor-managed GDPR compliance frameworks and phone-verified data at scale, Cognism's enterprise positioning fits that requirement directly.",
    whenEnrichlyBetter:
      "For smaller teams that want direct control over how data is collected and handled, without an annual enterprise contract, a self-hosted tool with full source code lets you implement your own compliance approach.",
    tradeoff:
      "Cognism sells compliance and scale as a managed service. Enrichly gives you the raw tool and leaves compliance implementation to you, which is more work but more control.",
  },
  {
    slug: "seamless-ai-alternative",
    competitorName: "Seamless.AI",
    metaTitle: "Enrichly vs Seamless.AI: Self-Hosted Pipeline vs Real-Time Search Platform",
    description:
      "Seamless.AI markets real-time contact search on a per-seat subscription. Here's how a self-hosted, one-time-payment pipeline compares.",
    intro:
      "Seamless.AI markets itself around real-time contact search — you search and it claims to find and verify contact data live. It's sold per seat, per month, similar to most SaaS enrichment tools in this category.",
    rows: [
      { label: "Pricing model", enrichly: "One-time payment", competitor: "Per-seat monthly subscription" },
      { label: "Core workflow", enrichly: "Automated pipeline: discovery, crawl, verify, score", competitor: "Real-time search-driven lookups" },
      { label: "Where your data lives", enrichly: "Your own infrastructure", competitor: "Vendor's cloud" },
      { label: "Source code access", enrichly: "Full source code included", competitor: "Closed source" },
      { label: "Seat scaling", enrichly: "No per-seat cost", competitor: "Cost scales per teammate added" },
    ],
    whenCompetitorBetter:
      "If your team wants a live search interface for on-demand lookups with zero infrastructure to manage, a hosted, per-seat tool like Seamless.AI removes setup friction entirely.",
    whenEnrichlyBetter:
      "If your team is growing and per-seat costs are becoming a real line item, or you want your search and verification logic auditable rather than a black box, a self-hosted, flat-cost pipeline fits better.",
    tradeoff:
      "Seamless.AI optimizes for instant, hosted convenience per seat. Enrichly optimizes for flat cost and control at the price of running your own infrastructure.",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}