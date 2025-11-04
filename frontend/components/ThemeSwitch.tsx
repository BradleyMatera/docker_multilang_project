// Theme toggle switch shared across navigation and other UI.

"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleChange = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  if (!resolvedTheme) {
    return <span aria-hidden="true" className="inline-flex h-10 w-[4.5rem] rounded-full bg-black/10" />;
  }

  return (
    <Switch
      aria-label="Toggle dark mode"
      size="lg"
      color="primary"
      isSelected={isDark}
      onValueChange={handleChange}
      startContent={<span role="img" aria-hidden="true">🌞</span>}
      endContent={<span role="img" aria-hidden="true">🌜</span>}
      className="border border-white/10 bg-black/40 px-2 py-1 backdrop-blur"
    >
      <span className="px-1 text-sm font-semibold text-foreground/80">
        {isDark ? "Dark" : "Light"}
      </span>
    </Switch>
  );
}
