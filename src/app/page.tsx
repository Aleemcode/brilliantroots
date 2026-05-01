import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { TarbiyahJourney } from "@/components/sections/tarbiyah-journey";
import { StartHere } from "@/components/sections/start-here";
import { Methodology } from "@/components/sections/methodology";
import { ProductsGrid } from "@/components/sections/products-grid";
import { FeaturedResource } from "@/components/sections/featured-resource";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <TarbiyahJourney />
        <StartHere />
        <ProductsGrid />
        <Methodology />
        <FeaturedResource />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
