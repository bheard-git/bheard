import type { Metadata } from "next";
import AboutPageView from "@/components/about/AboutPageView";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildAboutPageSchema, buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.about);

export default function AboutPage() {
  const schema = [
    buildAboutPageSchema({
      title: PAGE_SEO.about.title,
      description: PAGE_SEO.about.description,
    }),
    buildBreadcrumbSchema(BREADCRUMBS.about),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <AboutPageView />
    </>
  );
}
