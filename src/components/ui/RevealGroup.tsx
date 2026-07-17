"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
}

function getReducedMotionPreference() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function RevealGroup({ children, className }: RevealGroupProps) {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const { ref, isInView } = useInView<HTMLDivElement>({
    disabled: !motionAllowed,
  });

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setMotionAllowed(!getReducedMotionPreference());
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-group",
        motionAllowed && !isInView && "reveal-group-pending",
        isInView && "reveal-group-visible",
        className
      )}
    >
      {children}
    </div>
  );
}
