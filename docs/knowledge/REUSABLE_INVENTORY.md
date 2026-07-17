# Reusable Inventory

**Search this file and the codebase before creating anything new.**  
**Last updated:** 2026-07-17 (premium motion system)

After adding a reusable component, hook, util, type, or asset, update this inventory.

---

## UI — `src/components/ui/`

| Component | File |
|-----------|------|
| Accordion | `Accordion.tsx` |
| AccentUnderline | `AccentUnderline.tsx` |
| AmbientBackground | `AmbientBackground.tsx` |
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
| RevealGroup | `RevealGroup.tsx` |
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
| FloatingCounsellingCta | `FloatingCounsellingCta.tsx` |
| Header | `Header.tsx` |
| MobileNav | `MobileNav.tsx` |
| PromotionalBanner | `PromotionalBanner.tsx` |

## Sections — `src/components/sections/`

| Component | File |
|-----------|------|
| CategoryHeroSection | `CategoryHeroSection.tsx` |
| CTABand | `CTABand.tsx` |
| CultureSection | `CultureSection.tsx` |
| AdvisorsSection | `AdvisorsSection.tsx` |
| HeroSection | `HeroSection.tsx` |
| LegalPageLayout | `LegalPageLayout.tsx` |
| ResultsStatsPanel | `ResultsStatsPanel.tsx` |
| SectionHeader | `SectionHeader.tsx` |
| TeamHeroSection | `TeamHeroSection.tsx` |
| TrustBar | `TrustBar.tsx` |

## Cards — `src/components/cards/`

| Component | File |
|-----------|------|
| AdvisorCard | `AdvisorCard.tsx` |
| BlogCard | `BlogCard.tsx` |
| CourseCard | `CourseCard.tsx` |
| ExamCard | `ExamCard.tsx` |
| FacultyCard | `FacultyCard.tsx` |
| FacultyExpertCard | `FacultyExpertCard.tsx` |
| FeatureCard | `FeatureCard.tsx` |
| LeadershipCard | `LeadershipCard.tsx` |
| ResourceCard | `ResourceCard.tsx` |
| ResultStatCard | `ResultStatCard.tsx` |
| TestimonialCard | `TestimonialCard.tsx` |
| TestSeriesCard | `TestSeriesCard.tsx` |
| TopperCard | `TopperCard.tsx` |
| ValuePropCard | `ValuePropCard.tsx`

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
| useInView | `useInView.ts` |

## Lib — `src/lib/`

| Module | File | Role |
|--------|------|------|
| constants | `constants.ts` | Site config, categories, trust metrics, value props |
| structured-data | `structured-data.ts` | Server-rendered JSON-LD helpers |
| types | `types.ts` | Shared domain types |
| utils | `utils.ts` | `cn()` helper |

## Data — `src/data/`

| Module | File |
|--------|------|
| blog | `blog.ts` |
| banking-landing | `banking-landing.ts` |
| clat-landing | `clat-landing.ts` |
| courses | `courses.ts` |
| faculty | `faculty.ts` |
| faq | `faq.ts` |
| ipmat-landing | `ipmat-landing.ts` |
| legal | `legal.ts` |
| mba-landing | `mba-landing.ts` |
| navigation | `navigation.ts` |
| results | `results.ts` |
| skillhouse-landing | `skillhouse-landing.ts` |
| team | `team.ts` |
| testimonials | `testimonials.ts` |

---

## Public Assets — `public/assets/`

### Icons (`icons/`)
menu, close, chevron-down/left/right, search, user, faculty, ai-buddy, practice, guidance, top-faculty, mentorship, result-oriented, ai-powered, test-series, community, clock, video, book, users, star, star-half, star-outline, instagram, facebook, twitter, linkedin, youtube, phone, email, location, whatsapp, calendar, download, external-link, arrow-right, check, info, heart, play, quote, cat-icon, ipmat-icon, gdpi-icon, clat-icon

### Images (`images/`)
rodha-logo.webp (official brand), rodha-logo.svg, rodha-logo-white.svg, rodha-logo-orange.svg, rodha-icon.svg  
**Hero:** hero/hero-home.png (homepage), hero/hero-main.jpg, hero/cat-hero.jpg  
**Exam 3D icons:** images/icons/cat-icon-3d.png, ipmat-icon-3d.png, gdpi-icon-3d.png, clat-icon-3d.png  
**Result stat icons:** images/icons/selection.png, images/icons/rank.png, images/icons/CAT-icon.png  
**Test series / CAT hero icons:** images/icons/ts-mocks.png, ts-sectional.png, ts-topic.png, ts-mini-mocks.png  
**Profiles (cutouts):** images/profiles/male-1..6.png, female-1..4.png (faculty, course, topper)  
**Courses / faculty / results / blog:** JPG assets under `images/courses`, `images/faculty`, `images/results`, `images/blog` (legacy)  
**Placeholders:** hero-illustration, course-thumbnail, faculty-avatar, blog-thumbnail, topper-photo  
**Meet the Team (`images/meet the team/`):**  
- Hero: `team hero.png`  
- CTA: `Cta-left.png`  
- Icons (`icons/`): `hero-faculty.png`, `hero-experience-star.png`, `hero-student.png`, `culture-student-first.png`, `culture-integrity.png`, `culture-exelence.png`, `culture-collaborate.png`, `advisor-quote.svg`  
- Legacy SVG variants also present under `icons/`  
- Profiles: reuse `images/profiles/male-*.png`, `female-*.png` for leadership / faculty / advisors  
- Reuse global: `/assets/icons/linkedin.svg` (leadership cards)

### Backgrounds
hero-glow.svg, section-glow.svg, footer-gradient.svg

### Patterns
dot-grid.svg, noise-texture.svg

### Shapes
blob-orange.svg, circle-gradient.svg, curved-divider.svg, ring-decoration.svg

---

## Design System Utilities (CSS)

Defined in `src/app/globals.css`: `.container-rodha`, `.section-spacing`, `.section-header`, `.card-base`, `.card-hover`, `.card-premium-hover`, `.premium-border-glow`, `.glow-accent-silver`, `.shine-sweep`, `.shine-sweep-hover`, `.shine-sweep-outline`, `.shine-delay-1..4`, `.ambient-layer`, `.ambient-drift`, `.hero-atmosphere`, `.quote-glow`, `.btn-primary`, `.btn-primary-premium`, `.btn-outlined-premium`, `.btn-secondary`, `.btn-ghost`, `.btn-view-all`, `.floating-cta-pulse`, `.input-base`, `.badge-base`, `.text-gradient-orange`, `.bg-hero-gradient`, `.glow-orange`, `.glow-orange-strong`, `.overlay-gradient`, `.animate-shimmer`
