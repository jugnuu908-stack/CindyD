import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { projects, type Project } from "../data/portfolio";
import { EASE, SectionHead } from "./shared";
import { cn } from "../utils/cn";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const imgWrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imgWrap,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.95, ease: EASE, delay: index * 0.05 }}
      className="group grid overflow-hidden border border-cream/10 bg-ink-2 transition-colors duration-500 hover:border-lime/40 lg:grid-cols-[0.92fr_1.08fr]"
    >
      {/* content side */}
      <div className="flex flex-col p-6 md:p-9">
        <div className="flex items-start justify-between gap-4">
          <span className="text-outline-lime font-display text-5xl font-extrabold leading-none md:text-6xl">
            {p.id}
          </span>
          <span className="border border-cream/20 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-cream/75 transition-colors duration-300 group-hover:border-lime/50 group-hover:text-lime md:text-[10px]">
            {p.category}
          </span>
        </div>

        <h3 className="mt-6 font-display text-xl font-extrabold uppercase leading-[1.1] tracking-tight text-cream md:text-2xl">
          {p.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-dim md:text-[15px]">{p.description}</p>

        {/* expandable technical context */}
        <div className="mt-auto pt-6">
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="border-t border-cream/10 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-lime">
                Technical Context
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-cream/70">{p.context}</p>
              {p.period && (
                <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-dim">
                  Development period — {p.period}
                </p>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-cream/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/70 transition-colors hover:border-lime/60 hover:text-lime"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-5 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-lime transition-colors hover:text-cream"
            data-hover
          >
            {open ? "Close Details" : "View Project"}
            <svg
              className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      {/* visual side */}
      <div
        ref={imgWrap}
        className="relative min-h-[200px] overflow-hidden border-t border-cream/10 lg:min-h-full lg:border-l lg:border-t-0"
      >
        <motion.img
          style={reduced ? undefined : { y: imgY }}
          src={p.image}
          alt={`${p.title} — visual`}
          loading="lazy"
          className="absolute inset-0 h-[116%] w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink-2 via-transparent to-transparent"
          aria-hidden
        />
        <p className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.3em] text-cream/60">
          Fig. {p.id} — {p.category}
        </p>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <SectionHead
        index="03"
        title="Web-Based Systems & Projects"
        meta="Selected projects"
        sub="A selection of web-based projects developed during Cindy's academic and early professional journey."
      />

      <div className="mx-auto w-full max-w-[1180px] space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
