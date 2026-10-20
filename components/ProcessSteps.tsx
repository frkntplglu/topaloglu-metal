"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { process } from "@/lib/site";

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute top-7 right-0 left-0 hidden h-px bg-white/10 lg:block">
        <motion.div style={{ width }} className="h-full bg-ember" />
      </div>
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {process.map((p, i) => (
          <motion.li
            key={p.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="relative z-10 grid size-14 place-items-center rounded-full border border-ember/40 bg-ink font-display text-xl font-bold text-ember">
              {p.step}
            </span>
            <h3 className="mt-6 font-display text-3xl font-extrabold uppercase tracking-tight">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-steel">{p.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
