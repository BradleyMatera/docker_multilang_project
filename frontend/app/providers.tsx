// Providers for HeroUI (NextUI) integration with Next.js App Router

"use client";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
