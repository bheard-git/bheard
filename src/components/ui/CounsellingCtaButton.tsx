"use client";

import { useCounsellingModal } from "@/hooks/useCounsellingModal";
import { cn } from "@/lib/utils";

interface CounsellingCtaButtonProps {
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}

export function CounsellingCtaButton({
  className,
  children,
  "aria-label": ariaLabel,
}: CounsellingCtaButtonProps) {
  const { openCounsellingModal } = useCounsellingModal();

  return (
    <button
      type="button"
      onClick={() => openCounsellingModal()}
      className={cn(className)}
      data-counselling-cta
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
