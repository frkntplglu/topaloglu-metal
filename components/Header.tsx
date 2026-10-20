"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 400);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-100%" : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-white/5 bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-500 sm:px-6 lg:px-8 ${
            scrolled ? "h-16" : "h-20 lg:h-24"
          }`}
        >
          <Link href="/" className="relative z-10 shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/logo-mark.png"
              alt={site.name}
              width={283}
              height={90}
              priority
              className={`w-auto transition-[height] duration-500 ${scrolled ? "h-9" : "h-11 lg:h-12"}`}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-bone/80 transition-colors hover:text-bone"
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-ember"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.mobileHref}
              className="group hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ember-deep sm:flex"
            >
              <Phone className="size-4 transition-transform group-hover:rotate-12" />
              Hemen Arayın
            </a>
            <button
              type="button"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 grid size-11 place-items-center rounded-full border border-white/10 text-bone lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink-2 px-6 pt-28 pb-10 lg:hidden"
          >
            <nav className="flex flex-col">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 border-b border-white/5 py-4 font-display text-4xl font-bold uppercase ${
                      isActive(item.href) ? "text-ember" : "text-bone"
                    }`}
                  >
                    <span className="font-sans text-xs font-medium text-steel">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto space-y-2 text-sm text-steel"
            >
              <a href={site.mobileHref} className="block text-2xl font-semibold text-bone">
                {site.mobile}
              </a>
              <p>
                {site.address.street}, {site.address.city}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
