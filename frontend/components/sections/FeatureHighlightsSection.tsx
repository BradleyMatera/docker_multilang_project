// Feature highlights section emphasising the visual and architectural upgrade.

"use client";

import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import { IconNotebook, IconSparkles, IconTransform, IconDevices } from "./icons";

const features = [
  {
    title: "Visual polish that inspires",
    description: "Layered gradients, glassmorphism, and cinematic typography deliver a premium onboarding moment.",
    icon: IconSparkles,
    badge: "Visual Upgrade",
  },
  {
    title: "Reusable component system",
    description: "Navigation, cards, accordions, and carousels abstract repeated patterns with a consistent design language.",
    icon: IconNotebook,
    badge: "Component Architecture",
  },
  {
    title: "Accessibility & responsiveness",
    description: "Keyboard friendly interactions, ARIA labelling, and mobile-first layouts ensure inclusive reach across devices.",
    icon: IconDevices,
    badge: "Inclusive",
  },
  {
    title: "Interactive storytelling",
    description: "Tabs, accordions, and a curated carousel keep the tutorial engaging while guiding readers to deploy quickly.",
    icon: IconTransform,
    badge: "Interactive",
  },
];

export function FeatureHighlightsSection() {
  return (
    <section className="mx-auto mt-20 max-w-6xl space-y-12 px-2 sm:px-6" aria-labelledby="feature-highlights">
      <header className="space-y-4 text-center">
        <Chip color="secondary" variant="flat" className="mx-auto uppercase tracking-wide">
          Experience Goals
        </Chip>
        <h2 id="feature-highlights" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Built to feel bold, modern, and cohesive.
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-foreground/70">
          Every section of the site supports clarity and momentum – from the hero to the deployment instructions –
          while honoring the original multi-language demos.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map(({ title, description, icon: Icon, badge }) => (
          <Card
            key={title}
            radius="lg"
            className="border border-white/5 bg-black/60 backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl-gradient"
          >
            <CardBody className="space-y-4">
              <div className="flex items-center justify-between">
                <Chip variant="flat" color="primary" className="font-semibold uppercase tracking-wide">{badge}</Chip>
                <Icon className="h-10 w-10 text-primary" />
              </div>
              <Divider className="bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30" />
              <h3 className="font-display text-2xl text-foreground">{title}</h3>
              <p className="text-foreground/70">{description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
