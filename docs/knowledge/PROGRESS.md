# Progress Tracker

**Last updated:** 2026-07-14  
**Phase:** Phase 1 — Active Development

Update this file after every meaningful implementation task.

---

## Completed

- Design system in `src/app/globals.css` (tokens, utilities, buttons, cards, inputs)
- Layout shell: `PromotionalBanner`, `Header`, `Footer`, `MobileNav`, `Container`
- Homepage (`src/app/page.tsx`) — all major sections wired
- **Homepage visual QA pass (2026-07-14, second polish):**
  - Official `rodha-logo.webp` in header + footer
  - Global ~6px radius (`card-base`, buttons, view-all); section spacing cut ~50%
  - Hero uses `hero-home.png` with lighter right reveal; realistic trust avatars; bare metric icons
  - Exam cards: smaller lower 3D icons, full description, colored stat icons
  - Why Rodha: higher-contrast tertiary cards
  - Courses: left copy + right faculty portrait; Faculty: horizontal left image / right details
  - Blog: image-as-background overlays in ~30/40/30 grid; restored JPG photo paths
  - Shared `.btn-view-all`; denser CTA + footer
- CAT category landing (`/cat`) vs `cat landing page Ui.png`
- Project knowledge base + Cursor rules

---

## In Progress / Partial

| Item | Status | Notes |
|------|--------|-------|
| Homepage vs approved PNG | Partial | Layout/tokens aligned; true transparent faculty/student PNG cutouts still unavailable (JPGs in use) |
| IPMAT / GDPI / CLAT landings | Partial | Stubs |
| Header category-state nav | Partial | Switcher beside logo done |

---

## Remaining Tasks

### Assets still needed for perfect match
- [ ] Transparent faculty PNGs (cutouts)
- [ ] Transparent student/topper PNGs
- [ ] Premium colorful icons for hero floating cards if mock uses non-SVG art

### Screens
- [ ] IPMAT / GDPI / CLAT landings
- [ ] About / Team / Faculty / Blog / Contact / FAQ / Legal / Course detail
- [ ] Promo popup

### Integrations
- [ ] Final external URLs, forms, sitemap, JSON-LD

---

## Blockers

| Item | Owner | Impact |
|------|-------|--------|
| Transparent faculty / student PNGs | Client | Course/Faculty/Results cutout look |
| Graphy / ThinkExam / Buddy URLs | Client | CTA targets |

---

## Technical Debt

- Form stubs still TODO
- Some toppers reuse portrait files (r6–r9)
