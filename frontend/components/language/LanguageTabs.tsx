"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { demoConfig } from "@/lib/demos";
import { CodeShowcase } from "./LanguageSample";
import type { DemoState } from "@/hooks/useDemoOutput";

interface Props {
  demo: DemoState;
}

export function LanguageTabs({ demo }: Props) {
  const { activeLang, setLanguage } = demo;

  return (
    <Tabs
      aria-label="Language demos"
      selectedKey={activeLang}
      onSelectionChange={(key) => setLanguage(key.toString())}
      className="mt-10"
      classNames={{
        tabList: "rounded-full border border-white/10 bg-white/5 p-1",
        tab: "px-5 py-2 text-sm font-medium data-[selected=true]:bg-gradient-to-r data-[selected=true]:from-runStart data-[selected=true]:to-runEnd data-[selected=true]:text-white rounded-full",
      }}
    >
      {demoConfig.languages.map((language) => (
        <Tab key={language.id} title={language.label} className="focus-visible:outline-none">
          <CodeShowcase language={language} />
        </Tab>
      ))}
    </Tabs>
  );
}
