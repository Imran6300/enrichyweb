// app/for/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/content";
import { personas } from "@/lib/data/personas";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
    title: `Who ${site.name} Is For — ${site.name}`,
    description: `See how ${site.name}'s self-hosted lead discovery and enrichment platform fits agencies, recruiters, sales teams, founders, and consultants.`,
    alternates: { canonical: `${site.domain}/for` },
    robots: { index: true, follow: true },
};

export default function ForIndexPage() {
    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: site.domain },
        { name: "For", url: `${site.domain}/for` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />

            <Header />
            <main className="mx-auto max-w-4xl px-6 py-24">
                <p className="font-mono text-xs uppercase tracking-widest text-teal">Who it&apos;s for</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                    {site.name} for every team tired of renting their pipeline
                </h1>
                <p className="mt-4 max-w-2xl text-muted">
                    The core product is the same for everyone — self-hosted discovery, crawling,
                    enrichment, and scoring. These pages walk through how each audience actually uses it.
                </p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {personas.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/for/${p.slug}`}
                            className="block rounded-lg border border-border bg-surface p-6 transition-colors hover:bg-surface/60"
                        >
                            <p className="font-display text-lg font-semibold text-text">
                                {site.name} for {p.audience}
                            </p>
                            <p className="mt-2 text-sm text-muted">{p.description}</p>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}