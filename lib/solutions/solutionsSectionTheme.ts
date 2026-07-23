import {
  sectionContentBand,
  sectionStackBottom,
  sectionStackTop,
} from "@/components/system/sectionTheme";

/** Homepage-aligned content band for solutions pages (non-rail sections). */
export const solutionsHomeBand = sectionContentBand;

/** Full vertical padding when the next/previous section uses a different background. */
export const solutionsBandPad = "py-10 md:py-14";

/** Single-side spacing when consecutive sections share the same background. */
export const solutionsStackBottom = sectionStackBottom;
export const solutionsStackTop = sectionStackTop;
