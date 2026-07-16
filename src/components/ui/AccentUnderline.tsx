import { cn } from "@/lib/utils";

interface AccentUnderlineProps {
  className?: string;
}

/** Hand-drawn style orange underline used under highlighted headline words */
export function AccentUnderline({ className }: AccentUnderlineProps) {
  return (
    <svg
      className={cn("pointer-events-none text-orange-500", className)}
      viewBox="0 0 200 12"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M2 8c28-5 55-6 82-4 27 2 54 5 82 3 11-1 22-3 32-5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10c30-3 60-4 90-2 25 2 50 3 78 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
