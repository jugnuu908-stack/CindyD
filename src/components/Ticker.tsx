import { tickerItems } from "../data/portfolio";
import { Asterisk } from "./shared";

export default function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-ink-2 py-5 md:py-6">
      <div className="marquee-track" aria-hidden>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {tickerItems.map((item) => (
              <span key={`${item}-${dup}`} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-display text-xl font-bold uppercase tracking-tight text-cream/80 md:text-2xl">
                  {item}
                </span>
                <Asterisk className="h-5 w-5 shrink-0 text-lime" />
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">{tickerItems.join(", ")}</span>
    </div>
  );
}
