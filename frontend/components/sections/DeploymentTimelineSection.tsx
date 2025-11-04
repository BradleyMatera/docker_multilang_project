// Timeline outlining how the stack ships from containers to GitHub Pages.

"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { deploymentTimeline } from "../../data/content";

export function DeploymentTimelineSection() {
  return (
    <section className="mx-auto mt-24 max-w-5xl px-2 sm:px-6" aria-labelledby="deployment-heading">
      <header className="mb-10 text-center space-y-3">
        <Chip color="secondary" variant="flat" className="mx-auto uppercase tracking-wide text-sm">
          Deployment Story
        </Chip>
        <h2 id="deployment-heading" className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          From container orchestration to static hosting.
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-foreground/70">
          The project marries runtime parity across containers with a modern static site workflow. Follow the path to get
          everything running locally and hosted globally.
        </p>
      </header>
      <div className="relative space-y-8">
        <div className="absolute left-12 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-foreground/20 to-accent/60 md:left-1/2 md:-translate-x-1/2" />
        {deploymentTimeline.map((item, index) => (
          <TimelineItem key={item.title} index={index} {...item} />
        ))}
      </div>
    </section>
  );
}

type TimelineItemProps = (typeof deploymentTimeline)[number] & { index: number };

function TimelineItem({ title, detail, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  return (
    <div className={`relative flex flex-col gap-4 md:flex-row ${isEven ? "md:justify-start" : "md:justify-end"} md:text-left`}>
      <div
        className={`flex items-center gap-4 md:absolute md:top-6 ${isEven ? "md:left-1/2 md:-translate-x-[calc(100%+2rem)]" : "md:left-1/2 md:translate-x-[2rem]"}`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 font-display text-xl text-primary shadow-xl-gradient">
          {index + 1}
        </span>
      </div>
      <Card
        radius="lg"
        className={`ml-12 border border-white/5 bg-background/85 backdrop-blur-xl shadow-xl-gradient md:ml-0 md:w-[calc(50%-3.5rem)] ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
      >
        <CardBody className="space-y-3">
          <h3 className="font-display text-2xl text-foreground">{title}</h3>
          <p className="text-foreground/70">{detail}</p>
        </CardBody>
      </Card>
    </div>
  );
}
