// Animated hero section with layered gradients and highlight stats.

"use client";
import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { heroHighlights } from "../data/content";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-background via-background/80 to-background-light/30 px-6 py-20 sm:px-10 lg:px-20"
      aria-labelledby="hero-heading"
    >
      <GradientBackdrop />
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-sm font-semibold text-foreground/80 backdrop-blur">
            <span className="text-primary">Next.js 16</span>
            <span className="text-foreground/60">+</span>
            <span className="text-accent">Bun runtime</span>
          </div>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            A premium multi-language Docker showcase rebuilt with purpose.
          </h1>
          <p className="max-w-2xl text-lg text-foreground/80 sm:text-xl">
            Explore seven containerized runtimes, orchestrated with Docker Compose and presented with a richly animated
            NextUI + Tailwind experience. Responsive layouts, elevated typography, and thoughtful motion make the
            tutorial unforgettable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href="https://github.com/BradleyMatera/docker_multilang_project"
              target="_blank"
              size="lg"
              radius="full"
              color="primary"
              className="shadow-xl-gradient transition-transform hover:scale-[1.03]"
            >
              <span className="mr-2" aria-hidden="true">🚀</span> View Source
            </Button>
            <Button
              as="a"
              href="#workflow"
              variant="bordered"
              size="lg"
              radius="full"
              className="border-primary/60 text-foreground hover:border-primary hover:bg-primary/10"
            >
              See the workflow
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {heroHighlights.map((highlight) => (
            <Card
              key={highlight.label}
              className="bg-black/70 backdrop-blur-xl border border-white/5 shadow-xl-gradient text-left"
              radius="lg"
            >
              <CardBody className="space-y-3">
                <Chip color="secondary" variant="flat" className="w-fit font-semibold uppercase tracking-wide">
                  {highlight.label}
                </Chip>
                <p className="font-display text-2xl text-foreground">{highlight.value}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function GradientBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none">
      <div className="absolute -left-1/4 top-10 h-96 w-96 rounded-full bg-primary/40 blur-[160px]" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-accent/30 blur-[120px]" />
      <div className="absolute inset-0 rounded-3xl border border-white/5" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 800 600" fill="none">
        <defs>
          <linearGradient id="hero-pulse" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(99,102,241,0.35)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.15)" />
            <stop offset="100%" stopColor="rgba(236,72,153,0.25)" />
          </linearGradient>
        </defs>
        <circle cx="120" cy="120" r="110" fill="url(#hero-pulse)">
          <animate attributeName="r" values="100;120;100" dur="9s" repeatCount="indefinite" />
        </circle>
        <circle cx="650" cy="180" r="160" fill="url(#hero-pulse)" opacity="0.6">
          <animate attributeName="cx" values="640;660;640" dur="12s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
