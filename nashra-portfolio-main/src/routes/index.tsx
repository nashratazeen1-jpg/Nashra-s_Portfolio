import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Database,
  Brain,
  FileCode,
  CalendarCheck,
  Gamepad2,
  BrainCircuit,
  Trophy,
  Briefcase,
  ExternalLink,
  Sparkles,
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  BadgeCheck,
  GraduationCap,
  Lightbulb,
  Check,
  Copy,
  Users,
  Mic,
  MessageCircle,
  Globe,
  Monitor,
  Smartphone,
  BarChart3,
  Award,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Certifications } from "@/components/Certifications";
import { Preloader } from "@/components/Preloader";
import { TypeCycle } from "@/components/TypeCycle";
import heroBg from "../assets/hero-bg.jpg";
import naskraftLogo from "../assets/naskraft-logo.jpeg";
import naskraftCertificate from "../assets/naskraft-certificate.jpeg";
import { TypeOnce } from "@/components/TypeOnce";
import skillPython from "../assets/skill-python.jpeg";
import skillC from "../assets/skill-c.jpeg";
import skillJava from "../assets/skill-java.jpeg";
import skillSql from "../assets/skill-sql.jpeg";
import skillDbms from "../assets/skill-dbms.jpeg";
import skillPrompt from "../assets/skill-prompt.jpeg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaikh Nashra Tazeen | AI & ML Student Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Shaikh Nashra Tazeen, a 3rd-year AI & ML Diploma Student and Google Student Ambassador '26 building real-world Python and AI projects.",
      },
      { property: "og:title", content: "Shaikh Nashra Tazeen | AI & ML Student Portfolio" },
      {
        property: "og:description",
        content:
          "AI & ML student, Google Student Ambassador '26, creative tech enthusiast building real-world projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shaikh Nashra Tazeen | AI & ML Student Portfolio" },
      {
        name: "twitter:description",
        content:
          "AI & ML student, Google Student Ambassador '26, creative tech enthusiast building real-world projects.",
      },
    ],
  }),
  component: Index,
});

const socialLinks = [
  { name: "GitHub", href: "https://github.com/nashratazeen1-jpg", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shaikh-nashra-tazeen-819b77371/",
    icon: Linkedin,
  },
  { name: "GFG Connect", href: "https://www.geeksforgeeks.org/profile/nashratlwci", icon: Code2 },
  { name: "Email", href: "mailto:nashratazeen1@gmail.com", icon: Mail },
];

const skills = [
  { name: "Python", logo: skillPython },
  { name: "C", logo: skillC },
  { name: "Core Java", logo: skillJava },
  { name: "Fundamentals of SQL", logo: skillSql },
  { name: "Iterative Prompt Engineering", logo: skillPrompt },
  { name: "DBMS", logo: skillDbms },
] as const;


const projects = [
  {
    index: "01",
    title: "Attendance Automation System",
    description:
      "A Python-based attendance automation project for tracking students’ slot-wise attendance. It calculates Morning, Afternoon & Evening attendance, generates monthly reports and a final semester Progressive Attendance (PA) Sheet, reducing faculty workload, saving time, and minimizing manual errors.",
    icon: CalendarCheck,
    tech: ["Python", "Pandas", "Tkinter", "Microsoft Excel"],
    repo: "https://github.com/nashratazeen1-jpg/Attendance-Automation-System",
  },
  {
    index: "02",
    title: "Slot-Based Monthly Attendance Calculator",
    description:
      "A practical attendance automation tool designed to help students calculate their monthly attendance based on college time slots. Users select the month type and enter attended Morning, Afternoon, and Evening slots to automatically get their total attendance and percentage, eliminating the need for manual calculations.",
    icon: CalendarCheck,
    tech: ["Python"],
    repo: "https://github.com/nashratazeen1-jpg/Slot-Based-Monthly-Attendance-Calculator",
  },
  {
    index: "03",
    title: "Rock Paper Scissors Game",
    description:
      "A fun and interactive Rock-Paper-Scissors game where the user competes against the computer across multiple rounds. Players choose Rock, Paper, or Scissors, with the score updated after every round. At the end, the final scores and winner are displayed.",
    icon: Gamepad2,
    tech: ["Python"],
    repo: "https://github.com/nashratazeen1-jpg/Rock-Paper-Scissors-Game",
  },
  {
    index: "04",
    title: "Python Quiz Game",
    description:
      "A simple and interactive Python Quiz Game that tests the user’s knowledge through 5 basic Python questions with multiple-choice options. Each correct answer earns 1 point, while incorrect answers add no points. After all questions, the game displays the final score and a WIN/LOSE result, turning basic Python concepts into a fun learning experience.",
    icon: BrainCircuit,
    tech: ["Python"],
    repo: "https://github.com/nashratazeen1-jpg/Pythons-Quiz-Game",
  },
];


