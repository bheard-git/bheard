import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

interface CTABandProps {
  title: string;
  /** Orange accent phrase rendered inline with the title (home CTA variant) */
  titleAccent?: string;
  subtitle?: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  /** Optional third CTA (e.g. Ask Rodha Buddy on faculty detail) */
  tertiaryAction?: { label: string; href: string };
  /** Decorative image on the left (e.g. Meet the Team CTA) */
  decorativeImage?: string;
  /** Full-bleed background image (home CTA variant) */
  backgroundImage?: string;
  /** Secondary button border style */
  secondaryOutline?: "white" | "orange";
  className?: string;
}

function SecondaryCta({
  action,
  variant,
  outline,
}: {
  action: { label: string; href: string };
  /** decorated = white border + orange arrow (team page); default = white border only */
  variant: "default" | "decorated";
  outline?: "white" | "orange";
}) {
  const isCounselling = /counselling/i.test(action.label);
  const isOrangeOutline = outline === "orange";

  const className = cn(
    "btn-outlined-premium premium-border-glow shine-sweep shine-sweep-outline inline-flex items-center justify-center text-body-sm px-5 py-2.5 rounded-[6px] whitespace-nowrap bg-transparent transition-colors font-semibold w-full sm:w-auto",
    variant === "decorated" ? "gap-2" : "gap-1.5",
    isOrangeOutline
      ? "glow-accent-orange border border-orange-500 text-white hover:bg-orange-500/10"
      : "glow-accent-silver border border-white text-white hover:bg-white/10"
  );

  const content = (
    <>
      {action.label}
      {variant === "decorated" && (
        <Icon src="/assets/icons/arrow-right.svg" size={14} className="text-orange-500" />
      )}
    </>
  );

  if (action.href.startsWith("http")) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...(isCounselling ? { "data-counselling-cta": true } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={action.href}
      className={className}
      {...(isCounselling ? { "data-counselling-cta": true } : {})}
    >
      {content}
    </Link>
  );
}

export function CTABand({
  title,
  titleAccent,
  subtitle,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  decorativeImage,
  backgroundImage,
  secondaryOutline = "white",
  className,
}: CTABandProps) {
  const isDecorated = Boolean(decorativeImage);
  const isImageBg = Boolean(backgroundImage);
  const primaryIsCounselling = /counselling/i.test(primaryAction.label);
  const hasBuddy = Boolean(tertiaryAction && /buddy/i.test(tertiaryAction.label));

  return (
    <section id="site-footer-cta" className={cn("section-spacing pt-6 md:pt-8", className)}>
      <div className="container-rodha">
        <div
          className={cn(
            "relative overflow-hidden rounded-[6px] border border-orange-500/30",
            isImageBg
              ? "bg-bg-secondary min-h-[160px] md:min-h-[200px] px-5 py-8 md:px-8 md:py-10"
              : cn(
                  "bg-bg-secondary surface-gradient-cta premium-border-glow shine-sweep",
                  isDecorated
                    ? "min-h-[160px] md:min-h-[180px] px-5 py-7 md:px-8 md:py-8"
                    : "px-5 py-6 md:px-8 md:py-7"
                )
          )}
        >
          {isImageBg && backgroundImage && (
            <>
              <Image
                src={backgroundImage}
                alt=""
                fill
                className="object-cover object-[right_center] pointer-events-none"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={false}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/30 via-black/10 to-transparent"
                aria-hidden
              />
            </>
          )}

          {!isImageBg && (
            <>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: isDecorated
                    ? "radial-gradient(ellipse 50% 80% at 85% 50%, rgba(249,115,22,0.18) 0%, transparent 65%), radial-gradient(ellipse 45% 70% at 15% 60%, rgba(249,115,22,0.08) 0%, transparent 70%)"
                    : "radial-gradient(ellipse 55% 70% at 18% 50%, rgba(249,115,22,0.12) 0%, transparent 70%)",
                }}
              />
              <div
                className="pointer-events-none absolute -right-16 top-1/2 h-36 w-72 -translate-y-1/2"
                aria-hidden
              >
                <div className="ambient-drift h-full w-full rounded-full bg-orange-500/10 blur-3xl" />
              </div>
              <AmbientBackground variant="skyline" />
            </>
          )}

          {decorativeImage && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[42%] sm:w-[36%] md:w-[30%] lg:w-[28%]">
              <Image
                src={decorativeImage}
                alt=""
                fill
                className="object-cover object-left object-center"
                sizes="30vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 55%, var(--bg-secondary) 100%)",
                }}
              />
            </div>
          )}

          <div
            className={cn(
              "relative z-10 flex gap-5 md:gap-6",
              isImageBg
                ? "flex-col lg:flex-row lg:items-center lg:justify-between text-left"
                : cn(
                    "flex-col md:flex-row items-center",
                    isDecorated
                      ? "text-center md:text-left md:pl-[20%] xl:pl-[26%]"
                      : "text-center md:text-left"
                  )
            )}
          >
            {!isDecorated && !isImageBg && (
              <>
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
              </>
            )}

            <div className={cn("min-w-0", !isImageBg && "flex-1")}>
              <h2 className="text-h3 md:text-h2 font-bold leading-tight">
                {title}
                {titleAccent && (
                  <>
                    {isImageBg ? <br /> : " "}
                    <span className="text-orange-500">{titleAccent}</span>
                  </>
                )}
              </h2>
              {subtitle && (
                <p
                  className={cn(
                    "mt-1 text-body max-w-xl",
                    isImageBg ? "text-white/80" : "text-text-muted"
                  )}
                >
                  {subtitle}
                </p>
              )}
            </div>

            <div
              className={cn(
                "flex gap-3 items-stretch sm:items-center shrink-0 w-full sm:w-auto",
                isImageBg
                  ? "flex-col sm:flex-row"
                  : cn(
                      "flex-col sm:flex-row md:gap-2.5",
                      tertiaryAction ? "md:flex-row lg:flex-row" : "md:flex-col lg:flex-row"
                    )
              )}
            >
              <Link
                href={primaryAction.href}
                className="btn-primary btn-primary-premium premium-border-glow glow-accent-orange text-body-sm px-5 py-2.5 rounded-[6px] whitespace-nowrap text-center w-full sm:w-auto"
                {...(primaryIsCounselling ? { "data-counselling-cta": true } : {})}
              >
                {primaryAction.label}
              </Link>
              {secondaryAction && (
                <>
                  {!isDecorated && !tertiaryAction && !isImageBg && (
                    <div className="hidden sm:block w-px h-8 bg-white/20 shrink-0" aria-hidden />
                  )}
                  <SecondaryCta
                    action={secondaryAction}
                    variant={isDecorated && !tertiaryAction ? "decorated" : "default"}
                    outline={isImageBg ? secondaryOutline : "white"}
                  />
                </>
              )}
              {tertiaryAction && (
                <a
                  href={tertiaryAction.href}
                  target={tertiaryAction.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    tertiaryAction.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="btn-outlined-premium premium-border-glow glow-accent-silver shine-sweep shine-sweep-outline inline-flex items-center justify-center gap-2 text-body-sm px-5 py-2.5 rounded-[6px] whitespace-nowrap border border-white text-white bg-transparent hover:bg-white/10 transition-colors font-semibold w-full sm:w-auto"
                >
                  {hasBuddy && (
                    <Icon src="/assets/icons/ai-buddy.svg" size={16} className="text-orange-400" />
                  )}
                  {tertiaryAction.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
