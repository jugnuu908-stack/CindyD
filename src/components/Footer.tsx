import { profile } from "../data/portfolio";

const footerNav = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/10 bg-ink-2/40">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-extrabold uppercase tracking-tight text-cream md:text-2xl">
              {profile.name}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-lime">
              Software Engineer &amp; Web Developer
            </p>
            <p className="mt-3 text-sm text-dim">Informatics Engineering Graduate</p>
            <p className="mt-1 text-sm text-dim">{profile.location}</p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="link-slide text-sm text-cream/70 transition-colors hover:text-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim">Contact</p>
            <a
              href={`mailto:${profile.email}`}
              className="link-slide mt-4 inline-block break-all font-mono text-sm text-cream/70 transition-colors hover:text-lime"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phoneTel}`}
              className="link-slide mt-2 block font-mono text-sm text-cream/70 transition-colors hover:text-lime"
            >
              {profile.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
            © 2026 Cindy Deariska. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-lime"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
