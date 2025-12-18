import { NextResponse } from "next/server";
import { z } from "zod";
import { demoConfig } from "@/lib/demos";
import { env } from "@/lib/env";

export const revalidate = 0;

const paramsSchema = z.object({
  lang: z.string(),
});

export function generateStaticParams() {
  return demoConfig.languages.map((lang) => ({ lang: lang.id }));
}

export async function GET(_request: Request, { params }: { params: { lang: string } }) {
  const parsed = paramsSchema.safeParse(params);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid language" }, { status: 400 });
  }

  const language = demoConfig.languages.find((lang) => lang.id === parsed.data.lang);
  if (!language) {
    return NextResponse.json({ error: "Language not found" }, { status: 404 });
  }

  const isExport =
    process.env.NEXT_PHASE === "phase-export" ||
    (process.env.NODE_ENV === "production" && process.env.NEXT_RUNTIME === undefined);
  if (isExport) {
    return NextResponse.json({ output: language.snippet, notice: "Static export fallback" });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);

  try {
    const host = new URL(env.NEXT_PRIVATE_DEMO_HOST);
    host.port = String(language.port);
    const response = await fetch(host.toString(), { cache: "no-store", signal: controller.signal });
    const text = await response.text();
    return NextResponse.json({ output: safeFormat(text), notice: "Live container response" });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json({ output: language.snippet, notice: "Request timed out" });
    }
    return NextResponse.json({ output: language.snippet, notice: "Container unavailable" });
  } finally {
    clearTimeout(timeout);
  }
}

function safeFormat(input: string) {
  try {
    const json = JSON.parse(input);
    return JSON.stringify(json, null, 2);
  } catch {
    return input.trim();
  }
}
