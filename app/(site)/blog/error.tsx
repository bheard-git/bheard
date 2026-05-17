"use client";

import DbErrorState from "@/components/system/DbErrorState";

export default function BlogError({ reset }: { error: Error; reset: () => void }) {
  return <DbErrorState title="Blog unavailable" onRetry={reset} />;
}
