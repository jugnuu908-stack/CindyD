import { interests, interestsNote } from "../data/portfolio";
import { FadeUp } from "./shared";

export default function Interests() {
  return (
    <section id="interests" className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <FadeUp>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-lime">
              <span>(07)</span> Personal
            </p>
            <h2 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-tight text-cream md:text-3xl">
              Outside of Technology
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-dim md:text-[15px]">{interestsNote}</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.15}>
        <div className="mt-10 flex flex-wrap gap-3">
          {interests.map((item) => (
            <span
              key={item}
              className="flex items-center gap-3 border border-cream/15 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/75 transition-colors duration-300 hover:border-lime/60 hover:text-lime"
            >
              <span className="h-1 w-1 rotate-45 bg-lime" />
              {item}
            </span>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
