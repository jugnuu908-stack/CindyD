import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks";
import { EASE } from "./shared";
import { cn } from "../utils/cn";

const SECTION_IDS = [
  "top",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "foundation",
  "interests",
  "contact",
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-lime"
        style={{ scaleX: reduced ? 0 : progress }}
        aria-hidden
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500",
          scrolled ? "border-b border-cream/10 bg-ink/85 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-8 w-8 items-center justify-center border border-lime/50 font-mono text-xs font-medium text-lime transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
              CD
            </span>
            <span className="hidden font-display text-sm font-bold uppercase tracking-[0.18em] text-cream sm:block">
              Cindy&nbsp;Deariska
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-300",
                    active === l.href ? "text-lime" : "text-cream/70 hover:text-lime"
                  )}
                >
                  {l.label}
                </a>
                {active === l.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-lime"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden bg-lime px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-cream lg:inline-block"
            >
              Contact
            </a>

            {/* burger */}
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={cn(
                  "h-px w-6 bg-cream transition-transform duration-300",
                  open && "translate-y-[3.5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-6 bg-cream transition-transform duration-300",
                  open && "-translate-y-[3.5px] -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-ink px-6 pb-10 pt-28 lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <ul className="space-y-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={reduced ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.5, ease: EASE }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-cream/10 py-3.5"
                  >
                    <span className="font-mono text-[10px] text-lime">0{i + 1}</span>
                    <span className="font-display text-2xl font-bold uppercase tracking-tight text-cream transition-colors group-hover:text-lime">
                      {l.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
              <p className="text-lime">{profile.email}</p>
              <p className="hidden sm:block">{profile.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
