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
