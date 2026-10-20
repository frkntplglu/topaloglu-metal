import { imageSets } from "./images";

export type Product = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  features: string[];
  cover: string;
  images: readonly string[];
};

export const products: Product[] = [
  {
    slug: "ferforje-modelleri",
    title: "Ferforje",
    short: "Bahçe kapısı, korkuluk, merdiven ve pencere demirlerinde el işçiliği.",
    intro:
      "Ferforje, demirin ustalıkla şekillendirilerek hem güvenlik hem de zarafet sunduğu bir sanattır. Bahçe kapılarından balkon ve merdiven korkuluklarına, pencere demirlerinden duvar üstü çitlere kadar yüzlerce model sunuyor, dilerseniz tamamen size özel desenler tasarlıyoruz.",
    features: [
      "Bahçe ve site giriş kapıları",
      "Balkon ve merdiven korkulukları",
      "Pencere ve kapı demirleri",
      "Duvar üstü ferforje çitler",
      "Dekoratif aksesuar ve mobilyalar",
    ],
    cover: "/images/ferforje/021.jpg",
    images: imageSets.ferforje,
  },
  {
    slug: "celik-cati-modelleri",
    title: "Çelik Çatı",
    short: "Konut, sanayi yapısı ve kubbe sistemlerinde hafif ve dayanıklı çatı.",
    intro:
      "Çelik çatı sistemleri; hafifliği, hızlı montajı ve uzun ömrüyle geleneksel çatılara güçlü bir alternatiftir. Konut çatılarından sanayi yapılarına, cam kubbe ve tonoz sistemlerinden sundurmalara kadar projeye özel statik çözümler üretiyoruz.",
    features: [
      "Konut ve villa çatı karkasları",
      "Sanayi ve depo çelik yapıları",
      "Cam kubbe ve tonoz sistemleri",
      "Sundurma ve kanopi uygulamaları",
      "Galvaniz ve boyalı profil seçenekleri",
    ],
    cover: "/images/celik-cati/7.jpg",
    images: imageSets["celik-cati"],
  },
  {
    slug: "kepenk-modelleri",
    title: "Kepenk",
    short: "Dükkân ve iş yerleri için motorlu, manuel ve şeffaf kepenk sistemleri.",
    intro:
      "İş yerinizin güvenliğini görünümünden ödün vermeden sağlıyoruz. Alüminyum ve galvaniz lamel kepenklerden vitrin görünürlüğünü koruyan şeffaf ve delikli modellere kadar, motorlu ya da manuel seçeneklerle ölçünüze özel kepenk imal edip monte ediyoruz.",
    features: [
      "Motorlu ve manuel kepenkler",
      "Alüminyum ve galvaniz lameller",
      "Şeffaf ve delikli vitrin kepenkleri",
      "Makaslı güvenlik kapıları",
      "Bakım ve onarım hizmeti",
    ],
    cover: "/images/kepenk/3.jpg",
    images: imageSets.kepenk,
  },
  {
    slug: "demir-dogramalar",
    title: "Demir Doğrama",
    short: "Çelik kapı, balkon, merdiven ve dekoratif demir ürünleri.",
    intro:
      "Bina giriş kapılarından balkon korkuluklarına, yangın merdivenlerinden dekoratif bahçe mobilyalarına kadar her türlü demir doğrama işini atölyemizde imal ediyoruz. Ölçünüze göre üretilen ürünler, uzun ömürlü boya ve kaplamalarla teslim edilir.",
    features: [
      "Bina giriş ve çelik kapılar",
      "Balkon ve teras korkulukları",
      "Dış cephe ve yangın merdivenleri",
      "Bahçe mobilyası ve dekoratif ürünler",
      "Elektrostatik boya ve kaplama",
    ],
    cover: "/images/demir-dograma/11.jpg",
    images: imageSets["demir-dograma"],
  },
  {
    slug: "engelli-asansoru",
    title: "Engelli Asansörü",
    short: "Koltuk ve platform tipi merdiven asansörleriyle engelsiz yaşam.",
    intro:
      "Engelli yaşamı kolaylaştırmak adına terapistlerle kolektif çalışarak koltuk tipi merdiven asansörü ürünlerini sunuyoruz. Evinizin dekorasyonuna uygun olarak ve dilerseniz kamuda da koltuk tipi ve merdiven tipi asansör modellerini bütçeniz için en uygun hale getiriyoruz.",
    features: [
      "Koltuk tipi merdiven asansörleri",
      "Platform tipi engelli asansörleri",
      "Konut ve kamu binalarına uygun",
      "Dekorasyona uyumlu tasarım",
      "Bütçeye uygun çözümler",
    ],
    cover: "/images/stories/11.png",
    images: imageSets.stories,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
