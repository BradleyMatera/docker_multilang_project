// Responsive, animated hero section for premium UI

"use client";
import { Button } from "@nextui-org/react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center overflow-hidden font-display" aria-label="Hero Section">
      {/* Animated SVG background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 560" fill="none">
        <defs>
          <linearGradient id="hero-gradient" x1="0" y1="0" x2="1440" y2="560" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <ellipse cx="720" cy="280" rx="700" ry="220" fill="url(#hero-gradient)" opacity="0.25">
          <animate attributeName="rx" values="700;750;700" dur="6s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="720" cy="320" rx="600" ry="180" fill="url(#hero-gradient)" opacity="0.18">
          <animate attributeName="rx" values="600;650;600" dur="7s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-background opacity-80 blur-2xl animate-gradient"></div>
      <h1 className="relative text-7xl md:text-8xl font-extrabold tracking-tight text-transparent mb-8 bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text animate-gradient drop-shadow-xl-gradient transition-all duration-700" tabIndex={0}>
        Docker Multi-Language Project
      </h1>
      <p className="relative text-2xl md:text-3xl text-foreground mb-10 font-medium z-10 drop-shadow-card transition-colors duration-500">
        Bold, modern, animated showcase of language demos.<br />
        Built with Next.js, Bun, Tailwind, NextUI.
      </p>
      <Button
        color="primary"
        size="lg"
        radius="full"
        className="relative shadow-xl-gradient transition-transform hover:scale-110 hover:shadow-card z-10 font-display duration-300"
        href="https://github.com/BradleyMatera/docker_multilang_project"
        target="_blank"
        aria-label="View project on GitHub"
      >
        <span className="mr-2" aria-hidden="true">🚀</span> View on GitHub
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
