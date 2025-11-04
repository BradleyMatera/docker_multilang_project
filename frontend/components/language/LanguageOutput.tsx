"use client";

import { Card, CardBody, Skeleton } from "@nextui-org/react";
import type { DemoState } from "@/hooks/useDemoOutput";

interface Props {
  demo: DemoState;
}

export function LanguageOutput({ demo }: Props) {
  const { output, isPending } = demo;

  return (
    <Card radius="lg" className="border border-white/10 bg-white/5 backdrop-blur">
      <CardBody className="space-y-3 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Container output</h3>
          {isPending ? <span className="text-xs uppercase tracking-wide text-slate-400">updating…</span> : null}
        </div>
        {isPending ? (
          <Skeleton className="h-32 w-full rounded-xl bg-white/10" />
        ) : (
          <pre className="max-h-72 overflow-auto rounded-xl bg-black/80 p-4 font-mono text-sm leading-relaxed text-amber-200">
            {output}
          </pre>
        )}
      </CardBody>
    </Card>
  );
}
