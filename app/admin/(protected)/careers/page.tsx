/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PageHeader } from "@/components/admin/PageHeader";
import CareersTable from "@/components/admin/lists/CareersTable";
import { useAdminApiList } from "@/components/admin/useAdminApiList";
import DbErrorState from "@/components/system/DbErrorState";

export default function AdminCareersListPage() {
  const { rows: roles, loading, error, retry } = useAdminApiList<any>("/api/careers?includeInactive=true");

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admin · Careers"
        title="Manage Roles"
        description="Control active openings with reusable sorting, search and pagination."
        action={{ href: "/admin/careers/new", label: "New Role" }}
      />
      {loading ? (
        <div className="h-40 animate-pulse rounded-lg border border-border bg-card" />
      ) : error ? (
        <DbErrorState title="Could not load careers" message={error} onRetry={retry} />
      ) : (
        <CareersTable rows={roles as any} />
      )}
    </div>
  );
}
