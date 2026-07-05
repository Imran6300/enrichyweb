// components/landing/icons.tsx
// Minimal hand-rolled SVG icons — avoids pulling in an icon library for a
// handful of glyphs, keeping bundle size down per the performance brief.

export function FileTypeIcon({ type }: { type: string }) {
  const color =
    type === "Markdown" ? "text-teal" : type === "CSV" ? "text-amber" : "text-muted";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-8 w-8 ${color}`}
      aria-hidden="true"
    >
      <path
        d="M6 2h8l4 4v16H6V2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 2v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 13h6M9 16.5h6M9 9.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-amber" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
