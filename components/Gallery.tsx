"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type Filter = { key: string; label: string; images: readonly string[] };

/** Masonry galeri + klavye destekli lightbox. Birden çok filtre verilirse sekmeler gösterilir. */
export function Gallery({ filters }: { filters: Filter[] }) {
  const [activeKey, setActiveKey] = useState(filters[0].key);
  const [open, setOpen] = useState<number | null>(null);
  const [dir, setDir] = useState(0);
  const images = filters.find((f) => f.key === activeKey)?.images ?? [];

  const go = useCallback(
    (step: number) => {
      setDir(step);
      setOpen((i) => (i === null ? i : (i + step + images.length) % images.length));
    },
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);

  return (
    <>
      {filters.length > 1 && (
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActiveKey(f.key)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeKey === f.key ? "text-white" : "text-steel hover:text-bone"
              }`}
            >
              {activeKey === f.key && (
                <motion.span
                  layoutId="gallery-filter"
                  className="absolute inset-0 rounded-full bg-ember"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">
                {f.label} <span className="opacity-60">({f.images.length})</span>
              </span>
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        <AnimatePresence mode="popLayout">
          {images.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                setDir(0);
                setOpen(i);
              }}
              className="group relative mb-3 block w-full overflow-hidden rounded-sm bg-ink-3 sm:mb-4"
              aria-label={`Görseli büyüt ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                width={800}
                height={600}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/50">
                <Maximize2 className="size-6 scale-50 text-white opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100" />
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 backdrop-blur-md"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute top-5 left-5 text-sm text-steel tabular-nums">
              {String(open + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
            <button
              type="button"
              aria-label="Kapat"
              className="absolute top-4 right-4 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-ember"
              onClick={() => setOpen(null)}
            >
              <X className="size-5" />
            </button>

            <div
              className="relative h-[75vh] w-[92vw] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={dir}>
                <motion.div
                  key={images[open]}
                  custom={dir}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: dir * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -80 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) go(1);
                    else if (info.offset.x > 60) go(-1);
                  }}
                >
                  <Image src={images[open]} alt="" fill sizes="92vw" className="object-contain" draggable={false} />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              aria-label="Önceki"
              className="absolute left-3 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-ember sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Sonraki"
              className="absolute right-3 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-ember sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
