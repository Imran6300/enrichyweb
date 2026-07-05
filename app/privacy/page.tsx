// app/privacy/page.tsx
import type { Metadata } from "next";
import { site } from "@/lib/data/content";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} collects, uses, and protects information on this website.`,
  alternates: { canonical: `${site.domain}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl font-semibold text-text">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-muted prose-li:text-muted">
        <h2>What this policy covers</h2>
        <p>
          This policy describes how {site.name} handles information collected through this
          website ({site.domain}). It does not cover the self-hosted software itself, which runs
          entirely on infrastructure you control — we have no access to data processed by your
          own deployment.
        </p>

        <h2>Information we collect</h2>
        <p>
          We collect standard web analytics (pages visited, referrer, device type) and any
          information you voluntarily submit through the contact form, such as your name and
          email address.
        </p>

        <h2>How we use information</h2>
        <p>
          Information is used to respond to inquiries, improve this website, and understand
          traffic patterns. We do not sell personal information to third parties.
        </p>

        <h2>Payment processing</h2>
        <p>
          Purchases are processed by Gumroad. Gumroad&apos;s own privacy policy governs any
          payment or billing information you provide during checkout.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent through the <a href="/contact">contact page</a>.
        </p>
      </div>
    </main>
  );
}
