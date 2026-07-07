// app/glossary/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/data/content";
import { glossaryTerms, getGlossaryTermBySlug } from "@/lib/data/glossary";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export function generateStaticParams() {
    return glossaryTerms.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const term = getGlossaryTermBySlug(slug);
    if (!term) return {};

    const url = `${site.domain}/glossary/${term.slug}`;

    return {
        title: term.metaTitle,
        description: term.description,
        alternates: { canonical: url },
        robots: { index: true, follow: true },
        openGraph: {
            title: term.metaTitle,
            description: term.description,
            url,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: term.metaTitle,
            description: term.description,
        },
    };
}

export default async function GlossaryTermPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const term = getGlossaryTermBySlug(slug);
    if (!term) notFound();

    const url = `${site.domain}/glossary/${term.slug}`;
    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: site.domain },
        { name: "Glossary", url: `${site.domain}/glossary` },
        { name: term.term, url },
    ]);

    // DefinedTerm schema — a distinct, glossary-specific schema type that gives
    // Google a direct structured answer for "what is X" queries.
    const definedTermJsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: term.term,
        description: term.shortDefinition,
        url,
        inDefinedTermSet: `${site.domain}/glossary`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />

            <Header />
            <main className="mx-auto max-w-3xl px-6 py-24">
                <Link href="/glossary" className="text-sm text-muted hover:text-text">
                    ← Glossary
                </Link>

                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-teal">Glossary</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                    {term.term}
                </h1>

                {/* Short, direct answer up top — this is what featured snippets pull from */}
                <p className="mt-6 rounded-lg border border-border bg-surface p-5 text-muted">
                    {term.shortDefinition}
                </p>

                <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-muted prose-li:text-muted prose-strong:text-text">
                    {term.body.map((section, i) => (
                        <div key={i}>
                            {section.heading && <h2>{section.heading}</h2>}
                            {section.paragraphs.map((p, j) => (
                                <p key={j}>{p}</p>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-lg border border-border bg-surface p-6">
                    <p className="font-display text-lg font-semibold text-text">
                        See {site.name} put this into practice
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