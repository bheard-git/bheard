import { cn } from "@/lib/utils";

interface HomePageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function HomePageBackground({ children, className }: HomePageBackgroundProps) {
  return <div className={cn("home-page-canvas relative", className)}>{children}</div>;
}
