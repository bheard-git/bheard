import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { FacultyCourseTaught } from "@/lib/types";

interface FacultyCourseCardProps {
  course: FacultyCourseTaught;
  className?: string;
}

export function FacultyCourseCard({ course, className }: FacultyCourseCardProps) {
  const isExternal = course.href.startsWith("http");
  const classes = cn(
    "card-base card-premium-hover premium-border-glow hover-shine group flex flex-col rounded-xl bg-bg-secondary p-5 h-full min-h-[160px]",
    className
  );

  const content = (
    <>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15 text-orange-500 transition-[transform,filter] duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
        <Icon src={course.icon} size={18} />
      </div>

      <h3 className="mt-4 text-body font-semibold text-text-primary leading-snug line-clamp-2">
        {course.title}
      </h3>
      <p className="mt-1 text-caption text-text-dimmed">{course.subtitle}</p>

      <div className="mt-auto pt-5 flex items-center justify-between gap-3 text-caption text-text-muted">
        <span className="inline-flex items-center gap-1.5 min-w-0">
          <Icon src="/assets/icons/check.svg" size={12} className="text-orange-500" />
          <span className="truncate">{course.lectures}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 min-w-0">
          <Icon src="/assets/icons/check.svg" size={12} className="text-orange-500" />
          <span className="truncate">{course.enrolled}</span>
        </span>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={course.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={course.href} className={classes}>
      {content}
    </Link>
  );
}
