import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./shared";
import { profile } from "../data/portfolio";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const finished = useRef(false);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    let p = 0;
    const id = setInterval(() => {
      p += 8 + Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => {
          if (!finished.current) {
            finished.current = true;
            onDone();
          }
        }, 280);
      }
      setProgress(Math.floor(p));
    }, 55);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col justify-between bg-ink px-6 py-6 md:px-12 md:py-8"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.65, ease: EASE }}
      aria-hidden
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-dim">
        <span>{profile.name} — Portfolio</span>
        <span className="text-lime">©2026</span>
      </div>

      <div className="flex items-center gap-4">
        <svg viewBox="0 0 100 100" className="spin-slow h-9 w-9 text-lime">
          <g stroke="currentColor" strokeWidth="9" strokeLinecap="round">
            <line x1="50" y1="4" x2="50" y2="96" />
            <line x1="4" y1="50" x2="96" y2="50" />
            <line x1="17" y1="17" x2="83" y2="83" />
            <line x1="83" y1="17" x2="17" y2="83" />
          </g>
        </svg>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cream/80">
          Initializing interface…
        </p>
      </div>

      <div className="flex items-end justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-dim">
          Yogyakarta, Indonesia
        </span>
        <span className="font-mono text-5xl font-medium tabular-nums text-cream md:text-6xl">
          {progress}
          <span className="text-lime">%</span>
        </span>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-cream/10">
        <div className="h-full bg-lime" style={{ width: `${progress}%` }} />
      </div>
    </motion.div>
  );
}
