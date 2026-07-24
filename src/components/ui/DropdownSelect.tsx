"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface DropdownSelectOption {
  value: string;
  label: string;
}

interface DropdownSelectProps {
  options: DropdownSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  "aria-label"?: string;
  className?: string;
  triggerClassName?: string;
}

export function DropdownSelect({
  options,
  value,
  onChange,
  placeholder = "Select",
  "aria-label": ariaLabel,
  className,
  triggerClassName,
}: DropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.value === value);
  const displayLabel = selected?.label ?? placeholder;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-between gap-2 h-9 w-full min-w-[140px] px-3 text-body-sm font-medium border rounded-[6px] bg-bg-tertiary transition-colors whitespace-nowrap",
          value
            ? "text-text-primary border-white/30 hover:border-orange-500/60 hover:text-orange-400"
            : "text-text-primary border-white/30 hover:border-orange-500/60 hover:text-orange-400",
          triggerClassName
        )}
      >
        <span className="truncate">{displayLabel}</span>
        <svg
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-text-secondary transition-transform",
            open && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={ariaLabel}
          className="absolute top-full left-0 right-0 mt-2 min-w-full max-h-60 overflow-y-auto rounded-[6px] bg-bg-surface border border-border-hover shadow-md py-2 z-50 animate-[dropdown-in_180ms_var(--ease-premium)]"
        >
          {options.map((option) => {
            const isActive = option.value === value;
            return (
              <button
                key={option.value || "__all__"}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={cn(
                  "block w-full text-left px-4 py-2.5 text-body-sm transition-colors",
                  isActive
                    ? "bg-orange-500/10 text-orange-400"
                    : "text-text-secondary hover:bg-bg-hover hover:text-orange-400"
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
