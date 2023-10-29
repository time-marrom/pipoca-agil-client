export function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between mx-auto bg-white-base">
      {children}
    </main>
  )
}
