"use client";

import Image from "next/image";
import Link from "next/link";
import { publicAsset } from "@/lib/utils/publicAsset";

const statsAsset = (...file: string[]) => publicAsset("assets", "brand solutions", "stats", ...file);

type CollageImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const COLLAGE_IMAGES: CollageImage[] = [
  {
    id: "visits",
    src: statsAsset("visits stats .png"),
    alt: "Instagram profile visits growth chart",
    width: 611,
    height: 697,
  },
  {
    id: "radisson",
    src: statsAsset("Copy of Influencer collab case study - radisson blu.png"),
    alt: "Radisson Blu influencer collaboration campaign",
    width: 1080,
    height: 1350,
  },
  {
    id: "monthly",
    src: statsAsset("Insta Monthly Views stats .png"),
    alt: "Instagram monthly views growth chart",
    width: 552,
    height: 517,
  },
  {
    id: "pool",
    src: statsAsset("Pool Breakfast creative.jpg"),
    alt: "Pool breakfast hospitality creative",
    width: 6000,
    height: 4000,
  },
  {
    id: "dexa",
    src: statsAsset("dexa scan creative.jpeg"),
    alt: "DEXA scan brand campaign creative",
    width: 720,
    height: 540,
  },
  {
    id: "insights",
    src: statsAsset("insta insights stats.png"),
    alt: "Instagram insights analytics dashboard",
    width: 856,
    height: 797,
  },
  {
    id: "drink",
    src: statsAsset("Drink creative.png"),
    alt: "Beverage brand social creative",
    width: 1080,
    height: 1440,
  },
  {
    id: "dotts",
    src: statsAsset("dotts creative.jpeg"),
    alt: "Dotts brand campaign creative",
    width: 800,
    height: 800,
  },
  {
    id: "soulfulgoa",
    src: statsAsset("soulfulgoa creative.jpeg"),
    alt: "Soulful Goa destination creative",
    width: 1200,
    height: 1200,
  },
  {
    id: "alpha",
    src: statsAsset("Alpha brand creative.png"),
    alt: "Alpha brand campaign creative",
    width: 1254,
    height: 1254,
  },
  {
    id: "shammi",
    src: statsAsset("shammi's yogalaya creative.png"),
    alt: "Shammi's Yogalaya brand creative",
    width: 1080,
    height: 1350,
  },
  {
    id: "brand-collab",
    src: statsAsset("brand collab.jpeg"),
    alt: "Brand collaboration campaign creative",
    width: 745,
    height: 1024,
  },
];

/** Packed by native aspect ratio to minimize unused row width at a shared row height. */
const ROW_1_IDS = ["visits", "radisson", "monthly"] as const;
const ROW_2_IDS = ["pool", "dexa", "insights", "drink"] as const;
const ROW_3_IDS = ["dotts", "soulfulgoa", "alpha", "shammi", "brand-collab"] as const;

const ROW_GAP = "gap-1.5 md:gap-2";

function imageById(id: string) {
  const image = COLLAGE_IMAGES.find((item) => item.id === id);
  if (!image) throw new Error(`Missing collage image: ${id}`);
  return image;
}

function aspectFr(image: CollageImage) {
  return `${image.width / image.height}fr`;
}

function CollageImageCard({ image }: { image: CollageImage }) {
  return (
    <div className="overflow-hidden border border-inverse-surface/10">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 46vw, 24vw"
      />
    </div>
  );
}

function CollageImageRow({ images }: { images: CollageImage[] }) {
  return (
    <div
      className={`grid min-w-0 ${ROW_GAP}`}
      style={{ gridTemplateColumns: images.map(aspectFr).join(" ") }}
    >
      {images.map((image) => (
        <CollageImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

function IntroCopy() {
  return (
    <div className="flex min-w-0 flex-col justify-between">
      <div>
        <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">Brand Results</p>
        <h2 className="mt-3 font-headline text-[clamp(1.25rem,2.5vw,1.85rem)] font-black uppercase leading-tight tracking-tight text-on-background">
          Strategy that connects. Work that performs.
        </h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
          Performance metrics and creative assets from campaigns where memorability turned into measurable lift.
        </p>
      </div>
      <Link
        href="/work"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-on-background px-4 py-2.5 font-headline text-xs font-bold uppercase tracking-widest text-on-background transition-colors hover:bg-on-background hover:text-surface md:mt-8"
      >
        View Case Studies <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

function TitleRow({ images }: { images: CollageImage[] }) {
  return (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        <IntroCopy />
        <CollageImageRow images={images} />
      </div>
      <div
        className={`hidden min-w-0 md:grid ${ROW_GAP}`}
        style={{
          gridTemplateColumns: `minmax(17rem, 22.5rem) ${images.map(aspectFr).join(" ")}`,
        }}
      >
        <IntroCopy />
        {images.map((image) => (
          <CollageImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
}

export default function BrandResultsBento() {
  const row1 = ROW_1_IDS.map(imageById);
  const row2 = ROW_2_IDS.map(imageById);
  const row3 = ROW_3_IDS.map(imageById);

  return (
    <div className="flex flex-col gap-1.5 md:gap-2">
      <div className="pb-6 md:pb-8">
        <TitleRow images={row1} />
      </div>
      <CollageImageRow images={row2} />
      <CollageImageRow images={row3} />
    </div>
  );
}
