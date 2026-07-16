# Decision Log

Log significant architectural and implementation decisions here. Append new entries at the top (newest first).

Format:

```
### YYYY-MM-DD — Short title
- **Decision:** …
- **Rationale:** …
- **Alternatives considered:** …
- **Consequences:** …
```

---

### 2026-07-16 — Meet the Team page composition
- **Decision:** Build `/team` with dedicated `TeamHeroSection`, `LeadershipCard`, `FacultyExpertCard`, `AdvisorCard`, and `CultureSection`; extend `SectionHeader` (label + split description) and `CTABand` (`decorativeImage`). Reuse homepage `profiles/` cutouts and existing `Carousel` / `faculty.ts`.
- **Rationale:** Mockup card layouts differ from homepage `FacultyCard` (tall portrait experts; horizontal leadership). Page-specific themed PNG icons match Rodha visual language without generic SVGs.
- **Alternatives considered:** Overload homepage `HeroSection` / `FacultyCard`; invent new button styles.
- **Consequences:** `/team` matches mock section order; interim profile photos until dedicated leadership/advisor assets arrive; Header highlights About Us on `/team`, Footer highlights Meet the Team.

---

### 2026-07-14 — FAQ listing + shared LegalPageLayout
- **Decision:** Build global FAQ as a client island (`FAQClient`) with search, category pills, Accordion, and Pagination over `src/data/faq.ts`. Implement all four legal routes via one Server Component `LegalPageLayout` fed by structured `src/data/legal.ts`.
- **Rationale:** Scope requires categorized searchable FAQs plus title/date/structured legal content and grievance contact; shared legal shell avoids four near-duplicate layouts and keeps content CMS-ready.
- **Alternatives considered:** Inline FAQ filters in the page file; hardcode legal JSX per route.
- **Consequences:** `/faq` and legal routes match homepage dark/orange tokens; CTABand secondary supports external HTTP links (Rodha Buddy) in a new tab.

---

### 2026-07-14 — Section header spacing + CAT premium PNG icons
- **Decision:** Add shared `.section-header` utility (24px / 30px mb, +50% vs original `mb-4`/`md:mb-5`); restore stock JPG hero trust avatars; flat solid badges with white text; switch CAT hero trust, quick-stats, and test-series to premium PNG icons; trim CAT results to 2 stats with left-aligned selection/rank images.
- **Rationale:** User corrected title spacing direction and required non-SVG orange/white premium icons on the CAT landing plus contrast-safe course badges.
- **Alternatives considered:** Keep reduced header gap; leave SVG Icon chips on category hero.
- **Consequences:** Spacing is consistent site-wide via one class; CAT landing visual language matches homepage results icons; other category landings still use SVG until their assets arrive.

---

### 2026-07-14 — Generalized CategoryHeroSection for all exam landings
- **Decision:** Replace `CATHeroSection` with reusable `CategoryHeroSection` (props for headline, image, features, stats, CTAs). Move shared landing types (`CategoryHeroFeature`, `CategoryQuickStat`, `TestSeriesItem`, `ResourceItem`, `FaqItem`) to `src/lib/types.ts`. Add `clat-landing.ts`, `gdpi-landing.ts`, `ipmat-landing.ts` mirroring `cat-landing.ts`.
- **Rationale:** All four category landings share the same section structure; only copy/stats/FAQs differ. One hero component avoids three near-duplicates.
- **Alternatives considered:** Clone `CATHeroSection` per category; keep types in `cat-landing.ts` and re-export.
- **Consequences:** `/cat`, `/ipmat`, `/gdpi`, `/clat` stay in sync structurally; non-CAT pages temporarily reuse `cat-hero.jpg` with category overlay text until dedicated hero assets arrive.

---

### 2026-07-14 — Homepage UI: profile cutouts + exam/course/footer polish
- **Decision:** Ship transparent profile PNGs under `public/assets/images/profiles/`; verticalize ExamCard stats; category-tinted CourseCard backgrounds with white text; solid orange AIR badge; results selection/rank icons; brand-left/links-right footer; CAT-icon CTA band with white secondary button.
- **Rationale:** User requested these homepage refinements against reference assets; cutouts unblock Course/Faculty/Results fidelity.
- **Alternatives considered:** Keep JPG placeholders; leave CourseCards border-only.
- **Consequences:** Homepage photography gap closed for mock profiles; reusable cards now expect cutout-friendly `object-contain`.

---

