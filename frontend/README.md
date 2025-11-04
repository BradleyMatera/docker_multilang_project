# Docker Multi-Language · Frontend

A production-grade microsite demonstrating multi-language Docker orchestration powered by Bun + Next.js 16, Tailwind, NextUI, and Framer Motion. The site exports statically while containerized demos stream live output via `/api/demo?lang=`.

## Architecture

| Layer | Purpose |
| ----- | ------- |
| Next.js + Bun | Builds the stage-based UI, exports static assets, proxies container output during local development. |
| Docker Compose | Runs language services (`demo-c`, `demo-go`, `demo-python`) that return JSON responses. |
| CI/CD | GitHub Actions executes `bunx next build`; deploy to Vercel/CloudFront or `gh-pages`. |

```
Developer → Bun build → Static bundle (out/) → Vercel CDN
                               ↑
 docker compose up --build ← language demos (ports 7001-7003)
```

## Commands

```bash
bun install
bun run dev            # start Next.js locally
bun run build          # production build (writes static site to out/)
bun run export         # alias for bun run build

# Run containerized language demos simultaneously
cd .. && docker compose up --build
```

## Environment Variables

Create `.env.local` in `frontend/` when running inside Docker:

```
NEXT_PRIVATE_DEMO_HOST=http://host.docker.internal
```

Validated via `lib/env.ts` (Zod) before API usage.

## File Map Highlights

```
app/
  page.tsx                 # StageShell layout composed of hero + sections
  api/demo/[lang]/route.ts # Proxies container demos per language
components/
  layout/StageShell.tsx
  hero/Hero.tsx
  language/LanguageSection.tsx
  architecture/ArchitectureSection.tsx
  deployment/DeploymentSection.tsx
  deployment/CTASection.tsx
hooks/
  useDemoOutput.ts
  useStageNav.ts
lib/
  demos.ts             # Zod schema + fetch helpers
  env.ts               # environment validation
```

## Deployment

1. `bun run build` → `out/`
2. Upload `out/` to Vercel (`npx vercel deploy --prebuilt --yes`) or `npx gh-pages -d out` for GitHub Pages.
3. Optional GitHub Action provided in documentation snippet to automate.

## Docker Compose Services

```yaml
services:
  web: bun dev server (Next.js)
  demo-c: C runtime returning JSON message
  demo-go: Go runtime HTTP server
  demo-python: Flask JSON endpoint
```

Extend by adding new folders inside `containers/` and updating `data/demos.json`.

---

Built for 95+ Lighthouse scores with accessible interactions, focus-visible styling, and reduced layout shifts via Framer Motion.
