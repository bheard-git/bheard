import type { Metadata } from "next";
import { OG_IMAGE_PATH } from "@/lib/seo/constants";
import { getSiteUrl } from "@/lib/seo/site";
import type { PageSeoEntry } from "@/lib/seo/pages";

export type BuildPageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  /** Override default OG image (absolute or site-relative path). */
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
};

function resolveCanonical(pathname: string, siteUrl: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

function resolveImageUrl(image: string, siteUrl: string): string {
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;
}

export function buildPageMetadata({
  title,
  description,
  pathname,
  ogImage,
  ogType = "website",
  noindex = false,
}: BuildPageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = resolveCanonical(pathname, siteUrl);
  const image = resolveImageUrl(ogImage ?? OG_IMAGE_PATH, siteUrl);

  return {
    title,
    description,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      type: ogType,
      url: canonical,
      siteName: "BHeard",
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "BHeard — Integrated branding and technology agency in Mumbai",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function metadataFromPageSeo(
  entry: PageSeoEntry,
  overrides?: Partial<BuildPageMetadataOptions>,
): Metadata {
  return buildPageMetadata({
    title: entry.title,
    description: entry.description,
    pathname: entry.pathname,
    ...overrides,
  });
}
