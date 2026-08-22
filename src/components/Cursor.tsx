import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const dotX = useSpring(x, { stiffness: 900, damping: 50, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 900, damping: 50, mass: 0.3 });
  const ringX = useSpring(x, { stiffness: 160, damping: 22, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 160, damping: 22, mass: 0.5 });

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest?.("a, button, [data-hover]"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [reduced, x, y]);

  if (!enabled || reduced) return null;

  return (
    <>
      {/* dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-lime"
          animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0.5 : 1 }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
      {/* ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="-ml-5 -mt-5 rounded-full border border-cream/40 mix-blend-difference"
          animate={{
            width: hovering ? 64 : 34,
            height: hovering ? 64 : 34,
            marginLeft: hovering ? -32 : -17,
            marginTop: hovering ? -32 : -17,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </>
  );
}
