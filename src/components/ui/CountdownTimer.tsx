"use client";

import { cn } from "@/lib/utils";
import { useCountdown } from "@/hooks/useCountdown";

interface CountdownTimerProps {
  targetDate: string | Date;
  className?: string;
  label?: string;
}

export function CountdownTimer({ targetDate, className, label }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) return null;

  const blocks = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Sec" },
  ];

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      {label && <span className="text-body-sm text-text-muted">{label}</span>}
      <div className="flex items-center gap-2">
        {blocks.map((block, i) => (
          <div key={block.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="bg-bg-surface border border-border-default rounded px-2.5 py-1 text-h4 font-bold tabular-nums text-orange-400">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="text-caption text-text-dimmed mt-1">{block.label}</span>
            </div>
            {i < blocks.length - 1 && (
              <span className="text-h4 text-text-dimmed font-bold -mt-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
