// app/contact/page.tsx
import type { Metadata } from "next";
import { site } from "@/lib/data/content";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch about ${site.name} — pre-sale questions, support, or licensing.`,
  alternates: { canonical: `${site.domain}/contact` },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-text">Contact</h1>
      <p className="mt-4 text-muted">
        Questions before you buy, need a hand with deployment, or have a licensing question —
        reach out and we&apos;ll get back to you.
      </p>

      <a
        href="mailto:support@enrichly.dev"
        className="mt-8 inline-block rounded-md bg-amber px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
      >
        support@enrichly.dev
      </a>

      <p className="mt-6 text-xs text-muted">
        For setup issues, check the Troubleshooting and Support Guide documents included with your
        purchase first — most questions are answered there.
      </p>
    </main>
  );
}
