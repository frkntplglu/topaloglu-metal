import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/kurumsal", "/urunlerimiz", "/uygulamalar", "/galeri", "/iletisim"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}/`, priority: r === "" ? 1 : 0.8 })),
    ...products.map((p) => ({ url: `${site.url}/urunlerimiz/${p.slug}/`, priority: 0.7 })),
  ];
}
