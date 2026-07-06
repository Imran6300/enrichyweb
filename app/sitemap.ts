// app/sitemap.ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/data/content";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/privacy", "/terms", "/contact", "/blog", "/compare/apollo-alternative"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : route === "/blog" ? "weekly" : "yearly",
    priority: route === "" ? 1 : route === "/blog" || route === "/compare/apollo-alternative" ? 0.7 : 0.3,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${site.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}