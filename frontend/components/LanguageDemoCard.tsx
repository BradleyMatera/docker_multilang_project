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
    <Card className="bg-gradient-to-tr from-gray-900 via-blue-800 to-purple-900 shadow-xl hover:scale-105 transition-transform duration-300">
      <CardHeader className="flex flex-col items-start">
        <span className="text-lg font-bold">{language}</span>
        <span className="text-sm text-gray-400">{description}</span>
      </CardHeader>
      <CardBody>
        <pre className="text-xs bg-black/50 rounded p-3 overflow-x-auto text-green-300">{code}</pre>
      </CardBody>
    </Card>
  );
}
