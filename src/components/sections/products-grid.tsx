"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { ProductSlideover, Product } from "@/components/ui/product-slideover";
import { ArrowRight } from "lucide-react";

const products: Product[] = [
  {
    id: "baytul-asmaa",
    title: "Baytul Asmaa",
    subtitle: "TOOL · NAMES & IDENTITY",
    description: "A digital platform designed to help Muslim families choose intentional, historically grounded names for their children. We prioritize deep, qualitative context over sheer volume.",
    image: "/baytul-asmaa-platform.png", 
    features: ["Audio pronunciations", "Scholar-verified meanings", "Historical contexts"],
    linkText: "Open Entry",
    linkHref: "https://baytul-asmaa.com/"
  },
  {
    id: "mqcd",
    title: "My Qur'an Companion Device",
    subtitle: "PRODUCT · QUR'AN AUDIO",
    description: "A safe, screen-restricted alternative to mobile devices. Designed to support your child's memorization at home or school with long-lasting battery and high-quality sound.",
    image: "/mqcd-device.png", 
    features: [
      "Preloaded with 8 Renowned Qur'an Reciters",
      "40 An-Nawawi Collections & Durūsul-Lugha (Arabic)",
      "The Series On Muslim Manners & Beneficial Poems",
      "Bluetooth Enabled for easy connection",
      "Simple, child-friendly design for independent use"
    ],
    linkText: "Open Entry",
    linkHref: "/tools/quran-companion-device"
  },
  {
    id: "tarbiyah-corner",
    title: "Tarbiyah Corner Library",
    subtitle: "PUBLISHED WORK · PARENT GUIDANCE",
    description: "The first published book under the Tarbiyah Corner imprint, focusing on the essential virtues of a Murabbi. Designed to equip parents with the knowledge they need.",
    image: "/tarbiyah-corner-book.png", // Using the generated faceless illustration
    features: ["Practical frameworks", "Authentic sources", "Beautiful faceless illustrations"],
    linkText: "Open Entry",
    linkHref: "/tools/tarbiyah-corner-library"
  }
];

export function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Section id="explore" background="muted">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        
        {/* Header Area */}
        <div className="mb-14 grid gap-8 border-y border-br-border/70 py-10 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <AnimateIn>
            <div className="font-mono text-sm uppercase tracking-[0.16em] text-br-primary">
              <span>03 / Explore</span>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.1}>
            <h2 className="max-w-4xl text-[2.75rem] font-bold leading-[1.02] tracking-[-0.04em] text-br-text md:text-[4.25rem]">
              Products, tools, and works arranged like useful shelves.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2} className="md:col-start-2">
            <p className="max-w-2xl text-lg leading-relaxed text-br-muted">
              Explore the support that fits your home: physical products, digital tools,
              published works, guides, and kits for Muslim family life.
            </p>
          </AnimateIn>
        </div>

        {/* Grid Area */}
        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <StaggerItem key={product.id}>
              <div 
                onClick={() => setSelectedProduct(product)}
                className="paper-panel group flex h-full cursor-pointer flex-col overflow-hidden rounded-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:border-br-primary/40"
              >
                <div className="grid grid-cols-[auto_1fr] border-b border-br-border/65">
                  <div className="flex w-16 items-center justify-center border-r border-br-border/65 font-mono text-xs text-br-muted">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex min-h-16 items-center justify-between gap-4 px-5 py-4">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-br-primary">
                      {product.subtitle}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-br-muted transition-all group-hover:translate-x-1 group-hover:text-br-primary" />
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative m-4 aspect-[1.15] overflow-hidden rounded-[12px] border border-br-border/60 bg-br-card/70">
                  <Image
                    src={product.image} 
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-br-primary/0 group-hover:bg-br-primary/10 transition-colors duration-300 mix-blend-overlay" />
                </div>

                {/* Content Container */}
                <div className="flex flex-grow flex-col px-6 pb-6 pt-2">
                  <h3 className="mb-4 text-3xl font-semibold leading-[1.05] tracking-tight text-br-text transition-colors group-hover:text-br-primary">
                    {product.title}
                  </h3>
                  <p className="mb-8 flex-grow text-sm leading-relaxed text-br-muted">
                    {product.description}
                  </p>

                  <div className="mt-auto border-t border-br-border/60 pt-4 text-sm font-semibold text-br-primary transition-colors">
                    Open entry
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>

      {/* Slideover Modal */}
      <ProductSlideover 
        product={selectedProduct} 
        isOpen={selectedProduct !== null} 
        onClose={() => setSelectedProduct(null)} 
      />
    </Section>
  );
}
