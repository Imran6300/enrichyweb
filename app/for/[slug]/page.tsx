// app/for/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/data/content";
import { personas, getPersonaBySlug } from "@/lib/data/personas";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export function generateStaticParams() {
    return personas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const persona = getPersonaBySlug(slug);
    if (!persona) return {};

    const url = `${site.domain}/for/${persona.slug}`;

    return {
        title: persona.metaTitle,
        description: persona.description,
        alternates: { canonical: url },
        robots: { index: true, follow: true },
        openGraph: {
            title: persona.metaTitle,
            description: persona.description,
            url,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: persona.metaTitle,
            description: persona.description,
        },
    };
}

export default async function PersonaPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const persona = getPersonaBySlug(slug);
    if (!persona) notFound();

    const url = `${site.domain}/for/${persona.slug}`;
    const breadcrumb = breadcrumbJsonLd([
        { name: "Home", url: site.domain },
        { name: "For", url: `${site.domain}/for` },
        { name: persona.audience, url },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />

            <Header />
            <main className="mx-auto max-w-4xl px-6 py-24">
                <Link href="/for" className="text-sm text-muted hover:text-text">
                    ← All audiences
                </Link>

                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-teal">
                    For {persona.audience}
                </p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                    {persona.headline}
                </h1>
                <p className="mt-4 max-w-2xl text-muted">{persona.intro}</p>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {persona.painPoints.map((p) => (
                        <div key={p.title} className="rounded-xl border border-border bg-surface p-6">
                            <h3 className="font-display text-base font-medium text-text">{p.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-invert mt-12 max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-muted prose-li:text-muted prose-strong:text-text">
                    <h2>How {site.name} helps {persona.audience.toLowerCase()}</h2>
                    <ul>
                        {persona.howEnrichlyHelps.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                    <p>{persona.closingNote}</p>
                </div>

                <div className="mt-16 rounded-lg border border-border bg-surface p-6">
                    <p className="font-display text-lg font-semibold text-text">
                        See {site.name} for {persona.audience.toLowerCase()}
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