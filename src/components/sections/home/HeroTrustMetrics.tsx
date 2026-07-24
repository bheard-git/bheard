import Image from "next/image";
import { TRUST_METRICS } from "@/lib/constants";

const STUDENT_AVATARS = [
  "/assets/images/results/arjun-patel.jpg",
  "/assets/images/results/sneha-rao.jpg",
  "/assets/images/results/priya-gupta.jpg",
  "/assets/images/results/meera-krishnan.jpg",
];

export function HeroTrustMetrics() {
  return (
    <div className="mt-3 flex flex-wrap items-center justify-center gap-4 md:gap-5">
      {TRUST_METRICS.map((metric) => (
        <div key={metric.id} className="group/metric flex items-center gap-2.5">
          {metric.id === "students" ? (
            <div className="flex -space-x-2.5 shrink-0 transition-[transform,filter] duration-300 group-hover/metric:scale-105 group-hover/metric:drop-shadow-[0_0_8px_rgba(249,115,22,0.24)]">
              {STUDENT_AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-bg-primary"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="32px"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative w-8 h-8 shrink-0 transition-[transform,filter] duration-300 group-hover/metric:scale-105 group-hover/metric:drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
              <Image
                src={metric.icon}
                alt=""
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
          )}
          <div>
            <div className="text-body-sm font-bold text-text-primary leading-none">
              {metric.value}
            </div>
            <div className="text-caption text-white mt-0.5">{metric.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
