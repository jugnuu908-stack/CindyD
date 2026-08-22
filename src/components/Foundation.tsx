import { foundation } from "../data/portfolio";
import { FadeUp, MaskText } from "./shared";

export default function Foundation() {
  return (
    <section
      id="foundation"
      className="relative overflow-hidden border-y border-cream/10 bg-ink-2/60"
    >
      <div
        className="grid-bg absolute inset-0 opacity-60 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-24 text-center md:px-10 md:py-32">
        <FadeUp>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime">
            (06) Professional Profile
          </p>
        </FadeUp>
        <h2 className="mt-6 font-display font-extrabold uppercase leading-[1.02] tracking-tight text-[clamp(1.5rem,3.4vw,2.75rem)]">
          <MaskText lines={[foundation.heading]} />
        </h2>
        <FadeUp delay={0.15}>
          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-dim md:text-base">
            {foundation.text}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
