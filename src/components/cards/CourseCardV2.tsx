import Link from "next/link";
import Image from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { CATEGORIES } from "@/lib/constants";
import type { Course } from "@/lib/types";

interface CourseCardV2Props {
  course: Course;
  className?: string;
}

const CATEGORY_BG: Record<string, string> = {
  mba: "linear-gradient(145deg, rgba(249,115,22,0.55) 0%, rgba(194,65,12,0.35) 55%, rgba(17,17,17,0.95) 100%)",
  ipmat:
    "linear-gradient(145deg, rgba(168,85,247,0.55) 0%, rgba(126,34,206,0.35) 55%, rgba(17,17,17,0.95) 100%)",
  clat: "linear-gradient(145deg, rgba(217,119,6,0.55) 0%, rgba(146,64,14,0.35) 55%, rgba(17,17,17,0.95) 100%)",
  banking:
    "linear-gradient(145deg, rgba(101,131,29,0.55) 0%, rgba(74,97,21,0.35) 55%, rgba(17,17,17,0.95) 100%)",
  skillhouse:
    "linear-gradient(145deg, rgba(249,115,22,0.55) 0%, rgba(194,65,12,0.35) 55%, rgba(17,17,17,0.95) 100%)",
};

export function CourseCardV2({ course, className }: CourseCardV2Props) {
  const hasDiscount = course.originalPrice && course.originalPrice > course.price;
  const discountPercent = hasDiscount
    ? Math.round(((course.originalPrice! - course.price) / course.originalPrice!) * 100)
    : 0;

  const accent =
    CATEGORIES.find((c) => c.id === course.category)?.color || "#F97316";

  const badgeVariant =
    course.badge === "Bestseller"
      ? "primary"
      : course.badge === "New" || course.badge === "Popular"
        ? "danger"
        : course.badge === "Trending"
          ? "info"
          : course.badge === "Starter"
            ? "success"
            : "purple";

            return (
                <div
                  className={cn(
                    "relative overflow-hidden group rounded-[6px] min-h-[260px] border-0 card-premium-hover premium-border-glow hover-shine bg-black",
                    className
                  )}
                  >
                  <div className=""
                    style={{
                        background: CATEGORY_BG[course.category] || CATEGORY_BG.mba,
                        boxShadow: `inset 0 0 0 1px ${accent}40`,
                        ["--glow-base" as string]: `${accent}24`,
                        ["--glow-peak" as string]: `${accent}B3`,
                    }}
                  >
                    <div className="relative z-10 flex h-full flex-col p-5 pr-[42%]">
                        {/* Badge */}
                        {course.badge && (
                        <div className="mb-5">
                            <Badge
                            variant="primary"
                            size="sm"
                            className="uppercase tracking-wide text-[10px] font-bold"
                            >
                            {course.badge}
                            </Badge>
                        </div>
                        )}
                
                        {/* Title */}
                        <h3 className="text-h4 font-bold leading-tight text-white">
                        {course.title}
                        </h3>
                
                        {/* Meta */}
                        <div className="mt-3 text-caption text-white/70 leading-relaxed">
                        <span>{course.duration}</span>
                
                        {course.mode && (
                            <>
                            {" · "}
                            <span>{course.mode}</span>
                            </>
                        )}
                
                        {(course.totalHours || course.classCount) && (
                            <>
                            {" · "}
                            <span>{course.totalHours ?? `${course.classCount} Hrs`}</span>
                            </>
                        )}
                        </div>
                
                        {/* Price */}
                        <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-1">
                        <span className="text-[2rem] font-bold leading-none text-white">
                            {formatPrice(course.price)}
                        </span>
                
                        {hasDiscount && (
                            <>
                            <span className="text-body-sm text-white/40 line-through">
                                {formatPrice(course.originalPrice!)}
                            </span>
                
                            <span className="text-caption font-bold text-orange-400">
                                {discountPercent}% OFF
                            </span>
                            </>
                        )}
                        </div>
                
                        {/* View Details */}
                        <div className="mt-8">
                        <button
                            type="button"
                            className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/15
                            bg-white/5
                            px-5
                            py-3
                            text-body-sm
                            font-semibold
                            text-white
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:border-orange-500/40
                            hover:bg-white/10
                            "
                        >
                            View Details
                
                            <svg
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 011.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </button>
                        </div>
                
                        {/* Hidden details (for future accordion) */}
                        {course.details?.length ? (
                        <div className="hidden">
                            <div className="mt-6 border-t border-white/10 pt-5 space-y-3">
                            {course.details.map((item: string) => (
                                <div
                                key={item}
                                className="flex items-start gap-2 text-caption text-white/80"
                                >
                                <span className="mt-0.5 text-orange-400 font-bold">✓</span>
                                <span>{item}</span>
                                </div>
                            ))}
                
                            <Link
                                href={`/${course.category}/courses/${course.slug}`}
                                className="inline-flex pt-2 text-body-sm font-semibold text-orange-300 hover:text-orange-200"
                            >
                                Enroll Now →
                            </Link>
                            </div>
                        </div>
                        ) : null}
                    </div>
                
                    {/* Faculty Image */}
                    {course.facultyImage && (
                        <div className="pointer-events-none absolute right-0 bottom-0 top-0 w-[46%] transition-transform duration-500 ease-out">
                        <Image
                            src={course.facultyImage}
                            alt=""
                            fill
                            className="object-contain object-bottom"
                            sizes="220px"
                        />
                        </div>
                    )}
                  </div>
                </div>
              );
}
