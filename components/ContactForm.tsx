"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

const field =
  "peer w-full border-b border-white/15 bg-transparent pt-6 pb-3 text-bone outline-none transition-colors placeholder:text-transparent focus:border-ember";
const label =
  "pointer-events-none absolute top-6 left-0 text-steel transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-ember peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

/** Statik sitede sunucu yok: form, mesajı hazırlayıp WhatsApp'ta açar. */
export function ContactForm() {
  const [topic, setTopic] = useState<string>(products[0].title);

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const text = [
          `Merhaba, ${topic} hakkında bilgi almak istiyorum.`,
          `Ad Soyad: ${data.get("name")}`,
          `Telefon: ${data.get("phone")}`,
          data.get("message") ? `Mesaj: ${data.get("message")}` : "",
        ]
          .filter(Boolean)
          .join("\n");
        window.open(`${site.whatsappHref}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      }}
    >
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-steel">İlgilendiğiniz ürün</p>
        <div className="flex flex-wrap gap-2">
          {products.map((p) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setTopic(p.title)}
              className={`relative rounded-full border px-4 py-2 text-sm transition-colors ${
                topic === p.title ? "border-ember text-white" : "border-white/15 text-steel hover:text-bone"
              }`}
            >
              {topic === p.title && (
                <motion.span
                  layoutId="topic"
                  className="absolute inset-0 rounded-full bg-ember"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{p.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="relative">
          <input id="name" name="name" required placeholder="Ad Soyad" className={field} />
          <label htmlFor="name" className={label}>Ad Soyad</label>
        </div>
        <div className="relative">
          <input id="phone" name="phone" type="tel" required placeholder="Telefon" className={field} />
          <label htmlFor="phone" className={label}>Telefon</label>
        </div>
      </div>
      <div className="relative">
        <textarea id="message" name="message" rows={4} placeholder="Mesajınız" className={`${field} resize-none`} />
        <label htmlFor="message" className={label}>Mesajınız</label>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="group inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-deep"
      >
        WhatsApp ile Gönder
        <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </motion.button>
    </form>
  );
}
