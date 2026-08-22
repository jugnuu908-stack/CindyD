import { education } from "../data/portfolio";
import { FadeUp, SectionHead } from "./shared";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <SectionHead index="05" title="Informatics Engineering" meta="Education" />

      <FadeUp>
        <div className="relative overflow-hidden border border-cream/10 bg-ink-2/60">
          <div className="absolute bottom-0 left-0 top-0 w-1 bg-lime" aria-hidden />
          <div className="p-8 md:p-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-lime">
              Institution
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-cream md:text-3xl">
              {education.institution}
            </h3>

            <div className="mt-10 grid gap-6 border-t border-cream/10 pt-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
                  Degree
                </p>
                <p className="mt-2 text-sm font-medium text-cream md:text-[15px]">{education.degree}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
                  Period
                </p>
                <p className="mt-2 text-sm font-medium text-cream md:text-[15px]">{education.period}</p>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
