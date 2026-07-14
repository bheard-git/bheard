# Reusable Inventory

**Search this file and the codebase before creating anything new.**  
**Last updated:** 2026-07-14

After adding a reusable component, hook, util, type, or asset, update this inventory.

---

## UI — `src/components/ui/`

| Component | File |
|-----------|------|
| Accordion | `Accordion.tsx` |
| Badge | `Badge.tsx` |
| Breadcrumb | `Breadcrumb.tsx` |
| Button | `Button.tsx` |
| Carousel | `Carousel.tsx` |
| CountdownTimer | `CountdownTimer.tsx` |
| Divider | `Divider.tsx` |
| Input | `Input.tsx` |
| Modal | `Modal.tsx` |
| Pagination | `Pagination.tsx` |
| Rating | `Rating.tsx` |
| SearchInput | `SearchInput.tsx` |
| Select | `Select.tsx` |
| Skeleton | `Skeleton.tsx` |
| Tag | `Tag.tsx` |
| Textarea | `Textarea.tsx` |

## Layout — `src/components/layout/`

| Component | File |
|-----------|------|
| Container | `Container.tsx` |
| Footer | `Footer.tsx` |
| Header | `Header.tsx` |
| MobileNav | `MobileNav.tsx` |
| PromotionalBanner | `PromotionalBanner.tsx` |

## Sections — `src/components/sections/`

| Component | File |
|-----------|------|
| CATHeroSection | `CATHeroSection.tsx` |
| CTABand | `CTABand.tsx` |
| HeroSection | `HeroSection.tsx` |
| SectionHeader | `SectionHeader.tsx` |
| TrustBar | `TrustBar.tsx` |

## Cards — `src/components/cards/`

| Component | File |
|-----------|------|
| BlogCard | `BlogCard.tsx` |
| CourseCard | `CourseCard.tsx` |
| ExamCard | `ExamCard.tsx` |
| FacultyCard | `FacultyCard.tsx` |
| FeatureCard | `FeatureCard.tsx` |
| ResourceCard | `ResourceCard.tsx` |
| ResultStatCard | `ResultStatCard.tsx` |
| TestSeriesCard | `TestSeriesCard.tsx` |
| TopperCard | `TopperCard.tsx` |
| ValuePropCard | `ValuePropCard.tsx` |

## Forms — `src/components/forms/`

| Component | File |
|-----------|------|
| ContactForm | `ContactForm.tsx` |
| LeadCaptureForm | `LeadCaptureForm.tsx` |
| NewsletterSignup | `NewsletterSignup.tsx` |

## Hooks — `src/hooks/`

| Hook | File |
|------|------|
| useCountdown | `useCountdown.ts` |

## Lib — `src/lib/`

| Module | File | Role |
|--------|------|------|
| constants | `constants.ts` | Site config, categories, trust metrics, value props |
| types | `types.ts` | Shared domain types |
| utils | `utils.ts` | `cn()` helper |

## Data — `src/data/`

| Module | File |
|--------|------|
| blog | `blog.ts` |
| cat-landing | `cat-landing.ts` |
| courses | `courses.ts` |
| faculty | `faculty.ts` |
| navigation | `navigation.ts` |
| results | `results.ts` |
| testimonials | `testimonials.ts` |

---

## Public Assets — `public/assets/`

### Icons (`icons/`)
menu, close, chevron-down/left/right, search, user, faculty, ai-buddy, practice, guidance, top-faculty, mentorship, result-oriented, ai-powered, test-series, community, clock, video, book, users, star, star-half, star-outline, instagram, facebook, twitter, linkedin, youtube, phone, email, location, whatsapp, calendar, download, external-link, arrow-right, check, info, heart, play, quote, cat-icon, ipmat-icon, gdpi-icon, clat-icon

### Images (`images/`)
rodha-logo.webp (official brand), rodha-logo.svg, rodha-logo-white.svg, rodha-logo-orange.svg, rodha-icon.svg  
**Hero:** hero/hero-home.png (homepage), hero/hero-main.jpg, hero/cat-hero.jpg  
**Exam 3D icons:** images/icons/cat-icon-3d.png, ipmat-icon-3d.png, gdpi-icon-3d.png, clat-icon-3d.png  
**Courses / faculty / results / blog:** JPG assets under `images/courses`, `images/faculty`, `images/results`, `images/blog`  
**Placeholders:** hero-illustration, course-thumbnail, faculty-avatar, blog-thumbnail, topper-photo

### Backgrounds
hero-glow.svg, section-glow.svg, footer-gradient.svg

### Patterns
dot-grid.svg, noise-texture.svg

### Shapes
blob-orange.svg, circle-gradient.svg, curved-divider.svg, ring-decoration.svg

---

## Design System Utilities (CSS)

Defined in `src/app/globals.css`: `.container-rodha`, `.section-spacing`, `.card-base`, `.card-hover`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.input-base`, `.badge-base`, `.text-gradient-orange`, `.bg-hero-gradient`, `.glow-orange`, `.glow-orange-strong`, `.overlay-gradient`, `.animate-shimmer`
