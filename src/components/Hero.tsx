import { hero, profile } from "../data/portfolio";
import { useScrambleText } from "../hooks";
import { FadeUp, Magnetic } from "./shared";

const chips = [
  { label: "HTML", className: "right-[20%] top-[24%]", delay: 0 },
  { label: "CSS", className: "right-[7%] top-[42%]", delay: 1.3 },
  { label: "PHP", className: "right-[26%] top-[62%]", delay: 2.2 },
  { label: "SQL", className: "right-[11%] top-[78%]", delay: 0.7 },
];

export default function Hero({ start }: { start: boolean }) {
  const name1 = useScrambleText(profile.firstName, start, 850, 120);
  const name2 = useScrambleText(profile.lastName, start, 950, 380);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-20 pt-28 supports-[height:100svh]:min-h-svh md:pb-24 md:pt-36"
    >
      {/* backdrops */}
      <div
        className="grid-bg grid-drift absolute inset-0 [mask-image:linear-gradient(to_bottom,black_25%,transparent_96%)]"
        aria-hidden
      />
      <div
        className="absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full bg-lime/[0.06] blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute bottom-[-25%] left-[-12%] h-[480px] w-[480px] rounded-full bg-lime/[0.04] blur-[140px]"
        aria-hidden
      />

      {/* floating technical elements */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] xl:block" aria-hidden>
        {chips.map((c) => (
          <span
            key={c.label}
            className={`float-anim absolute inline-flex items-center gap-2 border border-cream/15 bg-ink/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/85 backdrop-blur-sm ${c.className}`}
            style={{ animationDelay: `${c.delay}s`, animationDuration: `${5.5 + c.delay}s` }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {c.label}
          </span>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="max-w-4xl">
          <FadeUp delay={0.05}>
            <span className="inline-flex items-center gap-3 border border-lime/40 bg-lime/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-lime md:text-[11px] md:tracking-[0.3em]">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {hero.label}
            </span>
          </FadeUp>

          <h1 className="mt-6 font-display font-extrabold uppercase leading-[0.95] tracking-tight">
            <span className="block text-[clamp(2.4rem,7vw,6rem)]">{name1}</span>
            <span className="block text-[clamp(2.4rem,7vw,6rem)] text-outline">
              {name2}
              <span className="text-lime" style={{ WebkitTextStroke: "0px" }}>
                .
              </span>
            </span>
          </h1>

          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-2xl font-display text-lg font-semibold leading-snug text-cream md:text-xl">
              {hero.subheadline}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-dim md:text-[15px]">
              {hero.supporting}
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 bg-lime px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
                >
                  View Projects
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#about"
                  className="inline-flex items-center gap-3 border border-cream/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/85 transition-colors hover:border-lime hover:text-lime"
                >
                  About Me
                </a>
              </Magnetic>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
