"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { corporate } from "@/lib/site";

const tabs = [
  { key: "mission", label: "Misyon", text: corporate.mission },
  { key: "vision", label: "Vizyon", text: corporate.vision },
  { key: "quality", label: "Kalite Politikası", text: corporate.quality },
] as const;

export function CorporateTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col lg:gap-0">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative shrink-0 py-4 pr-6 text-left font-display text-3xl font-extrabold uppercase tracking-tight transition-colors sm:text-4xl lg:border-b lg:border-white/10 lg:py-6 ${
              active === i ? "text-bone" : "text-steel/50 hover:text-steel"
            }`}
          >
            <span className="mr-3 align-top font-sans text-xs font-medium text-ember">0{i + 1}</span>
            {t.label}
            {active === i && (
              <motion.span
                layoutId="corp-tab"
                className="absolute bottom-0 left-0 h-0.5 w-full bg-ember lg:-bottom-px"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="relative min-h-[320px] lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl leading-relaxed text-bone/80 sm:text-2xl sm:leading-relaxed"
          >
            {tabs[active].text}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
