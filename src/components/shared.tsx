import { ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useInViewOnce, useScrambleText } from "../hooks";
import { cn } from "../utils/cn";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------ Scramble decode text */
export function Scramble({
  text,
  className,
  delay = 0,
  duration = 1100,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const out = useScrambleText(text, inView, duration, delay);
  return (
    <span ref={ref} className={className} aria-label={text}>
      {out}
    </span>
  );
}

/* ------------------------------------------------ Line-mask reveal (multi-line) */
export function MaskText({
  lines,
  className,
  delay = 0,
  step = 0.09,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  step?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const reduced = useReducedMotion();
  return (
    <span ref={ref} className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block will-change-transform"
            initial={{ y: reduced ? 0 : "115%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, delay: delay + i * step, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------ Fade + rise reveal */
export function FadeUp({
  children,
  className,
  delay = 0,
  y = 30,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const reduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------ Section header */
export function SectionHead({
  index,
  title,
  meta,
  sub,
}: {
  index: string;
  title: string;
  meta?: string;
  sub?: string;
}) {
  return (
    <div className="mb-10 md:mb-16">
      <FadeUp className="mb-6 flex items-center gap-4">
        <span className="font-mono text-xs tracking-widest text-lime">({index})</span>
        <span className="h-px flex-1 bg-cream/10" />
        {meta && (
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
            {meta}
          </span>
        )}
      </FadeUp>
      <h2 className="font-display font-extrabold uppercase leading-[1.02] tracking-tight text-[clamp(1.6rem,3.8vw,3.25rem)]">
        <Scramble text={title} />
      </h2>
      {sub && (
        <FadeUp delay={0.15}>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-dim md:text-[15px]">{sub}</p>
        </FadeUp>
      )}
    </div>
  );
}

/* ------------------------------------------------ Magnetic wrapper */
export function Magnetic({
  children,
  className,
  strength = 0.32,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduced ? undefined : { x: sx, y: sy }}
      onMouseMove={(e) => {
        if (reduced || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------ Spinning asterisk mark */
export function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("spin-slow", className)} aria-hidden>
      <g stroke="currentColor" strokeWidth="9" strokeLinecap="round">
        <line x1="50" y1="4" x2="50" y2="96" />
        <line x1="4" y1="50" x2="96" y2="50" />
        <line x1="17" y1="17" x2="83" y2="83" />
        <line x1="83" y1="17" x2="17" y2="83" />
      </g>
    </svg>
  );
}
