// In-depth Tutorial Landing Page – Docker Multi-Language Project

"use client";
import { Divider, Card, CardHeader, CardBody, Accordion, AccordionItem, Button, Link } from "@nextui-org/react";
import { HeroSection } from "../components/HeroSection";
import { LanguageDemoCard } from "../components/LanguageDemoCard";
import { NavBar } from "../components/NavBar";

const steps = [
  {
    title: "Project Overview",
    content: (
      <>
        <p>
          This project is a comprehensive showcase of how to orchestrate multiple programming languages in a single Docker Compose environment, then rebuild the experience as a modern static site using Next.js 16, Bun, Tailwind CSS, and NextUI.
        </p>
        <ul className="list-disc ml-6 mt-2 text-left">
          <li>Multi-language Docker Compose setup (C, Go, Java, Node.js, PHP, Python, Ruby)</li>
          <li>Static site rebuild with Next.js 16 (App Router, TypeScript, Bun)</li>
          <li>Premium UI/UX with NextUI, Tailwind, dark/light theming, and accessibility</li>
          <li>Automated deployment to GitHub Pages via GitHub Actions</li>
        </ul>
      </>
    ),
  },
  {
    title: "Architecture & Technologies",
    content: (
      <>
        <p>
          <b>Backend:</b> Docker Compose orchestrates containers for each language, running hello-world scripts.<br />
          <b>Frontend:</b> Next.js 16 (App Router, TypeScript, Bun) powers the static site, styled with Tailwind and NextUI.<br />
          <b>Design System:</b> NextUI provides accessible, themeable, animated components.<br />
          <b>Deployment:</b> GitHub Actions builds and deploys the site to GitHub Pages.
        </p>
        <img src="/docker_multilang_project/globe.svg" alt="Architecture Diagram" className="mx-auto my-4 w-48 h-48" />
      </>
    ),
  },
  {
    title: "Step-by-Step Implementation",
    content: (
      <ol className="list-decimal ml-6 mt-2 text-left">
        <li>
          <b>Analyze Requirements:</b> Gather all source files, Docker Compose config, and project goals.
        </li>
        <li>
          <b>Scaffold Frontend:</b> Use <code>bun create next-app</code> to set up Next.js 16 with Tailwind, TypeScript, and App Router.
        </li>
        <li>
          <b>Install NextUI:</b> <code>bun add @nextui-org/react</code> for the design system.
        </li>
        <li>
          <b>Configure Tailwind:</b> Set up <code>tailwind.config.js</code> for NextUI integration and dark mode.
        </li>
        <li>
          <b>Build Components:</b> Create reusable cards, hero, navigation, and interactive sections using NextUI and Tailwind.
        </li>
        <li>
          <b>Migrate Content:</b> Port all code samples and explanations, enhancing with visuals, hierarchy, and CTAs.
        </li>
        <li>
          <b>Automate Deployment:</b> Configure <code>next.config.ts</code> for static export, add .nojekyll, and set up GitHub Actions workflow.
        </li>
        <li>
          <b>Document Everything:</b> Write a detailed README and TODO.md for future enhancements.
        </li>
      </ol>
    ),
  },
  {
    title: "Code Walkthrough",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            language: "C",
            description: "Compiled systems language. Prints date/time.",
            code: `#include <stdio.h>\n#include <time.h>\nint main() {\n  time_t t;\n  time(&t);\n  printf("Hello ASL! The date is: %s", ctime(&t));\n  return 0;\n}`,
          },
          {
            language: "Go",
            description: "Modern compiled language. Prints date/time.",
            code: `package main\nimport (\n  "fmt"\n  "time"\n)\nfunc main() {\n  fmt.Println("Hello ASL! The date is:", time.Now())\n}`,
          },
          {
            language: "Java",
            description: "Popular OOP language. Prints date/time.",
            code: `import java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\npublic class Hello {\n  public static void main(String[] args) {\n    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");\n    LocalDateTime now = LocalDateTime.now();\n    System.out.println("Hello ASL! The date is: " + dtf.format(now));\n  }\n}`,
          },
          {
            language: "Node.js",
            description: "JavaScript runtime. Prints date/time.",
            code: `console.log("Hello ASL! The date is: " + new Date().toLocaleString());`,
          },
          {
            language: "PHP",
            description: "Server-side scripting. Prints date/time.",
            code: `<?php\necho "Hello ASL! The date is: " . date('Y-m-d H:i:s') . "\\n";\n?>`,
          },
          {
            language: "Python",
            description: "Popular scripting language. Prints date/time.",
            code: `from datetime import datetime\nprint(f"Hello ASL! The date is: {datetime.now()}")`,
          },
          {
            language: "Ruby",
            description: "Elegant scripting language. Prints date/time.",
            code: `puts "Hello ASL! The date is: #{Time.now}"`,
          },
        ].map((demo) => (
          <LanguageDemoCard
            key={demo.language}
            language={demo.language}
            description={demo.description}
            code={demo.code}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Deployment & Automation",
    content: (
      <>
        <p>
          <b>Static Export:</b> Next.js 16 with <code>output: "export"</code> in <code>next.config.ts</code> generates static files in <code>frontend/docs</code>.<br />
          <b>GitHub Actions:</b> Workflow builds and pushes to <code>gh-pages</code> branch.<br />
          <b>GitHub Pages:</b> Site is served from <code>gh-pages</code> branch, folder <code>/</code>.<br />
          <b>Continuous Deployment:</b> Every push to master triggers a rebuild and redeploy.
        </p>
        <Button
          color="primary"
          size="lg"
          radius="full"
          className="mt-4 shadow-xl transition-transform hover:scale-105"
          href="https://github.com/BradleyMatera/docker_multilang_project"
          target="_blank"
        >
          View Full Source on GitHub
        </Button>
      </>
    ),
  },
  {
    title: "Future Enhancements",
    content: (
      <ul className="list-disc ml-6 mt-2 text-left">
        <li>Animated transitions, micro-interactions, and purposeful motion</li>
        <li>Custom illustrations, SVGs, and advanced visuals</li>
        <li>Accessibility improvements (ARIA, keyboard navigation, color contrast)</li>
        <li>Interactive carousels, tabs, accordions for content</li>
        <li>Expanded documentation and architecture diagrams</li>
        <li>Performance optimizations and mobile-first design</li>
      </ul>
    ),
  },
];

export default function TutorialLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-start px-4 py-8">
      <NavBar />
      <HeroSection />
      <Divider className="my-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1 rounded-full" />
      <Accordion variant="splitted" className="w-full max-w-4xl mb-12" defaultExpandedKeys={["0"]}>
        {steps.map((step, idx) => (
          <AccordionItem
            key={idx}
            title={<span className="text-xl font-bold">{step.title}</span>}
            textValue={step.title}
            className="bg-black/70 text-white rounded-xl shadow-lg mb-4"
          >
            <div className="text-lg">{step.content}</div>
          </AccordionItem>
        ))}
      </Accordion>
      <footer className="mt-16 text-center text-gray-400 text-sm">
        <Divider className="my-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1 rounded-full" />
        <span>
          &copy; {new Date().getFullYear()} Docker Multi-Language Project &mdash; Built with Next.js, Bun, Tailwind, NextUI
        </span>
      </footer>
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
    </main>
  );
}
