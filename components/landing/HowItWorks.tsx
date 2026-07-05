// components/landing/HowItWorks.tsx
import { steps } from "@/lib/data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-border py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-amber">Pipeline</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            How It Works
          </h2>
        </div>

        <ol className="mt-14 space-y-0">
          {steps.map((s, i) => (
            <li key={s.number} className="relative flex gap-6 pb-10 last:pb-0">
              {i !== steps.length - 1 && (
                <span
                  className="absolute left-[19px] top-10 h-full w-px bg-gradient-to-b from-amber/60 to-border"
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs text-amber">
                {s.number}
              </span>
              <div className="pt-1.5">
                <h3 className="font-display text-lg font-medium text-text">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
