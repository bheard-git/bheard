"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "btn-primary-premium bg-orange-500 text-white hover:bg-orange-600 hover:shadow-orange hover:-translate-y-px active:translate-y-0 active:bg-orange-700 disabled:hover:bg-orange-500",
  secondary:
    "bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-500/10 hover:shadow-orange active:bg-orange-500/20 disabled:hover:bg-transparent",
  outline:
    "bg-transparent text-text-secondary border border-border-default hover:border-border-hover hover:text-text-primary active:bg-bg-hover disabled:hover:border-border-default",
  ghost:
    "bg-transparent text-text-secondary hover:bg-bg-hover hover:text-text-primary active:bg-bg-surface disabled:hover:bg-transparent",
} as const;

const sizes = {
  sm: "h-8 px-3 text-body-sm gap-1.5 rounded",
  md: "h-10 px-5 text-body gap-2 rounded-md",
  lg: "h-12 px-7 text-body-lg gap-2.5 rounded-md",
} as const;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, fullWidth, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
