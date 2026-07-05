// app/terms/page.tsx
import type { Metadata } from "next";
import { site } from "@/lib/data/content";

export const metadata: Metadata = {
  title: `Terms of Service — ${site.name}`,
  description: `Terms governing the purchase and use of ${site.name}.`,
  alternates: { canonical: `${site.domain}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl font-semibold text-text">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-muted prose-li:text-muted">
        <h2>License</h2>
        <p>
          Purchasing {site.name} grants you a license to use, modify, and deploy the source code
          as described in the license file included with your purchase. The exact terms of that
          license — including any restrictions on resale or white-labeling — govern over this
          summary.
        </p>

        <h2>One-time purchase</h2>
        <p>
          {site.name} is sold as a one-time purchase through Gumroad. Payment terms, refund
          eligibility, and receipts are handled by Gumroad&apos;s own terms of service.
        </p>

        <h2>No warranty</h2>
        <p>
          The software is provided &quot;as is,&quot; without warranty of any kind. You are
          responsible for your own deployment, hosting, and data handling once the source code is
          in your possession.
        </p>

        <h2>Support</h2>
        <p>
          Support is provided on a best-effort basis as described in the included Support Guide
          document.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          These terms may be updated from time to time. Continued use of the website after changes
          constitutes acceptance of the revised terms.
        </p>
      </div>
    </main>
  );
}
