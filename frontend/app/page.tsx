"use client";

import { Divider } from "@nextui-org/react";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlightsSection } from "@/components/sections/FeatureHighlightsSection";
import { LanguageShowcaseSection } from "@/components/sections/LanguageShowcaseSection";
import { WorkflowTabsSection } from "@/components/sections/WorkflowTabsSection";
import { DeploymentTimelineSection } from "@/components/sections/DeploymentTimelineSection";
import { ResourcesAccordionSection } from "@/components/sections/ResourcesAccordionSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-black text-foreground">
      <NavBar />
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-12 pb-32">
        <HeroSection />
        <FeatureHighlightsSection />
        <LanguageShowcaseSection />
        <WorkflowTabsSection />
        <DeploymentTimelineSection />
        <ResourcesAccordionSection />
        <CallToActionSection />
        <Divider className="mx-auto my-16 w-3/4 bg-gradient-to-r from-primary via-accent to-primary" />
        <Footer />
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="px-6 pb-12 text-center text-sm text-foreground/60">
      Built with Next.js 16, Bun, Tailwind, and NextUI. &copy; {new Date().getFullYear()} Docker Multi-Language Project.
    </footer>
  );
}
