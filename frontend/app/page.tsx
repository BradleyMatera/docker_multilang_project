// Home page for the Docker Multi-Language Project, visually upgraded with NextUI/Tailwind

"use client";
import { Button } from "@nextui-org/react";
import { LanguageDemoCard } from "../components/LanguageDemoCard";

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
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white flex flex-col items-center justify-start px-4 py-8">
      <section className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          🚀 Docker Multi-Language Showcase
        </h1>
        <p className="text-xl mb-6 text-gray-300">
          Explore how different programming languages print a hello-world message with the current date and time. Modern, responsive, and visually bold.
        </p>
        <Button color="primary" size="lg" className="shadow-lg" radius="full">
          View on GitHub
        </Button>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {demos.map((demo) => (
          <LanguageDemoCard
            key={demo.language}
            language={demo.language}
            description={demo.description}
            code={demo.code}
          />
        ))}
      </section>
    </main>
  );
}
