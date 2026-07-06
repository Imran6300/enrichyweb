// lib/data/content.ts
// Single source of truth for landing page copy & structured data.
// Keeping this separate from components makes it trivial to update SEO copy
// without touching markup, and keeps components as pure Server Components.

export const site = {
  name: "Enrichly",
  tagline: "Self-Hosted B2B Lead Discovery & Enrichment Platform",
  // TODO: after your first Vercel deploy, replace this with the exact URL Vercel
  // gives you (Project → Settings → Domains), e.g. "https://enrichly.vercel.app"
  domain: "https://enrichyweb.vercel.app",
  description:
    "Enrichly is a self-hosted Apollo alternative for discovering companies, crawling their websites, extracting verified business emails, and scoring lead quality — with full source code, no subscription, no seat limits.",
  price: "199",
  gumroadUrl: "https://imranite71.gumroad.com/l/iirtky",
};

export const nav = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Docs", href: "#documentation" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Self-hosted · One-time payment · Full source code",
  headline: "Stop renting your lead database.",
  subheadline:
    "Enrichly discovers companies, crawls their sites, and extracts verified business emails — running entirely on your own server. No per-seat pricing. No data leaving your infrastructure. Own the pipeline outright.",
  primaryCta: "Buy Now — Lifetime Access",
  secondaryCta: "Watch 4-Min Demo",
};

export const problems = [
  {
    title: "Apollo bills you forever",
    body: "Credit-based pricing means the meter never stops. Scale your outreach and the invoice scales with it — even though the underlying data costs Apollo almost nothing to serve twice.",
  },
  {
    title: "Your prospect list lives on someone else's server",
    body: "Every lead you enrich sits inside a third-party platform's database. If they change terms, raise prices, or shut down a feature, your pipeline breaks with it.",
  },
  {
    title: "Seat limits punish growing teams",
    body: "Add a second SDR and the plan tier jumps. Most enrichment platforms charge per user, not per value delivered — so headcount growth becomes a pricing penalty.",
  },
  {
    title: "You're one policy change away from losing access",
    body: "Rate limits, export caps, and API deprecations are decided unilaterally by the vendor. Self-hosted software can't be throttled by someone else's business decisions.",
  },
];

export const solutions = [
  {
    title: "Pay once, own it forever",
    body: "A single purchase gets you the complete codebase. No recurring invoice, no credit top-ups, no surprise tier upgrades.",
  },
  {
    title: "Your infrastructure, your data",
    body: "Enrichly runs on a server you control — a $6/mo VPS is enough to start. Every lead, every crawl result, every export stays inside your own MongoDB instance.",
  },
  {
    title: "Unlimited seats by default",
    body: "There's no seat metering in your own codebase. Add your whole team without a pricing conversation.",
  },
  {
    title: "Modify anything",
    body: "Full TypeScript source means you can change scoring logic, add a new data source, or bolt on a CRM integration — the platform bends to your workflow, not the other way around.",
  },
];

export const features = [
  {
    title: "Business Discovery",
    body: "Search by industry, location, and company size to surface target businesses at scale, without paying per lookup.",
  },
  {
    title: "Website Crawling",
    body: "An automated crawler visits each company's website and pulls structured signals — contact pages, team pages, footer data — for enrichment.",
  },
  {
    title: "Email Extraction",
    body: "Pattern-based and page-scraped extraction surfaces verified business emails directly from a company's own domain.",
  },
  {
    title: "Lead Scoring",
    body: "A configurable scoring model ranks leads by fit and reachability, so your team works the best prospects first.",
  },
  {
    title: "CSV Export",
    body: "Export clean, deduplicated lead lists on demand — ready to drop into your existing outreach tooling.",
  },
  {
    title: "Authentication",
    body: "Built-in auth keeps the dashboard private to your team, with no third-party identity provider required.",
  },
  {
    title: "MongoDB Storage",
    body: "All discovery and enrichment data is stored in your own MongoDB instance — queryable, exportable, and fully yours.",
  },
  {
    title: "REST API",
    body: "Every function in the dashboard is backed by a documented REST API, so you can automate discovery and enrichment from your own scripts.",
  },
  {
    title: "Docker Ready",
    body: "A Docker configuration is included for teams that prefer containerized deployment over bare-metal PM2.",
  },
  {
    title: "PM2 Deployment",
    body: "Production-ready PM2 process configs are included for teams deploying directly to a VPS.",
  },
  {
    title: "Google Places Integration",
    body: "Optional Google Places API integration expands discovery coverage for location-based business search.",
  },
];

export const steps = [
  { number: "01", title: "Discover Companies", body: "Search by industry and location to build a target list of businesses." },
  { number: "02", title: "Crawl Websites", body: "Enrichly visits each company's site to gather structured contact signals." },
  { number: "03", title: "Extract Emails", body: "Business emails are pulled directly from company domains and contact pages." },
  { number: "04", title: "Score Leads", body: "Leads are ranked by fit and reachability using a configurable scoring model." },
  { number: "05", title: "Export CSV", body: "Pull a clean, deduplicated list into your existing outreach or CRM tooling." },
];

