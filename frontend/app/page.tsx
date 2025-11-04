import { Hero } from "@/components/hero/Hero";
import { StageShell } from "@/components/layout/StageShell";
import { LanguageSection } from "@/components/language/LanguageSection";
import { ArchitectureSection } from "@/components/architecture/ArchitectureSection";
import { DeploymentSection } from "@/components/deployment/DeploymentSection";
import { CTASection } from "@/components/deployment/CTASection";

export default function HomePage() {
  return (
    <StageShell>
      <Hero />
      <LanguageSection />
      <ArchitectureSection />
      <DeploymentSection />
      <CTASection />
    </StageShell>
  );
}
