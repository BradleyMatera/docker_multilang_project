// Simple carousel for language demos with smooth transitions.

"use client";

import { useState, useMemo } from "react";
import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { type LanguageDemo } from "../data/content";

type LanguageCarouselProps = {
  demos: LanguageDemo[];
};

export function LanguageCarousel({ demos }: LanguageCarouselProps) {
  const [index, setIndex] = useState(0);
  const activeDemo = useMemo(() => demos[index], [demos, index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? demos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === demos.length - 1 ? 0 : prev + 1));
  };

  return (
    <Card
      radius="lg"
      className="border border-white/5 bg-gradient-to-br from-black/80 via-background/90 to-background/70 backdrop-blur-xl shadow-xl-gradient"
      aria-live="polite"
    >
      <CardBody className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-wide text-primary/70">Language carousel</p>
            <h3 className="font-display text-3xl font-semibold text-foreground">{activeDemo.language}</h3>
            <p className="text-foreground/70">{activeDemo.description}</p>
          </div>
          <Chip color="secondary" variant="shadow">
            Slide {index + 1} of {demos.length}
          </Chip>
        </div>
        <code className="block max-h-72 overflow-auto rounded-2xl bg-black/70 p-5 font-mono text-sm text-foreground/90 shadow-inner">
          {activeDemo.code}
        </code>
        <div className="flex items-center justify-between gap-3">
          <Button variant="bordered" radius="full" onPress={handlePrev} aria-label="Show previous language">
            ← Previous
          </Button>
          <div className="flex items-center gap-2">
            {demos.map((demo, idx) => (
              <span
                key={demo.language}
                className={`h-2.5 w-2.5 rounded-full transition ${idx === index ? "bg-primary" : "bg-foreground/30"}`}
              />
            ))}
          </div>
          <Button variant="bordered" radius="full" onPress={handleNext} aria-label="Show next language">
            Next →
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
