interface PageContainerProps {
  children: React.ReactNode;
  background: string;
}

export function PageContainer({ children, background }: PageContainerProps) {
  return (
    <main
      className={`flex w-full min-h-screen flex-col items-center justify-between ${background}`}
    >
      {children}
    </main>
  );
}
