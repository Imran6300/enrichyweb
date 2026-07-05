// components/landing/FAQ.tsx
// Uses native <details>/<summary> for the accordion — keyboard accessible,
// crawlable by default, and requires zero client-side JavaScript.
import { faqs } from "@/lib/data/content";
import { ChevronIcon } from "./icons";

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 border-b border-border py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-xl border border-border bg-surface">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5 open:pb-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-medium text-text marker:content-none">
                {f.q}
                <ChevronIcon />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
