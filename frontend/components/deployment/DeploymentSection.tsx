"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StaticDeployment } from "./StaticDeployment";
import { CICard } from "./CICard";

export function DeploymentSection() {
  return (
    <motion.section
      id="deployment"
      className="space-y-10"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading
        eyebrow="Stage 04 · Deployment"
        title="Export static assets and deploy with CI/CD."
        description="Keep the teaching site static while language demos remain containerized services."
        gradient="from-shipStart to-shipEnd"
      />
      <StaticDeployment />
      <CICard />
    </motion.section>
  );
}
