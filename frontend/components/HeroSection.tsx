// Responsive, animated hero section for premium UI

"use client";
import { Button } from "@nextui-org/react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center overflow-hidden font-display">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-background opacity-70 blur-2xl animate-gradient"></div>
      <h1 className="relative text-6xl md:text-7xl font-extrabold tracking-tight text-transparent mb-6 bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text animate-gradient drop-shadow-xl-gradient">
        Docker Multi-Language Project
      </h1>
      <p className="relative text-xl md:text-2xl text-foreground mb-8 font-medium z-10 drop-shadow-card">
        Bold, modern, and animated showcase of language demos.<br />
        Built with Next.js, Bun, Tailwind, NextUI.
      </p>
      <Button
        color="primary"
        size="lg"
        radius="full"
        className="relative shadow-xl-gradient transition-transform hover:scale-105 z-10 font-display"
        href="https://github.com/BradleyMatera/docker_multilang_project"
        target="_blank"
      >
        View on GitHub
      </Button>
      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 4s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
