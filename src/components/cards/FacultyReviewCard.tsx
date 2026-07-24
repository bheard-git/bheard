import Image from "next/image";
import { cn } from "@/lib/utils";
import { Rating } from "@/components/ui/Rating";
import type { FacultyReview } from "@/lib/types";

interface FacultyReviewCardProps {
  rating: number;
  reviewCountLabel?: string;
  reviews: FacultyReview[];
  className?: string;
}

export function FacultyReviewCard({
  rating,
  reviewCountLabel,
  reviews,
  className,
}: FacultyReviewCardProps) {
  return (
    <div
      className={cn(
        "card-base card-premium-hover premium-border-glow hover-shine flex flex-col rounded-xl bg-bg-secondary p-5 md:p-6 h-full",
        className
      )}
    >
      <h3 className="text-h4 font-semibold text-text-primary">Student Reviews</h3>

      <div className="mt-4 flex items-end gap-3">
        <span className="text-[40px] md:text-[48px] font-bold text-text-primary leading-none">
          {rating.toFixed(1)}
        </span>
        <div className="pb-1">
          <Rating value={Math.round(rating)} size="sm" />
          {reviewCountLabel && (
            <p className="mt-1 text-caption text-text-dimmed">{reviewCountLabel}</p>
          )}
        </div>
      </div>

      <ul className="mt-5 space-y-4 max-h-[280px] overflow-y-auto pr-1">
        {reviews.map((review) => (
          <li key={review.id} className="flex gap-3">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-bg-tertiary">
              <Image
                src={review.avatar || "/assets/images/placeholders/faculty-avatar.svg"}
                alt=""
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-body-sm font-medium text-text-primary truncate">
                  {review.name}
                </p>
                <Rating value={review.rating} size="sm" className="shrink-0" />
              </div>
              <p className="mt-1 text-caption text-text-muted leading-relaxed line-clamp-3">
                {review.quote}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
