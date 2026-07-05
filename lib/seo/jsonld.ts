// lib/seo/jsonld.ts
// Structured data generators. Rendered via <script type="application/ld+json">
// in app/page.tsx (Server Component, zero client JS cost).

import { site, faqs } from "@/lib/data/content";

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Linux, Docker",
    description: site.description,
    offers: {
      "@type": "Offer",
      price: site.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: site.gumroadUrl,
    },
    softwareVersion: "1.0",
    url: site.domain,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.domain,
    logo: `${site.domain}/logo.png`,
  };
}

export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.name,
    description: site.description,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    offers: {
      "@type": "Offer",
      price: site.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: site.gumroadUrl,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}