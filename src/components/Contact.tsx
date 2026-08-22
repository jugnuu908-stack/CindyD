import { contactSupporting, profile } from "../data/portfolio";
import { FadeUp, Magnetic, SectionHead } from "./shared";

const contactInfo = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phoneTel}` },
  { label: "Location", value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-cream/10">
      <div
        className="absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-lime/[0.05] blur-[150px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-28 md:px-10 md:pt-36">
        <SectionHead index="08" title="Let's Connect" meta="Contact" sub={contactSupporting} />

        {/* contact info */}
        <div className="grid gap-5 md:grid-cols-3">
          {contactInfo.map((c, i) => (
            <FadeUp key={c.label} delay={i * 0.08} className="h-full">
              <div className="group h-full border border-cream/10 bg-ink p-6 transition-colors duration-500 hover:border-lime/40">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim transition-colors duration-300 group-hover:text-lime">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="link-slide mt-3 inline-block break-all font-mono text-sm text-cream transition-colors hover:text-lime"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-3 font-mono text-sm text-cream">{c.value}</p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* actions */}
        <FadeUp delay={0.2} className="mt-10 pb-24 md:pb-32">
          <div className="flex flex-wrap gap-4">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 bg-lime px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
              >
                Send an Email
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`tel:${profile.phoneTel}`}
                className="inline-flex items-center gap-3 border border-cream/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/85 transition-colors hover:border-lime hover:text-lime"
              >
                Call Cindy
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.5 2h2l1 3-1.5 1.2a10 10 0 0 0 4.8 4.8L11 9.5l3 1v2A1.5 1.5 0 0 1 12.5 14 11.5 11.5 0 0 1 2 3.5 1.5 1.5 0 0 1 3.5 2Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </a>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
