import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TopperResult } from "@/lib/types";

interface TopperCardV2Props {
  topper: TopperResult;
  className?: string;
}

export function TopperCardV2({ topper, className }: TopperCardV2Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[6px] border border-border-default bg-[#0C0500] min-w-[204px] h-[316px] group card-premium-hover hover-shine",
        className
      )}
    >
      <div className="h-41.5  w-[204px] relative">
        <Image
          src={topper.image || "/assets/images/placeholders/topper-photo.svg"}
          alt={topper.name}
          fill
          className="object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-500"
          sizes="180px"
        />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" /> */}

      <div className="absolute top-3 left-3 z-10 text-left">
        <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wide bg-white/5 text-[#F06B23] transition-[filter,box-shadow] duration-300 group-hover:brightness-110 group-hover:shadow-orange-lg">
          AIR
        </span>
      </div>

      <div className="p-3 z-10 text-left border-image-gradient-t">
        <div className="mt-1.5 text-[34px] lg:font-[38px] font-montserrat font-bold text-orange-500 leading-none tabular-nums">
          {topper.rank}
        </div>
        <p className="text-sm text-[#C0C0C0] mt-1 font-medium">{topper.exam}</p>
        <h4 className="text-base leading-6 font-bold mt-2 text-text-primary truncate">
          {topper.name}
        </h4>
        <p className="text-sm text-[#7C5F4D] truncate mt-0.5">{topper.college}</p>
      </div>
    </div>
  );
}
