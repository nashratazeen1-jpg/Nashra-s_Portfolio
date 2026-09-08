import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import {
  Bot,
  Brain,
  Code2,
  ExternalLink,
  Eye,
  Presentation,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import geminiCert from "@/assets/gemini-cert.jpeg";
import claudeCert from "@/assets/claude-cert.jpeg";
import innosparkCert from "@/assets/innospark-cert.jpeg";
import technovaCert from "@/assets/technova-cert.jpeg";
import brainwavesCert from "@/assets/brainwaves-cert.jpeg";
import gfgLogo from "@/assets/gfg-logo.jpeg";
import gfeLogo from "@/assets/gfe-logo.jpeg";
import anthropicLogo from "@/assets/anthropic-logo.jpeg";
import gpLogo from "@/assets/gp-logo.jpeg";
import mitLogo from "@/assets/mit-logo.jpeg";

type Item = {
  Icon: LucideIcon;
  logo: string;
  title: string;
  organizer: string;
  description: string;
  cta: string;
  link?: string;
  image?: string;
};

const items: Item[] = [
  {
    Icon: Trophy,
    logo: gfgLogo.url,
    title: "GFG Connect — 2025",
    organizer: "GeeksforGeeks",
    description:
      "Ranked 6th in Technical Scripter 2025 with Mega Engagement Winner recognition and rewards.",
    cta: "View Achievement",
    link: "https://www.linkedin.com/posts/shaikh-nashra-tazeen-819b77371_geeksforgeeks-gfgconnect-technicalscripter2025-activity-7420839172845895680-MbzE",
  },
  {
    Icon: Trophy,
    logo: gfgLogo.url,
    title: "GFG Connect — 2026",
    organizer: "GeeksforGeeks",
    description:
      "Ranked 145th in Technical Scripter 2026, earning Daily Winner recognition and rewards.",
    cta: "View Achievement",
    link: "https://www.linkedin.com/posts/shaikh-nashra-tazeen-819b77371_interestingfacts-geeksforgeeks-gfgconnect-activity-7459617395662524417-QVuT",
  },
  {
    Icon: Sparkles,
    logo: gfeLogo.url,
    title: "Gemini Certified Student",
    organizer: "Google for Education",
    description: "Demonstrated knowledge and basic competencies required to use Google AI.",
    cta: "View Certificate",
    image: geminiCert.url,
  },
  {
    Icon: Bot,
    logo: anthropicLogo.url,
    title: "Claude 101",
    organizer: "Anthropic",
    description: "Completed the Claude 101 introductory course.",
    cta: "View Certificate",
    image: claudeCert.url,
  },
  {
    Icon: Presentation,
    logo: gpLogo.url,
    title: "InnoSpark 2026 — Project Presentation",
    organizer: "Government Polytechnic, Chhatrapati Sambhajinagar",
    description: "State-Level Project Presentation featuring my Attendance Automation project.",
    cta: "View Certificate",
    image: innosparkCert.url,
  },
  {
    Icon: Code2,
    logo: gpLogo.url,
    title: "Technova 2025 — C-Code Error Hunt",
    organizer: "Government Polytechnic, Chhatrapati Sambhajinagar",
    description: "Participated in the State-Level C-Code Error Hunt.",
    cta: "View Certificate",
    image: technovaCert.url,
  },
  {
    Icon: Brain,
    logo: mitLogo.url,
    title: "Brainwaves 2K25 — C-Coding",
    organizer: "Marathwada Institute of Technology Polytechnic, Chhatrapati Sambhajinagar",
    description: "Participated in the State-Level C-Coding competition.",
    cta: "View Certificate",
    image: brainwavesCert.url,
  },
];

function Lightbox({
  item,
  onClose,
}: {
  item: { title: string; image: string };
  onClose: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-aqua/25 bg-card shadow-2xl animate-in zoom-in-95 duration-200"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition-all duration-200 hover:scale-105 hover:border-aqua/50 hover:text-aqua"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex max-h-[88vh] items-center justify-center overflow-auto p-3 sm:p-5">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-aqua/30 border-t-aqua" />
            </div>
          )}
          <img
            src={item.image}
            alt={`${item.title} certificate`}
            onLoad={() => setLoaded(true)}
            className={`max-h-[82vh] w-auto max-w-full rounded-lg object-contain transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export function Certifications({
  SectionLabel,
}: {
  SectionLabel: (props: { children: string }) => ReactElement;
}) {
  const [active, setActive] = useState<{ title: string; image: string } | null>(null);

  return (
    <section id="certifications" className="relative overflow-hidden border-y border-border">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionLabel>Certifications &amp; Achievements</SectionLabel>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Proof of Curiosity, Learning and <span className="text-gradient">Recognition.</span>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="card-glow glass flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center gap-3.5">
                  <span
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-aqua/25 bg-aqua/10 text-aqua"
                    aria-hidden
                  >
                    <item.Icon className="h-9 w-9" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      <img
                        src={item.logo}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="h-5 w-5 shrink-0 rounded-[4px] bg-white/90 object-contain p-[2px]"
                      />
                      <span className="break-words font-mono text-[11px] uppercase leading-none tracking-[0.14em] text-violet">
                        {item.organizer}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-btn mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full border border-aqua/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-aqua hover:bg-aqua hover:text-primary-foreground"
                  >
                    {item.cta}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActive({ title: item.title, image: item.image! })}
                    className="gh-btn mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full border border-aqua/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-aqua hover:bg-aqua hover:text-primary-foreground"
                  >
                    {item.cta}
                    <Eye className="h-3.5 w-3.5" />
                  </button>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <Lightbox item={active} onClose={() => setActive(null)} />}
    </section>
  );
}
