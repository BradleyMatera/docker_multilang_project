# 🚀 Docker Multi-Language Frontend (Next.js + Bun + NextUI)

A visually upgraded, responsive showcase of multi-language hello-world demos. Built with Next.js 16 (App Router, TypeScript, Tailwind), Bun, and NextUI (HeroUI) for elegant, animated UI with dark/light theming.

## 🛠️ Tech Stack

- Bun (package manager/runtime)
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS
- NextUI (HeroUI) for design system
- GitHub Actions + GitHub Pages (static export)

## 📦 Scripts

```bash
bun run dev         # Start development server
bun run build       # Build for production
bun run build:pages # Build and export static site to docs/
bun run lint        # Run linter
```

## 🚀 Deployment

1. Run `bun run build:pages` to export static site to `docs/`.
2. Ensure `docs/.nojekyll` exists for GitHub Pages.
3. Push to GitHub. Configure Pages to serve from `/docs`.
4. GitHub Actions workflow automates build/deploy (see .github/workflows).

## ✨ Features

- Bold, modern layouts: hero, cards, gradients, motion
- Responsive, accessible, themeable UI
- Reusable NextUI/Tailwind components
- All original content migrated and enhanced

## 📋 Project Structure

- `app/` - Next.js App Router pages/components
- `components/` - Reusable UI components
- `docs/` - Static export for GitHub Pages
- `tailwind.config.js` - Tailwind/NextUI config
- `next.config.ts` - Next.js config for Bun/static export

## 📝 Architecture & Design Decisions

- **Component Architecture:** All UI elements are built as reusable NextUI + Tailwind components (NavBar, HeroSection, LanguageDemoCard, Accordion). Consistent spacing, typography, color usage, and theme support are enforced via custom utility classes in globals.css.
- **Theme Support:** Dark/light mode is managed via next-themes and NextUI, with a theme switcher in the navigation bar. Tailwind theme is deeply customized for brand colors, gradients, and visual depth.
- **Accessibility:** Interactive elements use ARIA roles, keyboard navigation, and high color contrast for readability. All major components include accessibility attributes.
- **Visuals:** Layered gradients, animated SVG backgrounds, purposeful motion, and advanced shadows create depth and polish. Transitions and micro-interactions are present throughout.
- **Responsiveness:** Layouts are fully responsive for mobile, tablet, and desktop, using Tailwind breakpoints and flex/grid utilities.
- **Content Hierarchy:** Tutorial landing page uses Accordion for step-by-step explanations, code walkthroughs, and deployment details.
- **Testing:** Unit/integration tests are written with Jest and React Testing Library.
- **Deployment:** Static export to docs/ and automated deployment to GitHub Pages via Actions.

## 📝 TODO

See [TODO.md](./TODO.md) for future enhancements.

_Last updated: deployment trigger test_
