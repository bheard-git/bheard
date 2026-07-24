import { cn } from "@/lib/utils";
import type { FacultyResultStat } from "@/lib/types";

interface FacultyResultStatCardProps {
  stat: FacultyResultStat;
  className?: string;
}

export function FacultyResultStatCard({ stat, className }: FacultyResultStatCardProps) {
  return (
    <div className={cn("min-w-0 text-left", className)}>
      <div className="text-h3 md:text-h2 font-bold text-text-primary leading-none">
        {stat.value}
      </div>
      <div className="mt-1.5 text-caption md:text-body-sm text-text-muted leading-snug">
        {stat.label}
      </div>
    </div>
  );
}
