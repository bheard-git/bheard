# Component Guidelines

## Principles

1. **Reuse first** — check [REUSABLE_INVENTORY.md](REUSABLE_INVENTORY.md)
2. **Component-first** — extract reusable UI before page-specific markup
3. **Composable** — prefer props + composition over page coupling
4. **Scalable** — new components should support reuse across categories/pages when practical

---

## Folder Responsibilities

| Folder | Use for | Examples |
|--------|---------|----------|
| `components/ui/` | Atomic primitives | Button, Input, Modal, Accordion, Carousel |
| `components/layout/` | Site chrome | Header, Footer, Container, MobileNav, PromotionalBanner |
| `components/sections/` | Full-width page sections | HeroSection, TrustBar, CTABand, SectionHeader |
| `components/cards/` | Domain cards | CourseCard, FacultyCard, ExamCard, BlogCard |
| `components/forms/` | Forms | ContactForm, LeadCaptureForm, NewsletterSignup |

Do not place one-off page JSX into `ui/` — keep primitives generic.

---

## Server vs Client Components

- **Default:** Server Components (pages, static sections)
- Add `"use client"` only for interactivity (hooks, events, browser APIs)
- Existing client examples: `Button`, forms, `Header`/`MobileNav`, `Carousel`, `Modal`, `CountdownTimer`

When a section needs a small interactive island, extract the interactive child rather than marking the entire page client.

---

## Patterns to Follow

### Variants
UI components use variant/size maps (see `Button.tsx`). Extend existing variants before creating parallel components.

### Styling
- Use Tailwind theme tokens (`bg-bg-secondary`, `text-orange-500`, `text-h2`, etc.)
- Prefer shared classes: `.card-base`, `.btn-primary`, `.input-base`
- Merge classes with `cn()` from `@/lib/utils`
- Avoid inline `style={{}}` except rare dynamic cases

### Data
- Pass typed props from `@/lib/types` and data from `@/data/*`
- Pages compose sections/cards; cards should not fetch

### Exports
- Named exports preferred (matches current codebase)
- No barrel `index.ts` files currently — import from file paths

---

## Creating a New Component Checklist

1. Search inventory + codebase for equivalent
2. Choose correct folder
3. Define props with existing types where possible
4. Support `className` prop for composition
5. Make responsive from the start
6. Add to [REUSABLE_INVENTORY.md](REUSABLE_INVENTORY.md) after creation
