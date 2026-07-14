import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div className={cn("flex gap-4 p-4", className)}>
      {icon && (
        <div className="w-10 h-10 rounded-md bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-400">
          {icon}
        </div>
      )}
      <div>
        <h4 className="text-body font-semibold text-text-primary">{title}</h4>
        <p className="mt-1 text-body-sm text-text-muted">{description}</p>
      </div>
    </div>
  );
}
