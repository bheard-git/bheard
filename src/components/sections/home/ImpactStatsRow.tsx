"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImpactStat } from "@/data/home-impact";

interface ImpactStatsRowProps {
  stats: ImpactStat[];
  values: number[];
  className?: string;
}

function formatStat(value: number): string {
  return value.toLocaleString("en-IN");
}

export function ImpactStatsRow({ stats, values, className }: ImpactStatsRowProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-stretch justify-between gap-0 mt-6",
        className
      )}
    >
      {stats.map((stat, index) => (
        <div key={stat.id} className="flex items-stretch flex-1 min-w-0">
          <div className="flex flex-col items-center text-center flex-1 min-w-0 px-0.5 sm:px-2">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 mb-1 sm:mb-2">
              <Image
                src={stat.image}
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 640px) 32px, 56px"
              />
            </div>
            <div className="text-xs sm:text-h4 font-bold text-orange-500 leading-none tabular-nums">
              {formatStat(values[index])}
              {stat.suffix}
            </div>
            <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-caption home-light-muted leading-tight max-w-[88px] sm:max-w-[140px]">
              {stat.label}
            </p>
          </div>
          {index < stats.length - 1 && (
            <div
              className="w-px h-[45%] sm:h-[50%] self-center bg-orange-500/20 shrink-0 mx-0.5 sm:mx-2"
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
}
