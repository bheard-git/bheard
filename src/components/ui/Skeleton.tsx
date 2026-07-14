import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn("animate-shimmer rounded", className)} />
  );
}

export function SkeletonCircle({ className }: SkeletonProps) {
  return (
    <div className={cn("animate-shimmer rounded-full", className)} />
  );
}

export function SkeletonText({ lines = 3, className }: SkeletonProps & { lines?: number }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }, (_, i) => (
        <div
          key={i}
          className={cn(
            "h-4 animate-shimmer rounded",
            i === lines - 1 && "w-3/4"
          )}
        />
      ))}
    </div>
  );
}
