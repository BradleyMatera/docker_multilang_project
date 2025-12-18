"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import demos from "@/data/demos.json";
import { MetricsStrip } from "./MetricsStrip";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
      id="overview"
      className="hex-grid rounded-3xl border border-white/10 bg-black/40 px-8 py-16 shadow-2xl scroll-mt-28"
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Stage 01 · Overview</p>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Run containerized languages in Docker from one unified workflow.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
            Docker Compose spins up language services while the Next.js frontend documents the build, run, and deploy
            story. Inspect live container output, study the architecture, and ship a static export through CI/CD.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              as="a"
              href="https://github.com/BradleyMatera/docker_multilang_project"
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="shadow-xl-gradient"
            >
              Explore the repository
            </Button>
            <Button as="a" href="#language" variant="secondary" size="lg">
              View language demos
            </Button>
          </div>
          <MetricsStrip />
        </div>
        <Card className="lg:col-span-5 space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Container lineup</h2>
            <p className="text-sm text-slate-300">
              Each container exposes a JSON endpoint consumed by the frontend. Extend the matrix by adding new language
              folders under <code>containers/</code>.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-slate-200">
            {demos.languages.map((lang) => (
              <li key={lang.id} className="flex items-center justify-between rounded-full border border-[var(--border-subtle)] px-4 py-2 bg-[var(--surface-2)]">
                <span className="font-medium">{lang.label}</span>
                <span className="text-xs uppercase tracking-wide text-slate-400">Port {lang.port}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </motion.section>
  );
}
