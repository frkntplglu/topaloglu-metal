"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

/** Ana sayfa: imleci takip eden görsel önizlemeli ürün listesi. */
export function ProductShowcase({ products }: { products: Product[] }) {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 25, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 25, mass: 0.5 });

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => setActive(null)}
    >
      <ul className="border-t border-white/10">
        {products.map((p, i) => (
          <motion.li
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActive(i)}
            className="border-b border-white/10"
          >
            <Link
              href={`/urunlerimiz/${p.slug}`}
              className="group relative flex items-center gap-5 py-7 sm:gap-10 sm:py-9"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-ember/15 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              <span className="relative w-8 text-sm font-medium text-steel">0{i + 1}</span>
              <div className="relative size-16 shrink-0 overflow-hidden rounded-sm md:hidden">
                <Image src={p.cover} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div className="relative flex-1">
                <h3 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-bone transition-[color,transform] duration-500 group-hover:translate-x-3 group-hover:text-ember sm:text-6xl lg:text-7xl">
                  {p.title}
                </h3>
                <p className="mt-2 hidden max-w-lg text-sm text-steel sm:block">{p.short}</p>
              </div>
              <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-ember group-hover:bg-ember">
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>

      <motion.div
        aria-hidden
        style={{ left: sx, top: sy }}
        className="pointer-events-none absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-64 w-80 overflow-hidden rounded-sm shadow-2xl shadow-black/60"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src={products[active].cover} alt="" fill sizes="320px" className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
