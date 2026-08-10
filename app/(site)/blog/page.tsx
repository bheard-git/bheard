import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";
import BlogListingContent from "./BlogListingContent";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.blog);


export default function BlogListingPage() {
  const schema = [
    buildWebPageSchema({
      title: PAGE_SEO.blog.title,
      description: PAGE_SEO.blog.description,
      pathname: PAGE_SEO.blog.pathname,
    }),
    buildBreadcrumbSchema(BREADCRUMBS.blog),
  ];

  return (
    <>
      <JsonLd data={schema} />
        <BlogListingContent />
    </>
  );
}
