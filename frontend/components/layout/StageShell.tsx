"use client";

import { ReactNode } from "react";
import { StageNav } from "./StageNav";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { Stack } from "@/components/ui/Stack";
import { Button } from "@/components/ui/Button";

export function StageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-900 via-surface-800 to-surface-900 text-slate-100">
      <header className="sticky top-0 z-[var(--z-header)] border-b border-white/10 bg-black/50 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <a
            href="#overview"
            className="text-lg font-semibold tracking-tight text-sky-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
          >
            Docker Multi-Language
          </a>
          <div className="flex items-center gap-3">
            <Button as="a" href="https://github.com/BradleyMatera/docker_multilang_project" target="_blank" rel="noreferrer" variant="ghost" size="sm">
              Clone on GitHub
            </Button>
            <Button as="a" href="#deployment" variant="secondary" size="sm">
              Run Demos Locally
            </Button>
            <ThemeToggle />
          </div>
        </Container>
        <StageNav />
      </header>
      <Container as="main" className="py-12 md:py-16">
        <Stack gap="4xl">{children}</Stack>
      </Container>
    </div>
  );
}
