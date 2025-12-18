"use client";

import { useEffect, useState, useTransition } from "react";
import { demoConfig, fetchDemoOutput } from "@/lib/demos";

type Language = (typeof demoConfig.languages)[number];

const DEFAULT_LANG: Language["id"] = demoConfig.languages[0]?.id ?? "c";

export interface DemoState {
  activeLang: Language["id"];
  setLanguage: (lang: string) => void;
  output: string;
  status: string;
  isPending: boolean;
}

export function useDemoOutput(): DemoState {
  const [activeLang, setActiveLang] = useState(DEFAULT_LANG);
  const [output, setOutput] = useState<string>("Fetching container output…");
  const [status, setStatus] = useState<string>("Live request pending");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const controller = new AbortController();
    startTransition(() => {
      fetchDemoOutput(activeLang, controller.signal)
        .then((res) => {
          if (controller.signal.aborted) return;
          setOutput(res.output ?? JSON.stringify(res, null, 2));
          setStatus(res.notice ?? "Live container response");
        })
        .catch(() => {
          if (controller.signal.aborted) return;
          const fallback = demoConfig.languages.find((lang) => lang.id === activeLang)?.snippet ?? "";
          setOutput(fallback);
          setStatus("Showing fallback snippet");
        });
    });

    return () => controller.abort();
  }, [activeLang]);

  return {
    activeLang,
    setLanguage: (lang) => setActiveLang(lang as Language["id"]),
    output,
    status,
    isPending,
  };
}
