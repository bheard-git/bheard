"use client";

import DbErrorState from "@/components/system/DbErrorState";

export default function SuccessStoriesError({ reset }: { error: Error; reset: () => void }) {
  return <DbErrorState title="Success stories unavailable" onRetry={reset} />;
}
