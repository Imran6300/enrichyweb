// app/compare/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/content";
import { comparisons } from "@/lib/data/comparisons";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
    title: `Compare ${site.name} to Apollo, Clearbit, ZoomInfo & More — ${site.name}`,
    description: `See how ${site.name}'s self-hosted, one-time-payment model compares to Apollo.io, Clearbit, Hunter.io, ZoomInfo, and other lead enrichment platforms.`,
    alternates: { canonical: `${site.domain}/compare` },
    robots: { index: true, follow: true },
};

export default function CompareIndexPage() {
    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: site.domain },
        { name: "Compare", url: `${site.domain}/compare` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />

            <Header />
            <main className="mx-auto max-w-4xl px-6 py-24">
                <p className="font-mono text-xs uppercase tracking-widest text-teal">Compare</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                    {site.name} vs the rest of the market
                </h1>
                <p className="mt-4 max-w-2xl text-muted">
                    Every platform below is a genuinely capable tool. These pages walk through the actual
                    tradeoff — self-hosted and one-time payment versus hosted SaaS and subscription — so you
                    can pick based on how your team actually works, not marketing claims.
                </p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {comparisons.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/compare/${c.slug}`}
                            className="block rounded-lg border border-border bg-surface p-6 transition-colors hover:bg-surface/60"
                        >
                            <p className="font-display text-lg font-semibold text-text">
                                {site.name} vs {c.competitorName}
                            </p>
                            <p className="mt-2 text-sm text-muted">{c.description}</p>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}