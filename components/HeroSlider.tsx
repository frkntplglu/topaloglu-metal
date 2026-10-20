"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Sparks } from "./Sparks";

const slides = [
  { src: "/images/celik-cati/7.jpg", label: "Çelik Çatı", title: "Daha Güçlü" },
  { src: "/images/ferforje/021.jpg", label: "Ferforje", title: "Daha Zarif" },
  { src: "/images/celik-cati/8.jpg", label: "Kubbe Sistemleri", title: "Daha Işıltılı" },
  { src: "/images/ferforje/8.jpg", label: "Merdiven Korkulukları", title: "Daha Güvenli" },
];

const DURATION = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearTimeout(id);
  }, [index]);

  const slide = slides[index];

  return (
    <section ref={ref} className="relative h-svh min-h-[640px] overflow-hidden bg-ink">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.18 }}
              animate={{ scale: 1.04 }}
              transition={{ duration: DURATION / 1000 + 1.4, ease: "linear" }}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Karartma ve sıcak ışık katmanları */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      <div className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-ember/20 blur-[140px]" />
      <div className="steel-lines absolute inset-0" />
      <Sparks />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-28 sm:px-6 lg:px-8 lg:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-ember"
        >
          <span className="h-px w-12 bg-ember" />
          Düzce · Metal Atölyesi
        </motion.p>

        <h1 className="font-display text-[15vw] font-black uppercase leading-[0.85] tracking-tight sm:text-8xl lg:text-[9.5rem]">
          <span className="-mt-[0.16em] block overflow-hidden pt-[0.16em]">
            <motion.span
              className="block"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Topaloğlu
            </motion.span>
          </span>
          <span className="relative block h-[1.08em] overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={slide.title}
                className="absolute inset-x-0 bottom-0 block leading-[1.08] text-ember"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                exit={{ y: "-105%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {slide.title}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-md text-base leading-relaxed text-bone/75 sm:text-lg"
          >
            Ferforje, çelik çatı, kepenk ve demir doğramada usta işçilik. Zamanında üretim,
            garantili montaj.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/urunlerimiz"
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-deep"
            >
              Ürünleri Keşfedin
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-bone backdrop-blur-sm transition-colors hover:border-white/50"
            >
              Teklif Alın
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Slayt göstergesi */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-4 px-4 sm:px-6 lg:px-8">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative py-4 text-left"
              aria-label={`${s.label} slaytına git`}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-white/10">
                {i === index && (
                  <motion.span
                    key={index}
                    className="absolute inset-y-0 left-0 bg-ember"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                )}
              </span>
              <span
                className={`hidden text-xs font-medium uppercase tracking-[0.2em] transition-colors sm:block ${
                  i === index ? "text-bone" : "text-steel group-hover:text-bone/80"
                }`}
              >
                0{i + 1} — {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        aria-hidden
        className="absolute right-6 bottom-24 hidden flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-steel lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="[writing-mode:vertical-rl]">Kaydırın</span>
        <ArrowDown className="size-4 text-ember" />
      </motion.div>
    </section>
  );
}
