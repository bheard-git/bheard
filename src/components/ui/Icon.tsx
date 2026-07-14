import { cn } from "@/lib/utils";

interface IconProps {
  src: string;
  className?: string;
  size?: number;
}

/** Renders an SVG icon tinted via CSS mask so currentColor SVGs work on dark theme */
export function Icon({ src, className, size = 20 }: IconProps) {
  return (
    <span
      role="img"
      aria-hidden
      className={cn("inline-block shrink-0 bg-current", className)}
      style={{
        width: size,
        height: size,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
