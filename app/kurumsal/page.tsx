import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CorporateTabs } from "@/components/CorporateTabs";
import { Values } from "@/components/Values";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { about } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kurumsal",
  description: "Topaloğlu Metal şirket profili, misyonu, vizyonu ve kalite politikası.",
};

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Demirle şekillenen tecrübe"
        text={about.lead}
        image="/images/galeri/56.jpg"
        crumbs={[{ href: "/kurumsal", label: "Kurumsal" }]}
      />

      <section className="py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Şirket Profili" title="Metal atölyesine hoş geldiniz" />
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="mt-6 text-lg leading-relaxed text-bone/75">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="relative row-span-2 aspect-[3/5] overflow-hidden rounded-sm">
              <Image src="/images/ferforje/8.jpg" alt="Ferforje merdiven korkuluğu" fill sizes="25vw" className="object-cover" />
            </Reveal>
            <Reveal delay={0.15} className="relative aspect-square overflow-hidden rounded-sm">
              <Image src="/images/galeri/57.jpg" alt="Atölyede çelik imalatı" fill sizes="25vw" className="object-cover" />
            </Reveal>
            <Reveal delay={0.3} className="relative aspect-square overflow-hidden rounded-sm">
              <Image src="/images/celik-cati/9.jpg" alt="Cam kubbe çelik sistem" fill sizes="25vw" className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-ink-2 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeading eyebrow="İlkelerimiz" title="Misyon, vizyon ve kalite" />
          </div>
          <CorporateTabs />
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeading eyebrow="Neden Biz" title="Daha güçlü, daha güvenli" />
          </div>
          <Values />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
