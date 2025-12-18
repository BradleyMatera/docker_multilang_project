"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LanguageTabs } from "./LanguageTabs";
import { LanguageOutput } from "./LanguageOutput";
import { useDemoOutput } from "@/hooks/useDemoOutput";
import { Card } from "@/components/ui/Card";
import { Stack } from "@/components/ui/Stack";

export function LanguageSection() {
  const demo = useDemoOutput();

  return (
    <motion.section
      id="language"
      className="space-y-10 scroll-mt-28"
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
      <div className="grid gap-6 lg:grid-cols-12">
        <Stack gap="lg" className="lg:col-span-5">
          <Card className="space-y-3">
            <h3 className="text-base font-semibold text-white">How to use</h3>
            <ul className="space-y-2 text-sm text-slate-200 list-disc list-inside">
              <li>Select a language tab to view its code snippet.</li>
              <li>Containers must be running (see Deployment) for live output.</li>
              <li>If offline, we show the snippet as a fallback.</li>
            </ul>
          </Card>
          <LanguageTabs demo={demo} />
        </Stack>
        <div className="lg:col-span-7">
          <LanguageOutput demo={demo} />
        </div>
      </div>
    </motion.section>
  );
}
