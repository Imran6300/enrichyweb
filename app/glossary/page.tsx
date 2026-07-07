// app/glossary/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/content";
import { glossaryTerms } from "@/lib/data/glossary";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
    title: `B2B Lead Enrichment Glossary — ${site.name}`,
    description: `Plain-language definitions of common B2B lead enrichment, email verification, and sales prospecting terms.`,
    alternates: { canonical: `${site.domain}/glossary` },
    robots: { index: true, follow: true },
};

export default function GlossaryIndexPage() {
    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: site.domain },
        { name: "Glossary", url: `${site.domain}/glossary` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />

            <Header />
            <main className="mx-auto max-w-3xl px-6 py-24">
                <p className="font-mono text-xs uppercase tracking-widest text-teal">Glossary</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                    B2B lead enrichment glossary
                </h1>
                <p className="mt-4 max-w-2xl text-muted">
                    Plain-language definitions for the terms that come up constantly in B2B prospecting,
                    lead enrichment, and email outreach.
                </p>

                <div className="mt-12 divide-y divide-border rounded-xl border border-border bg-surface">
                    {glossaryTerms.map((g) => (
                        <Link
                            key={g.slug}
                            href={`/glossary/${g.slug}`}
                            className="block px-6 py-5 transition-colors hover:bg-surface/60"
                        >
                            <p className="font-display text-base font-medium text-text">{g.term}</p>
                            <p className="mt-1.5 text-sm text-muted">{g.shortDefinition}</p>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}