import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailView from "@/components/blog/BlogDetailView";
import JsonLd from "@/components/seo/JsonLd";
import {
  getPublishedBlogPostBySlug,
  listPublishedBlogPosts,
} from "@/lib/services/blog.service";
import type { BlogDetail } from "@/components/blog/BlogDetailView";
import { blogDetailBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/seo/schema";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | BHeard" };
  }

  const title = `${post.title} | BHeard`;

  return buildPageMetadata({
    title,
    description: post.excerpt,
    pathname: `/blog/${post.slug}`,
    ogType: "article",
    ogImage: post.thumbnailUrl ?? undefined,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  const post = await getPublishedBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const allPosts = await listPublishedBlogPosts();
  const related = allPosts.filter((item) => item.slug !== slug).slice(0, 2);

  const categoryMap = new Map<string, number>();
  allPosts.forEach((item) => {
    categoryMap.set(item.category, (categoryMap.get(item.category) ?? 0) + 1);
  });
  const categories = Array.from(categoryMap.entries()).map(([label, count]) => ({ label, count }));
  const recent = allPosts.filter((item) => item.slug !== slug).slice(0, 4);

  const authorName = post.showAuthorDetails && post.author ? post.author : "Neha Gupta";

  const schema = [
    buildBlogPostingSchema({
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      thumbnailUrl: post.thumbnailUrl,
      thumbnailAlt: post.thumbnailAlt,
      category: post.category,
      authorName,
    }),
    buildBreadcrumbSchema(blogDetailBreadcrumbs(post.title)),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <BlogDetailView
        post={post as BlogDetail}
        related={related as BlogDetail[]}
        categories={categories}
        recent={recent as BlogDetail[]}
      />
    </>
  );
}
