// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/content";
import { blogPosts } from "@/lib/data/blog";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: `Blog — ${site.name}`,
  description: `Guides on self-hosted lead enrichment, B2B data extraction, and building your own lead pipeline — from the team behind ${site.name}.`,
  alternates: { canonical: `${site.domain}/blog` },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: site.domain },
    { name: "Blog", url: `${site.domain}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Header />
      <main className="mx-auto max-w-4xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">Blog</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Guides on self-hosted lead enrichment
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Practical writing on lead enrichment, self-hosting, and data extraction — no gated
          content, no email wall.
        </p>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-8 transition-colors hover:bg-surface/30"
            >
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="rounded border border-border px-2 py-0.5 font-mono uppercase tracking-wide text-teal">
                  {post.category}
                </span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold text-text">{post.title}</h2>
              <p className="mt-2 text-muted">{post.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}