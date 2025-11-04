"use client";

import { ReactNode } from "react";
import { StageNav } from "./StageNav";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function StageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-900 via-surface-800 to-surface-900 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#overview"
            className="text-lg font-semibold tracking-tight text-sky-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
          >
            Docker Multi-Language
          </a>
          <div className="flex items-center gap-3">
            <a
              className="rounded-full border border-sky-300 px-4 py-2 text-sm font-medium text-sky-100 hover:bg-sky-500/10 focus-visible:ring-2 focus-visible:ring-sky-400"
              href="https://github.com/BradleyMatera/docker_multilang_project"
              target="_blank"
              rel="noreferrer"
            >
              Clone on GitHub
            </a>
            <a
              className="rounded-full border border-emerald-400 px-4 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-400/10 focus-visible:ring-2 focus-visible:ring-emerald-400"
              href="#deployment"
            >
              Run Demos Locally
            </a>
            <ThemeToggle />
          </div>
        </div>
        <StageNav />
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-12 md:px-16 md:py-16">
        {children}
      </main>
    </div>
  );
}
