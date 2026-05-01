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
    subtitle: "Curated Name Selection",
    description: "A digital platform designed to help Muslim families choose intentional, historically grounded names for their children. We prioritize deep, qualitative context over sheer volume.",
    image: "/baytul-asmaa-platform.png", 
    features: ["Audio pronunciations", "Scholar-verified meanings", "Historical contexts"],
    linkText: "Enter Platform",
    linkHref: "#"
  },
  {
    id: "mqcd",
    title: "My Qur'an Companion Device",
    subtitle: "Portable Audio Player",
    description: "A safe, screen-restricted alternative to mobile devices. Designed to support your child's memorization at home or school with long-lasting battery and high-quality sound.",
    image: "/mqcd-device.png", 
    features: [
      "Preloaded with 8 Renowned Qur'an Reciters",
      "40 An-Nawawi Collections & Durūsul-Lugha (Arabic)",
      "The Series On Muslim Manners & Beneficial Poems",
      "Bluetooth Enabled for easy connection",
      "Simple, child-friendly design for independent use"
    ],
    linkText: "Pre-order Device",
    linkHref: "#"
  },
  {
    id: "tarbiyah-corner",
    title: "Tarbiyah Corner Library",
    subtitle: "Foundational Reading",
    description: "The first published book under the Tarbiyah Corner imprint, focusing on the essential virtues of a Murabbi. Designed to equip parents with the knowledge they need.",
    image: "/tarbiyah-corner-book.png", // Using the generated faceless illustration
    features: ["Practical frameworks", "Authentic sources", "Beautiful faceless illustrations"],
    linkText: "Get the Book",
    linkHref: "#"
  }
];

export function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Section id="products" background="muted">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-24 border-t border-br-border/50">
        
        {/* Header Area */}
        <div className="mb-16 max-w-3xl">
          <AnimateIn>
            <div className="flex items-center gap-2 mb-6 text-sm font-mono tracking-tight text-br-primary uppercase">
              <span>— 03 THE ECOSYSTEM</span>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.1}>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.03em] font-bold text-br-text mb-6">
              Tools that serve the path.<br />
              <span className="text-br-primary">Not products in isolation.</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-lg text-br-muted leading-relaxed max-w-2xl">
              Each resource answers a different parent need: choosing with intention, supporting 
              memorization without screens, and giving parents language for their role as murabbis.
            </p>
          </AnimateIn>
        </div>

        {/* Grid Area */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <div 
                onClick={() => setSelectedProduct(product)}
                className="group cursor-pointer bg-br-card rounded-2xl overflow-hidden border border-br-border hover:border-br-primary/35 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md dark:shadow-none"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] w-full bg-br-muted/10 overflow-hidden relative">
                  <Image
                    src={product.image} 
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-br-primary/0 group-hover:bg-br-primary/10 transition-colors duration-300 mix-blend-overlay" />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-mono text-xs tracking-tight text-br-primary uppercase mb-2 block">
                    {product.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-br-text mb-3 tracking-tight group-hover:text-br-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-br-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex items-center text-br-text font-medium text-sm group-hover:text-br-primary transition-colors mt-auto pt-4 border-t border-br-border/50">
                    Explore Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
