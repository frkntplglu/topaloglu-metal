"use client";

import { MotionConfig } from "motion/react";

// "user": sistemde hareket azaltma açıksa transform animasyonları kapanır.
// Kontrol render sırasında değil motion içinde yapıldığı için SSR ile istemci aynı HTML'i üretir.
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
