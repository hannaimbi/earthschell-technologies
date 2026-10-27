import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Cpu,
  Layers,
  Search,
  Sliders,
  RefreshCw,
  Building2,
  Car,
  Factory,
  Lightbulb,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Lock,
  Eye,
  Target,
  MessageSquare,
  Gem,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Earthschell | Engineering Ideas Into Reality",
  description:
    "Earthschell helps businesses and innovators navigate product development, custom engineering, and manufacturing coordination.",
};

const processSteps = [
  {
    step: "01",
    name: "Understand",
    icon: Eye,
    headline: "Explore the challenge",
    detail:
      "We begin by clarifying requirements, constraints, intended outcomes, and the broader context of your project.",
  },
  {
    step: "02",
    name: "Define",
    icon: Target,
    headline: "Agree on priorities & scope",
    detail:
      "Together, we map priorities, responsibilities, and the delivery plan — ensuring alignment before any work begins.",
  },
  {
    step: "03",
    name: "Develop",
    icon: Wrench,
    headline: "Structured implementation",
    detail:
      "We work through design and implementation collaboratively, maintaining regular communication and milestone reviews.",
  },
  {
    step: "04",
    name: "Refine",
    icon: RefreshCw,
    headline: "Review, test & improve",
    detail:
      "Deliverables are reviewed against agreed benchmarks, iteratively improved, and prepared for handover or deployment.",
  },
];

const industries = [
  {
    icon: Car,
    name: "Automotive Systems",
    href: "/industries#automotive",
    summary:
      "Component design, mechanical packaging, and technical coordination for automotive assemblies.",
  },
  {
    icon: Factory,
    name: "Industrial & Manufacturing",
    href: "/industries#manufacturing",
    summary:
      "Custom machinery components, tooling requirements, and equipment resource discovery.",
  },
  {
    icon: Lightbulb,
    name: "Product Innovation & Startups",
    href: "/industries#innovation",
    summary:
      "Guiding innovators and growing teams through early feasibility, technical design, and prototyping.",
  },
  {
    icon: Building2,
    name: "Technical & Engineering Services",
    href: "/industries#services",
    summary:
      "Multidisciplinary problem-solving connecting specialized project requirements with qualified resources.",
  },
];

