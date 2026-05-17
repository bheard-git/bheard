/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { PageHeader } from "@/components/admin/PageHeader";
import PageContentForm from "@/components/admin/PageContentForm";
import DbErrorState from "@/components/system/DbErrorState";

export default function AdminPageEditPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const [page, setPage] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    if (!slug) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/pages/${slug}`, { cache: "no-store" });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        const message =
          json && typeof json === "object" && "error" in json && typeof json.error === "string"
            ? json.error
            : "Failed to load page";
        throw new Error(message);
      }
      setPage(json?.data ? { title: json.data.title, content: json.data.content } : null);
    } catch (err) {
      setPage(null);
      setError(err instanceof Error ? err.message : "Failed to load page");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, [slug]);

  const label = useMemo(() => slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), [slug]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Pages"
        title={`Edit — ${label}`}
        action={{ href: "/admin/pages", label: "← Back to Pages" }}
      />
      {error ? <DbErrorState title="Could not load page" message={error} onRetry={load} /> : null}
      {!error ? (
        <PageContentForm
          slug={slug}
          loading={loading}
          initial={page ? { title: page.title, content: page.content } : undefined}
        />
      ) : null}
    </div>
  );
}
