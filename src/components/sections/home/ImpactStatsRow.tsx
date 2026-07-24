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
        "flex flex-col sm:flex-row sm:items-stretch sm:justify-between gap-4 sm:gap-0 mt-6",
        className
      )}
    >
      {stats.map((stat, index) => (
        <div key={stat.id} className="flex items-stretch flex-1 min-w-0">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 min-w-0 px-2 sm:px-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 mb-2">
              <Image
                src={stat.image}
                alt=""
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
            <div className="text-h4 font-bold text-orange-500 leading-none tabular-nums">
              {formatStat(values[index])}
              {stat.suffix}
            </div>
            <p className="mt-1.5 text-caption home-light-muted max-w-[140px]">{stat.label}</p>
          </div>
          {index < stats.length - 1 && (
            <div
              className="hidden sm:block w-px h-[50%] self-center bg-orange-500/20 shrink-0 mx-2"
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
}
