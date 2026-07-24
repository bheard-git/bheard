import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { FACULTY_ACHIEVEMENT_IMAGE } from "@/data/faculty";

interface FacultyAchievementCardProps {
  title?: string;
  items: string[];
  illustration?: string;
  className?: string;
}

export function FacultyAchievementCard({
  title = "Achievements & Credentials",
  items,
  illustration = FACULTY_ACHIEVEMENT_IMAGE,
  className,
}: FacultyAchievementCardProps) {
  return (
    <div
      className={cn(
        "card-base card-premium-hover premium-border-glow hover-shine relative overflow-hidden flex flex-col rounded-xl bg-bg-secondary p-5 md:p-6 h-full",
        className
      )}
    >
      <h3 className="text-h4 font-semibold text-text-primary relative z-10">{title}</h3>

      <ul className="mt-4 space-y-3 relative z-10 pr-[28%] md:pr-[32%]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-body-sm text-text-secondary">
            <Icon
              src="/assets/icons/check.svg"
              size={14}
              className="text-orange-500 mt-0.5 shrink-0"
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[42%] max-w-[180px] aspect-square ambient-drift"
        aria-hidden
      >
        <Image
          src={illustration}
          alt=""
          fill
          className="object-contain object-bottom object-right"
          sizes="180px"
        />
      </div>
    </div>
  );
}
