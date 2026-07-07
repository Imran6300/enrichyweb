// components/landing/Footer.tsx
import Link from "next/link";
import { site } from "@/lib/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <nav className="flex items-center gap-6" aria-label="Footer">
          <Link href="/blog" className="hover:text-text">Blog</Link>
          <Link href="/compare" className="hover:text-text">Compare</Link>
          <Link href="/privacy" className="hover:text-text">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-text">Terms</Link>
          <Link href="/contact" className="hover:text-text">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}