export const documentation = [
  { title: "README.md", type: "Markdown", body: "Project overview, quick start, and repository structure." },
  { title: "Installation Guide", type: "Markdown", body: "Step-by-step local and server setup instructions." },
  { title: "Architecture", type: "Markdown", body: "System design, data flow, and service boundaries." },
  { title: "API Documentation", type: "Markdown", body: "Full REST endpoint reference with request and response shapes." },
  { title: "FAQ", type: "Markdown", body: "Answers to common setup and usage questions." },
  { title: "Deployment Guide", type: "Markdown", body: "Deploying to a VPS with PM2, Nginx, and Docker." },
  { title: "Performance Guide", type: "Markdown", body: "Tuning crawl concurrency, rate limits, and database indexes." },
  { title: "Security Guide", type: "Markdown", body: "Hardening auth, environment secrets, and network exposure." },
  { title: "Troubleshooting", type: "Markdown", body: "Fixes for the most common setup and runtime issues." },
  { title: "Roadmap", type: "Markdown", body: "Planned features and direction for future releases." },
  { title: "Changelog", type: "Markdown", body: "Version history and notable changes." },
  { title: "Database Schema", type: "Markdown", body: "Full MongoDB collection and field reference." },
  { title: "Environment Variables", type: "Markdown", body: "Every configurable variable, explained." },
  { title: "Buyer Checklist", type: "Markdown", body: "What to verify immediately after purchase." },
  { title: "Deployment Checklist", type: "Markdown", body: "Pre-launch checks before going live in production." },
  { title: "Support Guide", type: "Markdown", body: "How to get help and report issues." },
  { title: "Sample Leads", type: "CSV", body: "Example enriched lead export to preview the data shape." },
  { title: "Sample .env", type: "Text", body: "A ready-to-copy environment file template." },
  { title: "License", type: "Text", body: "Usage terms for your purchased copy." },
];

export const audiences = [
  { title: "Developers", body: "Full source code to study, extend, or white-label into your own product." },
  { title: "Agencies", body: "Run lead generation for multiple clients without per-seat platform fees." },
  { title: "Sales Teams", body: "Build and export prospect lists without waiting on a data vendor." },
  { title: "Founders", body: "Validate markets and find early customers without a recurring tool bill." },
  { title: "Recruiters", body: "Discover companies and reach hiring contacts directly." },
  { title: "Consultants", body: "Deliver lead lists as a service, priced however you choose." },
];

export const techStack = [
  "Node.js", "Express", "MongoDB", "React", "Google Places API", "Tailwind CSS", "Docker", "PM2", "Nginx",
];

export const faqs = [
  { q: "What exactly do I get after purchase?", a: "The complete Enrichly source code, full documentation set, deployment guides, and lifetime access to the version you purchased." },
  { q: "Is this a subscription?", a: "No. Enrichly is a one-time purchase. There are no recurring fees for the software itself — you only pay for your own hosting." },
  { q: "Do I need to know how to code?", a: "Basic comfort with a terminal and editing environment variables is enough to deploy it. Modifying the source code benefits from JavaScript/TypeScript familiarity." },
  { q: "What are the server requirements?", a: "A small VPS with 1–2 vCPUs and 2GB RAM is enough to start. Requirements scale with your crawl volume." },
  { q: "Can I white-label this and resell it?", a: "Check the included license file for exact terms — it defines what's permitted for your purchased tier." },
  { q: "Does this replace Apollo entirely?", a: "It replaces the discovery, crawling, extraction, scoring, and export workflow. It does not include Apollo's dialer or some of its ecosystem integrations out of the box, though the REST API makes those addable." },
  { q: "How is lead scoring calculated?", a: "Scoring weights are defined in a configuration file, covering signals like domain match, page completeness, and email confidence. You can adjust the weights directly." },
  { q: "Where is the data stored?", a: "In a MongoDB instance you control — either self-hosted or a managed provider like MongoDB Atlas." },
  { q: "Does it support Docker?", a: "Yes. A Docker configuration is included alongside the PM2-based deployment path." },
  { q: "How many leads can I discover per day?", a: "Throughput depends on your server resources and any third-party API rate limits you configure, such as Google Places." },
  { q: "Is Google Places API required?", a: "No, it's optional. Discovery can run without it, though enabling it expands location-based search coverage." },
  { q: "Will I get updates after purchase?", a: "Lifetime access to the version you purchase is included, with update terms specified in the license file." },
  { q: "Can I integrate this with my existing CRM?", a: "Yes — the REST API exposes every core function, making it straightforward to connect to an existing CRM or outreach tool." },
  { q: "Is customer support included?", a: "A support guide is included in the documentation covering common issues and how to get help." },
  { q: "What if I run into a deployment issue?", a: "The Deployment Guide and Troubleshooting docs cover the most common issues, from environment variables to process management." },
];

export const pricing = {
  title: "One-Time Purchase",
  price: "See Gumroad for current price",
  features: [
    "Complete source code",
    "Full documentation set (19 documents)",
    "Deployment guides (PM2, Docker, Nginx)",
    "Sample leads & sample .env",
    "Lifetime access to your purchased version",
    "REST API included",
  ],
  cta: "Buy Now",
};