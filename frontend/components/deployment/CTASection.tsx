"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <motion.section
      id="ship"
      className="rounded-3xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-sky-500/20 p-10 text-center shadow-xl-gradient"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Stage 05 · Ship</p>
      <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">Run docker compose up and watch the demos stream live.</h2>
      <p className="mt-4 text-base text-slate-200 md:text-lg">
        Start the Docker services, then open the tabs above to see responses from each runtime. The site will fall back to code snippets if containers are offline.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Button as="a" href="https://github.com/BradleyMatera/docker_multilang_project" target="_blank" rel="noreferrer" size="lg" className="shadow-card">
          Clone repository
        </Button>
        <Button as="a" href="#overview" variant="secondary" size="lg">
          Back to overview
        </Button>
      </div>
    </motion.section>
  );
}
