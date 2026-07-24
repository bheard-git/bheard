import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";
import CareersListingContent from "./CareersListingContent";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.careers);

export const dynamic = "force-dynamic";

export default function CareersListingPage() {
  const schema = [
    buildWebPageSchema({
      title: PAGE_SEO.careers.title,
      description: PAGE_SEO.careers.description,
      pathname: PAGE_SEO.careers.pathname,
    }),
    buildBreadcrumbSchema(BREADCRUMBS.careers),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Suspense fallback={<DbLoadingSkeleton variant="careers" />}>
        <CareersListingContent />
      </Suspense>
    </>
  );
}
