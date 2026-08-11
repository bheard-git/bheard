/**
 * Canonical site origin for sitemap, robots, and metadata.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://bheard.in).
 *
 * NOTE: VERCEL_URL is intentionally NOT used as a fallback — it resolves to
 * the ephemeral preview deployment subdomain, which would set the wrong
 * canonical URL in robots.txt and sitemap.xml and confuse AI crawlers.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://bheard.in";
  return raw.replace(/\/+$/, "");
}

/**
 * Whether this deployment should be indexed by search and AI crawlers.
 * Preview/staging hosts (e.g. *.vercel.app) are excluded unless explicitly overridden.
 */
export function isIndexableDeployment(): boolean {
  const override = process.env.NEXT_PUBLIC_INDEXABLE?.trim().toLowerCase();
  if (override === "true") return true;
  if (override === "false") return false;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";
  if (siteUrl) {
    return siteUrl.includes("bheard.in") && !siteUrl.includes("vercel.app");
  }

  if (process.env.VERCEL_URL?.includes("vercel.app")) return false;
  return process.env.NODE_ENV === "production";
}


// src/lib/seo/revalidateBlog.ts

import { revalidatePath } from "next/cache";

export function revalidateBlogPaths(
  slug: string,
  previousSlug?: string,
) {
  // Blog listing
  revalidatePath("/blog");

  // Current/new blog URL
  revalidatePath(`/blog/${slug}`);

  // If the slug was changed, invalidate the old URL too
  if (previousSlug && previousSlug !== slug) {
    revalidatePath(`/blog/${previousSlug}`);
  }

   // XML sitemap
   revalidatePath("/sitemap.xml");

   // Human-readable sitemap page
   revalidatePath("/sitemap");
}