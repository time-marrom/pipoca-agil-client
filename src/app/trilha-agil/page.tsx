import { MaintenanceContent } from "@/components/MaintenanceContent"
import { PageContainer } from "@/components/PageContainer"
import { getSanityMaintenanceContent } from "@/services/axios"

export default async function AgileTrail() {
  const content = await getSanityMaintenanceContent()

  return (
    <PageContainer>
      <MaintenanceContent path="Trilha Ágil" content={content} />
    </PageContainer>
  )
}
