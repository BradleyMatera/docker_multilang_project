"use client";

import { useEffect, useState, useTransition } from "react";
import { demoConfig, fetchDemoOutput } from "@/lib/demos";

type Language = (typeof demoConfig.languages)[number];

const DEFAULT_LANG: Language["id"] = demoConfig.languages[0]?.id ?? "c";

export interface DemoState {
  activeLang: Language["id"];
  setLanguage: (lang: string) => void;
  output: string;
  isPending: boolean;
}

export function useDemoOutput(): DemoState {
  const [activeLang, setActiveLang] = useState(DEFAULT_LANG);
  const [output, setOutput] = useState<string>("Fetching container output…");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      fetchDemoOutput(activeLang)
        .then((res) => setOutput(res.output ?? JSON.stringify(res, null, 2)))
        .catch(() => {
          const fallback = demoConfig.languages.find((lang) => lang.id === activeLang)?.snippet ?? "";
          setOutput(fallback);
        });
    });
  }, [activeLang]);

  return {
    activeLang,
    setLanguage: (lang) => setActiveLang(lang as Language["id"]),
    output,
    isPending,
  };
}
