// Closing call to action with supporting links.

"use client";

import { Button, Card, CardBody, Chip } from "@nextui-org/react";

export function CallToActionSection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl px-2 sm:px-6">
      <Card radius="lg" className="border border-white/10 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 text-white shadow-xl-gradient rounded-[32px]">
        <CardBody className="flex flex-col gap-6 p-10 text-center">
          <Chip variant="flat" color="default" className="mx-auto bg-black/40 text-sm uppercase tracking-wide text-white/80">
            Ready to orchestrate?
          </Chip>
          <h2 className="font-display text-4xl font-bold">
            Clone the repo, spin up the containers, and explore the premium rebuild.
          </h2>
          <p className="text-lg text-white/80">
            Docker Compose runs the hello-world demos while the statically exported Next.js site showcases the story.
            Extend it with your own languages, UI experiments, or production pipelines.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              as="a"
              href="https://github.com/BradleyMatera/docker_multilang_project"
              target="_blank"
              size="lg"
              radius="full"
              color="primary"
              variant="solid"
              className="shadow-card"
            >
              Star on GitHub
            </Button>
            <Button
              as="a"
              href="https://docs.docker.com/compose/"
              target="_blank"
              size="lg"
              radius="full"
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10"
            >
              Docker Compose Docs
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
