
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface YoutubeStoryCardProps {
  youtubeId: string;
  student: string;
  subtitle: string;
  className?: string;
}

export function YoutubeStoryCard({
  youtubeId,
  student,
  subtitle,
  className,
}: YoutubeStoryCardProps) {
  return (
    <button
      type="button"
      data-youtube-id={youtubeId}
      className={cn(
        "group w-[300px] max-w-[300px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-border-default bg-bg-secondary text-left transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={student}
          fill
          sizes="300px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-black shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <Play
              className="ml-1 h-6 w-6"
              fill="currentColor"
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-1 font-semibold text-text-primary">
          {student}
        </h3>

        <p className="mt-1 text-sm text-text-muted">
          {subtitle}
        </p>
      </div>
    </button>
  );
}