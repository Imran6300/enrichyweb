// components/landing/Hero.tsx
import Image from "next/image";
import { hero, site } from "@/lib/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* ambient gradient — pure CSS, no client JS */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(240,169,59,0.14) 0%, rgba(79,209,197,0.06) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:pt-32">
        <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted">
          {hero.eyebrow}
        </p>

        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-6xl">
          {hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
          {hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.gumroadUrl}
            className="w-full rounded-md bg-amber px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 sm:w-auto"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#demo"
            className="w-full rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-colors hover:border-teal/50 sm:w-auto"
          >
            {hero.secondaryCta}
          </a>
        </div>

        {/* Signature element: the refinement bar — raw input transforming into enriched output */}
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 font-mono text-[11px] text-muted">
          <span>raw contact</span>
          <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-border">
            <div className="h-full w-full bg-gradient-to-r from-teal via-amber to-amber" />
          </div>
          <span className="text-amber">enriched lead</span>
        </div>

        {/* Dashboard screenshot placeholder */}
        <div className="relative mx-auto mt-16 max-w-4xl rounded-xl border border-border bg-surface p-2 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-bg">
            <Image
              src="/screenshots/dashboard-placeholder.png"
              alt="Enrichly dashboard showing discovered leads, enrichment status, and score"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
