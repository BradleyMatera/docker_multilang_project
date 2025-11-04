// Accordion that surfaces project resources and next steps.

"use client";

import { Accordion, AccordionItem, Card, CardBody, Chip } from "@nextui-org/react";
import { resourcesAccordion } from "../../data/content";

export function ResourcesAccordionSection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl space-y-8 px-2 sm:px-6" id="resources" aria-labelledby="resources-heading">
      <header className="space-y-3 text-center">
        <Chip color="primary" variant="flat" className="mx-auto uppercase tracking-wide text-sm">
          Resources & Next Steps
        </Chip>
        <h2 id="resources-heading" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Everything you need to explore further.
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-foreground/70">
          Dive deeper into the architecture, reproduce the workflow locally, and queue up enhancements for future iterations.
        </p>
      </header>
      <Accordion
        variant="splitted"
        className="rounded-3xl border border-white/5 bg-black/50 p-4 backdrop-blur-xl shadow-xl-gradient"
      >
        {resourcesAccordion.map((item) => (
          <AccordionItem
            key={item.title}
            title={<span className="font-display text-xl text-foreground">{item.title}</span>}
            aria-label={item.title}
            className="rounded-2xl border border-white/5 bg-background/80"
          >
            <Card radius="lg" className="border border-white/5 bg-background/80">
              <CardBody className="space-y-3 text-left text-foreground/70">
                {item.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </CardBody>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
