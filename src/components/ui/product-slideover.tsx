"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  linkText: string;
  linkHref: string;
}

interface ProductSlideoverProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductSlideover({ product, isOpen, onClose }: ProductSlideoverProps) {
  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-br-bg/80 backdrop-blur-sm"
          />

          {/* Slideover Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md bg-br-card border-l border-br-border shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-br-border/50">
              <div>
                <h3 className="font-bold text-lg text-br-text">{product.title}</h3>
                <p className="text-sm font-mono text-br-primary">{product.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-br-muted/10 text-br-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              {/* Product Image */}
              <div className="aspect-square w-full rounded-xl bg-br-bg border border-br-border overflow-hidden mb-8 relative flex items-center justify-center">
                <Image
                  src={product.image} 
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-br-text uppercase tracking-wider mb-3">About this tool</h4>
                <p className="text-br-muted leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-bold text-br-text uppercase tracking-wider mb-3">What&apos;s inside</h4>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-br-muted text-sm">
                      <span className="text-br-primary mt-1 text-[10px]">♦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-6 border-t border-br-border/50 bg-br-card">
              <Button variant="primary" className="w-full" size="lg">
                {product.linkText}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