const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];


function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass shadow-lg" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          Nashra<span className="text-aqua">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-aqua transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-aqua/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-aqua transition-all duration-300 hover:bg-aqua hover:text-primary-foreground"
          >
            Say hi
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-secondary md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-aqua/40 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-aqua transition-all duration-300 hover:bg-aqua hover:text-primary-foreground"
          >
            Say hi 👋
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.3em] text-aqua sm:text-base">
      <span className="h-px w-8 bg-aqua/60" />
      {children}
    </span>
  );
}

function Marquee() {
  const items = ["Python", "Artificial Intelligence", "DBMS", "Core Java", "SQL", "C", "Iterative Prompt Engineering" ];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <div className="marquee-track flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-sm uppercase tracking-[0.28em] text-muted-foreground"
          >
            {item}
            <Sparkles className="h-3.5 w-3.5 text-violet" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateLoaded, setCertificateLoaded] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("nashratazeen1@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  useEffect(() => {
    if (!showCertificate) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowCertificate(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [showCertificate]);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Preloader />
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20">
        <div className="mesh-bg absolute inset-0" />
        <img
          src={heroBg}
          alt="Abstract futuristic gradient artwork"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-screen"
          width={1920}
          height={1080}
        />
        <div className="grid-lines absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div
            className="hero-in inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-aqua"
            style={{ animationDelay: "1.15s" }}
          >
            <span className="pulse-ring h-1.5 w-1.5 rounded-full bg-aqua" />
            Google Student Ambassador ’26
          </div>

          <div className="hero-in" style={{ animationDelay: "1.3s" }}>
            <h1 className="mt-7 font-display text-[2.6rem] leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-[5.2rem]">
              Shaikh Nashra
              <br />
              <span className="text-gradient">Tazeen</span>
            </h1>
          </div>

          <div className="mt-8 max-w-2xl">
            <div className="hero-in" style={{ animationDelay: "1.5s" }}>
              <TypeCycle
                items={[
                  "Artificial Intelligence & Machine Learning",
                  "AI & Technology Enthusiast",
                  "Python Developer",
                ]}
                className="min-h-6 font-mono text-xs uppercase tracking-[0.24em] text-violet sm:text-sm"
              />
            </div>

            <p
              className="hero-in mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "1.65s" }}
            >
              I’m <span className="font-semibold text-foreground">Shaikh Nashra Tazeen</span>, a
              3rd-year Diploma Student in{" "}
              <span className="text-aqua">Artificial Intelligence &amp; Machine Learning</span> at
              CSMSS College of Polytechnic. I’m a curious and creative tech enthusiast who loves
              turning ideas into real-world projects and experimenting with emerging technologies.
            </p>

          </div>

          <div
            className="hero-in mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "2.12s" }}
          >
            <a
              href="#projects"
              className="shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/60 hover:bg-violet/10 active:scale-[0.98]"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div
            className="hero-in mt-12 flex items-center gap-3"
            style={{ animationDelay: "2.24s" }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-aqua/60 hover:text-aqua"
              >
                <link.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <Reveal delay={120}>
              <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I’m <span className="font-semibold text-foreground">Shaikh Nashra Tazeen</span>, a
                3rd-year Diploma student in{" "}
                <span className="text-aqua">Artificial Intelligence &amp; Machine Learning</span> at{" "}
                <span className="text-violet">CSMSS College of Polytechnic</span>. I enjoy turning
                ideas into real-world projects, exploring emerging technologies, and learning
                through hands-on experience. 🚀
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                💼 Recently, I completed a{" "}
                <span className="text-violet">3-months offline internship</span> at{" "}
                <span className="font-semibold text-aqua">Naskraft IT Solutions PVT LTD</span>,
                gaining valuable hands-on industry experience and practical exposure.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                🔹 I actively participate in technical events, project presentations, and
                competitions across multiple colleges, including{" "}
                <span className="text-violet">state-level technical events</span>, gaining valuable
                exposure beyond the classroom.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="card-glow mt-7 rounded-2xl border border-violet/25 bg-violet/[0.06] p-5 sm:p-6">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  🏆 I’ve also participated in{" "}
                  <span className="font-semibold text-aqua">
                    GFG Connect – Technical Scripter Edition 2025 &amp; 2026
                  </span>
                  , securing:
                </p>
                <ul className="mt-4 space-y-2.5">
                  <li className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                    <span>
                      <span className="font-semibold text-foreground">6th Rank</span> among the Top
                      25 Winners — 2025
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                    <span>
                      <span className="font-semibold text-foreground">145th Rank</span> among the
                      Top 251 Winners — 2026
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
                🌟 As a <span className="font-semibold text-aqua">Google Student Ambassador ’26</span>,
                I promote <span className="text-violet">Google/Gemini AI tools</span> and help my
                peers explore and learn emerging AI technologies.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <blockquote className="mt-8 border-l-2 border-aqua/60 pl-6 font-display text-lg leading-relaxed text-foreground sm:text-xl">
                I believe in learning by building, experimenting by doing, and turning crazy ideas
                into reality. 🚀
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="glass card-glow rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-violet" />
                <h3 className="font-display text-base font-semibold tracking-tight">At a Glance</h3>
              </div>
              <ul className="mt-7 space-y-6">
                <li className="flex gap-4">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Education
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed">
                      3rd-year Diploma Student in Artificial Intelligence &amp; Machine Learning at
                      CSMSS College of Polytechnic
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Experience
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed">
                      Intern @ Naskraft IT Solutions PVT LTD
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Role
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed">
                      Google Student Ambassador ’26
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Brain className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Focus
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed">
                      Turning ideas into real-world projects and experimenting with emerging
                      technologies
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative overflow-hidden border-y border-border">
        <div className="mesh-bg absolute inset-0 opacity-40" />
        <div className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <SectionLabel>Skills</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Where Curiosity becomes <span className="text-gradient">Capability</span>
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(128px,auto)]">
            {/* Python */}
            <Reveal delay={0}>
              <div className="glass card-glow group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-border p-5">
                <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-aqua/8 blur-3xl transition-all duration-500 group-hover:bg-violet/15" />
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-aqua/12 to-violet/12 p-3 transition-transform duration-500 group-hover:scale-110">
                  <img src={skills[0].logo} alt={`${skills[0].name} logo`} loading="lazy" className="h-full w-full object-contain drop-shadow-[0_0_10px_oklch(0.82_0.14_190/0.3)]" />
                </div>
                <div className="relative min-w-0 flex-1">
                  <h3 className="truncate font-display text-base font-semibold">{skills[0].name}</h3>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/20 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Reveal>

            {/* C — compact horizontal */}
            <Reveal delay={80}>
              <div className="glass card-glow group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-border p-5">
                <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-aqua/8 blur-3xl transition-all duration-500 group-hover:bg-violet/15" />
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-aqua/12 to-violet/12 p-3 transition-transform duration-500 group-hover:scale-110">
                  <img src={skills[1].logo} alt={`${skills[1].name} logo`} loading="lazy" className="h-full w-full object-contain drop-shadow-[0_0_10px_oklch(0.82_0.14_190/0.3)]" />
                </div>
                <div className="relative min-w-0 flex-1">
                  <h3 className="truncate font-display text-base font-semibold">{skills[1].name}</h3>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/20 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Reveal>

            {/* Core Java — compact horizontal */}
            <Reveal delay={120}>
              <div className="glass card-glow group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-border p-5">
                <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-aqua/8 blur-3xl transition-all duration-500 group-hover:bg-violet/15" />
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-aqua/12 to-violet/12 p-3 transition-transform duration-500 group-hover:scale-110">
                  <img src={skills[2].logo} alt={`${skills[2].name} logo`} loading="lazy" className="h-full w-full object-contain drop-shadow-[0_0_10px_oklch(0.82_0.14_190/0.3)]" />
                </div>
                <div className="relative min-w-0 flex-1">
                  <h3 className="truncate font-display text-base font-semibold">{skills[2].name}</h3>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/20 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Reveal>

            {/* Fundamentals of SQL — wide banner */}
            <Reveal delay={160} className="sm:col-span-2 lg:col-span-2">
              <div className="glass card-glow group relative flex h-full min-h-[120px] items-center gap-5 overflow-hidden rounded-2xl border border-border p-5 sm:p-6">
                <div aria-hidden className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-violet/10 blur-3xl transition-all duration-500 group-hover:bg-aqua/15" />
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-aqua/12 to-violet/12 p-3 transition-transform duration-500 group-hover:scale-110">
                  <img src={skills[3].logo} alt={`${skills[3].name} logo`} loading="lazy" className="h-full w-full object-contain drop-shadow-[0_0_12px_oklch(0.82_0.14_190/0.35)]" />
                </div>
                <div className="relative min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold sm:text-xl">{skills[3].name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/20 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Reveal>

            {/* Iterative Prompt Engineering — vertical compact */}
            <Reveal delay={200}>
              <div className="glass card-glow group relative flex h-full min-h-[150px] flex-col justify-between overflow-hidden rounded-2xl border border-border p-5">
                <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-violet/10 blur-3xl transition-all duration-500 group-hover:bg-aqua/15" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-aqua/12 to-violet/12 p-3 transition-transform duration-500 group-hover:scale-110">
                  <img src={skills[4].logo} alt={`${skills[4].name} logo`} loading="lazy" className="h-full w-full object-contain drop-shadow-[0_0_10px_oklch(0.82_0.14_190/0.3)]" />
                </div>
                <div className="relative mt-4">
                  <h3 className="font-display text-base font-semibold leading-snug">{skills[4].name}</h3>
                </div>
              </div>
            </Reveal>

            {/* DBMS — vertical compact */}
            <Reveal delay={240}>
              <div className="glass card-glow group relative flex h-full min-h-[150px] flex-col justify-between overflow-hidden rounded-2xl border border-border p-5">
                <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-violet/10 blur-3xl transition-all duration-500 group-hover:bg-aqua/15" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-aqua/12 to-violet/12 p-3 transition-transform duration-500 group-hover:scale-110">
                  <img src={skills[5].logo} alt={`${skills[5].name} logo`} loading="lazy" className="h-full w-full object-contain drop-shadow-[0_0_10px_oklch(0.82_0.14_190/0.3)]" />
                </div>
                <div className="relative mt-4">
                  <h3 className="font-display text-base font-semibold leading-snug">{skills[5].name}</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <SectionLabel>Projects</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Ideas I’ve turned into <span className="text-gradient">Real Projects.</span>
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 [perspective:1400px] sm:gap-7 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 110}>
                <article className="glass project-card shine group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8">
                  <span className="pointer-events-none absolute top-5 right-6 font-display text-4xl font-bold text-foreground/[0.06] transition-colors duration-500 group-hover:text-aqua/20 sm:text-5xl">
                    {project.index}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua/15 to-violet/15 text-aqua transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <project.icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-6 max-w-[80%] font-display text-lg leading-snug font-semibold sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-violet/30 bg-violet/[0.07] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-violet"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-aqua/40 via-violet/30 to-transparent" />
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="gh-btn mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-aqua/35 bg-aqua/5 px-5 py-2.5 text-sm font-semibold text-aqua hover:bg-aqua hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-12 flex justify-center">
            <p className="glass card-glow inline-flex max-w-full items-center gap-2.5 rounded-full px-5 py-3 text-center text-sm font-semibold sm:text-base">
              <TypeOnce text="🚀 More Projects Ahead — turning Ideas into Reality." />
            </p>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative overflow-hidden border-y border-border">
        <div className="mesh-bg absolute inset-0 opacity-40" />
        <div className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <SectionLabel>Experience</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Where Skills meet <span className="text-gradient">Real-World Work.</span>
            </p>
          </Reveal>

          <div className="mt-12 space-y-8">
            <Reveal delay={100}>
              <div className="glass card-glow shine relative overflow-hidden rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/95 p-2.5 shadow-sm sm:h-20 sm:w-20">
                      <img
                        src={naskraftLogo}
                        alt="Naskraft IT Solutions logo"
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl leading-tight font-semibold sm:text-2xl">
                        Naskraft IT Solutions PVT LTD
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Completed a 3-months offline Internship under the guidance of{" "}
                        <span className="font-semibold text-violet">Nikhil Brahmbhatt Sir</span>
                        , gaining hands-on experience across development domains and real-world project workflows.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCertificate(true)}
                    className="gh-btn inline-flex items-center justify-center gap-2 self-start rounded-full border border-aqua/35 bg-aqua/5 px-5 py-2.5 text-sm font-semibold text-aqua hover:bg-aqua hover:text-primary-foreground"
                  >
                    <Award className="h-4 w-4" />
                    View Internship Certificate
                  </button>
                </div>
              </div>
            </Reveal>

            {showCertificate && (
              <div
                role="dialog"
                aria-modal="true"
                aria-label="Naskraft Internship Certificate"
                onClick={() => setShowCertificate(false)}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-aqua/25 bg-card shadow-2xl animate-in zoom-in-95 duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setShowCertificate(false)}
                    aria-label="Close preview"
                    className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition-all duration-200 hover:scale-105 hover:border-aqua/50 hover:text-aqua"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="flex max-h-[88vh] items-center justify-center overflow-auto p-3 sm:p-5">
                    {!certificateLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="h-8 w-8 animate-spin rounded-full border-2 border-aqua/30 border-t-aqua" />
                      </div>
                    )}
                    <img
                      src={naskraftCertificate}
                      alt="Naskraft IT Solutions Internship Certificate"
                      onLoad={() => setCertificateLoaded(true)}
                      className={`max-h-[82vh] w-auto max-w-full rounded-lg object-contain transition-opacity duration-300 ${
                        certificateLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Monitor,
                  title: "Desktop Applications",
                  tools: "Java AWT, NetBeans",
                  color: "text-aqua",
                },
                {
                  icon: Globe,
                  title: "Web Applications",
                  tools: "Java Servlets, NetBeans",
                  color: "text-violet",
                },
                {
                  icon: Smartphone,
                  title: "Android Applications",
                  tools: "Android Studio",
                  color: "text-aqua",
                },
                {
                  icon: Database,
                  title: "Database",
                  tools: "WAMP Server 2.0, phpMyAdmin",
                  color: "text-violet",
                },
                {
                  icon: Terminal,
                  title: "Python",
                  tools: "PyCharm",
                  color: "text-aqua",
                },
                {
                  icon: BarChart3,
                  title: "Power BI",
                  tools: "Basics",
                  color: "text-violet",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="glass card-glow shine group relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua/15 to-violet/15 transition-colors duration-300 group-hover:from-aqua/25 group-hover:to-violet/25">
                      <item.icon className={`h-5.5 w-5.5 ${item.color}`} />
                    </div>
                    <h3 className="mt-5 font-display text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.tools}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Community */}
      <section id="leadership" className="relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <SectionLabel>Leadership &amp; Community</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Leading, Connecting, and Creating <span className="text-gradient">impact.</span>
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <Reveal delay={100}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  As a{" "}
                  <span className="font-semibold text-aqua">Google Student Ambassador ’26</span>, I
                  actively promote and introduce{" "}
                  <span className="font-semibold text-violet">Google/Gemini AI tools and features</span>{" "}
                  such as <span className="text-aqua">Gemini</span>,{" "}
                  <span className="text-violet">Nano Banana</span>,{" "}
                  <span className="text-aqua">Lyria</span>,{" "}
                  <span className="text-violet">AI Mode</span> and more to my friends, peers, and
                  college students.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  🎤 I organize{" "}
                  <span className="font-semibold text-aqua">Google Meet sessions and discussions</span>{" "}
                  to demonstrate these tools, help others explore AI, and encourage experimentation
                  with emerging technologies.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Through this journey, I’ve developed valuable{" "}
                  <span className="font-semibold text-violet">
                    Leadership, Communication, Community-building, and Conversation skills
                  </span>{" "}
                  while learning how to engage and connect with others.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="glass card-glow rounded-3xl p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-aqua" />
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    Impact Highlights
                  </h3>
                </div>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-4">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Community
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed">
                        Connecting peers with Google AI tools and emerging technologies
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mic className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Sessions
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed">
                        Organizing Google Meet sessions and tech discussions
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Skills Built
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed">
                        Leadership, Communication, and Community-building
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Certifications SectionLabel={SectionLabel} />

      {/* Contact */}
      <section id="contact" className="relative border-t border-border">

        <div className="mesh-bg absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal className="flex justify-center">
            <SectionLabel>Contact</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Let’s Connect, Collaborate, and{" "}
              <span className="text-gradient">Create together.</span>
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <div className="glass card-glow mx-auto max-w-xl rounded-3xl p-6 text-left sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Reach me directly
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:nashratazeen1@gmail.com"
                  className="shine relative inline-flex min-w-0 flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-aqua px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">nashratazeen1@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="gh-btn inline-flex items-center justify-center gap-2 rounded-full border border-violet/40 bg-violet/5 px-5 py-3.5 text-sm font-semibold text-violet"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </div>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-aqua/40 via-violet/30 to-transparent" />
              <div className="mt-6 flex flex-wrap gap-2.5">
                {socialLinks
                  .filter((link) => link.name !== "Email")
                  .map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua/60 hover:text-aqua"
                    >
                      <link.icon className="h-3.5 w-3.5" />
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <footer className="border-t border-border py-8" />
    </div>
  );
}
