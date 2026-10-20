import type { Metadata } from "next";
import { MapPin, Phone, Smartphone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Topaloğlu Metal iletişim bilgileri: ${site.phone} · ${site.address.street}, ${site.address.city}.`,
};

const cards = [
  { icon: Phone, label: "Telefon / Faks", value: site.phone, href: site.phoneHref },
  { icon: Smartphone, label: "Cep Telefonu", value: site.mobile, href: site.mobileHref },
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Hemen yazın", href: site.whatsappHref, external: true },
  {
    icon: MapPin,
    label: "Adres",
    value: `${site.address.street}, ${site.address.district} / ${site.address.postalCode} ${site.address.city}`,
    href: site.mapLink,
    external: true,
  },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="Bize Ulaşın"
        title="Konuşalım"
        text="Ücretsiz keşif, fiyat teklifi ya da her türlü sorunuz için bize ulaşın."
        image="/images/ferforje/1.jpg"
        crumbs={[{ href: "/iletisim", label: "İletişim" }]}
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08} className="bg-ink">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col gap-6 p-8 transition-colors hover:bg-ink-3"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-ember/10 text-ember transition-colors group-hover:bg-ember group-hover:text-white">
                    <c.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                      {c.label}
                    </span>
                    <span className="mt-2 block text-lg font-semibold text-bone">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Teklif Formu" title="Size dönüş yapalım" />
              <div className="mt-12">
                <ContactForm />
              </div>
            </div>
            <Reveal className="relative min-h-[420px] overflow-hidden rounded-sm border border-white/10">
              <iframe
                title="Topaloğlu Metal konumu"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
