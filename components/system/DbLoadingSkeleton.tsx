import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

type Variant = "blog" | "careers" | "stories" | "legal" | "default";

const variantClass: Record<Variant, string> = {
  blog: "min-h-[60vh]",
  careers: "min-h-[50vh]",
  stories: "min-h-[70vh]",
  legal: "min-h-[40vh]",
  default: "min-h-[40vh]",
};

export default function DbLoadingSkeleton({ variant = "default" }: { variant?: Variant }) {
  return (
    <div className={`${sectionPageX} py-section-y-sm md:py-section-y`}>
      <div
        className={`${sectionContentBand} animate-pulse ${variantClass[variant]}`}
        aria-busy="true"
        aria-label="Loading content"
      >
        <div className="h-4 w-24 rounded bg-surface-container-high" />
        <div className="mt-6 h-12 max-w-xl rounded bg-surface-container-high" />
        <div className="mt-4 h-4 max-w-2xl rounded bg-surface-container-high" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-48 rounded-lg border border-outline-variant/40 bg-surface-container-low" />
          ))}
        </div>
      </div>
    </div>
  );
}
