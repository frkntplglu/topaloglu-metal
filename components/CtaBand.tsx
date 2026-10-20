import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal, SplitHeading } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-ember-deep via-ember to-ember-glow" />
      <div className="steel-lines absolute inset-0 opacity-60" />
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-ink/30 blur-[100px]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <SplitHeading
            text="Projenizi birlikte şekillendirelim"
            className="max-w-3xl font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl"
          />
          <Reveal delay={0.2} y={20}>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Ücretsiz keşif ve fiyat teklifi için bizi arayın ya da WhatsApp&apos;tan yazın.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.3} y={20} className="flex flex-wrap gap-3">
          <a
            href={site.mobileHref}
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <Phone className="size-4" />
            {site.mobile}
          </a>
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            İletişim
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
