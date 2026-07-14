import { cn } from "@/lib/utils";
import type { ResultStat } from "@/lib/types";

interface ResultStatCardProps {
  stat: ResultStat;
  className?: string;
}

export function ResultStatCard({ stat, className }: ResultStatCardProps) {
  return (
    <div className={cn("card-base p-6 text-center", className)}>
      <div className="text-h1 font-bold text-orange-400">
        {stat.value}
        {stat.suffix && <span className="text-h3">{stat.suffix}</span>}
      </div>
      <h4 className="mt-2 text-body font-medium text-text-primary">{stat.label}</h4>
      {stat.description && (
        <p className="mt-1 text-caption text-text-dimmed">{stat.description}</p>
      )}
    </div>
  );
}
