import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { CounsellingCtaAction } from "@/components/sections/CounsellingCtaAction";

interface CTABandV2Props {
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
  const isOrangeOutline = outline === "orange";

  const className = cn(
    "btn-outlined-premium premium-border-glow shine-sweep shine-sweep-outline inline-flex items-center justify-center text-body-sm px-5 py-2.5 rounded-[6px] whitespace-nowrap bg-transparent transition-colors font-semibold w-full sm:w-auto",
    variant === "decorated" ? "gap-2" : "gap-1.5",
    isOrangeOutline
      ? "glow-accent-orange border border-orange-500 text-white hover:bg-orange-500/10"
      : "glow-accent-silver border border-white text-white hover:bg-white/10"
  );

  return (
    <CounsellingCtaAction action={action} className={className}>
      {action.label}
      {variant === "decorated" && (
        <Icon src="/assets/icons/arrow-right.svg" size={14} className="text-orange-500" />
      )}
    </CounsellingCtaAction>
  );
}

export function CTABandV2({
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
}: CTABandV2Props) {
  const isDecorated = Boolean(decorativeImage);
  const isImageBg = Boolean(backgroundImage);
  const hasBuddy = Boolean(tertiaryAction && /buddy/i.test(tertiaryAction.label));

  return (
    <section id="site-footer-cta" data-home-zone="cta" className={cn("home-section-spacing pt-6 md:pt-8 bg-[#FFF3E8]", className)}>
      <div className="container-rodha">
        <div
          className={cn(
            "relative overflow-hidden rounded-[8px] md:rounded-s-xl border border-orange-500/30","px-5 md:px-8")}
        >
          {isImageBg && backgroundImage && (
            <div className="">
              <Image
                src={backgroundImage}
                alt=""
                fill
                className="object-cover object-[right_center] pointer-events-none"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={false}
              />
            </div>
          )}

          <div className="flex flex-col-reverse md:flex-row items-center gap-5 lg:gap-24 pt-10 md:pt-0">
          {decorativeImage && (
            <div className="pointer-events-none relative flex shrink-0 h-60 md:h-[310px] w-[270px] md:w-[260px] xl:w-[339px]">
              <Image
                src={decorativeImage}
                alt=""
                fill
                className="object-contain object- object-bottom"
                sizes="30vw"
              />
            </div>
          )}
            <div
              className={cn(
                "relative z-10  flex-col gap-5 md:gap-6",""
              )}
            >

              <div className={cn("min-w-0", "")}>
                <h2 className="text-h3 md:text-[30px] lg:text-4xl font-medium font-montserrat leading-tight">                    <>
                      <span className="block">
                        {title}
                      </span>
                      <span className="block">{titleAccent}</span>
                    </>
                </h2>
                {subtitle && (
                  <p
                    className={cn(
                      "mt-2.5 text-body max-w-xl","text-[#D1D5DB]"
                    )}
                  >
                    {subtitle}
                  </p>
                )}
              </div>

              <div
                className={cn(
                  "flex gap-3  flex-col md:flex-row items-stretch sm:items-center shrink-0 w-full sm:w-auto mt-7.5",
                )}
              >
                <CounsellingCtaAction
                  action={primaryAction}
                  className="btn-primary btn-primary-premium premium-border-glow glow-accent-orange px-5 py-2.5 rounded-[6px] whitespace-nowrap text-center w-full sm:w-auto"
                />
                {secondaryAction && (
                  <>
                    {!isDecorated && !tertiaryAction && !isImageBg && (
                      <div className="hidden sm:block w-px h-8 bg-white/20 shrink-0" aria-hidden />
                    )}
                    <SecondaryCta
                      action={secondaryAction}
                      variant={"default"}
                      outline={isImageBg ? secondaryOutline : "white"}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
