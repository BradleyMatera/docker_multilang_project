# Docker Multi-Language Orchestration

A production-ready reference showing how to orchestrate multiple language runtimes with Docker Compose while serving a premium, static Next.js microsite built with Bun, Tailwind, NextUI, and Framer Motion.

## Repository Layout

```
.
├─ frontend/           # Next.js 16 + Bun microsite (static export)
├─ containers/         # Language demo services (C, Go, Python)
├─ docker-compose.yml  # Spins up web + demo containers
└─ README.md
```

## Quickstart

```bash
# Install frontend dependencies
cd frontend
bun install
bun run dev             # Next.js dev server on http://localhost:3000

# In another terminal (from repo root)
docker compose up --build
```

The microsite fetches live output from:
- `demo-c` → `http://localhost:7001`
- `demo-go` → `http://localhost:7002`
- `demo-python` → `http://localhost:7003`

During static hosting the site gracefully falls back to bundled snippets.

## Deployment Workflow

1. `bun run build` → emits `frontend/out/`
2. Deploy `out/` to Vercel (`npx vercel deploy --prebuilt --yes`), CloudFront, or `npx gh-pages -d out`
3. Optional GitHub Action automates the pipeline (see `frontend/components/deployment/CICard.tsx` for YAML snippet)

## Docker Compose Services

```yaml
services:
  web: Bun-powered Next.js dev server
  demo-c: C container producing JSON via netcat HTTP loop
  demo-go: Go HTTP server exposing runtime metadata
  demo-python: Flask app returning JSON timestamp
```

Extend by adding new folders in `containers/` and updating `frontend/data/demos.json` with the port/runtime metadata.

## Environment Variables

`frontend/lib/env.ts` validates `NEXT_PRIVATE_DEMO_HOST` (defaults to `http://localhost`). When running the frontend in Docker, provide:

```
NEXT_PRIVATE_DEMO_HOST=http://host.docker.internal
```

## Goals Achieved

- Separation of concerns: static front-end vs. containerized demos
- Data-driven UI: JSON-backed code samples, reusable stage components
- Premium UX/UI: Framer Motion transitions, Docker-inspired gradients, responsive layout
- DevOps ready: Bun + Next export pipeline, Docker Compose services, CI/CD snippet

Enjoy experimenting with multi-language orchestration, now with a polished educational experience.
