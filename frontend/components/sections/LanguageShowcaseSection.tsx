// Language showcase grid plus carousel for the Docker demos.

"use client";

import { Chip, Divider } from "@nextui-org/react";
import { languageDemos } from "../../data/content";
import { LanguageDemoCard } from "../LanguageDemoCard";
import { LanguageCarousel } from "../LanguageCarousel";

export function LanguageShowcaseSection() {
  return (
    <section className="mx-auto mt-24 flex max-w-6xl flex-col gap-12 px-2 sm:px-6" id="languages" aria-labelledby="language-section">
      <header className="space-y-4 text-center">
        <Chip color="primary" variant="flat" className="mx-auto uppercase tracking-wide text-sm">
          Language Showcase
        </Chip>
        <h2 id="language-section" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Containerized demos spanning seven runtimes.
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-foreground/70">
          Each container boots its language of choice, prints a time-stamped greeting, and illustrates how Docker Compose
          orchestrates a consistent developer experience.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {languageDemos.map((demo) => (
          <LanguageDemoCard key={demo.language} {...demo} />
        ))}
      </div>
      <Divider className="mx-auto w-1/2 bg-gradient-to-r from-primary via-accent to-primary" />
      <LanguageCarousel demos={languageDemos} />
    </section>
  );
}
