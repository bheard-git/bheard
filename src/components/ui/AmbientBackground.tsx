import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  variant: "dots" | "grid" | "skyline" | "mesh";
  className?: string;
}

function Pattern({ variant }: Pick<AmbientBackgroundProps, "variant">) {
  if (variant === "dots") {
    return (
      <>
        {Array.from({ length: 6 }, (_, row) =>
          Array.from({ length: 12 }, (_, column) => (
            <circle
              key={`${row}-${column}`}
              cx={24 + column * 64}
              cy={22 + row * 34}
              r={1.2}
              fill="currentColor"
            />
          ))
        )}
      </>
    );
  }

  if (variant === "grid") {
    return (
      <>
        {Array.from({ length: 13 }, (_, index) => (
          <path
            key={`vertical-${index}`}
            d={`M${index * 64} 0V240`}
            stroke="currentColor"
            strokeWidth="0.7"
          />
        ))}
        {Array.from({ length: 7 }, (_, index) => (
          <path
            key={`horizontal-${index}`}
            d={`M0 ${index * 40}H800`}
            stroke="currentColor"
            strokeWidth="0.7"
          />
        ))}
      </>
    );
  }

  if (variant === "skyline") {
    return (
      <>
        <path
          d="M0 205H72V168H116V194H158V136H204V180H258V120H310V171H364V148H408V188H464V108H522V164H574V132H626V178H680V146H730V194H800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M0 216H88V190H144V210H220V166H286V204H350V184H426V214H492V174H556V207H640V188H714V216H800"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.65"
        />
      </>
    );
  }

  return (
    <>
      <path
        d="M-20 60C110 4 172 132 300 68S510 8 820 84"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M-20 112C110 56 190 184 328 116S558 50 820 126"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <path
        d="M-20 166C128 104 222 230 374 158S616 98 820 174"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
      />
    </>
  );
}

export function AmbientBackground({ variant, className }: AmbientBackgroundProps) {
  return (
    <div
      className={cn("ambient-layer text-orange-400", className)}
      aria-hidden="true"
    >
      <svg
        className="ambient-drift h-full w-[calc(100%+36px)]"
        viewBox="0 0 800 240"
        fill="none"
        preserveAspectRatio="none"
      >
        <Pattern variant={variant} />
      </svg>
    </div>
  );
}
