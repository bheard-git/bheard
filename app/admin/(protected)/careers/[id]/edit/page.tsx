/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import CareerForm from "@/components/admin/CareerForm";
import { PageHeader } from "@/components/admin/PageHeader";
import { Card, CardContent } from "@/components/admin/ui/card";
import { useAdminEntityById } from "@/components/admin/useAdminApiList";
import DbErrorState from "@/components/system/DbErrorState";

export default function AdminCareerEditPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { entity: row, loading, error, retry, notFound } = useAdminEntityById<any>(
    "/api/careers?includeInactive=true",
    id
  );

  if (loading) return <div className="h-48 animate-pulse rounded-lg border border-border bg-card" />;
  if (error) return <DbErrorState title="Could not load role" message={error} onRetry={retry} />;
  if (notFound || !row) return <p className="text-sm text-muted-foreground">Role not found.</p>;

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Admin · Careers" title="Edit Role" />
      <Card>
        <CardContent className="pt-5">
          <CareerForm
            mode="edit"
            initial={{
              slug: row.slug,
              title: row.title,
              department: row.department,
              type: row.type,
              location: row.location,
              description: row.description,
              active: row.active,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
