// components/landing/Header.tsx
import Link from "next/link";
import { nav, site } from "@/lib/data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-text">
          <span className="inline-block h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.gumroadUrl}
          className="rounded-md bg-amber px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Buy Now
        </a>
      </div>
    </header>
  );
}
