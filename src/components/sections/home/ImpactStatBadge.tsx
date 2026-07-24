import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImpactStatBadgeProps {
  icon: string;
  value: string;
  label: string;
  className?: string;
}

export function ImpactStatBadge({ icon, value, label, className }: ImpactStatBadgeProps) {
  return (
    <div
      className={cn(
        "impact-stat-badge flex items-center gap-3 px-4 py-3 min-w-0",
        className
      )}
    >
      <div className="relative w-9 h-9 shrink-0">
        <Image src={icon} alt="" fill className="object-contain" sizes="36px" />
      </div>
      <div className="min-w-0">
        <div className="text-h4 font-bold text-orange-500 leading-none tabular-nums">
          {value}
        </div>
        <p className="mt-1 text-caption home-light-muted">{label}</p>
      </div>
    </div>
  );
}
