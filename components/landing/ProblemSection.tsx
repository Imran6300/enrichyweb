// components/landing/ProblemSection.tsx
import { problems } from "@/lib/data/content";

export default function ProblemSection() {
  return (
    <section className="border-b border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">The problem</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Lead enrichment shouldn&apos;t be a recurring tax
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {problems.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-medium text-text">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
