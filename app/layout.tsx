import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/site";
import "./globals.css";

const display = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "sans-serif"],
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Ferforje, Çelik Çatı, Kepenk, Demir Doğrama — Düzce`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ferforje",
    "çelik çatı",
    "kepenk",
    "demir doğrama",
    "engelli asansörü",
    "Düzce",
    "metal atölyesi",
    "Topaloğlu Metal",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    images: ["/images/celik-cati/7.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e10",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/images/celik-cati/7.jpg`,
  telephone: "+903805232511",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: "TR",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${sans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="grain min-h-svh" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
