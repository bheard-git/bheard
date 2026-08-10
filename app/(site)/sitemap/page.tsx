import type { Metadata } from "next";
import SitemapPageContent from "@/components/system/SitemapPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";


export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.sitemap);

export default function SitemapPage() {
  const schema = [
    buildWebPageSchema({
      title: PAGE_SEO.sitemap.title,
      description: PAGE_SEO.sitemap.description,
      pathname: PAGE_SEO.sitemap.pathname,
    }),
    buildBreadcrumbSchema(BREADCRUMBS.sitemap),
  ];

  return (
    <>
      <JsonLd data={schema} />
        <SitemapPageContent />
    </>
  );
}
