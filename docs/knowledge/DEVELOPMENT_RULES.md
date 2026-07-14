# Development Rules

Apply these on every implementation task. See also `.cursor/rules/` for always-on agent rules.

---

## Always Understand Existing Code First

Before implementing:

1. Analyze project structure ([FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md))
2. Inspect existing components, hooks, utils, types, and styles
3. Check [REUSABLE_INVENTORY.md](REUSABLE_INVENTORY.md)
4. Review design tokens in `src/app/globals.css` and [DESIGN_TOKENS.md](DESIGN_TOKENS.md)

Never assume a capability already exists — verify first.

---

## Reuse Before Creating

Before creating components, hooks, utilities, types, constants, icons, helpers, services, layouts, animations, or styling utilities:

1. Search the codebase thoroughly
2. Check [REUSABLE_INVENTORY.md](REUSABLE_INVENTORY.md)
3. Reuse or extend existing implementations
4. Create new files only when existing ones cannot reasonably support the requirement

Do not duplicate logic, components, or styles.

---

## Component-First Architecture

1. Prefer reusable components over page-specific markup
2. Check → extend → create (only if necessary)
3. Avoid coupling components to a single page
4. Keep components modular and composable

Guidelines: [COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md)

---

## Design Consistency

Every screen must follow the design system:

- Typography, colors, radius, shadows from tokens
- Buttons, cards, inputs via shared components / utility classes
- Section spacing via `.section-spacing` / `Container`
- No one-off inconsistent styles or hardcoded hex/px when a token exists

---

## Pixel-Perfect UI

Approved mockups are the design source of truth.

Before implementing a screen: extract measurements, spacing, typography, shadows, gradients, backgrounds, icons, and reusable assets. Recreate with maximum visual accuracy — do not approximate.

---

## Responsive From the Start

Support mobile, tablet, laptop, desktop, and large desktop in the first implementation. Avoid fixed dimensions unless required by the design. Breakpoints: see [UI_STANDARDS.md](UI_STANDARDS.md).

---

## Performance-First

- Avoid unnecessary re-renders; keep components lightweight
- Prefer optimized images; lazy-load where appropriate
- Do not add dependencies without a clear benefit
- Prevent unnecessary bundle growth

---

## Clean Architecture

**Avoid:** duplicate logic/components/styles, hardcoded values, inline styling, deep nesting, monolithic files.

**Prefer:** shared utilities, reusable components, global tokens/constants, composition over duplication.

---

## File Organization

Follow existing structure. Create new folders only when they improve maintainability. Do not create unnecessary files.

---

## Refactoring

When modifying existing code: improve where appropriate, preserve behavior, maintain backward compatibility when possible. Refactor only for measurable benefit — avoid unnecessary rewrites.

---

## Development Workflow

1. Understand the requirement
2. Review existing implementation
3. Identify reusable code and assets
4. Plan the implementation
5. Build reusable pieces first
6. Implement the feature
7. Verify responsiveness
8. Verify design-system consistency
9. Update [PROGRESS.md](PROGRESS.md), [FEATURE_CHECKLIST.md](FEATURE_CHECKLIST.md), [DECISIONS.md](DECISIONS.md), and [REUSABLE_INVENTORY.md](REUSABLE_INVENTORY.md) as needed
