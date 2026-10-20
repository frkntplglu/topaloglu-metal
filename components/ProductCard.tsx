"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  index,
  className = "",
}: {
  product: Product;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <Link
        href={`/urunlerimiz/${product.slug}`}
        className="group relative block h-full min-h-[380px] overflow-hidden rounded-sm bg-ink-3"
      >
        <Image
          src={product.cover}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent transition-opacity duration-700 group-hover:opacity-80" />
        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
          <span className="mb-4 block text-xs font-medium tracking-[0.3em] text-ember">
            0{index + 1}
          </span>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h3 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl">
                {product.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone/70">{product.short}</p>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-ember">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
          <span className="mt-6 block h-0.5 w-full origin-left scale-x-0 bg-ember transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
        </div>
      </Link>
    </motion.div>
  );
}
