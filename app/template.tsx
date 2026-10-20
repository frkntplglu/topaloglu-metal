"use client";

import { motion } from "motion/react";

// Yalnızca opacity: transform kullanmak içerideki fixed öğelerin (lightbox) konumunu bozar
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}
