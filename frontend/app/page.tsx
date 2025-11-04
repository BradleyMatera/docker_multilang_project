// Premium Docker Multi-Language Showcase – NextUI/Tailwind Redesign

"use client";
import { Button, Card, CardHeader, CardBody, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Divider } from "@nextui-org/react";
import { LanguageDemoCard } from "../components/LanguageDemoCard";
import { HeroSection } from "../components/HeroSection";

const demos = [
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
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-start px-4 py-8">
      <HeroSection />
      <Divider className="my-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1 rounded-full" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {demos.map((demo) => (
          <LanguageDemoCard
            key={demo.language}
            language={demo.language}
            description={demo.description}
            code={demo.code}
          />
        ))}
      </section>
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
