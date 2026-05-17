/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PageHeader } from "@/components/admin/PageHeader";
import { Card, CardContent } from "@/components/admin/ui/card";
import { detailGridStyles } from "@/components/admin/ui/styles";
import DeleteEntityButton from "@/components/admin/DeleteEntityButton";
import { Button } from "@/components/admin/ui/button";
import { useAdminEntityById } from "@/components/admin/useAdminApiList";
import DbErrorState from "@/components/system/DbErrorState";

export default function AdminBlogDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { entity: row, loading, error, retry, notFound } = useAdminEntityById<any>(
    "/api/blog?includeDraft=true",
    id
  );

  if (loading) {
    return <div className="h-48 animate-pulse rounded-lg border border-border bg-card" />;
  }
  if (error) {
    return <DbErrorState title="Could not load post" message={error} onRetry={retry} />;
  }
  if (notFound || !row) {
    return <p className="text-sm text-muted-foreground">Post not found.</p>;
  }

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Admin · Blogs" title="Post Details" />
      <Card>
        <CardContent className="space-y-5 pt-5">
          <div className={detailGridStyles}>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Title</p>
              <p className="mt-1 font-medium">{row.title}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Slug</p>
              <p className="mt-1 font-medium">{row.slug}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Category</p>
              <p className="mt-1 font-medium">{row.category}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Status</p>
              <p className="mt-1 font-medium">{row.published ? "Published" : "Draft"}</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Excerpt</p>
            <p className="mt-1 text-sm text-muted-foreground">{row.excerpt}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href={`/admin/blog/${row.id}/edit`}>Edit</Link>
            </Button>
            <DeleteEntityButton endpoint={`/api/blog/${row.slug}`} redirectTo="/admin/blog" label="Delete Post" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
