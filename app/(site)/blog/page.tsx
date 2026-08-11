import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/seo/schema";
import { listPublishedBlogPosts } from "@/lib/services/blog.service";
import BlogListingContent from "./BlogListingContent";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.blog);

/** CMS-backed listing — refresh hourly. */
export const revalidate = 3600;

export default async function BlogListingPage() {
  let items: { name: string; path: string }[] = [];
  try {
    const posts = await listPublishedBlogPosts();
    items = posts.map((post) => ({
      name: post.title,
      path: `/blog/${post.slug}`,
    }));
  } catch {
    items = [];
  }

  const schema = [
    buildCollectionPageSchema({
      title: PAGE_SEO.blog.title,
      description: PAGE_SEO.blog.description,
      pathname: PAGE_SEO.blog.pathname,
      items,
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
