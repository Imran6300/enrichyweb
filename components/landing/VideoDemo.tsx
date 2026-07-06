// components/landing/VideoDemo.tsx
import { site } from "@/lib/data/content";

// Replace YOUR_VIDEO_ID with the ID from your unlisted YouTube video URL
// e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID is "dQw4w9WgXcQ"
const YOUTUBE_VIDEO_ID = "1NCyps2bgTk";

export default function VideoDemo() {
  return (
    <section id="demo" className="scroll-mt-16 border-b border-border py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">See it run</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          A full enrichment run, in 4 minutes
        </h2>

        <div className="relative mx-auto mt-10 aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
            title="Enrichly product demo"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <a
          href={site.gumroadUrl}
          className="mt-8 inline-block rounded-md bg-amber px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Buy Now — Lifetime Access
        </a>
      </div>
    </section>
  );
}