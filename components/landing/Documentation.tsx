// components/landing/Documentation.tsx
import { documentation } from "@/lib/data/content";
import { FileTypeIcon } from "./icons";

export default function Documentation() {
  return (
    <section id="documentation" className="scroll-mt-16 border-b border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">Included documentation</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            19 documents. Nothing left unexplained.
          </h2>
          <p className="mt-4 text-sm text-muted">
            Every purchase ships with a full documentation set, so setup and customization never depend on guesswork.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentation.map((doc) => (
            <div key={doc.title} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex items-start justify-between gap-3">
                <FileTypeIcon type={doc.type} />
                <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
                  {doc.type}
                </span>
              </div>
              <h3 className="mt-4 font-display text-sm font-medium text-text">{doc.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{doc.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
