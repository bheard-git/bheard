/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PageHeader } from "@/components/admin/PageHeader";
import BlogsTable from "@/components/admin/lists/BlogsTable";
import { useAdminApiList } from "@/components/admin/useAdminApiList";
import DbErrorState from "@/components/system/DbErrorState";

export default function AdminBlogListPage() {
  const { rows: posts, loading, error, retry } = useAdminApiList<any>("/api/blog?includeDraft=true");

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admin · Blogs"
        title="Manage Blog Posts"
        description="Create, edit, and curate blog content with reusable filters, sorting, and pagination."
        action={{ href: "/admin/blog/new", label: "New Post" }}
      />
      {loading ? (
        <div className="h-40 animate-pulse rounded-lg border border-border bg-card" />
      ) : error ? (
        <DbErrorState title="Could not load blog posts" message={error} onRetry={retry} />
      ) : (
        <BlogsTable rows={posts as any} />
      )}
    </div>
  );
}
