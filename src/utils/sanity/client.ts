import "dotenv/config";
import { createClient } from "next-sanity";

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
  projectId: String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID),
  dataset: String(process.env.NEXT_PUBLIC_SANITY_DATASET),
  apiVersion: String(process.env.NEXT_PUBLIC_SANITY_API_VERSION),
  useCdn: true,
});
