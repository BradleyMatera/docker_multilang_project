// Workflow tabs walk through the rebuild process end-to-end.

"use client";

import { Tabs, Tab, Card, CardBody, Chip } from "@nextui-org/react";
import { workflowSteps } from "../../data/content";

export function WorkflowTabsSection() {
  return (
    <section className="mx-auto mt-24 max-w-5xl space-y-8 px-2 sm:px-6" id="workflow" aria-labelledby="workflow-heading">
      <header className="space-y-4 text-center">
        <Chip color="primary" variant="shadow" className="mx-auto uppercase tracking-wide text-sm">
          Build Workflow
        </Chip>
        <h2 id="workflow-heading" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          A deliberate plan from audit to deployment.
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-foreground/70">
          Understand every decision behind the rebuild – from capturing the original assets to shipping a static export
          ready for GitHub Pages.
        </p>
      </header>
      <Tabs
        aria-label="Rebuild workflow"
        variant="bordered"
        color="secondary"
        classNames={{
          tab: "data-[selected=true]:bg-secondary/20 data-[selected=true]:text-foreground",
          base: "rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl p-3 shadow-xl-gradient",
        }}
      >
        {workflowSteps.map((step) => (
          <Tab
            key={step.key}
            title={
              <div className="flex items-center gap-3">
                <span className="font-display text-lg font-semibold">{step.title}</span>
              </div>
            }
          >
            <Card radius="lg" className="border border-white/5 bg-background/80 backdrop-blur-xl">
              <CardBody className="space-y-6">
                <p className="text-lg text-foreground/80">{step.description}</p>
                <ul className="grid gap-3 text-left text-foreground/70">
                  {step.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/60 text-xs font-bold text-white">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}
