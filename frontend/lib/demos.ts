import { z } from "zod";
import demos from "@/data/demos.json";

export const demoSchema = z.object({
  languages: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      port: z.number(),
      gradient: z.string(),
      description: z.string(),
      snippet: z.string(),
      runtime: z.string(),
    })
  ),
});

type DemoConfig = z.infer<typeof demoSchema>;

const parsed = demoSchema.parse(demos);
export const demoConfig: DemoConfig = parsed;

export async function fetchDemoOutput(lang: string, signal?: AbortSignal) {
  const url = `/api/demo/${encodeURIComponent(lang)}`;
  const res = await fetch(url, { cache: "no-store", signal });
  if (!res.ok) {
    throw new Error(`Failed to fetch demo output for ${lang}`);
  }
  return (await res.json()) as { output: string; notice?: string };
}
