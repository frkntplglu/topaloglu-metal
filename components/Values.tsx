"use client";

import { motion } from "motion/react";
import { Clock, PencilRuler, ShieldCheck, Hammer } from "lucide-react";
import { values } from "@/lib/site";

const icons = [ShieldCheck, Clock, PencilRuler, Hammer];

export function Values() {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((v, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={v.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative overflow-hidden bg-ink p-8 sm:p-10"
          >
            <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-ember/20 to-transparent transition-all duration-700 group-hover:h-full" />
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 + i * 0.1 }}
              className="relative grid size-14 place-items-center rounded-full bg-ember/10 text-ember"
            >
              <Icon className="size-6" />
            </motion.span>
            <h3 className="relative mt-8 font-display text-3xl font-extrabold uppercase tracking-tight">
              {v.title}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-steel">{v.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
