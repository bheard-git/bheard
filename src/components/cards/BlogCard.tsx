import Link from "next/link";
import Image from "next/image";
import { cn, formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "relative overflow-hidden rounded-[6px] border border-border-default group block card-hover h-full min-h-[160px]",
        featured ? "min-h-[360px] md:min-h-full" : "min-h-[180px] md:min-h-[200px]",
        className
      )}
    >
      <Image
        src={post.image || "/assets/images/placeholders/blog-thumbnail.svg"}
        alt={post.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes={featured ? "(max-width: 768px) 100vw, 30vw" : "(max-width: 768px) 100vw, 25vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

      <div className="absolute top-3 left-3 z-10">
        <Badge variant={featured ? "primary" : "outline"} size="sm">
          {featured ? "Featured" : post.category}
        </Badge>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3.5 md:p-4 z-10 text-left">
        <div className="flex items-center gap-2 text-caption text-text-secondary">
          <span>{post.readTime}</span>
          <span>&middot;</span>
          <span>
            {formatDate(post.publishedAt, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <h3
          className={cn(
            "mt-1.5 font-semibold text-text-primary group-hover:text-orange-400 transition-colors",
            featured ? "text-h3 md:text-h2 line-clamp-3" : "text-body line-clamp-2"
          )}
        >
          {post.title}
        </h3>
      </div>
    </Link>
  );
}
