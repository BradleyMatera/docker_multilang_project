import { Card, CardBody } from "@nextui-org/react";
import { demoConfig } from "@/lib/demos";

type Language = (typeof demoConfig.languages)[number];

export function CodeShowcase({ language }: { language: Language }) {
  return (
    <Card radius="lg" className="border border-white/10 bg-black/60 backdrop-blur">
      <CardBody className="space-y-4">
        <header>
          <p className="text-xs uppercase tracking-widest text-slate-400">Runtime</p>
          <h3 className="text-lg font-semibold text-white">{language.label}</h3>
          <p className="text-sm text-slate-300">{language.description}</p>
        </header>
        <pre className="max-h-80 overflow-auto rounded-2xl bg-black/80 p-4 font-mono text-xs leading-relaxed text-emerald-200">
          {language.snippet}
        </pre>
      </CardBody>
    </Card>
  );
}
