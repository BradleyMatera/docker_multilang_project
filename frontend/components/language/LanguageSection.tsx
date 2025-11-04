"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LanguageTabs } from "./LanguageTabs";
import { LanguageOutput } from "./LanguageOutput";
import { useDemoOutput } from "@/hooks/useDemoOutput";

export function LanguageSection() {
  const demo = useDemoOutput();

  return (
    <motion.section
      id="language"
      className="space-y-10"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading
        eyebrow="Stage 02 · Language demos"
        title="Inspect live container output across each runtime."
        description="Switch between tabs to review source snippets and pull responses directly from the Docker services spun up by docker compose."
        gradient="from-runStart to-runEnd"
      />
      <LanguageTabs demo={demo} />
      <LanguageOutput demo={demo} />
    </motion.section>
  );
}
