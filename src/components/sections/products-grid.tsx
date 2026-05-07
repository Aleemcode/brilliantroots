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
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-24 border-t border-br-border/50">
        
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <AnimateIn>
            <div className="flex items-center gap-2 mb-6 text-sm font-mono tracking-tight text-br-primary uppercase">
              <span>— 03 EXPLORE</span>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.1}>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.03em] font-bold text-br-text mb-6">
              Products, tools, and works<br />
              <span className="text-br-primary">arranged like useful shelves.</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-lg text-br-muted leading-relaxed max-w-2xl">
              Explore the support that fits your home: physical products, digital tools,
              published works, guides, and kits for Muslim family life.
            </p>
          </AnimateIn>
        </div>

        {/* Grid Area */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <div 
                onClick={() => setSelectedProduct(product)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[18px] border border-br-border/70 bg-br-surface shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-br-primary/35 hover:shadow-card dark:shadow-none"
              >
                {/* Image Container */}
                <div className="relative m-3 aspect-[4/3] overflow-hidden rounded-[14px] border border-br-border/60 bg-br-card/70">
                  <Image
                    src={product.image} 
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-br-primary/0 group-hover:bg-br-primary/10 transition-colors duration-300 mix-blend-overlay" />
                </div>

                {/* Content Container */}
                <div className="flex flex-grow flex-col p-6 pt-3">
                  <div className="mb-4 flex items-center justify-between gap-4 border-b border-br-border/50 pb-3">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-br-primary">
                      {product.subtitle}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-br-muted transition-all group-hover:translate-x-1 group-hover:text-br-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-br-text mb-3 tracking-tight group-hover:text-br-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-br-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {product.description}
                  </p>

                  <div className="mt-auto border-t border-br-border/50 pt-4 text-sm font-semibold text-br-primary transition-colors">
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
