// components/landing/Pricing.tsx
import { pricing, site } from "@/lib/data/content";
import { CheckIcon } from "./icons";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-surface/30 py-24">
      <div className="mx-auto max-w-md px-6">
        <div className="rounded-2xl border border-amber/30 bg-surface p-8 text-center shadow-2xl shadow-amber/5">
          <p className="font-mono text-xs uppercase tracking-widest text-amber">{pricing.title}</p>
          <p className="mt-3 text-sm text-muted">{pricing.price}</p>

          <ul className="mt-8 space-y-3 text-left">
            {pricing.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-text">
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={site.gumroadUrl}
            className="mt-8 block w-full rounded-md bg-amber px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            {pricing.cta}
          </a>
          <p className="mt-3 font-mono text-[11px] text-muted">Secure checkout via Gumroad</p>
        </div>
      </div>
    </section>
  );
}
