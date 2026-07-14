# Rodha Web Frontend

India’s trusted platform for **CAT, IPMAT, GDPI, and CLAT** preparation. Phase 1 is a dark-themed static marketing site; enrollment, login, and tests redirect to Graphy, ThinkExam, and Rodha Buddy.

## Tech Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (tokens in `src/app/globals.css`)
- Font: Inter via `next/font`

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Project Context (agents & developers)

Persistent standards, architecture, progress, and inventory live in:

**→ [`docs/knowledge/README.md`](docs/knowledge/README.md)**

Also see:

- [`docs/PHASE1_PRD.md`](docs/PHASE1_PRD.md) — Phase 1 product requirements
- [`docs/UI_DESIGN_ANALYSIS.md`](docs/UI_DESIGN_ANALYSIS.md) — approved homepage design extract
- [`AGENTS.md`](AGENTS.md) — Cursor / agent entry instructions
- `.cursor/rules/` — always-on development rules

## Design References

| Asset | Location |
|-------|----------|
| Homepage UI (approved) | `rodha home page UI screen.png` |
| CAT landing UI | `cat landing page Ui.png` |
| Combined scope (Word) | `Rodha_Combined_Scope_Document.docx` |
| Scope (Markdown) | `docs/knowledge/SCOPE.md` |

## Structure (summary)

```
src/app/           # App Router pages
src/components/    # ui, layout, sections, cards, forms
src/data/          # Static content
src/lib/           # types, constants, utils
public/assets/     # icons, images, backgrounds
docs/knowledge/    # Knowledge base
```
