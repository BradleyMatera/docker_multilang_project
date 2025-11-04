# 🚀 Docker Multi-Language Frontend (Next.js 16 + Bun + NextUI)

Premium rebuild of the Docker multi-language hello world showcase. The site layers bold gradients, reusable NextUI/Tailwind components, and interactive storytelling to highlight each containerized runtime.

## 🛠 Tech Stack

- Bun runtime & package manager
- Next.js 16 (App Router, TypeScript, static export)
- Tailwind CSS 4 + custom design tokens
- NextUI (HeroUI) components with next-themes
- GitHub Pages ready via `docs/` export

## 📦 Scripts

```bash
bun install          # Install dependencies
bun run dev          # Start the Next.js dev server
bun run lint         # ESLint (Next.js core web vitals)
bun run build        # Production build (writes to docs/ thanks to next.config.ts)
bun run build:pages  # Alias for build when deploying to GitHub Pages
```

## ✨ UI Highlights

- **Hero + Stats:** Layered gradients, animated SVG pulses, highlight chips, and dual CTAs.
- **Feature Grid:** Four-card treatment explaining the visual upgrade, architecture, accessibility, and interactivity.
- **Language Showcase:** Responsive grid plus an interactive carousel that cycles through all seven hello-world demos.
- **Workflow Tabs:** NextUI `Tabs` component that walks through plan → build → ship with narrative checklists.
- **Deployment Timeline:** Split timeline explaining containers → rebuild → static export → CI/CD.
- **Resources Accordion:** Quick access to project tour, setup commands, and future extensions.
- **Dark/Light Theme:** `ThemeSwitch` component wraps `next-themes` + NextUI for polished toggling.

## 🧱 Project Structure

```
frontend/
├── app/                    # Next.js App Router entrypoints
├── components/
│   ├── sections/           # High-level layout sections (tabs, timeline, etc.)
│   ├── HeroSection.tsx     # Animated hero with stats
│   ├── LanguageCarousel.tsx
│   ├── LanguageDemoCard.tsx
│   ├── NavBar.tsx
│   └── ThemeSwitch.tsx
├── lib/content.ts          # Centralized content & copy decks
├── docs/                   # Static export for GitHub Pages
├── tailwind.config.js
├── next.config.ts
└── package.json
```

## 🧪 Testing

Unit coverage with Jest + React Testing Library targets:

- Hero headline + CTA rendering
- Navigation links + theme switch
- Home page section layout smoke test
- Language cards verifying copy snippets

Run tests with `bun run test` (add the script via Jest if needed).

## 🚀 Deployment

1. `bun run build:pages` → builds and exports to `docs/`.
2. Ensure `docs/.nojekyll` exists (generated on first export).
3. Push to GitHub and point GitHub Pages to the `/docs` folder.

Because `next.config.ts` sets `output: "export"` and `distDir: "docs"`, the build is Pages-ready out of the box. GitHub Actions can run the same build command for continuous deployment.

## 📝 Further Enhancements

See [TODO.md](./TODO.md) for animation ideas, illustration concepts, and performance investigations queued for later iterations.
