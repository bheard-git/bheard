/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import { PageHeader } from "@/components/admin/PageHeader";
import { Card, CardContent } from "@/components/admin/ui/card";
import { useAdminEntityById } from "@/components/admin/useAdminApiList";
import DbErrorState from "@/components/system/DbErrorState";

export default function AdminBlogEditPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { entity: row, loading, error, retry, notFound } = useAdminEntityById<any>(
    "/api/blog?includeDraft=true",
    id
  );

  if (loading) return <div className="h-48 animate-pulse rounded-lg border border-border bg-card" />;
  if (error) return <DbErrorState title="Could not load post" message={error} onRetry={retry} />;
  if (notFound || !row) return <p className="text-sm text-muted-foreground">Post not found.</p>;

  const rowWithOptionalAuthorFields = row as typeof row & {
    subtitle?: string | null;
    showAuthorDetails?: boolean | null;
    author?: string | null;
    authorImage?: string | null;
    thumbnailUrl?: string | null;
    thumbnailAlt?: string | null;
  };

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Admin · Blogs" title="Edit Post" />
      <Card>
        <CardContent className="pt-5">
          <BlogForm
            mode="edit"
            initial={{
              slug: row.slug,
              title: row.title,
              subtitle: rowWithOptionalAuthorFields.subtitle ?? "",
              showAuthorDetails: rowWithOptionalAuthorFields.showAuthorDetails ?? true,
              author: rowWithOptionalAuthorFields.author ?? "BHeard Editorial",
              authorImage: rowWithOptionalAuthorFields.authorImage ?? "",
              excerpt: row.excerpt,
              thumbnailUrl: rowWithOptionalAuthorFields.thumbnailUrl ?? "",
              thumbnailAlt: rowWithOptionalAuthorFields.thumbnailAlt ?? "",
              category: row.category,
              readTime: row.readTime,
              content: row.content,
              published: row.published,
              publishedAt: row.publishedAt ? new Date(row.publishedAt).toISOString() : null,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
