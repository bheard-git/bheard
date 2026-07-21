import Image from "next/image";
import { MessageSquare, Mic, Sparkles } from "lucide-react";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { aiGuestBandYFollow, aiGuestContainer, sectionBgWhite } from "./sectionTheme";

const iconMap = {
  "message-square": MessageSquare,
  mic: Mic,
  sparkles: Sparkles,
} as const;

export default function ChannelIntegrationStrip() {
  const { channels } = aiGuestAgentsContent;

  return (
    <section className={`${sectionBgWhite} ${aiGuestBandYFollow}`}>
      <div className={aiGuestContainer}>
        <div className="flex flex-col gap-5 border-y border-outline-variant/60 bg-surface-container-low py-4 md:flex-row md:items-center md:gap-8 md:py-5">
          <p className="shrink-0 font-label text-label-sm uppercase tracking-[0.15em] text-on-surface-variant">
            {channels.label}
          </p>

          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
            {channels.items.map((item, i) => {
              const isLast = i === channels.items.length - 1;
              const dividerClass = !isLast ? "lg:border-r lg:border-outline-variant/60" : "";

              if (item.icon === "whatsapp") {
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col items-center justify-center gap-1.5 px-2 text-center ${dividerClass}`}
                  >
                    <Image
                      src="/assets/tech solutions/technologies/whatsapp-business-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                      aria-hidden
                    />
                    <span className="font-body text-xs font-medium text-on-background md:text-sm">{item.label}</span>
                  </div>
                );
              }

              if (item.icon === "facebook") {
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col items-center justify-center gap-1.5 px-2 text-center ${dividerClass}`}
                  >
                    <Image
                      src="/assets/tech solutions/technologies/Facebook.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                      aria-hidden
                    />
                    <span className="font-body text-xs font-medium text-on-background md:text-sm">{item.label}</span>
                  </div>
                );
              }

              if (item.icon === "instagram") {
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col items-center justify-center gap-1.5 px-2 text-center ${dividerClass}`}
                  >
                    <Image
                      src="/assets/tech solutions/technologies/meta-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                      aria-hidden
                    />
                    <span className="font-body text-xs font-medium text-on-background md:text-sm">{item.label}</span>
                  </div>
                );
              }

              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center justify-center gap-1.5 px-2 text-center ${dividerClass}`}
                >
                  {Icon ? <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden /> : null}
                  <span className="font-body text-xs font-medium text-on-background md:text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
