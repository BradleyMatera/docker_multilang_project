"use client";

import { useMemo } from "react";
import { stages, type StageId } from "@/lib/stages";
import { useStageNav } from "@/hooks/useStageNav";

export function StageNav() {
  const stageIds = useMemo(() => stages.map((stage) => stage.id as StageId), []);
  const { activeStage } = useStageNav(stageIds);

  return (
    <div className="overflow-x-auto border-t border-white/5 bg-black/30">
      <ol className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-4 text-sm">
        {stages.map((stage) => {
          const isActive = activeStage === stage.id;
          return (
            <li key={stage.id}>
              <a
                href={`#${stage.id}`}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-sky-400 bg-sky-500/10 text-white"
                    : "border-white/10 text-slate-200 hover:border-sky-400/60 hover:text-white"
                } focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${stage.gradient}`}
                  aria-hidden
                />
                {stage.label}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
