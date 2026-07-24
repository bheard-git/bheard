import { cn } from "@/lib/utils";

interface ImpactTimelineAxisItemProps {
  year: string;
  title: string;
  achievement: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImpactTimelineAxisItem({
  year,
  title,
  achievement,
  className,
  style,
}: ImpactTimelineAxisItemProps) {
  return (
    <div
      className={cn(
        "text-center w-[88px] xs:w-[96px] sm:w-[108px] lg:w-[118px]",
        className
      )}
      style={style}
    >
      <div className="text-body-sm font-bold text-orange-500 tabular-nums leading-none">
        {year}
      </div>
      <div className="text-caption font-semibold home-light-heading mt-1.5 leading-tight">
        {title}
      </div>
      <div className="text-[10px] home-light-muted mt-1 leading-snug line-clamp-2">
        {achievement}
      </div>
    </div>
  );
}
