import { Footer } from "../Footer";
import { Header } from "../Header";
import { getSanityHomeContent } from "@/services/axios";

interface PageContainerProps {
  children: React.ReactNode;
}

export async function PageContainer({ children }: PageContainerProps) {
  const content = await getSanityHomeContent();
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <Header content={content} />
      {children}
      <Footer />
    </main>
  );
}
