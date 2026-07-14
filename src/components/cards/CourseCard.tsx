import Link from "next/link";
import Image from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import type { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  const hasDiscount = course.originalPrice && course.originalPrice > course.price;
  const discountPercent = hasDiscount
    ? Math.round(((course.originalPrice! - course.price) / course.originalPrice!) * 100)
    : 0;

  const badgeVariant =
    course.badge === "Bestseller"
      ? "primary"
      : course.badge === "New" || course.badge === "Popular"
        ? "danger"
        : course.badge === "Trending"
          ? "info"
          : course.badge === "Starter"
            ? "default"
            : "success";

  return (
    <div
      className={cn(
        "card-base card-hover relative overflow-hidden group rounded-[6px] min-h-[260px]",
        className
      )}
    >
      <div className="relative z-10 p-4 md:p-5 flex flex-col h-full pr-[38%]">
        {course.badge && (
          <div className="mb-3">
            <Badge variant={badgeVariant} size="sm">
              {course.badge}
            </Badge>
          </div>
        )}

        <h3 className="text-h4 font-semibold text-text-primary leading-snug line-clamp-2">
          {course.title}
        </h3>

        <div className="mt-3 flex flex-col gap-1.5 text-caption text-text-dimmed">
          <span className="flex items-center gap-1.5">
            <Icon src="/assets/icons/clock.svg" size={12} className="text-text-dimmed" />
            {course.duration}
            {course.mode && <> · {course.mode}</>}
          </span>
          {course.classCount && (
            <span className="flex items-center gap-1.5">
              <Icon src="/assets/icons/book.svg" size={12} className="text-text-dimmed" />
              {course.classCount} Hrs Classes
            </span>
          )}
          {course.studentsEnrolled && (
            <span className="flex items-center gap-1.5 text-orange-400/90 font-medium">
              <Icon src="/assets/icons/users.svg" size={12} className="text-orange-400/90" />
              {course.studentsEnrolled}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4 flex flex-col gap-2">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-h4 font-bold text-text-primary">
              {formatPrice(course.price)}
            </span>
            {hasDiscount && (
              <>
                <span className="text-body-sm text-text-dimmed line-through">
                  {formatPrice(course.originalPrice!)}
                </span>
                <span className="text-caption font-semibold text-orange-400">
                  {discountPercent}% OFF
                </span>
              </>
            )}
          </div>
          <Link
            href={`/${course.category}/courses/${course.slug}`}
            className="text-body-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
          >
            Enroll →
          </Link>
        </div>
      </div>

      {course.facultyImage && (
        <div className="absolute right-0 bottom-0 top-8 w-[42%] pointer-events-none">
          <Image
            src={course.facultyImage}
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="160px"
          />
        </div>
      )}
    </div>
  );
}
