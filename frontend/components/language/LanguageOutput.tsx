"use client";

import { Card, CardBody, Skeleton } from "@nextui-org/react";
import type { DemoState } from "@/hooks/useDemoOutput";

interface Props {
  demo: DemoState;
}

export function LanguageOutput({ demo }: Props) {
  const { output, status, isPending } = demo;

  return (
    <Card radius="lg" className="border border-white/10 bg-white/5 backdrop-blur">
      <CardBody className="space-y-3 p-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Container output</h3>
            <p className="text-xs text-slate-400">Responses from running containers. Falls back to code snippet if unavailable.</p>
          </div>
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-wide text-slate-200" aria-live="polite">
            {isPending ? "Updating…" : status}
          </span>
        </header>
        {isPending ? (
          <Skeleton className="h-32 w-full rounded-xl bg-white/10" />
        ) : (
          <pre className="max-h-72 overflow-auto rounded-xl bg-black/80 p-4 font-mono text-sm leading-relaxed text-amber-200" aria-live="polite">
            {output}
          </pre>
        )}
      </CardBody>
    </Card>
  );
}
