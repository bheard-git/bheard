import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailView from "@/components/blog/BlogDetailView";
import {
  getPublishedBlogPostBySlug,
  listPublishedBlogPosts,
} from "@/lib/services/blog.service";
import type { BlogDetail } from "@/components/blog/BlogDetailView";
import { getSiteUrl } from "@/lib/seo/site";

export const dynamic = "force-dynamic";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | BHEARD" };
  }

  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | BHEARD`,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonical,
      ...(post.thumbnailUrl ? { images: [{ url: post.thumbnailUrl, alt: post.thumbnailAlt ?? post.title }] } : {}),
    },
  };
}

function buildBlogPostingSchema(post: BlogDetail, siteUrl: string) {
  const url = `${siteUrl}/blog/${post.slug}`;
  const datePublished = post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined;
  const dateModified = post.updatedAt ? new Date(post.updatedAt).toISOString() : datePublished;

  const authorName = post.showAuthorDetails && post.author ? post.author : "Neha Gupta";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: {
      "@type": "Person",
      name: authorName,
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "BHEARD",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    ...(post.thumbnailUrl
      ? { image: { "@type": "ImageObject", url: post.thumbnailUrl, description: post.thumbnailAlt ?? post.title } }
      : {}),
    articleSection: post.category,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "Blog",
      name: "BHEARD Blog",
      url: `${siteUrl}/blog`,
    },
  };
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

  const siteUrl = getSiteUrl();
  const schema = buildBlogPostingSchema(post as BlogDetail, siteUrl);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BlogDetailView
        post={post as BlogDetail}
        related={related as BlogDetail[]}
        categories={categories}
        recent={recent as BlogDetail[]}
      />
    </>
  );
}
