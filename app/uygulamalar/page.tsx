import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { CtaBand } from "@/components/CtaBand";
import { imageSets } from "@/lib/images";

export const metadata: Metadata = {
  title: "Uygulamalar",
  description: "Topaloğlu Metal'in tamamladığı sanayi yapısı, ferforje ve demir doğrama uygulamaları.",
};

export default function UygulamalarPage() {
  return (
    <>
      <PageHero
        eyebrow="Uygulamalar"
        title="Sahada imzamız"
        text="Sanayi tesislerinden konut projelerine, tamamladığımız işlerden bir seçki."
        image="/images/uygulamalar/147.jpg"
        crumbs={[{ href: "/uygulamalar", label: "Uygulamalar" }]}
      />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Gallery
            filters={[
              { key: "sanayi", label: "Sanayi ve Çelik Yapılar", images: imageSets.uygulamalar },
              { key: "ferforje", label: "Ferforje ve Dekoratif", images: imageSets.uygulama },
            ]}
          />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
