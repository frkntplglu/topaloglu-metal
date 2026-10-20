"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function ImageMarquee({
  images,
  reverse = false,
  duration = 60,
}: {
  images: readonly string[];
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...images, ...images];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative h-56 w-80 shrink-0 overflow-hidden rounded-sm bg-ink-3 sm:h-72 sm:w-[26rem]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="420px"
              className="object-cover grayscale-[40%] transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TextMarquee({ items }: { items: readonly string[] }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/5 bg-ember py-5">
      <motion.div
        className="flex w-max items-center gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-3xl font-extrabold uppercase tracking-tight whitespace-nowrap text-white sm:text-4xl"
          >
            {t}
            <span className="size-2.5 rotate-45 bg-ink" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
