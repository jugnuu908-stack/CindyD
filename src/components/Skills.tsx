import { techSkills } from "../data/portfolio";
import { FadeUp, SectionHead } from "./shared";

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-cream/10 bg-ink-2/50">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <SectionHead
          index="02"
          title="Technical Skills"
          meta="Core technologies"
          sub="A foundation in web technologies developed through academic and practical projects."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {techSkills.map((s, i) => (
            <FadeUp key={s.id} delay={i * 0.07} className="h-full">
              <div
                className="group flex h-full flex-col border border-cream/10 bg-ink p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-lime/50 hover:shadow-[0_30px_60px_-40px_rgba(198,245,63,0.25)]"
                data-hover
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-lime">/ {s.id}</span>
                  <span className="border border-cream/20 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-dim transition-colors duration-300 group-hover:border-lime/50 group-hover:text-lime">
                    {s.level}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-tight text-cream transition-colors duration-300 group-hover:text-lime">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dim">{s.desc}</p>
                <div className="mt-auto pt-6">
                  <div className="border-t border-cream/10 pt-4">
                    <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-cream/60">
                      {s.snippet}
                      <span className="caret text-lime">▍</span>
                    </pre>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
