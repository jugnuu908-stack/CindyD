import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { experience } from "../data/portfolio";
import { EASE, FadeUp, SectionHead } from "./shared";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.55"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

  return (
    <section id="experience" className="relative border-y border-cream/10 bg-ink-2/50">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <SectionHead
          index="04"
          title="Professional & Organizational Experience"
          meta="Experience"
          sub="Experience gained through web development, academic projects, and organizational responsibilities."
        />

        <div ref={ref} className="relative ml-2 pl-8 md:ml-4 md:pl-16">
          {/* timeline track */}
          <div className="absolute bottom-2 left-0 top-2 w-px bg-cream/10" aria-hidden />
          <motion.div
            className="absolute bottom-2 left-0 top-2 w-px origin-top bg-lime"
            style={{ scaleY: reduced ? 1 : scaleY }}
            aria-hidden
          />

          {experience.map((e, i) => (
            <FadeUp key={`${e.org}-${e.role}`} delay={i * 0.08} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[37px] top-2 h-2.5 w-2.5 rotate-45 bg-lime md:-left-[69px]"
                aria-hidden
              />
              <motion.div
                initial={reduced ? false : { x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className="border border-cream/10 bg-ink p-5 transition-colors duration-500 hover:border-lime/40 md:p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="border border-lime/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-lime">
                      {e.kind}
                    </span>
                    {e.period && (
                      <span className="font-mono text-[11px] tracking-[0.14em] text-dim">
                        {e.period}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-bold uppercase tracking-tight text-cream md:text-xl">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cream/70">{e.org}</p>
                  {e.description && (
                    <p className="mt-2.5 text-sm leading-relaxed text-dim">{e.description}</p>
                  )}
                  {e.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm leading-relaxed text-cream/70"
                        >
                          <span className="mt-px font-mono text-xs text-lime">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
