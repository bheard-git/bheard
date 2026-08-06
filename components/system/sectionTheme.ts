/** Shared horizontal padding for full-width marketing sections */
export const sectionPageX = "px-4 md:px-8";

export const pageHeroPaddingTop = "py-20 md:py-24";

/** Inner content band — pair with `sectionPageX` on the parent section, never combine with horizontal padding */
export const sectionContentBand = "mx-auto w-full max-w-7xl";

/** Default vertical padding for major sections (hero-scale blocks) */
export const sectionPageY = "py-20 md:py-24";

/**
 * Standard vertical rhythm for a full marketing band (title + content).
 * Use for sections that are not “stacked” against the same background.
 */
export const sectionBandY = "py-20 md:py-24";

/** Slightly tighter band (e.g. belief intro after hero) */
export const sectionBandYCompact = "py-16 md:py-20";

/** Tighter vertical padding (legacy alias — prefer `sectionBandY`) */
export const sectionPageYTight = sectionBandY;

/** Margin below display-scale section titles (Selected Works, About) */
export const sectionTitleMarginDisplay = "mb-16";

/** Margin below compact section titles (Services band, Clients, variant headers) */
export const sectionTitleMarginCompact = "mb-10 md:mb-12";

/**
 * When two consecutive sections share the same background token, pair
 * **stack bottom** on the upper band with **stack top** on the lower band
 * so the seam does not read as double padding.
 */
export const sectionStackBottom = "pb-20 md:pb-24";
export const sectionStackTop = "pt-20 md:pt-24";
