import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Smartphone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { products } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-2">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-black uppercase leading-none text-outline opacity-40"
      >
        Topaloğlu
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-40 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:pb-56">
        <div className="lg:col-span-1">
          <Image src="/logo-mark.png" alt={site.name} width={283} height={90} className="h-12 w-auto" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-steel">{site.description}</p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-ember">Sayfalar</h3>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-bone/80 transition-colors hover:text-ember">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-ember">Ürünlerimiz</h3>
          <ul className="space-y-3">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/urunlerimiz/${p.slug}`}
                  className="text-sm text-bone/80 transition-colors hover:text-ember"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-ember">İletişim</h3>
          <ul className="space-y-4 text-sm text-bone/80">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-ember" />
              <a href={site.phoneHref} className="hover:text-ember">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Smartphone className="mt-0.5 size-4 shrink-0 text-ember" />
              <a href={site.mobileHref} className="hover:text-ember">{site.mobile}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-ember" />
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
                {site.address.street}
                <br />
                {site.address.district} / {site.address.postalCode} {site.address.city}
              </a>
            </li>
          </ul>
          <Link
            href="/iletisim"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bone"
          >
            Teklif Alın
            <ArrowUpRight className="size-4 text-ember transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-steel sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          <p>Düzce</p>
        </div>
      </div>
    </footer>
  );
}
