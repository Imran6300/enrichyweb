// app/sitemap.ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/data/content";
import { blogPosts } from "@/lib/data/blog";
import { comparisons } from "@/lib/data/comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/privacy", "/terms", "/contact", "/blog", "/compare"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : route === "/blog" || route === "/compare" ? "weekly" : "yearly",
    priority: route === "" ? 1 : route === "/blog" || route === "/compare" ? 0.7 : 0.3,
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

  return [...staticEntries, ...blogEntries, ...comparisonEntries];
}