import Image from "next/image";
import { cn } from "@/lib/utils";
import type { LeadershipMember } from "@/lib/types";

interface LeadershipCardProps {
  member: LeadershipMember;
  className?: string;
}

/** Filled LinkedIn mark (not the stroke outline icon) */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function LeadershipCard({ member, className }: LeadershipCardProps) {
  return (
    <article
      className={cn(
        "card-base card-premium-hover relative overflow-hidden flex flex-row items-stretch min-w-[280px] w-[300px] md:w-[340px] min-h-[190px] rounded-[6px]",
        className
      )}
    >
      <div className="relative w-[48%] min-h-[190px] shrink-0 bg-bg-tertiary">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-contain object-bottom"
          sizes="160px"
        />
      </div>

      <div className="relative z-10 flex-1 p-3 md:p-3.5 flex flex-col min-w-0">
        <h3 className="text-body font-semibold text-text-primary leading-snug">
          {member.name}
        </h3>
        <p className="mt-1 text-body-sm text-orange-400 font-medium">{member.role}</p>

        <div className="mt-2 pt-2 border-t border-border-default">
          <p className="text-body-sm text-text-muted leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        </div>

        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto self-end inline-flex items-center justify-center w-8 h-8 rounded-full bg-transparent border border-white text-white hover:border-orange-400 hover:text-orange-400 transition-colors"
            aria-label={`${member.name} on LinkedIn`}
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
