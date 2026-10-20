"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxBand({ image, quote, author }: { image: string; quote: string; author: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

  return (
    <section ref={ref} className="relative flex min-h-[80vh] items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute -inset-y-[20%] inset-x-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-ink/75" />
      <motion.p
        aria-hidden
        style={{ x }}
        className="pointer-events-none absolute top-10 font-display text-[18vw] font-black uppercase leading-none whitespace-nowrap text-outline"
      >
        Güçlü · Güvenli · Estetik
      </motion.p>
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl"
        >
          “{quote}”
        </motion.blockquote>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-ember">{author}</p>
      </div>
    </section>
  );
}
