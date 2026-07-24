import type { Metadata } from "next";
import IndustriesHubView from "@/components/industries/IndustriesHubView";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.industries);

export default function IndustriesPage() {
  const schema = [
    buildWebPageSchema({
      title: PAGE_SEO.industries.title,
      description: PAGE_SEO.industries.description,
      pathname: PAGE_SEO.industries.pathname,
    }),
    buildBreadcrumbSchema(BREADCRUMBS.industries),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <IndustriesHubView />
    </>
  );
}
