import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CTABandProps {
  title: string;
  subtitle?: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  className?: string;
}

export function CTABand({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  className,
}: CTABandProps) {
  return (
    <section className={cn("section-spacing pt-6 md:pt-8", className)}>
      <div className="container-rodha">
        <div className="relative overflow-hidden rounded-[6px] border border-orange-500/30 bg-bg-secondary px-5 py-6 md:px-8 md:py-7">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 70% at 20% 50%, rgba(249,115,22,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 md:gap-6 text-center md:text-left">
            <div className="shrink-0 relative w-14 h-14 flex items-center justify-center">
              <Image
                src="/assets/images/icons/CAT-icon.png"
                alt=""
                width={56}
                height={56}
                className="relative z-10 w-14 h-14 object-contain"
              />
            </div>

            <div className="hidden md:block w-px h-12 bg-white/20 shrink-0" aria-hidden />

            <div className="flex-1 min-w-0">
              <h2 className="text-h3 md:text-h2 font-bold">{title}</h2>
              {subtitle && (
                <p className="mt-1 text-body text-text-muted max-w-xl">{subtitle}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <Link
                href={primaryAction.href}
                className="btn-primary text-body-sm px-5 py-2.5 rounded-[6px] whitespace-nowrap"
              >
                {primaryAction.label}
              </Link>
              {secondaryAction && (
                <>
                  <div className="hidden sm:block w-px h-8 bg-white/20 shrink-0" aria-hidden />
                  {secondaryAction.href.startsWith("http") ? (
                    <a
                      href={secondaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-body-sm px-5 py-2.5 rounded-[6px] whitespace-nowrap border border-white text-white bg-transparent hover:bg-white/10 transition-colors font-semibold"
                    >
                      {secondaryAction.label}
                    </a>
                  ) : (
                    <Link
                      href={secondaryAction.href}
                      className="inline-flex items-center justify-center text-body-sm px-5 py-2.5 rounded-[6px] whitespace-nowrap border border-white text-white bg-transparent hover:bg-white/10 transition-colors font-semibold"
                    >
                      {secondaryAction.label}
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
