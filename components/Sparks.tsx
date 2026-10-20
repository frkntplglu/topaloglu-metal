"use client";

import { motion } from "motion/react";

// Sabit tohumlu sözde rastgele; motorlar arası küsurat farkı hydration hatası yaratmasın diye yuvarlanır
const rand = (i: number, salt: number) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return Math.round((x - Math.floor(x)) * 1000) / 1000;
};

const sparks = Array.from({ length: 22 }, (_, i) => ({
  left: 5 + rand(i, 1) * 60,
  size: 2 + rand(i, 2) * 3,
  delay: rand(i, 3) * 6,
  duration: 3.5 + rand(i, 4) * 4,
  drift: (rand(i, 5) - 0.3) * 160,
  rise: 300 + rand(i, 6) * 400,
}));

export function Sparks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((s, i) => (
        <motion.span
          key={i}
          className="absolute bottom-0 rounded-full bg-ember-glow"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px 2px rgba(255,106,61,0.7)",
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{ y: -s.rise, x: s.drift, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.1, 0.7, 1],
          }}
        />
      ))}
    </div>
  );
}
