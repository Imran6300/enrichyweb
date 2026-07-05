// components/landing/TechStack.tsx
import { techStack } from "@/lib/data/content";

export default function TechStack() {
  return (
    <section className="border-b border-border bg-surface/30 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-amber">Under the hood</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          A stack you already know
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
