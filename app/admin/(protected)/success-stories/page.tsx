/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PageHeader } from "@/components/admin/PageHeader";
import StoriesTable from "@/components/admin/lists/StoriesTable";
import { useAdminApiList } from "@/components/admin/useAdminApiList";
import DbErrorState from "@/components/system/DbErrorState";

export default function AdminStoriesListPage() {
  const { rows: stories, loading, error, retry } = useAdminApiList<any>("/api/stories?includeDraft=true");

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admin · Success Stories"
        title="Manage Stories"
        description="CRUD support for your current success stories narrative structure."
        action={{ href: "/admin/success-stories/new", label: "New Story" }}
      />
      {loading ? (
        <div className="h-40 animate-pulse rounded-lg border border-border bg-card" />
      ) : error ? (
        <DbErrorState title="Could not load stories" message={error} onRetry={retry} />
      ) : (
        <StoriesTable rows={stories as any} />
      )}
    </div>
  );
}
