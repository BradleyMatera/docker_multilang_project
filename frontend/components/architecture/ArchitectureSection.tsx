"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { OrchestrationDiagram } from "./OrchestrationDiagram";
import { WorkflowTimeline } from "./WorkflowTimeline";

export function ArchitectureSection() {
  return (
    <motion.section
      id="architecture"
      className="space-y-10"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading
        eyebrow="Stage 03 · Architecture"
        title="Visualize the Docker orchestration pipeline."
        description="Services share a Compose network while the Next.js frontend remains statically hosted."
        gradient="from-sky-400 to-indigo-500"
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <OrchestrationDiagram />
        <WorkflowTimeline />
      </div>
    </motion.section>
  );
}
