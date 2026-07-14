import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  label?: string;
}

export function Divider({ className, label }: DividerProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="flex-1 h-px bg-border-default" />
        <span className="text-caption text-text-dimmed uppercase tracking-wider">{label}</span>
        <div className="flex-1 h-px bg-border-default" />
      </div>
    );
  }

  return <hr className={cn("border-0 h-px bg-border-default", className)} />;
}
