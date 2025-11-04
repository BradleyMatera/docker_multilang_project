// Reusable card for language demo, using NextUI and Tailwind

"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface LanguageDemoCardProps {
  language: string;
  description: string;
  code: string;
}

export function LanguageDemoCard({ language, description, code }: LanguageDemoCardProps) {
  return (
    <Card className="bg-gradient-to-tr from-background-light via-primary to-accent shadow-xl-gradient hover:scale-105 hover:shadow-card transition-transform duration-300 rounded-2xl" tabIndex={0} aria-label={`Demo card for ${language}`}>
      <CardHeader className="flex flex-col items-start">
        <span className="text-lg font-bold text-primary drop-shadow-xl-gradient transition-colors duration-300">{language}</span>
        <span className="text-sm text-foreground">{description}</span>
      </CardHeader>
      <CardBody>
        <pre className="text-xs bg-black/50 rounded p-3 overflow-x-auto text-green-300">{code}</pre>
      </CardBody>
    </Card>
  );
}
