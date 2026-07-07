// app/compare/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/data/content";
import { comparisons, getComparisonBySlug } from "@/lib/data/comparisons";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export function generateStaticParams() {
    return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const comparison = getComparisonBySlug(slug);
    if (!comparison) return {};

    const url = `${site.domain}/compare/${comparison.slug}`;

    return {
        title: comparison.metaTitle,
        description: comparison.description,
        alternates: { canonical: url },
        robots: { index: true, follow: true },
        openGraph: {
            title: comparison.metaTitle,
            description: comparison.description,
            url,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: comparison.metaTitle,
            description: comparison.description,
        },
    };
}

export default async function ComparisonPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const comparison = getComparisonBySlug(slug);
    if (!comparison) notFound();

    const url = `${site.domain}/compare/${comparison.slug}`;
    const article = articleJsonLd({
        title: comparison.metaTitle,
        description: comparison.description,
        date: "2026-07-07",
        url,
    });
    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: site.domain },
        { name: "Compare", url: `${site.domain}/compare` },
        { name: comparison.competitorName, url },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />

            <Header />
            <main className="mx-auto max-w-4xl px-6 py-24">
                <Link href="/compare" className="text-sm text-muted hover:text-text">
                    ← All comparisons
                </Link>

                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-teal">Comparison</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                    {site.name} vs {comparison.competitorName}
                </h1>
                <p className="mt-4 max-w-2xl text-muted">{comparison.intro}</p>

                <div className="mt-12 overflow-x-auto rounded-lg border border-border">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-border bg-surface">
                                <th className="px-4 py-3 font-display text-text">Factor</th>
                                <th className="px-4 py-3 font-display text-amber">{site.name}</th>
                                <th className="px-4 py-3 font-display text-text">{comparison.competitorName}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {comparison.rows.map((row) => (
                                <tr key={row.label}>
                                    <td className="px-4 py-3 font-medium text-text">{row.label}</td>
                                    <td className="px-4 py-3 text-muted">{row.enrichly}</td>
                                    <td className="px-4 py-3 text-muted">{row.competitor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-3 text-xs text-muted">
                    Details reflect {comparison.competitorName}&apos;s commonly known pricing and product
                    patterns as of 2026 — always check their current pricing page for live rates, since
                    SaaS pricing changes frequently.
                </p>

                <div className="prose prose-invert mt-12 max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-muted prose-li:text-muted prose-strong:text-text">
                    <h2>When {comparison.competitorName} is the better fit</h2>
                    <p>{comparison.whenCompetitorBetter}</p>

                    <h2>When {site.name} is the better fit</h2>
                    <p>{comparison.whenEnrichlyBetter}</p>

                    <h2>The honest tradeoff</h2>
                    <p>{comparison.tradeoff}</p>
                </div>

                <div className="mt-16 rounded-lg border border-border bg-surface p-6">
                    <p className="font-display text-lg font-semibold text-text">
                        See {site.name} for yourself
                    </p>
                    <p className="mt-2 text-muted">
                        Self-hosted lead discovery and enrichment, one-time payment, full source code.
                    </p>
                    <a
                        href={site.gumroadUrl}
                        className="mt-4 inline-block rounded-md bg-amber px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                    >
                        Get {site.name} — ${site.price}
                    </a>
                </div>
            </main>
            <Footer />
        </>
    );
}