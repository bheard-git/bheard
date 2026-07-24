import Image from "next/image";
import { cn } from "@/lib/utils";

interface FloatingStat {
  id: string;
  value: string;
  label: string;
  icon: string;
  delay: string;
}

const FLOATING_STATS: FloatingStat[] = [
  {
    id: "selections",
    value: "25,000+",
    label: "Selections",
    icon: "/assets/images/icons/selection.png",
    delay: "[animation-delay:-4s]",
  },
  {
    id: "success",
    value: "98%",
    label: "Success Rate",
    icon: "/assets/images/icons/rank.png",
    delay: "[animation-delay:-12s]",
  },
  {
    id: "years",
    value: "10+",
    label: "Years of Trust",
    icon: "/assets/images/icons/CAT-icon.png",
    delay: "[animation-delay:-20s]",
  },
];

interface HeroFloatingStatsProps {
  className?: string;
}

export function HeroFloatingStats({ className }: HeroFloatingStatsProps) {
  return (
    <div className={cn("flex w-full mt-6 gap-1.5 sm:gap-3", className)}>
      {FLOATING_STATS.map((stat) => (
        <div
          key={stat.id}
          className={cn(
            "flex flex-1 min-w-0 items-center gap-1.5 sm:gap-2",
            "bg-bg-tertiary border border-white/10 premium-border-glow",
            "px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-[6px] shadow-md",
            "ambient-drift",
            stat.delay
          )}
        >
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0">
            <Image src={stat.icon} alt="" fill className="object-contain" sizes="28px" />
          </div>
          <div className="min-w-0">
            <div className="text-caption font-bold text-text-primary leading-none truncate">
              {stat.value}
            </div>
            <div className="text-[10px] text-text-dimmed mt-0.5 truncate">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
