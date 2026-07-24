import { cn } from "@/lib/utils";

interface ImpactGrowthBadgeProps {
  growthValue: string;
  growthLabel: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImpactGrowthBadge({
  growthValue,
  growthLabel,
  className,
  style,
}: ImpactGrowthBadgeProps) {
  return (
    <div
      className={cn(
        "impact-milestone-pill px-2.5 py-1.5 text-center min-w-[72px] sm:min-w-[80px]",
        className
      )}
      style={style}
    >
      <div className="text-body-sm font-bold text-orange-500 leading-none tabular-nums">
        {growthValue}
      </div>
      <div className="text-[10px] home-light-muted mt-0.5 leading-none">{growthLabel}</div>
    </div>
  );
}
