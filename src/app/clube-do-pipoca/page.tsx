import { MaintenanceContent } from "@/components/MaintenanceContent"
import { PageContainer } from "@/components/PageContainer"
import { getSanityMaintenanceContent } from "@/services/axios"

export default async function PopcornClub() {
  const content = await getSanityMaintenanceContent()

  return (
    <PageContainer>
      <MaintenanceContent path="Clube do Pipoca" content={content} />
    </PageContainer>
  )
}
