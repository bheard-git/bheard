import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { Category } from "@/lib/types";

interface ExamCardProps {
  category: Category;
  className?: string;
}

export function ExamCard({ category, className }: ExamCardProps) {
  const accent = category.color || "#F97316";

  return (
    <Link
      href={`/${category.slug}`}
      className={cn(
        "card-base card-hover relative overflow-hidden p-5 flex flex-col group min-h-[220px] md:min-h-[240px] rounded-[6px]",
        className
      )}
      style={{
        boxShadow: `inset 0 0 0 1px ${accent}28`,
      }}
    >
      <div
        className="pointer-events-none absolute -bottom-8 -right-6 w-40 h-40 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"
        style={{
          background: `radial-gradient(circle, ${accent}50 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16] group-hover:opacity-[0.24] transition-opacity"
        style={{
          background: `linear-gradient(145deg, ${accent}38 0%, transparent 55%)`,
        }}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      {category.illustrationImage && (
        <div className="absolute right-1 bottom-3 w-[88px] h-[88px] md:w-[96px] md:h-[96px] opacity-95 group-hover:scale-105 transition-transform duration-300">
          <Image
            src={category.illustrationImage}
            alt=""
            fill
            className="object-contain drop-shadow-lg"
            sizes="96px"
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col flex-1 pr-20">
        <h3
          className="text-[26px] md:text-[30px] font-bold leading-none tracking-tight"
          style={{ color: accent }}
        >
          {category.name}
        </h3>
        <p className="mt-2.5 text-body-sm text-text-secondary leading-relaxed">
          {category.description}
        </p>

        <div className="mt-auto pt-5 flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-caption text-text-primary/90">
            <span style={{ color: accent }}>
              <Icon src="/assets/icons/book.svg" size={14} />
            </span>
            <span>{category.courseCount || "50+"} Courses</span>
          </div>
          <div className="flex items-center gap-1.5 text-caption text-text-primary/90">
            <span style={{ color: accent }}>
              <Icon src="/assets/icons/check.svg" size={14} />
            </span>
            <span>{category.selectionCount || "100+"} Selections</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
