export function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between bg-theme-white-base">
      {children}
    </main>
  );
}
