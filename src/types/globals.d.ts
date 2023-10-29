type RootLayoutProps = {
  children: React.ReactNode
}

type HomeContent = {
  title: string
  description: string
}

type MenuOption = {
  name: string
  path: string
  icon?: string
  text: string
  order: number
}

type Social = {
  order: number
  name: string
  path: string
  icon: ElementType
}

type MaintenanceContentProps = {
  pageName: string
}
