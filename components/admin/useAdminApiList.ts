"use client";

import { useCallback, useEffect, useState } from "react";

export function useAdminApiList<T>(url: string) {
  const [rows, setRows] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, { cache: "no-store" });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        const message =
          json && typeof json === "object" && "error" in json && typeof json.error === "string"
            ? json.error
            : "Failed to load data";
        throw new Error(message);
      }
      setRows(Array.isArray(json?.data) ? json.data : []);
    } catch (err) {
      setRows([]);
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      await load();
      if (cancelled) return;
    })();
    return () => {
      cancelled = true;
    };
  }, [load]);

  return { rows, loading, error, retry: load };
}

export function useAdminEntityById<T extends { id: string }>(listUrl: string, id: string | undefined) {
  const { rows, loading, error, retry } = useAdminApiList<T>(listUrl);
  const entity = id ? (rows.find((row) => row.id === id) ?? null) : null;
  const notFound = Boolean(id && !loading && !error && !entity);

  return { entity, loading, error, retry, notFound };
}
