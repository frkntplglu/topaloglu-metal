export const site = {
  name: "Topaloğlu Metal",
  tagline: "Ferforje · Çelik Çatı · Kepenk · Demir Doğrama",
  description:
    "Düzce'de ferforje, çelik çatı, kepenk, demir doğrama ve engelli asansörü imalatı ve montajı. Usta kadro, dayanıklı malzeme, garantili uygulama.",
  url: "https://www.topaloglumetal.com",
  phone: "+90 (380) 523 25 11",
  phoneHref: "tel:+903805232511",
  mobile: "+90 (555) 409 31 41",
  mobileHref: "tel:+905554093141",
  whatsappHref: "https://wa.me/905554093141",
  address: {
    street: "Azmimilli Mah. Aydınpınar Cad. No:125/A",
    district: "Merkez",
    postalCode: "81100",
    city: "Düzce",
    country: "Türkiye",
  },
  geo: { lat: 40.830129, lng: 31.153304 },
  mapEmbed:
    "https://maps.google.com/maps?q=40.830129,31.153304&hl=tr&z=17&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=40.830129,31.153304",
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/urunlerimiz", label: "Ürünlerimiz" },
  { href: "/uygulamalar", label: "Uygulamalar" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const slogans = [
  "Kalite Ürün, Kaliteli Uygulama",
  "Mekanlara Değer Katan Ürünler",
  "Daha Güçlü, Daha Güvenli",
  "Metal Atölyesine Hoş Geldiniz",
] as const;

export const about = {
  lead: "Demir imalatında uzun yıllara dayanan tecrübemizle, her türlü demir sistemini zamanında üretiyor ve montajını uzman ekibimizle yapıyoruz.",
  body: [
    "Usta kadromuz; ferforje ve metal ürünleri dayanıklı malzemelerden imal ediyor, garantili ve güvenli şekilde yerine monte ediyor. Yüzlerce model arasından seçim yapabilir ya da tamamen size özel bir tasarım isteyebilirsiniz.",
    "Ürettiğimiz her parça, evinize ve iş yerinize hem güvenlik hem de estetik değer katmak için tasarlanır. Keşiften montaja kadar tüm süreci tek elden yönetiyoruz.",
  ],
};

export const corporate = {
  mission:
    "Topaloğlu Metal olarak misyonumuz; ihtiyaca uygun çözümler sunarak tecrübelerimizi sizlerle paylaşmak, kanunlara ve yönetmeliklere uygun davranmak, çevreye duyarlı güvenli çalışma ortamları oluşturmak, çevreyi ve doğayı korumak; tüm bu amaçlar çerçevesinde yaptığımız işin sorumluluğunu alarak hızlı ve doğru projeler üretmek ve gerçekleştirmektir.",
  vision:
    "Topaloğlu Metal, ulusal ve uluslararası sektörde sürdürülebilir kalkınmayı ve kaliteyi ilke edinen öncü bir kurum olarak, faaliyetlerinde insana ve çevreye duyarlı projelerle müşteri memnuniyetini sağlamayı ilke edinmiştir. Değişen, gelişen şehir yaşamının gereksinimlerini karşılamak, çalışma ve yaşam alanlarını estetik gereksinimler doğrultusunda korunaklı hale getirmek için, müşteri isteklerini deneyimlerimizle birleştirip hayal edilen tasarımları gerçekleştirerek daha güzel bir çevre için hizmet vermekteyiz.",
  quality:
    "Topaloğlu Metal olarak kalite politikamız kapsamında; doğruluk, güven, eşitlik, tarafsızlık ve gizlilik ilkelerini bir arada barındıran kalite politikamız, müşterilerimizin memnuniyeti doğrultusundadır.",
};

export const values = [
  {
    title: "Garantili Montaj",
    text: "Ürettiğimiz her sistemi kendi ekibimizle, garantili ve güvenli şekilde monte ediyoruz.",
  },
  {
    title: "Zamanında Teslim",
    text: "Planlanan takvime sadık kalıyor, üretimden montaja işi söz verdiğimiz günde bitiriyoruz.",
  },
  {
    title: "Size Özel Tasarım",
    text: "Yüzlerce hazır modelin yanında ölçünüze ve zevkinize göre özel çözümler üretiyoruz.",
  },
  {
    title: "Usta Kadro",
    text: "Dayanıklı malzemeyi el işçiliğiyle birleştiren deneyimli ustalarla çalışıyoruz.",
  },
] as const;

export const process = [
  { step: "01", title: "Keşif", text: "Yerinde ölçü alır, ihtiyacınızı ve beklentinizi dinleriz." },
  { step: "02", title: "Tasarım", text: "Model ve malzeme seçimini birlikte yapar, net teklif sunarız." },
  { step: "03", title: "İmalat", text: "Atölyemizde dayanıklı malzemelerle titizlikle üretiriz." },
  { step: "04", title: "Montaj", text: "Uzman ekibimizle garantili ve güvenli şekilde kurarız." },
] as const;
