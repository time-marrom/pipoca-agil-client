import { MaintenanceContent } from "@/components/MaintenanceContent"
import { getSanityMaintenanceContent } from "@/services/axios"

export default async function NotFound() {
  const content = await getSanityMaintenanceContent()
  return <MaintenanceContent content={content} />
}
