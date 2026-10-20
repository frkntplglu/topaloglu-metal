import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { CtaBand } from "@/components/CtaBand";
import { imageSets } from "@/lib/images";

export const metadata: Metadata = {
  title: "Görsel Galeri",
  description: "Topaloğlu Metal atölye, saha ve ürün fotoğrafları.",
};

export default function GaleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Görsel Galeri"
        title="Atölyeden sahaya"
        text="Üretimden montaja, çalışmalarımızı fotoğraflarla keşfedin."
        image="/images/galeri/58.jpg"
        crumbs={[{ href: "/galeri", label: "Galeri" }]}
      />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Gallery
            filters={[
              { key: "galeri", label: "Atölye ve Saha", images: imageSets.galeri },
              { key: "ferforje", label: "Ferforje", images: imageSets.ferforje },
              { key: "celik-cati", label: "Çelik Çatı", images: imageSets["celik-cati"] },
              { key: "kepenk", label: "Kepenk", images: imageSets.kepenk },
              { key: "demir-dograma", label: "Demir Doğrama", images: imageSets["demir-dograma"] },
            ]}
          />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
