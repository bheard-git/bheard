import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";
import WorkListingContent from "./WorkListingContent";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.work);

export default function WorkIndexPage() {
  const schema = [
    buildWebPageSchema({
      title: PAGE_SEO.work.title,
      description: PAGE_SEO.work.description,
      pathname: PAGE_SEO.work.pathname,
    }),
    buildBreadcrumbSchema(BREADCRUMBS.work),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <WorkListingContent />
    </>
  );
}
