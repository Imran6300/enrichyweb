// components/landing/WhoIsItFor.tsx
import { audiences } from "@/lib/data/content";

export default function WhoIsItFor() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">Who it&apos;s for</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Built for anyone tired of renting their pipeline
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-medium text-text">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
