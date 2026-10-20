import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { TextMarquee, ImageMarquee } from "@/components/Marquee";
import { ScrollText } from "@/components/ScrollText";
import { SectionHeading } from "@/components/SectionHeading";
import { Values } from "@/components/Values";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ParallaxBand } from "@/components/ParallaxBand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { about, slogans } from "@/lib/site";
import { products } from "@/lib/products";
import { imageSets } from "@/lib/images";

const rowA = imageSets.kayar.slice(0, 10);
const rowB = [...imageSets.kayar.slice(10), ...imageSets.galeri.slice(0, 4)];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TextMarquee items={slogans} />

      {/* Hakkımızda */}
      <section className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal y={20}>
            <p className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
              <span className="h-px w-10 bg-ember" />
              Biz Kimiz
            </p>
          </Reveal>
          <ScrollText
            text={about.lead}
            className="max-w-6xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          />
          <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm lg:col-span-5">
              <Image
                src="/images/ferforje/1.jpg"
                alt="Ferforje bahçe kapısı"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <span className="absolute bottom-6 left-6 font-display text-6xl font-black text-ember">
                Yüzlerce
                <span className="block text-2xl text-bone">model seçeneği</span>
              </span>
            </Reveal>
            <div className="flex flex-col justify-center lg:col-span-7">
              {about.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="mb-6 text-lg leading-relaxed text-bone/75">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <Link
                  href="/kurumsal"
                  className="group mt-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-bone"
                >
                  <span className="relative">
                    Kurumsal
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-ember transition-transform duration-500 group-hover:origin-left group-hover:scale-x-0" />
                  </span>
                  <ArrowRight className="size-4 text-ember transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
          <div className="mt-24">
            <Values />
          </div>
        </div>
      </section>

      {/* Ürünler */}
      <section className="relative bg-ink-2 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Ürünlerimiz"
              title="Mekanlara değer katan ürünler"
              text="Evinizden iş yerinize, sanayi yapınızdan kamu binalarına; ihtiyacınıza uygun metal çözümler."
            />
            <Reveal delay={0.2}>
              <Link
                href="/urunlerimiz"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-ember hover:bg-ember"
              >
                Tümünü Gör
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <ProductShowcase products={products} />
        </div>
      </section>

      <ParallaxBand
        image="/images/celik-cati/5.jpg"
        quote="Kalite ürün, kaliteli uygulama"
        author="Topaloğlu Metal"
      />

      {/* Uygulamalar */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto mb-16 flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <SectionHeading
            eyebrow="Uygulamalar"
            title="Sahada imzamız"
            text="Düzce ve çevresinde tamamladığımız projelerden bir seçki."
          />
          <Reveal delay={0.2}>
            <Link
              href="/uygulamalar"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-ember hover:bg-ember"
            >
              Tüm Uygulamalar
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="space-y-4">
          <ImageMarquee images={rowA} duration={70} />
          <ImageMarquee images={rowB} duration={80} reverse />
        </div>
      </section>

      {/* Süreç */}
      <section className="border-t border-white/5 bg-ink-2 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <SectionHeading eyebrow="Nasıl Çalışırız" title="Keşiften montaja tek elden" />
          </div>
          <ProcessSteps />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
