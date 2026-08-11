import type { MetadataRoute } from "next";
import { AI_SEARCH_CRAWLERS } from "@/lib/seo/constants";
import { getSiteUrl } from "@/lib/seo/site";

const DISALLOWED = ["/admin", "/admin/", "/api", "/api/"];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED,
      },
      ...AI_SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOWED,
      })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base.replace(/^https?:\/\//, ""),
  };
}