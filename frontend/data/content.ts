// Centralized content data for the Docker Multi-Language showcase.
// This keeps the page lean and makes it easier to reuse structured data.

export type LanguageDemo = {
  language: string;
  description: string;
  code: string;
  paradigm: string;
};

export const languageDemos: LanguageDemo[] = [
  {
    language: "C",
    description: "Systems programming classic with explicit compilation.",
    paradigm: "Procedural",
    code: `#include <stdio.h>
#include <time.h>

int main() {
  time_t t;
  time(&t);
  printf("Hello ASL! The date is: %s", ctime(&t));
  return 0;
}`,
  },
  {
    language: "Go",
    description: "Modern compiled language built for concurrency and tooling.",
    paradigm: "Compiled",
    code: `package main

import (
  "fmt"
  "time"
)

func main() {
  fmt.Println("Hello ASL! The date is:", time.Now())
}`,
  },
  {
    language: "Java",
    description: "Object-oriented, JVM powered, enterprise friendly.",
    paradigm: "OOP",
    code: `import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Hello {
  public static void main(String[] args) {
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
    LocalDateTime now = LocalDateTime.now();
    System.out.println("Hello ASL! The date is: " + dtf.format(now));
  }
}`,
  },
  {
    language: "Node.js",
    description: "JavaScript runtime with vast package ecosystem.",
    paradigm: "Event-driven",
    code: `console.log("Hello ASL! The date is: " + new Date().toLocaleString());`,
  },
  {
    language: "PHP",
    description: "Battle-tested server-side scripting for the web.",
    paradigm: "Scripting",
    code: `<?php
echo "Hello ASL! The date is: " . date('Y-m-d H:i:s') . "\\n";
?>`,
  },
  {
    language: "Python",
    description: "Readable powerhouse for data, scripting, and web.",
    paradigm: "Multi-paradigm",
    code: `from datetime import datetime

print(f"Hello ASL! The date is: {datetime.now()}")`,
  },
  {
    language: "Ruby",
    description: "Expressive language focused on developer happiness.",
    paradigm: "Object-oriented",
    code: `puts "Hello ASL! The date is: #{Time.now}"`,
  },
];

export const heroHighlights = [
  {
    label: "Languages orchestrated",
    value: "7 runtimes",
  },
  {
    label: "Stack",
    value: "Next.js 16 • Bun • Tailwind • NextUI",
  },
  {
    label: "Deployment",
    value: "Static export → GitHub Pages",
  },
];

export const workflowSteps = [
  {
    key: "plan",
    title: "Plan & Analyze",
    description: "Audit the legacy static site, document requirements, and map content to reusable components.",
    checklist: [
      "Inventory language demos, Docker configuration, and copy.",
      "Define component architecture and theming tokens.",
      "Sketch responsive breakpoints and motion strategy.",
    ],
  },
  {
    key: "build",
    title: "Build the Experience",
    description: "Scaffold the Next.js App Router project with Bun, Tailwind, and NextUI for a unified design system.",
    checklist: [
      "Implement hero, feature grid, carousel, and accordion.",
      "Wire dark/light modes with NextUI + Tailwind tokens.",
      "Refine accessibility with ARIA, keyboard focus, and contrast.",
    ],
  },
  {
    key: "ship",
    title: "Ship & Automate",
    description: "Generate a static export, publish via GitHub Pages, and keep workflows simple for future changes.",
    checklist: [
      "Configure next.config.ts for static output in docs/.",
      "Provide bun scripts for dev, build, and export.",
      "Document deployment playbook and future enhancements.",
    ],
  },
];

export const deploymentTimeline = [
  {
    title: "Container orchestration",
    detail: "Docker Compose spins up C, Go, Java, Node.js, PHP, Python, and Ruby services inside a shared bridge network.",
  },
  {
    title: "Modern frontend rebuild",
    detail: "Next.js 16 with Bun compiles the premium UI, leveraging NextUI theming and Tailwind utilities for polish.",
  },
  {
    title: "Static export",
    detail: "next export produces the docs/ bundle with .nojekyll, ready for GitHub Pages hosting.",
  },
  {
    title: "Continuous deployment",
    detail: "GitHub Actions (optional) can run lint, tests, and bun run build:pages on every push to main.",
  },
];

export const resourcesAccordion = [
  {
    title: "Project tour",
    content: [
      "docker-compose.yml orchestrates language-specific containers with shared networking.",
      "Each service mounts local source for tight feedback loops.",
      "Frontend lives under frontend/, powered by Bun and Next.js 16.",
    ],
  },
  {
    title: "Getting started",
    content: [
      "`bun install` → install dependencies.",
      "`bun run dev` → start the Next.js development server.",
      "`bun run build:pages` → generate docs/ for GitHub Pages hosting.",
    ],
  },
  {
    title: "Extend the experience",
    content: [
      "Introduce live Docker status via API routes or Server Actions.",
      "Layer in storytelling visuals: svg line art, 3D gradients, micro animations.",
      "Expand tests with coverage for interactive tabs/carousels.",
    ],
  },
];
