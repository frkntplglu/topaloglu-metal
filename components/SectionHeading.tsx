import { Reveal, SplitHeading } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal y={20}>
        <p
          className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember ${center ? "justify-center" : ""}`}
        >
          <span className="h-px w-10 bg-ember" />
          {eyebrow}
        </p>
      </Reveal>
      <SplitHeading
        text={title}
        className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-bone sm:text-6xl lg:text-7xl"
      />
      {text && (
        <Reveal delay={0.2} y={20}>
          <p className="mt-6 text-lg leading-relaxed text-steel">{text}</p>
        </Reveal>
      )}
    </div>
  );
}
