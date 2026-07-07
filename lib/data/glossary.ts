// lib/data/glossary.ts
// Single source of truth for /glossary/[slug] definitional pages. These
// target "what is X" long-tail searches and are the cheapest pSEO content
// to produce and maintain.

export interface GlossaryTerm {
  slug: string;
  term: string;
  metaTitle: string;
  description: string;
  shortDefinition: string; // 1-2 sentences, used for the featured-snippet-style answer
  body: { heading?: string; paragraphs: string[] }[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "lead-enrichment",
    term: "Lead Enrichment",
    metaTitle: "What Is Lead Enrichment? Definition, Process, and Tools",
    description:
      "Lead enrichment is the process of adding verified, structured data to a raw contact or company record. Here's how it actually works.",
    shortDefinition:
      "Lead enrichment is the process of taking a raw contact or company record and adding verified, structured data to it — such as a confirmed email, company size, industry, or role — so it becomes usable for outreach and prioritization.",
    body: [
      {
        paragraphs: [
          "A raw lead is often just a company name or a partial contact. Enrichment fills in the gaps: verified emails, firmographic details like industry and headcount, and signals about whether the lead fits your ideal customer profile.",
        ],
      },
      {
        heading: "The typical enrichment pipeline",
        paragraphs: [
          "Discovery identifies target companies. Crawling visits each company's public site for structured signals. Extraction pulls names, roles, and emails from what was crawled. Verification confirms the extracted email is actually deliverable. Scoring ranks the result against your ICP.",
        ],
      },
      {
        heading: "Why it matters for outreach",
        paragraphs: [
          "Reaching out to an unenriched, unverified contact wastes the attempt if the email bounces or the person isn't actually a decision-maker. Enrichment turns a raw list into one a sales or growth team can act on with reasonable confidence.",
        ],
      },
    ],
  },
  {
    slug: "email-verification",
    term: "Email Verification",
    metaTitle: "What Is Email Verification? How It Works and Why It Matters",
    description:
      "Email verification confirms whether an email address is real and deliverable before you send to it. Here's how the underlying methods differ.",
    shortDefinition:
      "Email verification is the process of checking whether an email address is real and likely to accept mail, before you actually send to it — reducing bounce rates and protecting sender reputation.",
    body: [
      {
        paragraphs: [
          "Sending to an invalid or non-existent email address hurts your sender reputation and wastes an outreach attempt. Verification catches this before you send, not after a bounce.",
        ],
      },
      {
        heading: "Common verification methods",
        paragraphs: [
          "Syntax checking confirms the address is formatted correctly. Domain/MX record checking confirms the domain can receive mail at all. SMTP handshake verification connects to the mail server and asks whether the specific mailbox exists, without actually sending anything. Pattern matching infers likely addresses from a known company email format, which is faster but less certain than a direct handshake.",
        ],
      },
      {
        heading: "Catch-all domains are the hard case",
        paragraphs: [
          "Some mail servers are configured to accept all addresses at a domain regardless of whether the mailbox exists, which defeats a straightforward SMTP check. Good verification systems flag catch-all domains separately rather than reporting a false positive.",
        ],
      },
    ],
  },
  {
    slug: "lead-scoring",
    term: "Lead Scoring",
    metaTitle: "What Is Lead Scoring? How B2B Lead Scores Are Calculated",
    description:
      "Lead scoring ranks prospects by fit and reachability using weighted signals. Here's what actually goes into a typical score.",
    shortDefinition:
      "Lead scoring is a method of ranking prospects by assigning a numeric value based on how well they match your ideal customer profile and how reachable they are, so a sales team can prioritize the strongest leads first.",
    body: [
      {
        paragraphs: [
          "Without scoring, a sales team works through a lead list in whatever order it was exported, which usually isn't the order that maximizes results. Scoring surfaces the strongest matches first.",
        ],
      },
      {
        heading: "Common inputs to a score",
        paragraphs: [
          "Firmographic fit (industry, company size, location matched against your ICP), contact completeness (do you have a verified email and a real role title), and reachability confidence (how certain the verification step is that the contact is real) are the three most common inputs, often combined with configurable weights.",
        ],
      },
      {
        heading: "Configurable versus black-box scoring",
        paragraphs: [
          "Some tools expose the scoring weights so you can tune them for your specific product; others hide the calculation entirely. A visible, adjustable model is generally more useful because you can correct it when it disagrees with what your team is actually seeing convert.",
        ],
      },
    ],
  },
  {
    slug: "firmographic-data",
    term: "Firmographic Data",
    metaTitle: "What Is Firmographic Data? Definition and Common Attributes",
    description:
      "Firmographic data describes characteristics of a company, similar to how demographic data describes an individual. Here's what it typically includes.",
    shortDefinition:
      "Firmographic data is a set of characteristics used to describe and segment companies — such as industry, employee count, revenue, and location — analogous to how demographic data describes individual people.",
    body: [
      {
        paragraphs: [
          "B2B targeting relies heavily on firmographic data because company-level characteristics predict fit far better than any individual contact's personal details.",
        ],
      },
      {
        heading: "Common firmographic attributes",
        paragraphs: [
          "Industry or vertical, employee headcount, estimated revenue, geographic location, company age, and technology stack are the attributes most commonly used to define an ideal customer profile and filter a target list down to it.",
        ],
      },
      {
        heading: "Where firmographic data comes from",
        paragraphs: [
          "Much of it is derivable from a company's own public website (team pages, about pages, job postings) plus public business registries — which is why crawling a company's own domain is a core part of most enrichment pipelines rather than relying solely on a pre-built database.",
        ],
      },
    ],
  },
  {
    slug: "cold-email-deliverability",
    term: "Cold Email Deliverability",
    metaTitle: "What Is Cold Email Deliverability? Key Factors Explained",
    description:
      "Cold email deliverability is the likelihood your outreach lands in an inbox rather than spam. Here's what actually affects it.",
    shortDefinition:
      "Cold email deliverability refers to whether an outbound email actually reaches the recipient's inbox, as opposed to being filtered into spam or blocked entirely — determined by sender reputation, list quality, and technical email authentication.",
    body: [
      {
        paragraphs: [
          "A technically well-crafted email is worthless if it never reaches the inbox. Deliverability is a separate concern from copywriting, driven mostly by sender trust signals accumulated over time.",
        ],
      },
      {
        heading: "The biggest factors",
        paragraphs: [
          "List quality (bounce rate from unverified emails directly damages sender reputation), authentication records (SPF, DKIM, and DMARC configured correctly on your sending domain), sending volume and pacing (sudden spikes in volume look suspicious to mail providers), and recipient engagement (opens and replies signal legitimacy, while being marked as spam does lasting damage).",
        ],
      },
      {
        heading: "Why verified lists matter here specifically",
        paragraphs: [
          "Since bounce rate is one of the most damaging signals to sender reputation, verifying emails before sending isn't just about the individual send working — it protects your ability to reach every future recipient's inbox as well.",
        ],
      },
    ],
  },
  {
    slug: "b2b-web-scraping-legality",
    term: "B2B Web Scraping (Legality)",
    metaTitle: "Is B2B Web Scraping Legal? What the Law Actually Says",
    description:
      "A practical overview of the legal landscape around scraping public B2B business data — what's generally permitted and what carries risk.",
    shortDefinition:
      "Scraping publicly accessible B2B business information (like a company's own published contact page) is generally lower legal risk than scraping personal, gated, or copyrighted content — though the specifics depend on jurisdiction, the target site's terms of service, and how the data is used afterward.",
    body: [
      {
        paragraphs: [
          "This is general information, not legal advice — scraping law varies by jurisdiction and is actively evolving through ongoing court cases.",
        ],
      },
      {
        heading: "What tends to be lower risk",
        paragraphs: [
          "Respectfully crawling public company websites for publicly published business contact details, at a reasonable request rate, without bypassing login walls or CAPTCHAs, generally falls within widely-practiced business data collection.",
        ],
      },
      {
        heading: "What raises real risk",
        paragraphs: [
          "Bypassing access controls or paywalls, ignoring a site's robots.txt at high volume, scraping personal (non-business) data without a lawful basis, and reselling scraped data in ways that conflict with a target site's terms of service are the patterns most associated with legal exposure.",
        ],
      },
      {
        heading: "The honest bottom line",
        paragraphs: [
          "For a large-scale commercial operation built around scraping, a conversation with a lawyer familiar with your jurisdiction and the relevant case law is worth having before scaling volume significantly.",
        ],
      },
    ],
  },
  {
    slug: "icp-ideal-customer-profile",
    term: "ICP (Ideal Customer Profile)",
    metaTitle: "What Is an ICP? Ideal Customer Profile Explained",
    description:
      "An ideal customer profile (ICP) defines the type of company most likely to buy and succeed with your product. Here's how it's built and used.",
    shortDefinition:
      "An Ideal Customer Profile (ICP) is a description of the company type most likely to buy your product and get real value from it, typically defined by firmographic attributes like industry, size, and specific pain points.",
    body: [
      {
        paragraphs: [
          "Without a defined ICP, outreach targets whoever's easiest to find rather than whoever's most likely to convert and stay a customer — which shows up later as high churn or low close rates.",
        ],
      },
      {
        heading: "What typically defines an ICP",
        paragraphs: [
          "Industry or vertical, company size range, geographic market, specific operational pain points your product solves, and often a technographic signal (using or lacking a particular tool) are the most common building blocks of an ICP definition.",
        ],
      },
      {
        heading: "ICP versus buyer persona",
        paragraphs: [
          "An ICP describes the company; a buyer persona describes the individual person within that company who makes or influences the buying decision. Both are usually defined together, since targeting the right company without reaching the right person inside it still fails.",
        ],
      },
    ],
  },
  {
    slug: "data-appending",
    term: "Data Appending",
    metaTitle: "What Is Data Appending? Definition and Common Use Cases",
    description:
      "Data appending adds missing fields to an existing record you already have, rather than building a new record from scratch. Here's how it works.",
    shortDefinition:
      "Data appending is the process of adding missing information to a record you already own — for example, adding a verified email or company size to an existing contact you collected some other way — as distinct from discovering an entirely new lead.",
    body: [
      {
        paragraphs: [
          "Appending assumes you already have a starting record (from a form fill, event signup, or CRM import) and are filling gaps in it, rather than the discovery step of finding the record in the first place.",
        ],
      },
      {
        heading: "Common appending scenarios",
        paragraphs: [
          "Adding a verified business email to a contact who only gave a name and company. Adding firmographic details (industry, size) to an account created from a partial signup. Refreshing a stale contact's current job title before a re-engagement campaign.",
        ],
      },
      {
        heading: "Appending versus enrichment",
        paragraphs: [
          "The terms are often used interchangeably in practice, but appending specifically implies working with a record you already have, while enrichment is the broader term covering both new lead discovery and adding data to existing records.",
        ],
      },
    ],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((g) => g.slug === slug);
}