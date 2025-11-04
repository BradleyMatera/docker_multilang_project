// Providers for HeroUI (NextUI) integration with Next.js App Router

"use client";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const navigate = (href: string) => {
    (router as unknown as { push: (href: string) => void }).push(href);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextUIProvider navigate={navigate}>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
