interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <main
      className="flex w-full min-h-screen flex-col items-center justify-between"
    >
      {children}
    </main>
  );
}
