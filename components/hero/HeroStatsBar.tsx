"use client";

import CountUp from "@/components/motion/CountUp";

const HERO_STATS = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Brands Partnered With" },
  { value: 200, suffix: "+", label: "Campaigns & Digital Launches" },
] as const;

function StatDivider() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-1/2 hidden h-14 -translate-x-1/2 -translate-y-1/2 sm:block"
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-900/[0.1]" />
      <span className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary" />
    </span>
  );
}

export default function HeroStatsBar() {
  return (
    <section
      aria-label="Agency highlights"
      className="hero-stats pointer-events-auto mt-5 border-t border-neutral-900/[0.08] py-7 sm:mt-6 sm:py-8"
    >
      <ol className="m-0 grid list-none grid-cols-3 gap-y-0 p-0">
        {HERO_STATS.map((stat, index) => (
          <li
            key={stat.label}
            className="group relative flex flex-col items-center px-2 text-center min-[480px]:px-4 md:px-6 lg:px-8"
          >
            {index > 0 ? <StatDivider /> : null}

            <div
              data-anim="hero-stat"
              className="flex flex-col items-center opacity-0 motion-reduce:opacity-100"
            >
              <h3 className="font-headline text-[clamp(2.25rem,5.5vw,5.5rem)] font-extrabold leading-none tracking-[-0.06em] text-neutral-900 transition-colors duration-300 ease-out group-hover:text-primary">
                <CountUp to={stat.value} duration={2} delay={index * 0.06} />
                <span className="transition-colors duration-300 ease-out group-hover:text-primary">
                  {stat.suffix}
                </span>
              </h3>
              <p className="mt-2 max-w-[5.5rem] text-[9px] font-medium uppercase leading-tight tracking-[0.18em] text-[#8a8a8a] min-[480px]:max-w-none min-[480px]:text-[11px] min-[480px]:tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
