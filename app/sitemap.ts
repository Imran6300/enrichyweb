// app/sitemap.ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/data/content";
import { blogPosts } from "@/lib/data/blog";
import { comparisons } from "@/lib/data/comparisons";
import { personas } from "@/lib/data/personas";
import { glossaryTerms } from "@/lib/data/glossary";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/privacy", "/terms", "/contact", "/blog", "/compare", "/for", "/glossary"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" ? "weekly" : ["/blog", "/compare", "/for", "/glossary"].includes(route) ? "weekly" : "yearly",
    priority: route === "" ? 1 : ["/blog", "/compare", "/for", "/glossary"].includes(route) ? 0.7 : 0.3,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${site.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const comparisonEntries: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${site.domain}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const personaEntries: MetadataRoute.Sitemap = personas.map((p) => ({
    url: `${site.domain}/for/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const glossaryEntries: MetadataRoute.Sitemap = glossaryTerms.map((g) => ({
    url: `${site.domain}/glossary/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries, ...comparisonEntries, ...personaEntries, ...glossaryEntries];
}