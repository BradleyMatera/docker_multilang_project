"use client";

import { useEffect, useState } from "react";
import type { StageId } from "@/lib/stages";

const DEFAULT_STAGE: StageId = "overview";

export function useStageNav(stageIds: StageId[]) {
  const [activeStage, setActiveStage] = useState<StageId>(DEFAULT_STAGE);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const targets = stageIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id as StageId;
          setActiveStage(id);
        }
      },
      { threshold: [0.35, 0.6, 0.9] }
    );

    targets.forEach((el) => observer.observe(el));
    observers.push(observer);

    return () => observers.forEach((obs) => obs.disconnect());
  }, [stageIds]);

  return { activeStage };
}
