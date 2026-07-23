import { ReactNode } from "react";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

type SectionShellProps = {
  children: ReactNode;
  theme?: "light" | "dark";
  padY?: "default" | "tight" | "flush";
  watermark?: string;
  className?: string;
};

const padMap = {
  default: "py-section-y md:py-section-y-sm lg:py-section-y",
  tight: "py-section-y-sm",
  flush: "py-0",
};

export default function SectionShell({
  children,
  theme = "light",
  padY = "default",
  watermark,
  className = "",
}: SectionShellProps) {
  return (
    <section
      className={`relative overflow-hidden ${theme === "dark" ? "bg-surface-dim text-inverse-on-surface" : "bg-surface text-on-background"} ${sectionPageX} ${padMap[padY]} ${className}`}
    >
      {watermark ? (
        <span className="pointer-events-none absolute left-4 top-4 font-headline text-display-xl font-extrabold uppercase leading-none text-on-background/5 md:left-8">
          {watermark}
        </span>
      ) : null}
      <div className={`relative z-10 ${sectionContentBand}`}>{children}</div>
    </section>
  );
}
