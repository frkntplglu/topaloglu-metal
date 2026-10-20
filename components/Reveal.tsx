"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({ delay = 0, y = 40, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Başlığı kelime kelime maskeden yukarı kaydırarak açar. */
export function SplitHeading({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];
  // Görünürlük başlığın kendisinde izlenir: maskelenmiş kelimeler tamamen kırpıldığı için
  // kendi whileInView'leri hiç tetiklenmez.
  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="-mt-[0.16em] inline-block overflow-hidden pt-[0.16em] pb-[0.08em] align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              show: {
                y: 0,
                transition: { duration: 0.9, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
