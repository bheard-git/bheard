"use client";

import DbErrorState from "@/components/system/DbErrorState";

export default function WorkError({ reset }: { error: Error; reset: () => void }) {
  return <DbErrorState title="Work unavailable" onRetry={reset} />;
}
