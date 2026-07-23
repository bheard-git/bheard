import type { MetadataRoute } from "next";
import { listPublishedBlogPosts } from "@/lib/services/blog.service";
import { listPublishedStories } from "@/lib/services/stories.service";
import { getSiteUrl } from "@/lib/seo/site";

export const dynamic = "force-dynamic";

const STATIC_PATHS = [
  "",
  "/about",
  "/contact",
  "/brand-solutions",
  "/tech-solutions",
  "/services/tech-solutions/ai-chatbots-agents",
  "/industries",
  "/blog",
  "/work",
  "/careers",
  "/privacy-policy",
  "/terms-and-conditions",
  "/sitemap",
] as const;

function asDate(value: unknown): Date | undefined {
  if (value == null) return undefined;
  const d = value instanceof Date ? value : new Date(String(value));
  return Number.isNaN(d.getTime()) ? undefined : d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const now = new Date();
  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();

  const setEntry = (path: string, partial: Omit<MetadataRoute.Sitemap[number], "url">) => {
    const normalized = path === "" ? "" : path.startsWith("/") ? path : `/${path}`;
    const url = `${base}${normalized}`;
    byUrl.set(url, { url, ...partial });
  };

  for (const seg of STATIC_PATHS) {
    setEntry(seg, {
      lastModified: now,
      changeFrequency: seg === "" ? "weekly" : "monthly",
      priority: seg === "" ? 1 : 0.75,
    });
  }

  try {
    const blogRows = await listPublishedBlogPosts();
    for (const post of blogRows) {
      const lastModified = asDate(post.updatedAt) ?? asDate(post.publishedAt) ?? now;
      setEntry(`/blog/${post.slug}`, {
        lastModified,
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }
  } catch (err) {
    console.warn("[sitemap] skipping blog URLs:", err instanceof Error ? err.message : err);
  }

  try {
    const storyRows = await listPublishedStories();
    for (const row of storyRows) {
      const r = row as { slug?: string; updatedAt?: unknown };
      if (!r.slug) continue;
      const lastModified = asDate(r.updatedAt) ?? now;
      setEntry(`/work/${r.slug}`, {
        lastModified,
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }
  } catch (err) {
    console.warn("[sitemap] skipping story URLs:", err instanceof Error ? err.message : err);
  }

  return Array.from(byUrl.values());
}
