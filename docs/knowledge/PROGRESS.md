# Progress Tracker

**Last updated:** 2026-07-17  
**Phase:** Phase 1 — Active Development

Update this file after every meaningful implementation task.

---

## Completed

- Design system in `src/app/globals.css` (tokens, utilities, buttons, cards, inputs)
- Layout shell: `PromotionalBanner`, `Header`, `Footer`, `MobileNav`, `Container`
- **Header nav trim (2026-07-17):** `HEADER_NAV` limited to About Us, Faculty, Blogs, Contact Us (desktop + mobile)
- Homepage (`src/app/page.tsx`) — all major sections wired
- **Homepage visual QA pass (2026-07-14, second polish)**
- CAT / IPMAT / GDPI / CLAT category landings via `CategoryHeroSection`
- **Homepage + category UI refinements (2026-07-14):**
  - Unified `Badge` component (shared radius/padding/typography) on blog + courses
  - `.section-header` locked to **25px** bottom margin site-wide
  - Header exam switcher syncs to current category URL
  - Hero trust metrics + floating feature cards use premium PNG icons
  - Category Test Series cards use approved `ts-mocks` / `ts-sectional` / `ts-topic` / `ts-mini-mocks` assets
- **Category landings parity with CAT (2026-07-14):** CLAT / GDPI / IPMAT + homepage use shared `ResultsStatsPanel`; testimonials sections added after results; alternating `bg-bg-secondary/40` matches CAT
- **Category landings content polish (2026-07-14):**
  - Expanded IPMAT/GDPI/CLAT courses (4 each), faculty, and toppers
  - Shared `ResultsStatsPanel` (2 key stats, homepage visual) on home + all category pages
  - New `TestimonialCard` + testimonials carousel on every category landing
- Project knowledge base + Cursor rules
- **FAQ listing (`/faq`) (2026-07-14):** search, category filter pills, accordion (plus icon), pagination (10/page), footer CTA → Contact / Rodha Buddy; data in `src/data/faq.ts`
- **Legal pages (2026-07-14):** Privacy, Terms, Refund, Disclaimer via shared `LegalPageLayout` + `src/data/legal.ts` (TOC sidebar, structured sections, grievance contact)
- **Meet the Team assets (2026-07-16):** Hero photo, themed PNG icons (hero stats + culture), `Cta-left.png`, advisor quote SVG — under `public/assets/images/meet the team/`
- **Meet the Team page `/team` (2026-07-16):** Full page — hero, leadership carousel, faculty experts carousel, advisors grid, culture values, CTA band; reuses homepage profile cutouts for cards; Header About Us + Footer Meet the Team active states
- **Meet the Team UI QA (2026-07-16):** Edge-bleed hero, section bg/labels, leadership divider + LinkedIn, faculty overlay cards, advisor flush layout, culture 4-col dividers, CTA decorative bg + orange arrow secondary
- **Meet the Team QA pass 2 (2026-07-16):** Fixed faculty carousel overlap (`block` + slide width); advisors left/right split + 4-field cards; culture split layout; CTA `object-cover` fill; LinkedIn transparent white border + filled icon
- **CAT landing section order (2026-07-17):** Hero → Results → Courses → Faculty → Test Series → Testimonials → Resources → FAQs → CTA
- **Category taxonomy refresh (2026-07-17):** Five primary verticals — MBA (`/mba`, CAT+GDPI merged), Integrated (`/ipmat`), Law (`/clat`), Banking (`/banking`), Skill House (`/skillhouse`). Switcher shows short trigger + full `menuLabel`. Redirects `/cat` & `/gdpi` → `/mba`. Same section layout/assets reused for new pages.
- **SSR-first UI polish (2026-07-17):** Added lightweight `RevealGroup`, testimonial carousel autoplay, observer-based floating counselling CTA, Skill House display rename, JSON-LD helpers (Organization / Breadcrumb / FAQ), and Next 16 image preload cleanup while keeping sections server-rendered.
- **Premium motion system (2026-07-17):** Added CSS-first section reveals, shared 4px card lift/glow interactions, selective animated borders and shine sweeps, hero/CTA atmospheric lighting, reusable `AmbientBackground` SVG patterns, refined navigation/floating CTA motion, and slower testimonial autoplay. All motion respects `prefers-reduced-motion`; no animation library or scroll listener added.
- **Premium motion refinements (2026-07-17):** Stronger accent-aware border glow (16s), slower/softer staggered shine (11s + 1.5s delays), outlined CTA silver glow/shine (`.btn-outlined-premium`), Faculty/Test Series/View All coverage, floating counselling CTA observes `[data-counselling-cta]` only, and category landing parity with homepage ambient/reveal/shine patterns.
- **Hover shine sweep utility (2026-07-17):** Added `.shine-sweep-hover` — one-shot diagonal light sweep on card hover (0.72s, no loop). Applied to results/topper cards, stats panel, course/faculty/testimonial/advisor/value-prop cards; coexists with existing `.shine-sweep` ambient animation and `.card-premium-hover` lift/glow.
- **Shine-splash hover (2026-07-17):** Added `.hover-shine` (reference skewed light band, 1s). Replaced `.shine-sweep*` on TopperCard, CourseCard, FacultyCard, ValuePropCard, and AdvisorCard so `::after` effects do not conflict. Extended to LeadershipCard, FacultyExpertCard, and BlogCard.
- **CTA border glow (2026-07-17):** Border glow sped to 6s with stronger focused peak. Orange CTAs use `.glow-accent-orange`; white outline CTAs keep `.glow-accent-silver` (intensified).

---

## In Progress / Partial

| Item | Status | Notes |
|------|--------|-------|
| Homepage vs approved PNG | Partial | Layout/tokens aligned; transparent faculty/student PNG cutouts still pending |
| Header category-state nav | Partial | Exam switcher URL-sync done; full category-state nav links still TBD |
| Category hero photography | Partial | Non-MBA landings reuse `cat-hero.jpg` with category overlay text |

---

## Remaining Tasks

### Assets still needed
- [ ] Transparent faculty / student PNGs
- [ ] Dedicated IPMAT / Law / Banking / Skill House hero images
- [ ] Dedicated leadership / advisor headshots (interim: homepage `profiles/`)

### Screens
- [ ] About / Faculty / Blog / Contact / Course detail
- [x] Meet the Team `/team`
- [x] FAQ listing (`/faq`)
- [x] Legal pages (Privacy / Terms / Refund / Disclaimer)
- [ ] Promo popup

### Integrations
- [ ] Final external URLs, forms, sitemap

---

## Blockers

| Item | Owner | Impact |
|------|-------|--------|
| Transparent faculty / student PNGs | Client | Course/Faculty/Results cutout look |
| Graphy / ThinkExam / Buddy URLs | Client | CTA targets |
| Category-specific hero photos | Client | Unique hero visuals per exam |

---

## Technical Debt

- Form stubs still TODO
- Some toppers reuse portrait files
- Non-MBA landings share CAT hero photo until dedicated assets arrive
