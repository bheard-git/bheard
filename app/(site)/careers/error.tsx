"use client";

import DbErrorState from "@/components/system/DbErrorState";

export default function CareersError({ reset }: { error: Error; reset: () => void }) {
  return <DbErrorState title="Careers unavailable" onRetry={reset} />;
}
