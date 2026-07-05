// components/landing/Screenshots.tsx
import Image from "next/image";

const screenshots = [
  { src: "/screenshots/discovery.png", alt: "Company discovery search results in Enrichly" },
  { src: "/screenshots/crawl-status.png", alt: "Website crawl progress and status view" },
  { src: "/screenshots/lead-scoring.png", alt: "Lead scoring breakdown for an enriched company" },
  { src: "/screenshots/csv-export.png", alt: "CSV export screen with deduplicated lead list" },
];

export default function Screenshots() {
  return (
    <section className="border-b border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-amber">Inside the dashboard</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Every step of the pipeline, visible
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {screenshots.map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-bg"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
