// Reusable card for language demo, using NextUI and Tailwind
// Reusable card for language demo, pairing NextUI polish with Tailwind motion.

"use client";
import { Card, CardHeader, CardBody, Chip, Divider } from "@nextui-org/react";
import { type LanguageDemo } from "../data/content";

type LanguageDemoCardProps = LanguageDemo;

export function LanguageDemoCard({ language, description, code, paradigm }: LanguageDemoCardProps) {
  return (
    <Card
      className="group h-full transform-gpu bg-gradient-to-br from-background-light/90 via-background/80 to-background/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-xl-gradient"
      radius="lg"
      tabIndex={0}
      aria-label={`Demo card for ${language}`}
    >
      <CardHeader className="flex flex-col items-start gap-3">
        <div className="flex w-full items-center justify-between gap-3">
          <span className="font-display text-xl font-semibold text-primary transition group-hover:text-accent">
            {language}
          </span>
          <Chip variant="flat" color="primary" className="font-medium uppercase">
            {paradigm}
          </Chip>
        </div>
        <p className="text-sm text-foreground/80">{description}</p>
      </CardHeader>
      <Divider className="mx-4 my-1 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40" />
      <CardBody>
        <code className="block max-h-56 overflow-auto rounded-xl bg-black/70 p-4 font-mono text-xs leading-relaxed text-foreground/90 shadow-inner">
          {code}
        </code>
      </CardBody>
    </Card>
  );
}
