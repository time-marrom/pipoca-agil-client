import { createClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!.toString()
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!.toString()
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!.toString()

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
})
