import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { getProduct, products } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/urunlerimiz/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} Modelleri`,
    description: product.short,
    openGraph: { images: [product.cover] },
  };
}

export default async function ProductPage({ params }: PageProps<"/urunlerimiz/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const i = products.indexOf(product);
  const prev = products[(i - 1 + products.length) % products.length];
  const next = products[(i + 1) % products.length];

  return (
    <>
      <PageHero
        eyebrow={`Ürün 0${i + 1} / 0${products.length}`}
        title={product.title}
        text={product.short}
        image={product.cover}
        crumbs={[
          { href: "/urunlerimiz", label: "Ürünlerimiz" },
          { href: `/urunlerimiz/${product.slug}`, label: product.title },
        ]}
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xl leading-relaxed text-bone/80 sm:text-2xl sm:leading-relaxed">
                {product.intro}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/iletisim"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-deep"
              >
                Bu ürün için teklif alın
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Neler Yapıyoruz
              </h2>
            </Reveal>
            <ul className="border-t border-white/10">
              {product.features.map((f, k) => (
                <Reveal key={f} delay={0.15 + k * 0.06} y={16}>
                  <li className="flex items-center gap-4 border-b border-white/10 py-5 text-lg">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ember/15 text-ember">
                      <Check className="size-4" />
                    </span>
                    {f}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading eyebrow="Modeller" title={`${product.title} örneklerimiz`} />
          </div>
          <Gallery filters={[{ key: product.slug, label: product.title, images: product.images }]} />
        </div>
      </section>

      <nav className="grid border-t border-white/5 sm:grid-cols-2">
        {[
          { p: prev, label: "Önceki ürün", Icon: ArrowLeft, align: "" },
          { p: next, label: "Sonraki ürün", Icon: ArrowRight, align: "sm:text-right sm:items-end" },
        ].map(({ p, label, Icon, align }) => (
          <Link
            key={label}
            href={`/urunlerimiz/${p.slug}`}
            className={`group flex flex-col gap-3 border-white/5 p-8 transition-colors hover:bg-ember sm:p-12 sm:first:border-r ${align}`}
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-steel group-hover:text-white/80">
              <Icon className="size-4" />
              {label}
            </span>
            <span className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              {p.title}
            </span>
          </Link>
        ))}
      </nav>

      <CtaBand />
    </>
  );
}
