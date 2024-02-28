import { MaintenanceContent } from "@/components/MaintenanceContent"
import { PageContainer } from "@/components/PageContainer"
import { getSanityMaintenanceContent } from "@/services/axios"

export default async function NotFound() {
  const content = await getSanityMaintenanceContent()
  return (
    <PageContainer>
      <MaintenanceContent content={content} />
    </PageContainer>
  )
}