const principles = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Regular updates, honest feasibility feedback, and straightforward project tracking — no surprises.",
  },
  {
    icon: Search,
    title: "Considered Problem-Solving",
    description:
      "We take time to understand the real challenge before proposing solutions, reducing rework and misalignment.",
  },
  {
    icon: Sliders,
    title: "Practical Decision-Making",
    description:
      "Every recommendation balances technical requirements with real-world constraints like budget, timeline, and resources.",
  },
  {
    icon: Gem,
    title: "Attention to Quality",
    description:
      "From initial requirement definition to final delivery, quality considerations are embedded in each decision.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-[var(--border-main)] py-14 sm:py-20 lg:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Hero Copy */}
            <div className="space-y-5 lg:col-span-7">
              {/* Eyebrow in body font (Inter) */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3.5 py-1 text-xs font-medium text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] tracking-wider uppercase font-sans">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--earth-copper)]" />
                <span>Engineering • Product Development • Solutions</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-[3.25rem] font-heading leading-[1.15]">
                From Complex Challenges to{" "}
                <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                  Thoughtful Engineering.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                We help turn ideas and technical requirements into practical products
                and engineering solutions — through clear planning, collaborative
                execution, and continuous refinement.
              </p>

              {/* Clear CTA Hierarchy */}
              <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition-all hover:bg-[var(--btn-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)] px-5 py-3.5 text-sm font-semibold text-[var(--text-main)] shadow-2xs transition hover:bg-[var(--bg-surface-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>

            {/* Refined Engineering Schematic with subtle rotating calibration ring */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-[var(--border-main)] pb-3 text-xs text-[var(--text-subtle)] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[var(--earth-sea-green)]" />
                    <span>SCHEMATIC // SYS-01</span>
                  </div>
                  <span className="text-[var(--earth-copper)] font-semibold">COORDINATION</span>
                </div>

                <div className="py-6 flex justify-center">
                  <svg
                    viewBox="0 0 320 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto max-h-[220px]"
                    aria-label="Engineering coordinate and calibration diagram"
                  >
                    {/* Background Coordinate Grid */}
                    <g opacity="0.12" stroke="currentColor" strokeWidth="0.75">
                      <line x1="20" y1="20" x2="300" y2="20" />
                      <line x1="20" y1="60" x2="300" y2="60" />
                      <line x1="20" y1="100" x2="300" y2="100" />
                      <line x1="20" y1="140" x2="300" y2="140" />
                      <line x1="20" y1="180" x2="300" y2="180" />
                      <line x1="60" y1="20" x2="60" y2="200" />
                      <line x1="120" y1="20" x2="120" y2="200" />
                      <line x1="180" y1="20" x2="180" y2="200" />
                      <line x1="240" y1="20" x2="240" y2="200" />
                    </g>

                    {/* Rotating Outer Calibration Ring */}
                    <g className="animate-schematic-spin">
                      <circle
                        cx="160"
                        cy="110"
                        r="68"
                        stroke="#0D5260"
                        strokeWidth="1.25"
                        strokeDasharray="4 6"
                        className="dark:stroke-[#6F9584]"
                      />
                      <circle cx="160" cy="42" r="2.5" fill="#C37D5C" />
                      <circle cx="228" cy="110" r="2.5" fill="#6F9584" />
                      <circle cx="160" cy="178" r="2.5" fill="#0D5260" className="dark:fill-[#6F9584]" />
                      <circle cx="92" cy="110" r="2.5" fill="#6F9584" />
                    </g>

                    {/* Inner Geometry & Nodes */}
                    <circle
                      cx="160"
                      cy="110"
                      r="46"
                      stroke="#6F9584"
                      strokeWidth="1.75"
                    />
                    <circle
                      cx="160"
                      cy="110"
                      r="22"
                      fill="#D8E5DD"
                      stroke="#0D5260"
                      strokeWidth="1.5"
                      className="dark:fill-[#1E3A41] dark:stroke-[#6F9584]"
                    />

                    {/* Axis Lines */}
                    <line
                      x1="50"
                      y1="110"
                      x2="270"
                      y2="110"
                      stroke="#0D5260"
                      strokeWidth="0.75"
                      opacity="0.35"
                      className="dark:stroke-[#F7F7F2]"
                    />
                    <line
                      x1="160"
                      y1="25"
                      x2="160"
                      y2="195"
                      stroke="#0D5260"
                      strokeWidth="0.75"
                      opacity="0.35"
                      className="dark:stroke-[#F7F7F2]"
                    />

                    {/* Coordinate Callouts */}
                    <text
                      x="232"
                      y="105"
                      fill="#6F9584"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="600"
                    >
                      R 46.0
                    </text>
                    <text
                      x="165"
                      y="38"
                      fill="#C37D5C"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="600"
                    >
                      TOL ±0.05
                    </text>
                  </svg>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-[var(--bg-surface-muted)] p-3 text-xs text-[var(--text-muted)]">
                  <span>Requirement-to-Solution Mapping</span>
                  <span className="font-mono text-[10px] text-[var(--earth-copper)] font-bold">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. THREE FEATURED SERVICE CARDS — EQUAL GRID
          ═══════════════════════════════════════════════════════ */}
      <section id="services" className="py-14 sm:py-20 border-b border-[var(--border-main)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
              Core Services
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-[var(--text-main)] sm:text-3xl lg:text-4xl font-heading">
              Engineering Solutions,{" "}
              <span className="text-[var(--earth-sea-green)]">Built Around Your Needs</span>
            </h2>
          </div>

          {/* Equal 3-Column CSS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ── Card 1: Product Development ── */}
            <div className="flex flex-col rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[var(--earth-sea-green)] overflow-hidden">
              {/* Visual: Product Layers */}
              <div className="relative h-44 flex items-center justify-center bg-[var(--earth-copper-subtle)] overflow-hidden">
                <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto animate-float" aria-hidden="true">
                  {/* Layered product form */}
                  <rect x="50" y="90" width="100" height="24" rx="4" stroke="#C37D5C" strokeWidth="1.5" fill="none" opacity="0.5" />
                  <rect x="40" y="62" width="120" height="24" rx="4" stroke="#C37D5C" strokeWidth="1.5" fill="#C37D5C" fillOpacity="0.08" />
                  <rect x="30" y="34" width="140" height="24" rx="4" stroke="#C37D5C" strokeWidth="2" fill="#C37D5C" fillOpacity="0.15" />
                  {/* Top layer — dominant */}
                  <rect x="45" y="10" width="110" height="20" rx="6" fill="#C37D5C" fillOpacity="0.22" stroke="#C37D5C" strokeWidth="2" />
                  {/* Iteration arrows */}
                  <path d="M160 72 L175 50 M175 50 L170 56 M175 50 L168 52" stroke="#C37D5C" strokeWidth="1.2" opacity="0.6" />
                  <path d="M40 72 L25 50 M25 50 L30 56 M25 50 L32 52" stroke="#C37D5C" strokeWidth="1.2" opacity="0.6" />
                  {/* Grid dots */}
                  <circle cx="100" cy="130" r="1.5" fill="#C37D5C" opacity="0.3" />
                  <circle cx="115" cy="130" r="1.5" fill="#C37D5C" opacity="0.3" />
                  <circle cx="85" cy="130" r="1.5" fill="#C37D5C" opacity="0.3" />
                </svg>
              </div>
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--earth-copper-subtle)] text-[var(--earth-copper)]">
                    <Compass className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[var(--earth-copper)]">Service 01</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] font-heading mb-2">
                  Product Development
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] flex-1">
                  Shape an idea into a considered, usable product through discovery,
                  requirements definition, design, prototyping, development, and
                  iterative refinement.
                </p>
                <div className="mt-5 pt-4 border-t border-[var(--border-main)]">
                  <Link
                    href="/services/product-development"
                    className="group inline-flex items-center gap-1.5 text-xs font-bold text-[var(--earth-copper)] hover:text-[var(--earth-copper-hover)]"
                  >
                    <span>Explore Product Development</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Card 2: Custom Engineering ── */}
            <div className="flex flex-col rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[var(--earth-sea-green)] overflow-hidden">
              {/* Visual: Connected modules */}
              <div className="relative h-44 flex items-center justify-center bg-[var(--bg-surface-muted)] overflow-hidden">
                <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto animate-float delay-100" aria-hidden="true">
                  {/* Central hub */}
                  <circle cx="100" cy="70" r="20" stroke="#0D5260" strokeWidth="2" fill="#0D5260" fillOpacity="0.08" className="dark:stroke-[#6F9584] dark:fill-[#6F9584]" />
                  <circle cx="100" cy="70" r="8" fill="#0D5260" fillOpacity="0.2" className="dark:fill-[#6F9584]" />
                  {/* Satellite modules */}
                  <rect x="20" y="18" width="30" height="22" rx="4" stroke="#0D5260" strokeWidth="1.5" fill="none" className="dark:stroke-[#6F9584]" />
                  <rect x="150" y="18" width="30" height="22" rx="4" stroke="#0D5260" strokeWidth="1.5" fill="none" className="dark:stroke-[#6F9584]" />
                  <rect x="20" y="100" width="30" height="22" rx="4" stroke="#0D5260" strokeWidth="1.5" fill="none" className="dark:stroke-[#6F9584]" />
                  <rect x="150" y="100" width="30" height="22" rx="4" stroke="#0D5260" strokeWidth="1.5" fill="none" className="dark:stroke-[#6F9584]" />
                  {/* Connection lines */}
                  <line x1="50" y1="29" x2="82" y2="58" stroke="#0D5260" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" className="dark:stroke-[#6F9584]" />
                  <line x1="150" y1="29" x2="118" y2="58" stroke="#0D5260" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" className="dark:stroke-[#6F9584]" />
                  <line x1="50" y1="111" x2="82" y2="82" stroke="#0D5260" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" className="dark:stroke-[#6F9584]" />
                  <line x1="150" y1="111" x2="118" y2="82" stroke="#0D5260" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" className="dark:stroke-[#6F9584]" />
                  {/* Data flow dots */}
                  <circle cx="66" cy="44" r="2" fill="#0D5260" fillOpacity="0.4" className="dark:fill-[#6F9584]" />
                  <circle cx="134" cy="44" r="2" fill="#0D5260" fillOpacity="0.4" className="dark:fill-[#6F9584]" />
                </svg>
              </div>
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                    <Cpu className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">Service 02</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] font-heading mb-2">
                  Custom Engineering
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] flex-1">
                  Address specific technical challenges with tailored solutions,
                  thoughtful system design, integration, and practical implementation
                  aligned with your requirements.
                </p>
                <div className="mt-5 pt-4 border-t border-[var(--border-main)]">
                  <Link
                    href="/services/custom-engineering"
                    className="group inline-flex items-center gap-1.5 text-xs font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]"
                  >
                    <span>Explore Custom Engineering</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Card 3: Engineering & Manufacturing ── */}
            <div className="flex flex-col rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[var(--earth-sea-green)] overflow-hidden md:col-span-2 lg:col-span-1">
              {/* Visual: CAD-inspired linework */}
              <div className="relative h-44 flex items-center justify-center bg-[var(--accent-sand-subtle)] overflow-hidden">
                <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto animate-float delay-200" aria-hidden="true">
                  {/* Exploded component view */}
                  <rect x="60" y="10" width="80" height="30" rx="3" stroke="#6F9584" strokeWidth="1.5" fill="none" />
                  <line x1="70" y1="25" x2="130" y2="25" stroke="#6F9584" strokeWidth="0.8" opacity="0.4" />
                  <line x1="100" y1="10" x2="100" y2="40" stroke="#6F9584" strokeWidth="0.8" opacity="0.4" />
                  {/* Spacing indicator */}
                  <line x1="100" y1="40" x2="100" y2="52" stroke="#6F9584" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                  {/* Middle component */}
                  <rect x="50" y="52" width="100" height="30" rx="3" stroke="#6F9584" strokeWidth="2" fill="#6F9584" fillOpacity="0.1" />
                  <circle cx="75" cy="67" r="5" stroke="#6F9584" strokeWidth="1" fill="none" />
                  <circle cx="125" cy="67" r="5" stroke="#6F9584" strokeWidth="1" fill="none" />
                  {/* Spacing indicator */}
                  <line x1="100" y1="82" x2="100" y2="94" stroke="#6F9584" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                  {/* Bottom component */}
                  <rect x="40" y="94" width="120" height="30" rx="3" stroke="#6F9584" strokeWidth="1.5" fill="#6F9584" fillOpacity="0.05" />
                  {/* Dimension annotations */}
                  <line x1="170" y1="52" x2="170" y2="82" stroke="#C37D5C" strokeWidth="0.8" />
                  <line x1="166" y1="52" x2="174" y2="52" stroke="#C37D5C" strokeWidth="0.8" />
                  <line x1="166" y1="82" x2="174" y2="82" stroke="#C37D5C" strokeWidth="0.8" />
                  <text x="174" y="70" fill="#C37D5C" fontSize="7" fontFamily="monospace">30mm</text>
                </svg>
              </div>
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-sand)] text-[var(--earth-sea-green)]">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[var(--earth-sea-green)]">Service 03</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] font-heading mb-2">
                  Engineering & Manufacturing
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] flex-1">
                  Connect engineering requirements with practical production
                  considerations through design coordination, feasibility thinking,
                  and manufacturing-oriented support.
                </p>
                <div className="mt-5 pt-4 border-t border-[var(--border-main)]">
                  <Link
                    href="/services/engineering-manufacturing"
                    className="group inline-flex items-center gap-1.5 text-xs font-bold text-[var(--earth-sea-green)]"
                  >
                    <span>Explore Engineering & Manufacturing</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. WHY EARTHSCHELL — VALUE PROPOSITION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Our Approach
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading leading-tight">
              What Makes Earthschell&apos;s Approach{" "}
              <span className="text-[var(--earth-copper)]">Useful</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
              We focus on understanding your actual requirements before recommending
              solutions — combining clear communication with practical engineering
              problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 shadow-2xs space-y-3 transition-all duration-200 hover:border-[var(--earth-sea-green)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-main)] font-heading">
                    {principle.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. CONNECTED PROCESS TIMELINE — "How We Work"
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 border-b border-[var(--border-main)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
              How We Work
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-[var(--text-main)] sm:text-3xl lg:text-4xl font-heading">
              A Clear Path from{" "}
              <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">Concept to Execution</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)]">
              A structured four-step approach that keeps communication clear and
              progress transparent throughout every engagement.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-[var(--border-main)] -z-0" />

            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative z-10 flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--earth-sea-green)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[var(--bg-surface-muted)] border border-[var(--border-main)] text-xs font-bold font-mono text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] shadow-2xs">
                        {step.step}
                      </span>
                      <Icon className="h-4 w-4 text-[var(--text-subtle)]" />
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-main)] font-heading">
                      {step.name}
                    </h3>

                    <div className="text-xs font-semibold text-[var(--earth-copper)]">
                      {step.headline}
                    </div>

                    <p className="text-xs leading-relaxed text-[var(--text-muted)] pt-1">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. POTENTIAL INDUSTRIES
          ═══════════════════════════════════════════════════════ */}
      <section id="industries" className="py-14 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface-muted)]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
              Relevant Industries
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-[var(--text-main)] sm:text-3xl font-heading">
              Sectors We Are Prepared to Support
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Engineering sectors where client requirements frequently align with
              our design, analysis, and coordination capabilities.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.name}
                  href={industry.href}
                  className="group rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 shadow-2xs transition-all duration-200 hover:border-[var(--earth-sea-green)] hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] group-hover:bg-[var(--earth-teal)] group-hover:text-white dark:group-hover:bg-[var(--earth-sea-green)] dark:group-hover:text-[#0E2024] transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[var(--text-main)] font-heading group-hover:text-[var(--earth-teal)] dark:group-hover:text-[var(--earth-sea-green)] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    {industry.summary}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[var(--border-main)] pt-4 text-xs text-[var(--text-subtle)]">
            <span>Note: Industry areas reflect potential domains confirmed on a per-project basis.</span>
            <Link href="/industries" className="font-semibold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] hover:underline">
              View industry overview →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. ENGAGEMENT OVERVIEW — IP & GOVERNANCE
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-8 sm:p-12 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--earth-copper)] font-mono uppercase">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>IP &amp; Engineering Governance</span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-[var(--text-main)] font-heading">
                    Confidential Project Engagements
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
                    All technical discussions, proprietary drawings, and product requirements are treated
                    under standard Non-Disclosure Agreements (NDAs). We protect client IP at every stage
                    of project exploration.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-5 py-3 text-xs font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)]"
              >
                <span>Initiate NDA Discussion</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. FINAL CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-8 sm:p-14 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--earth-copper-border)] bg-[var(--earth-copper-subtle)] px-3 py-1 text-[10px] font-bold text-[var(--earth-copper)] font-mono uppercase">
              Next Steps
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-[var(--text-main)] sm:text-3xl lg:text-4xl font-heading">
              Have an Idea in Mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              Tell us what you are working on. Share your engineering or product requirements to start
              a focused conversation about practical technical pathways.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-7 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition-all hover:bg-[var(--btn-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
