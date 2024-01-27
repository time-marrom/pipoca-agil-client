import { MaintenanceContent } from "@/components/MaintenanceContent"
import { PageContainer } from "@/components/PageContainer"
import { getSanityMaintenanceContent } from "@/services/axios"

export default async function PodcastPage() {
  const content = await getSanityMaintenanceContent()

  return (
    <PageContainer>
      <MaintenanceContent path="Podcast" content={content} />
    </PageContainer>
  )
}
