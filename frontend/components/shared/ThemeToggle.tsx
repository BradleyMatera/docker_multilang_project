"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ready = useMemo(
    () => mounted && typeof window !== "undefined" && resolvedTheme !== undefined,
    [mounted, resolvedTheme]
  );

  if (!ready) {
    return <div className="h-10 w-16 rounded-full bg-white/5" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      aria-label="Toggle color theme"
      size="sm"
      color="primary"
      isSelected={isDark}
      onValueChange={(selected) => setTheme(selected ? "dark" : "light")}
      className="border border-white/10 bg-black/30 px-3 py-1"
      startContent={<span aria-hidden>🌞</span>}
      endContent={<span aria-hidden>🌙</span>}
    />
  );
}
