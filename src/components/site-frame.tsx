import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
