import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
  NEXT_PUBLIC_SANITY_DATASET: z.string(),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string(),
  NEXT_PUBLIC_SANITY_WEBHOOK_SECRET: z.string(),
});
console.log("process.env: ", process.env);
export const env = envSchema.parse(process.env);
