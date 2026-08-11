"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

interface ExamCardV2Props {
  category: Category;
  className?: string;
  onCounsellingSelect?: (category: Category) => void;
}

export function ExamCardV2({
  category,
  className,
  onCounsellingSelect,
}: ExamCardV2Props) {
  const cardStyle = {
    background: `
      linear-gradient(#0E0500, #0E0500) padding-box,
      linear-gradient(
        90deg,
        #211108 0%,
        #ad6539 21%,
        #2a170b 38%,
        #2a170b 56%,
        transparent 68%,
        #2f1b0f 90%
      ) border-box
    `,
    border: "1px solid transparent",
  };

  const cardClassName = cn(
    "group relative flex w-full flex-col overflow-hidden",
    "rounded-[24px]",
    "p-4 md:p-6",
    "text-left",
    "transition-transform duration-300",
    "hover:-translate-y-1",
    className
  );

  const content = (
    <>
      {/* Category / Logo Image */}
      {category.icon && (
        <div className="relative z-10 mx-auto h-[65px] w-full max-w-[290px]">
          <Image
            src={category.icon}
            alt=""
            fill
            className="object-contain mx-auto object-left"
            sizes="290px"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mt-4">
        <h3
          className="text-[14px] font-medium leading-[1.2] tracking-tight 2xl:text-[15px] 2xl:leading-[20px]"
          style={{
            color: "#B6B6B6",
          }}
        >
          {category.description}
        </h3>
      </div>

      {/* Bottom Illustration */}
      {category.image && (
        <div className="h-[113px] w-full duration-300 group-hover:scale-[1.04] relative mt-6">
          <Image
            src={category.image}
            alt=""
            fill
            className="object-contain object-center"
            sizes="260px"
          />
        </div>
      )}
    </>
  );

  if (onCounsellingSelect) {
    return (
      <button
        type="button"
        onClick={() => onCounsellingSelect(category)}
        className={cardClassName}
        style={cardStyle}
        aria-label={`Book free counselling for ${category.name}`}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={`/${category.slug}`}
      className={cardClassName}
      style={cardStyle}
    >
      {content}
    </Link>
  );
}