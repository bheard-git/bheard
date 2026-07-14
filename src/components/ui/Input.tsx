"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, prefixIcon, suffixIcon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-body-sm font-medium text-text-secondary mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {prefixIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dimmed">
              {prefixIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "input-base",
              prefixIcon && "pl-10",
              suffixIcon && "pr-10",
              error && "border-accent-red focus:border-accent-red focus:ring-accent-red/20",
              className
            )}
            {...props}
          />
          {suffixIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-dimmed">
              {suffixIcon}
            </span>
          )}
        </div>
        {error && <p className="mt-1 text-caption text-accent-red">{error}</p>}
        {helperText && !error && <p className="mt-1 text-caption text-text-dimmed">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
