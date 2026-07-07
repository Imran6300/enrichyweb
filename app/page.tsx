// app/page.tsx
import type { Metadata } from "next";
import { site } from "@/lib/data/content";
import {
  softwareApplicationJsonLd,
  organizationJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo/jsonld";

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Documentation from "@/components/landing/Documentation";
import VideoDemo from "@/components/landing/VideoDemo";
import Screenshots from "@/components/landing/Screenshots";
import WhoIsItFor from "@/components/landing/WhoIsItFor";
import TechStack from "@/components/landing/TechStack";
import FAQ from "@/components/landing/FAQ";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Enrichly — Self-Hosted Apollo Alternative for B2B Lead Enrichment",
  description:
    "Enrichly is a self-hosted B2B lead discovery and enrichment platform. Discover companies, crawl websites, extract verified business emails, score leads, and export CSVs — no subscription, full source code, one-time payment.",
  alternates: {
    canonical: site.domain,
  },
  openGraph: {
    title: "Enrichly — Self-Hosted Apollo Alternative",
    description:
      "Discover, crawl, and enrich B2B leads on your own infrastructure. Full source code, lifetime access, no per-seat pricing.",
    url: site.domain,
    siteName: site.name,
    images: [{ url: `${site.domain}/og-image.png`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrichly — Self-Hosted Apollo Alternative",
    description:
      "Self-hosted B2B lead discovery, website crawling, email extraction, and lead scoring. One-time payment, full source code.",
    images: [`${site.domain}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: site.domain }]);

  return (
    <>
      {/* Structured data — rendered server-side, no client JS cost */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <HowItWorks />
        <Documentation />
        <VideoDemo />
        <Screenshots />
        <WhoIsItFor />
        <TechStack />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}