import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { VerticalMarquee } from "@/components/ui/VerticalMarquee";
import { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";
import { TestimonialCardV2 } from "./TestimonialCardV2";

function TestimonialColumn({
  testimonials,
  direction,
  className,
}: {
  testimonials: Testimonial[];
  direction: "up" | "down";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden",
        className
      )}
    >
      {/* Top Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-background via-background/80 to-transparent" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <VerticalMarquee
        speed={36}
        direction={direction}
        gap={24}
        className="h-full pr-1"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCardV2
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </VerticalMarquee>
    </div>
  );
}

export default TestimonialColumn;