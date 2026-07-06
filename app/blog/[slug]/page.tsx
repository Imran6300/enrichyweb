// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/data/content";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — ${site.name}`,
    description: post.description,
    alternates: { canonical: `${site.domain}/blog/${post.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${site.domain}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${site.domain}/blog/${post.slug}`;
  const article = articleJsonLd({
    title: post.title,
    description: post.description,
    date: post.date,
    url,
  });
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: site.domain },
    { name: "Blog", url: `${site.domain}/blog` },
    { name: post.title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Header />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <Link href="/blog" className="text-sm text-muted hover:text-text">
          ← Back to blog
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs text-muted">
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

        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {post.title}
        </h1>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-muted prose-li:text-muted prose-strong:text-text">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
              {section.list && (
                <ul>
                  {section.list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-surface p-6">
          <p className="font-display text-lg font-semibold text-text">
            Want to try {site.name}?
          </p>
          <p className="mt-2 text-muted">
            Self-hosted lead discovery and enrichment, one-time payment, full source code.
          </p>
          <a
            href={site.gumroadUrl}
            className="mt-4 inline-block rounded-md bg-amber px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            Get {site.name} — ${site.price}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}