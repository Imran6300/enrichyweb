// components/landing/VideoDemo.tsx
// Uses the native <video> element with controls — zero client JS needed
// for play/pause, which keeps this a pure Server Component.
import { site } from "@/lib/data/content";
import { PlayIcon } from "./icons";

export default function VideoDemo() {
  return (
    <section id="demo" className="scroll-mt-16 border-b border-border py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">See it run</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          A full enrichment run, in 4 minutes
        </h2>

        <div className="relative mx-auto mt-10 aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface">
          <video
            className="h-full w-full object-cover"
            poster="/screenshots/demo-poster.png"
            controls
            preload="none"
          >
            <source src="/demo/enrichly-demo.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber text-bg">
              <PlayIcon />
            </span>
          </div>
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
