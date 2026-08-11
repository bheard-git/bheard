import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/seo/schema";
import CareersListingContent from "./CareersListingContent";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.careers);

/** CMS-backed listing — refresh hourly. */
export const revalidate = 3600;

export default function CareersListingPage() {
  // Careers index shows department groups + general application, not a linked job list.
  const schema = [
    buildCollectionPageSchema({
      title: PAGE_SEO.careers.title,
      description: PAGE_SEO.careers.description,
      pathname: PAGE_SEO.careers.pathname,
    }),
    buildBreadcrumbSchema(BREADCRUMBS.careers),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <CareersListingContent />
    </>
  );
}
