import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/seo/schema";
import { caseStudiesData } from "@/lib/success-stories/loadCaseStudies";
import WorkListingContent from "./WorkListingContent";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.work);

export default function WorkIndexPage() {
  const items = caseStudiesData.map((study) => ({
    name: study.listTitle,
    path: `/work/${study.slug}`,
  }));

  const schema = [
    buildCollectionPageSchema({
      title: PAGE_SEO.work.title,
      description: PAGE_SEO.work.description,
      pathname: PAGE_SEO.work.pathname,
      items,
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
