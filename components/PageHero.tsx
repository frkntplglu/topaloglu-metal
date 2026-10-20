"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";
import { SplitHeading } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  crumbs?: { href: string; label: string }[];
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section ref={ref} className="relative flex min-h-[70svh] items-end overflow-hidden pt-32 pb-16 sm:pb-20">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
      <div className="absolute -bottom-32 -left-32 size-[500px] rounded-full bg-ember/20 blur-[120px]" />
      <div className="steel-lines absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          aria-label="Sayfa yolu"
          className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-steel"
        >
          <Link href="/" className="hover:text-bone">Ana Sayfa</Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex items-center gap-1.5">
              <ChevronRight className="size-3" />
              <Link href={c.href} className="hover:text-bone">{c.label}</Link>
            </span>
          ))}
        </motion.nav>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember"
        >
          <span className="h-px w-10 bg-ember" />
          {eyebrow}
        </motion.p>
        <SplitHeading
          as="h1"
          text={title}
          delay={0.3}
          className="max-w-5xl font-display text-6xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl"
        />
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/70"
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
