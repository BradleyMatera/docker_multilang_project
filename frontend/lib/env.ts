import { z } from "zod";

const envSchema = z.object({
  NEXT_PRIVATE_DEMO_HOST: z.string().url().default("http://localhost"),
});

export const env = envSchema.parse({
  NEXT_PRIVATE_DEMO_HOST: process.env.NEXT_PRIVATE_DEMO_HOST ?? process.env.NEXT_PUBLIC_DEMO_HOST ?? "http://localhost",
});
