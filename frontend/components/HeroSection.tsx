// Responsive, animated hero section for premium UI

"use client";
import { Button } from "@nextui-org/react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 opacity-60 blur-2xl animate-gradient"></div>
      <h1 className="relative text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
        Docker Multi-Language Project
      </h1>
      <p className="relative text-xl md:text-2xl text-gray-200 mb-8 font-medium z-10">
        Bold, modern, and animated showcase of language demos.<br />
        Built with Next.js, Bun, Tailwind, NextUI.
      </p>
      <Button
        color="primary"
        size="lg"
        radius="full"
        className="relative shadow-xl transition-transform hover:scale-105 z-10"
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