### 2026-07-14 — Homepage visual QA: 6px radius + denser spacing + logo webp
- **Decision:** Standardize interactive surfaces to ~6px radius; cut `.section-spacing` by ~50%; ship official `rodha-logo.webp`; keep using existing faculty/student JPGs until transparent PNG cutouts are delivered.
- **Rationale:** Approved homepage mock uses subtle corners and compact vertical rhythm; prior pass left 8–14px radii and excess padding.
- **Alternatives considered:** Wait on transparent PNGs before further layout work.
- **Consequences:** Closer visual match; remaining photography gap is cutout fidelity only.

---

### 2026-07-14 — Homepage polish: 3D exam icons + hero photo + layout alignment
- **Decision:** Treat `referrence/ui/rodha home page UI screen.png` as visual SoT; ship provided `hero-home.png` and CAT/IPMAT/GDPI/CLAT 3D PNGs into `public/assets/images/`; keep SVG placeholders for faculty/course/topper photos until client assets arrive.
- **Rationale:** User mandated no unrelated stock substitution; missing photography must be reported rather than replaced with generic faces.
- **Alternatives considered:** Keep SVG line icons for exam cards; invent stock photography.
- **Consequences:** Homepage layout is much closer to the mock; pixel-perfect photography still blocked on client assets.

---

### 2026-07-14 — Dedicated CATHeroSection for category landing
- **Decision:** Implement CAT hero as `CATHeroSection` instead of extending homepage `HeroSection`.
- **Rationale:** Approved CAT mockup uses a left copy + right cinematic visual + feature chips + stats strip layout that differs from the homepage floating-feature card hero.
- **Alternatives considered:** Mode/props on shared `HeroSection`; page-only markup in `cat/page.tsx`.
- **Consequences:** Homepage hero stays unchanged; other category pages can clone/adapt `CATHeroSection` or later extract a more generic `CategoryHero`.

---

### 2026-07-14 — Persistent knowledge base + Cursor rules
- **Decision:** Establish `docs/knowledge/` as the single source of truth and `.cursor/rules/*.mdc` for always-on agent guidance; convert scope `.docx` to `SCOPE.md`.
- **Rationale:** Future prompts should not restate project standards; agents must read context before changes and update progress after work.
- **Alternatives considered:** AGENTS.md-only; Cursor hooks for progress (deferred — agent rule preferred).
- **Consequences:** Agents must update PROGRESS / DECISIONS / FEATURE_CHECKLIST / REUSABLE_INVENTORY after meaningful tasks.

---

### 2025-07 — Tailwind v4 CSS-first design tokens
- **Decision:** Configure design tokens in `src/app/globals.css` via `:root` + `@theme inline`; no `tailwind.config.js`.
- **Rationale:** Matches Next.js 16 + Tailwind v4 stack; single place for theme.
- **Alternatives considered:** Classic `tailwind.config.ts` theme extend.
- **Consequences:** All new styles should use CSS/theme tokens and existing utility classes.

---

### 2025-07 — Feature-based component folders
- **Decision:** Organize under `components/{ui,layout,sections,cards,forms}`.
- **Rationale:** Scales with page count; clearer ownership than a flat components dump.
- **Alternatives considered:** Atomic design folders only; feature-per-route components.
- **Consequences:** New components must land in the correct folder; page-specific one-offs discouraged.

---

### 2025-07 — Phase 1 fully static with external redirects
- **Decision:** No on-site auth/payments/course player; Graphy / ThinkExam / Rodha Buddy for interactive actions.
- **Rationale:** Combined scope + Phase 1 PRD boundaries.
- **Alternatives considered:** Partial SSO or embedded players in Phase 1.
- **Consequences:** CTAs are external links; no Phase 2 admin/dashboard work unless explicitly requested.

---

### 2025-07 — Inter via next/font
- **Decision:** Use Google Inter through `next/font/google` as `--font-inter`.
- **Rationale:** Approved design system typography.
- **Alternatives considered:** Poppins as primary heading font.
- **Consequences:** Root layout wires font variable; avoid ad-hoc font imports.

---

### 2025-07 — Mock data in `src/data/` until CMS/API
- **Decision:** Phase 1 content lives in typed static modules.
- **Rationale:** Static marketing site; Phase 2 / CMS later.
- **Alternatives considered:** Headless CMS from day one.
- **Consequences:** Pages import from `@/data/*`; keep types in sync with `lib/types.ts`.

---

### 2025-07 — No barrel index.ts exports
- **Decision:** Import components from explicit file paths.
- **Rationale:** Current codebase convention; avoids circular re-exports.
- **Alternatives considered:** Barrel files per folder.
- **Consequences:** Prefer `@/components/ui/Button` style imports unless a later decision changes this.
