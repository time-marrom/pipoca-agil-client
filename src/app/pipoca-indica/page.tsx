import { MaintenanceContent } from "@/components/MaintenanceContent"
import { PageContainer } from "@/components/PageContainer"
import { getSanityMaintenanceContent } from "@/services/axios"

export default async function IndicatesPopcorn() {
  const content = await getSanityMaintenanceContent()

  return (
    <PageContainer>
      <MaintenanceContent path="Pipoca Indica" content={content} />
    </PageContainer>
  )
}
