// app/compare/apollo-alternative/page.tsx
import type { Metadata } from "next";
import { site } from "@/lib/data/content";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const url = `${site.domain}/compare/apollo-alternative`;
const title = `${site.name} vs Apollo.io: Self-Hosted vs SaaS Lead Enrichment`;
const description =
  "A direct comparison of self-hosted lead enrichment (Enrichly) against SaaS platforms like Apollo.io — pricing model, data ownership, and who each approach actually fits.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const rows: { label: string; enrichly: string; saas: string }[] = [
  { label: "Pricing model", enrichly: "One-time payment", saas: "Per-seat, monthly or annual subscription" },
  { label: "Where your data lives", enrichly: "Your own infrastructure", saas: "Vendor's cloud" },
  { label: "Source code access", enrichly: "Full source code included", saas: "Closed source" },
  { label: "Seat limits", enrichly: "No per-seat cost, unlimited internal use", saas: "Cost scales per teammate added" },
  { label: "Customization", enrichly: "Editable scoring logic and pipeline", saas: "Fixed feature set per vendor roadmap" },
  { label: "Setup effort", enrichly: "Self-hosted deploy (Docker)", saas: "Sign up and go" },
  { label: "Support model", enrichly: "Documentation + community", saas: "Vendor support included in subscription" },
];

export default function ApolloAlternativePage() {
  const article = articleJsonLd({ title, description, date: "2026-07-06", url });
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: site.domain },
    { name: "Compare", url: `${site.domain}/compare` },
    { name: "Apollo Alternative", url },
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
        <p className="font-mono text-xs uppercase tracking-widest text-teal">Comparison</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {site.name} vs Apollo.io
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Apollo.io and similar SaaS platforms are solid tools — this isn&apos;t about which one
          is objectively &quot;better.&quot; It&apos;s about two fundamentally different models for
          getting the same job done, and which one fits how your team actually operates.
        </p>

        <div className="mt-12 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 font-display text-text">Factor</th>
                <th className="px-4 py-3 font-display text-amber">{site.name}</th>
                <th className="px-4 py-3 font-display text-text">Typical SaaS platform</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-3 font-medium text-text">{row.label}</td>
                  <td className="px-4 py-3 text-muted">{row.enrichly}</td>
                  <td className="px-4 py-3 text-muted">{row.saas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          &quot;Typical SaaS platform&quot; describes common patterns across per-seat lead
          enrichment tools generally, not a specific vendor&apos;s current pricing — always check
          a vendor&apos;s own pricing page for their live rates.
        </p>

        <div className="prose prose-invert mt-12 max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-muted prose-li:text-muted prose-strong:text-text">
          <h2>When a SaaS platform is the better fit</h2>
          <p>
            If your team wants zero infrastructure responsibility, needs guaranteed uptime SLAs,
            or relies heavily on vendor support and onboarding, a managed platform is the more
            sensible choice. You&apos;re paying for someone else to run and maintain everything,
            and that has real value.
          </p>

          <h2>When {site.name} is the better fit</h2>
          <p>
            If you&apos;re comfortable running a Docker container, want your lead data to never
            leave infrastructure you control, or you&apos;ve simply done the math on what a
            per-seat tool costs your team over two or three years — a one-time payment with full
            source code access removes the recurring cost entirely, and removes the dependency on
            a vendor staying in business or keeping their pricing stable.
          </p>

          <h2>The honest tradeoff</h2>
          <p>
            Self-hosting means you own the uptime, the updates, and the infrastructure. That&apos;s
            a real cost — just a different kind than a monthly invoice. For teams who value control
            and predictable one-time pricing over hands-off convenience, that tradeoff is usually
            worth it.
          </p>
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