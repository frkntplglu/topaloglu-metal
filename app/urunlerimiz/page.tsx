import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ürünlerimiz",
  description:
    "Ferforje, çelik çatı, kepenk, demir doğrama ve engelli asansörü modellerimizi inceleyin.",
};

// Bento yerleşim: ilk iki kart geniş, kalan üçü tek sütun
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

export default function UrunlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Ürünlerimiz"
        title="Her ihtiyaca metal çözüm"
        text="Yüzlerce hazır model ve size özel tasarımlar. Tüm ürünlerimiz atölyemizde üretilir, kendi ekibimizle garantili monte edilir."
        image="/images/celik-cati/8.jpg"
        crumbs={[{ href: "/urunlerimiz", label: "Ürünlerimiz" }]}
      />
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              index={i}
              className={`${spans[i]} ${i < 2 ? "lg:h-[560px]" : "lg:h-[460px]"}`}
            />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
