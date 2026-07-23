"use client";

import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

type DbErrorStateProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

export default function DbErrorState({
  title = "Unable to load content",
  message = "We could not reach the database. Please try again in a moment.",
  onRetry,
}: DbErrorStateProps) {
  return (
    <div className={`${sectionPageX} py-section-y-sm md:py-section-y`}>
      <div
        className={`${sectionContentBand} flex min-h-[40vh] flex-col items-start justify-center gap-4`}
        role="alert"
      >
        <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">Connection issue</p>
        <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background">{title}</h2>
        <p className="max-w-xl font-body text-base leading-relaxed text-on-surface-variant">{message}</p>
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="mt-2 inline-flex items-center gap-2 border-b border-primary pb-1 font-label text-sm font-bold uppercase tracking-[0.16em] text-on-background transition-opacity hover:opacity-80"
          >
            Try again
          </button>
        ) : (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-2 inline-flex items-center gap-2 border-b border-primary pb-1 font-label text-sm font-bold uppercase tracking-[0.16em] text-on-background transition-opacity hover:opacity-80"
          >
            Refresh page
          </button>
        )}
      </div>
    </div>
  );
}
