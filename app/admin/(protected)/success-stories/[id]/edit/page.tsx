/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import StoryForm from "@/components/admin/StoryForm";
import { PageHeader } from "@/components/admin/PageHeader";
import { Card, CardContent } from "@/components/admin/ui/card";
import { useAdminEntityById } from "@/components/admin/useAdminApiList";
import DbErrorState from "@/components/system/DbErrorState";

export default function AdminStoryEditPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { entity: row, loading, error, retry, notFound } = useAdminEntityById<any>(
    "/api/stories?includeDraft=true",
    id
  );

  if (loading) return <div className="h-48 animate-pulse rounded-lg border border-border bg-card" />;
  if (error) return <DbErrorState title="Could not load story" message={error} onRetry={retry} />;
  if (notFound || !row) return <p className="text-sm text-muted-foreground">Story not found.</p>;

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Admin · Success Stories" title="Edit Story" />
      <Card>
        <CardContent className="pt-5">
          <StoryForm
            mode="edit"
            initial={{
              slug: row.slug,
              title: row.title,
              industry: row.industry,
              listImage: row.listImage ?? "",
              heroImage: row.heroImage ?? "",
              caseData: row.caseData ? JSON.stringify(row.caseData, null, 2) : "",
              summary: row.summary,
              about: row.about,
              challenge: row.challenge,
              solution: row.solution,
              results: row.results,
              contactCta: row.contactCta,
              published: row.published,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
