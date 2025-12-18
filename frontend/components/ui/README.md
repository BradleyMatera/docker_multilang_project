Design system primitives
========================

Purpose
-------
Lightweight primitives to enforce consistent spacing, alignment, surfaces, and interactive states across the microsite without a full rewrite.

Tokens (defined in `app/globals.css`)
-------------------------------------
- Spacing: `--space-0`…`--space-8` (0,4,8,12,16,24,32,48,96px)
- Colors: `--background`, `--surface-1/2`, `--foreground`, `--muted`, `--primary`, `--accent`, `--success`, `--danger`, `--border-subtle/strong`
- Radius: `--radius-sm/md/lg`
- Shadows: `--shadow-soft`, `--shadow-strong`
- Z-index: `--z-header`

Primitives
----------
- `Container`: Centers content with consistent max-widths (`sm/md/lg/xl`) and horizontal padding.
- `Stack`: Vertical flex layout with tokenized gap sizes and alignment options.
- `Card`: Surface with border/shadow options (`padding sm/md/lg`, `shadow none/soft/strong`).
- `Button`: Variants (`primary/secondary/ghost`), sizes (`sm/md/lg`), full-width option, and consistent focus/disabled states; supports `href` or `type="button"`.
- `Section`: Wrapper combining Container + Stack with vertical rhythm and optional `id` for anchors.

Usage guidance
--------------
- Wrap top-level page content in `Container` (or `Section`) instead of ad hoc `max-w` and `px`.
- Use `Stack` to manage vertical spacing instead of hard-coded `gap-*` everywhere.
- Prefer `Card` over raw bordered divs for any grouped content or panels.
- Use `Button` for all CTAs/links that look like buttons to unify focus, hover, and disabled behavior.
- Apply `scroll-mt` utility on anchored sections when used with the sticky header to avoid hidden content.

Accessibility
-------------
- `Button` includes focus-visible ring and disabled handling; when rendering as anchor it sets `role="button"`.
- Use semantic headings within Cards/Sections to preserve document outline.
