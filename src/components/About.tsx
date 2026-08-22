import { about, aboutFacts } from "../data/portfolio";
import { Asterisk, FadeUp, SectionHead } from "./shared";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <SectionHead index="01" title="A background in Informatics." meta="About" />

      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* portrait */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <FadeUp>
            <div className="group relative max-w-md">
              <div
                className="absolute -bottom-4 -right-4 left-4 top-4 border border-lime/25"
                aria-hidden
              />
              <div className="relative overflow-hidden border border-cream/10">
                <img
                  src="/images/cindy.jpg"
                  alt="Portrait of Cindy Deariska"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-lime">
                      Cindy Deariska
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/70">
                      Software Engineer &amp; Web Developer
                    </p>
                  </div>
                  <Asterisk className="h-8 w-8 text-lime/70" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* content */}
        <div>
          <div className="mt-8 space-y-6">
            {about.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.1}>
                <p className="max-w-2xl text-sm leading-relaxed text-dim md:text-[15px]">{p}</p>
              </FadeUp>
            ))}
          </div>

          {/* facts */}
          <FadeUp delay={0.2} className="mt-12">
            <div className="grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2">
              {aboutFacts.map((f) => (
                <div
                  key={f.label}
                  className="group bg-ink p-5 transition-colors duration-300 hover:bg-ink-2 md:p-6"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim transition-colors group-hover:text-lime">
                    {f.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-cream md:text-[15px]">{f.value}</p>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
