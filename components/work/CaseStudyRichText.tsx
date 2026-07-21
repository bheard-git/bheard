import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const linkClass = "font-semibold text-primary underline-offset-4 hover:underline";

export default function CaseStudyRichText({
  content,
  className = "",
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        p: ({ children }) => (
          <p className="font-body text-base leading-relaxed text-on-surface-variant md:text-lg [&+p]:mt-4">
            {children}
          </p>
        ),
        a: ({ href, children }) => {
          const isInternal = href?.startsWith("/");
          if (isInternal && href) {
            return (
              <Link href={href} className={linkClass}>
                {children}
              </Link>
            );
          }
          return (
            <a href={href} className={linkClass} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
    </div>
  );
}
