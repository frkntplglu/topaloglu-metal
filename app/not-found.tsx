import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-[30vw] font-black leading-none text-outline sm:text-[16rem]">404</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold uppercase">Sayfa bulunamadı</h1>
      <p className="mt-3 text-steel">Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-white hover:bg-ember-deep"
      >
        Ana sayfaya dön
      </Link>
    </section>
  );
}
