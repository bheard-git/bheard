"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-body-sm font-medium text-text-secondary mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "input-base min-h-[120px] resize-y",
            error && "border-accent-red focus:border-accent-red",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-caption text-accent-red">{error}</p>}
        {helperText && !error && <p className="mt-1 text-caption text-accent-red">{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
