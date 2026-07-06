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
  {
    slug: "apollo-io-pricing-explained",
    title: "Apollo.io Pricing Explained: What You Actually Pay Per Seat Over Time",
    description:
      "A breakdown of how Apollo's credit and seat-based pricing scales as your team grows, and what the real three-year cost looks like.",
    category: "Pricing",
    date: "2026-07-05",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Apollo.io's pricing page looks simple until you start adding seats and credits together. The advertised per-user price is only part of the bill — the other part is the credit system that governs how many contacts you can actually enrich or export each month, and that's where most teams get surprised.",
        ],
      },
      {
        heading: "Seats scale linearly, credits scale with usage",
        paragraphs: [
          "Every additional rep on a plan multiplies the seat cost, and every enrichment or export draws down a shared or per-seat credit pool. A team that goes from 3 to 8 reps isn't just paying more seats — they're usually also forced up a plan tier because the credit allotment at the lower tier no longer covers 8 people prospecting daily.",
        ],
      },
      {
        heading: "What a 3-year projection actually looks like",
        list: [
          "Year 1: modest team, modest bill, feels reasonable",
          "Year 2: team grows, tier upgrade forced by credit limits, not by need for new features",
          "Year 3: credit overage charges become a recurring line item as outreach volume increases",
        ],
      },
      {
        heading: "Where the cost actually comes from",
        paragraphs: [
          "None of this is unique to Apollo — it's how nearly every credit-metered SaaS enrichment tool is built, because metering usage is how the vendor keeps margin as their own data costs scale. The pricing isn't unfair, it's just structurally designed to grow with your team rather than staying flat.",
        ],
      },
      {
        heading: "The alternative framing",
        paragraphs: [
          "If your team's enrichment volume is predictable and your headcount is stable, a per-seat SaaS tool can be the right, lower-effort choice. If your team is growing fast or your enrichment volume is spiky, a flat one-time-cost, self-hosted tool changes the math entirely — the fifth seat costs the same as the first.",
        ],
      },
    ],
  },
  {
    slug: "clearbit-alternatives-for-startups",
    title: "Clearbit Alternatives for Startups on a Tight Budget",
    description:
      "Clearbit's enterprise pricing prices out most early-stage startups. Here's how to think about which alternative actually fits a small team.",
    category: "Guide",
    date: "2026-07-04",
    readingTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Clearbit (now part of HubSpot's Breeze Intelligence) is built for mid-market and enterprise buyers, and its pricing reflects that. For a two-person founding team trying to enrich a few hundred leads a month, it's often simply the wrong tool for the budget — not because it's bad, but because it's solving a different problem at a different scale.",
        ],
      },
      {
        heading: "What early-stage teams actually need",
        list: [
          "Company and contact enrichment for a few hundred to a few thousand records a month, not millions",
          "A predictable, capped cost — not a metered bill that grows with experimentation",
          "Enough data accuracy to run outreach, without needing enterprise-grade firmographic depth",
        ],
      },
      {
        heading: "The three realistic categories of alternative",
        paragraphs: [
          "Freemium SaaS tools (generous free tiers, but caps that a growing startup outgrows within months). Mid-market SaaS competitors (cheaper than Clearbit but still per-seat, still recurring). Self-hosted / source-available tools (a flat one-time cost, no seat multiplier, but you run the infrastructure yourself).",
        ],
      },
      {
        heading: "The real question to ask",
        paragraphs: [
          "It's not 'which tool has the most data' — it's 'which pricing model matches how my costs need to behave over the next two years.' A startup pre-product-market-fit benefits enormously from a flat, one-time cost because the alternative is a recurring bill that compounds during the exact period when cash is tightest.",
        ],
      },
    ],
  },
  {
    slug: "how-lead-scoring-actually-works",
    title: "How Lead Scoring Actually Works: A Practical Breakdown",
    description:
      "What's really happening behind a lead score — the signals that matter, the ones that are noise, and why black-box scores are hard to trust.",
    category: "Guide",
    date: "2026-07-03",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Most B2B tools show a lead score as a single number, with no explanation of what produced it. That's useful for a quick glance, but it makes the score impossible to trust or tune — you can't fix what you can't see.",
        ],
      },
      {
        heading: "The signals that typically drive a score",
        list: [
          "Domain and firmographic match against your ideal customer profile (industry, size, tech stack)",
          "Contact-level completeness — do you have a verified email, a real name, a role title",
          "Email deliverability confidence — a pattern-matched guess scores differently than an SMTP-verified address",
          "Page/content signals — does the company's own site indicate active buying intent for your category",
          "Recency — how fresh is the underlying data",
        ],
      },
      {
        heading: "Why weighting matters more than the signals themselves",
        paragraphs: [
          "Two companies can have identical raw signals and wildly different 'correct' scores depending on what actually matters for your specific product. A tool that lets you see and adjust the weight given to each signal produces scores you can actually act on. A tool that hides the weighting gives you a number to glance at, not a system to run outreach on.",
        ],
      },
      {
        heading: "A practical gut check",
        paragraphs: [
          "If your current tool's score has ever surprised you in a way you couldn't explain, that's a sign the scoring logic is a black box rather than a configurable model — worth factoring in the next time you evaluate a lead enrichment tool.",
        ],
      },
    ],
  },
  {
    slug: "hunter-io-vs-self-hosted-email-finders",
    title: "Hunter.io vs Self-Hosted Email Finders: Which Actually Fits Your Workflow",
    description:
      "Hunter.io is fast and simple for one-off lookups. Here's when a self-hosted email finder makes more sense instead.",
    category: "Comparison",
    date: "2026-07-02",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Hunter.io built its reputation on being the fastest way to find a single email address for a single domain. That's genuinely useful for occasional lookups. It's a different question when the task shifts from 'find one email' to 'systematically enrich and verify a growing pipeline every week.'",
        ],
      },
      {
        heading: "Where a lookup tool like Hunter fits well",
        paragraphs: [
          "Ad-hoc research, checking a specific person's email before a warm intro, or low-volume prospecting where a credit-based monthly cap is more than enough. The simplicity is the feature.",
        ],
      },
      {
        heading: "Where it starts to strain",
        list: [
          "Recurring, high-volume enrichment where credit costs scale with pipeline size, not team size",
          "Wanting the raw crawl and verification logic auditable rather than a black-box API response",
          "Needing the enrichment pipeline to run on a schedule against your own lead lists automatically",
        ],
      },
      {
        heading: "The self-hosted tradeoff",
        paragraphs: [
          "A self-hosted email discovery and verification tool trades the convenience of an instant hosted API for full control of the crawling and verification logic, no per-lookup credit cost, and data that never leaves your own server. That's a better fit once the workflow is 'a pipeline running continuously,' not 'a lookup done occasionally.'",
        ],
      },
    ],
  },
  {
    slug: "gdpr-b2b-cold-email-2026",
    title: "GDPR and B2B Cold Email: What's Actually Legal in 2026",
    description:
      "A practical, non-legal-advice overview of how GDPR and similar regulations apply to scraped B2B contact data and cold outreach.",
    category: "Guide",
    date: "2026-07-01",
    readingTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "GDPR doesn't ban B2B cold email outright, but it does require a lawful basis for processing personal data — and a business email tied to a named individual counts as personal data under the regulation, even though it's a work address.",
        ],
      },
      {
        heading: "The 'legitimate interest' basis most B2B outreach relies on",
        paragraphs: [
          "Most legitimate B2B cold outreach in the EU relies on 'legitimate interest' as the lawful basis, which generally requires that the outreach is relevant to the recipient's professional role, that you can identify yourself clearly, and that you provide an easy, honored opt-out.",
        ],
      },
      {
        heading: "Practical requirements this creates",
        list: [
          "Clear sender identification — no disguised or spoofed sending identity",
          "An easy, functioning unsubscribe or opt-out mechanism, honored promptly",
          "Relevance — outreach genuinely tied to the recipient's professional role, not a mass irrelevant blast",
          "A record of where the contact data came from, in case of a data subject access request",
        ],
      },
      {
        heading: "Where scraped data adds extra risk",
        paragraphs: [
          "Bulk-scraped contact lists with no consent trail and no clear opt-out process are the highest-risk pattern under GDPR enforcement, regardless of which tool generated the list. The tool matters less than the process wrapped around how the data is used afterward.",
        ],
      },
      {
        heading: "The honest caveat",
        paragraphs: [
          "This is general information, not legal advice, and enforcement details vary by EU member state and continue to evolve. If cold outreach into the EU is a meaningful part of your go-to-market, a short consult with counsel familiar with GDPR is worth the cost before scaling volume.",
        ],
      },
    ],
  },
  {
    slug: "one-time-payment-vs-subscription-software",
    title: "One-Time Payment vs Subscription Software: The Real Three-Year Math",
    description:
      "Why a higher upfront price on a one-time-purchase tool often beats a 'cheaper' monthly subscription once you run the actual numbers.",
    category: "Guide",
    date: "2026-06-30",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "A $199 one-time purchase looks expensive next to a $29/month subscription — until you multiply the subscription out. $29/month is $1,044 over three years, before a single price increase or seat addition. The framing of 'cheap monthly' versus 'expensive upfront' inverts almost every time you extend the time horizon past a year.",
        ],
      },
      {
        heading: "What subscriptions are actually pricing in",
        paragraphs: [
          "Hosting, ongoing feature development, and support are real costs, and subscription pricing reflects them fairly for tools that need constant vendor maintenance. The comparison only favors one-time pricing when the tool doesn't require that ongoing vendor relationship — for example, software you're comfortable self-hosting and maintaining yourself.",
        ],
      },
      {
        heading: "The seat-multiplier problem",
        paragraphs: [
          "The bigger gap shows up with team size. A per-seat subscription multiplies every month by headcount. A one-time license, especially one without a seat cap, doesn't — the tenth teammate costs the business nothing additional.",
        ],
      },
      {
        heading: "When subscription still wins",
        paragraphs: [
          "If you want zero infrastructure responsibility, guaranteed uptime SLAs, and continuous new features shipped without any effort on your part, a subscription is the more sensible trade even at a higher lifetime cost. One-time-purchase software asks you to take on the maintenance the subscription price was paying someone else to handle.",
        ],
      },
    ],
  },
  {
    slug: "build-b2b-lead-database-without-buying-one",
    title: "How to Build a B2B Lead Database Without Buying One",
    description:
      "A practical breakdown of building your own company and contact database from public sources instead of paying for access to someone else's.",
    category: "Guide",
    date: "2026-06-29",
    readingTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Most B2B lead databases sold today are aggregations of public information — company websites, public directories, job postings, and press releases — repackaged behind a subscription. There's nothing wrong with paying for that convenience, but it's worth knowing the underlying data is mostly public and buildable.",
        ],
      },
      {
        heading: "The core pipeline",
        list: [
          "Company discovery — identifying target companies from directories, industry lists, or your own ICP criteria",
          "Website crawling — pulling public pages (team, about, contact) from each company's own site",
          "Contact extraction — pattern-matching and parsing names, roles, and emails from those pages",
          "Verification — confirming extracted emails are actually deliverable before they enter your pipeline",
          "Scoring — ranking the resulting contacts against your ICP so reps prioritize the right ones first",
        ],
      },
      {
        heading: "Why most teams don't do this themselves",
        paragraphs: [
          "Each step above is straightforward individually, but building and maintaining the crawling, verification, and scoring infrastructure end-to-end takes real engineering time — which is exactly what a paid tool is selling you: the pipeline already built, not data you couldn't otherwise get.",
        ],
      },
      {
        heading: "The middle ground",
        paragraphs: [
          "A self-hosted, source-available tool gives you the built pipeline without the recurring subscription — you're paying once for the engineering work, then running it on infrastructure you control, rather than renting continuous access to someone else's version of the same pipeline.",
        ],
      },
    ],
  },
  {
    slug: "docker-self-hosted-saas-alternatives-2026",
    title: "Docker-Based Self-Hosted SaaS Alternatives Worth Knowing in 2026",
    description:
      "A look at the broader trend of self-hosted, Docker-deployable alternatives to subscription SaaS, and where lead enrichment fits in.",
    category: "Guide",
    date: "2026-06-28",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Self-hosting used to mean a niche audience of sysadmins running their own email or file storage. Docker changed that — a tool that ships as a container is deployable by anyone comfortable running one command, not just infrastructure specialists.",
        ],
      },
      {
        heading: "Why this trend is growing",
        list: [
          "Rising SaaS fatigue as teams add up how many recurring subscriptions they're actually paying for",
          "Increasing comfort with Docker and VPS hosting among smaller technical teams",
          "Data ownership concerns — not wanting sensitive business data (leads, financials, customer records) sitting on a third party's servers indefinitely",
          "One-time-cost pricing being a better fit for cash-conscious early-stage companies",
        ],
      },
      {
        heading: "Where lead enrichment fits into this trend",
        paragraphs: [
          "B2B lead and company data is exactly the kind of sensitive pipeline information teams are increasingly uneasy handing to a third-party SaaS indefinitely — it's your entire prospect list and outreach history. A Docker-deployable, self-hosted enrichment tool applies the same self-hosting logic that's already normalized for tools like analytics, uptime monitoring, and internal dashboards.",
        ],
      },
      {
        heading: "What to check before self-hosting anything",
        list: [
          "Does it ship full source code, or just a container with a closed binary inside",
          "Can it run fully offline from the vendor, or does it still call a hosted API for core functionality",
          "Is there a real one-time cost, or is 'self-hosted' just a wrapper around the same subscription",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}