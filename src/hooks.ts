import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Scramble-decode text effect */
export function useScrambleText(text: string, start: boolean, duration = 1100, delay = 0) {
  const reduced = useReducedMotion();
  const [output, setOutput] = useState(() => (reduced ? text : text.replace(/\S/g, "\u00A0")));

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setOutput(text);
      return;
    }
    const chars = "!<>-_\\/[]{}—=+*^?#@$%&";
    let frame = 0;
    const totalFrames = Math.max(4, Math.round(duration / 34));
    let interval: ReturnType<typeof setInterval> | undefined;

    const tick = () => {
      frame++;
      const p = Math.min(1, frame / totalFrames);
      const resolved = Math.floor(p * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          out += ch;
          continue;
        }
        out += i < resolved ? ch : chars[Math.floor(Math.random() * chars.length)];
      }
      if (p >= 1) {
        setOutput(text);
        if (interval) clearInterval(interval);
      } else {
        setOutput(out);
      }
    };

    const timeout = setTimeout(() => {
      interval = setInterval(tick, 34);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [start, text, duration, delay, reduced]);

  return output;
}

/** Eased count-up number */
export function useCountUp(target: number, start: boolean, duration = 1500, decimals = 0) {
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, reduced]);

  return val.toFixed(decimals);
}

/** One-shot in-view detector */
export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return { ref, inView };
}

/** Live local clock (WIB) */
export function useWIBTime() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/** Active section tracker for scroll-spy navigation */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}


