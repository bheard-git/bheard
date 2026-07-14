# Feature Checklist — Phase 1

Statuses: **Not Started** | **Partial** | **Complete**

Update when page/section status changes. Detail: [PROGRESS.md](PROGRESS.md) · Spec: [PHASE1_PRD.md](../PHASE1_PRD.md)

---

## Global

| Feature | Status | Notes |
|---------|--------|-------|
| Promotional banner + countdown | Complete | Dark bar, orange accents, day/h/m/s boxes |
| Header — global nav state | Partial | Exam switcher beside logo; verify PRD links |
| Header — category nav state | Partial | Needs verification vs PRD |
| Mobile nav | Partial | Exists; test against all breakpoints |
| Footer | Partial | Social icons: transparent + thin white borders; social URLs TBD |
| Rodha Buddy CTA (external) | Partial | Outline orange in header; final URL TBD |
| Login / Sign Up → Graphy | Partial | Outline button; redirect target TBD |
| Promotion popup + lead form | Not Started | Modal + trigger logic |

---

## Home `/`

| Section | Status |
|---------|--------|
| Hero | Complete (hero-home.png + floating feature cards) |
| Choose Your Exam | Complete (3D PNG icons) |
| Why Thousands Choose Rodha | Complete (icon-without-circle) |
| Featured Courses carousel | Complete |
| Faculty carousel | Complete (non-circular photos) |
| Results / toppers | Complete (dark AIR badge) |
| Blog / insights | Complete (featured + 2-col side grid) |
| CTA Band | Complete (compact left/right layout) |
| Pixel-perfect pass vs PNG | Partial — 6px radius, denser spacing, logo webp, photo paths restored; cutout PNGs still pending |

---

## Category Landings `/cat` `/ipmat` `/gdpi` `/clat`

| Section | Status |
|---------|--------|
| Category hero | Complete (`/cat`) — Partial on other category routes |
| Courses overview | Complete (`/cat`) — Not Started elsewhere |
| Star faculty | Complete (`/cat`) — Not Started elsewhere |
| Test series promo | Complete (`/cat`) — Not Started elsewhere |
| Results & toppers | Complete (`/cat`) — Not Started elsewhere |
| Demo / webinar CTA | Complete (`/cat` resource cards) — Not Started elsewhere |
| Testimonials | Not Started |
| Resources teaser | Complete (`/cat`) — Not Started elsewhere |
| Category FAQ | Complete (`/cat`) — Not Started elsewhere |
| SEO intro copy | Partial (`/cat` metadata) |
| Match `cat landing page Ui.png` | Complete (structure); polish as needed |

---

## Course Detail `/[category]/courses/[slug]`

| Feature | Status |
|---------|--------|
| Course hero | Not Started |
| Curriculum accordion | Not Started |
| Faculty for course | Not Started |
| What's included | Not Started |
| Pricing display | Not Started |
| Sticky Enrol → Graphy | Not Started |
| Floating enquiry | Not Started |
| FAQ / related | Not Started |

---

## Content Pages

| Page | Status | Notes |
|------|--------|-------|
| About `/about` | Not Started | Placeholder |
| Team `/team` | Not Started | Placeholder |
| Faculty listing `/faculty` | Not Started | Placeholder (data + FacultyCard exist) |
| Faculty detail `/faculty/[slug]` | Not Started | Placeholder |
| Blog listing `/blog` | Not Started | Placeholder (data + BlogCard exist) |
| Blog detail `/blog/[slug]` | Not Started | Placeholder |
| Contact `/contact` | Not Started | ContactForm exists; page stub |
| FAQ `/faq` | Not Started | Accordion exists; content stub |
| Privacy / Terms / Refund / Disclaimer | Not Started | Placeholders |

---

## Forms

| Form | UI | Validation | Backend |
|------|----|------------|---------|
| ContactForm | Partial | Partial | Not Started |
| LeadCaptureForm | Partial | Partial | Not Started |
| NewsletterSignup | Partial | Partial | Not Started |

---

## SEO & Technical

| Item | Status |
|------|--------|
| Per-page metadata (basic) | Partial |
| Open Graph / Twitter | Partial |
| JSON-LD schemas | Not Started |
| sitemap.xml | Not Started |
| robots.txt | Not Started |
| Image alt / heading hierarchy | Partial |

---

## Explicitly Out of Scope (Phase 2)

Do not mark these as remaining Phase 1 work: SSO, payments, student dashboard, admin, dedicated course/test listing pages, resources hub, search results page, login page.
