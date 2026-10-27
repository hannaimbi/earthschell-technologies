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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Earthschell | Engineering Ideas Into Reality",
  description:
    "Earthschell helps businesses and innovators navigate product development, custom engineering, and manufacturing coordination.",
};

const processSteps = [
  {
    step: "01",
    name: "Discover",
    icon: Search,
    headline: "Understand constraints & goals",
    detail:
      "Every engagement starts with clear questions: what are the operational limits, target materials, compliance standards, and commercial objectives?",
  },
  {
    step: "02",
    name: "Plan",
    icon: Sliders,
    headline: "Map the technical pathway",
    detail:
      "We outline practical project stages, evaluate design avenues, and define the specific engineering competencies required for execution.",
  },
  {
    step: "03",
    name: "Develop",
    icon: Wrench,
    headline: "Coordinate implementation",
    detail:
      "We coordinate engineering activities, align technical stakeholders, and maintain regular communication as deliverables take shape.",
  },
  {
    step: "04",
    name: "Refine",
    icon: RefreshCw,
    headline: "Validate & iterate",
    detail:
      "Outputs, CAD models, and prototype stages are reviewed against technical benchmarks to prepare the solution for practical deployment.",
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
    title: "Requirement-Led Thinking",
    description:
      "We start from your problem, standards, and constraints rather than forcing pre-packaged solutions.",
  },
  {
    title: "Practical Roadmaps",
    description:
      "Every engagement is scoped with realistic phases, transparent expectations, and clear deliverables.",
  },
  {
    title: "Collaborative Coordination",
    description:
      "We bridge the communication gap between your team, specialized engineers, and manufacturing resources.",
  },
  {
    title: "Direct Communication",
    description:
      "Expect honest feasibility feedback, regular progress updates, and straightforward project tracking.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[var(--border-main)] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Hero Copy */}
            <div className="space-y-6 lg:col-span-7">
              {/* Eyebrow in body font (Inter) */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3.5 py-1 text-xs font-medium text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] tracking-wider uppercase font-sans">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--earth-copper)]" />
                <span>Engineering • Product Development • Solutions</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl font-heading leading-tight">
                Engineering Ideas Into Reality
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                We help businesses, technical leaders, and innovators turn requirements into viable
                products and systems — coordinating the right engineering expertise, technical methods,
                and manufacturing resources.
              </p>

              {/* Clear CTA Hierarchy */}
              <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
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

      {/* 2. INTRODUCTION SECTION (EDITORIAL SPLIT LAYOUT) */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Narrative Headline */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
                Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading leading-tight">
                Engineering without assumptions.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                Most technical hurdles don&apos;t fail from a lack of ideas — they stall because of
                fragmented communication, unverified feasibility, or misaligned manufacturing resources.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                At Earthschell, our role is to bring clarity to that process: understanding constraints
                early, evaluating technical pathways, and coordinating the right specialists to deliver
                concrete progress.
              </p>
            </div>

            {/* Right Column: Three Structural Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-[var(--border-main)] bg-[var(--bg-app)] p-5 space-y-2">
                <span className="font-mono text-xs font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                  01 // ANALYSIS
                </span>
                <h3 className="text-sm font-bold text-[var(--text-main)] font-heading">
                  Requirement Mapping
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                  Clear definition of technical parameters, constraints, and operational goals.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-main)] bg-[var(--bg-app)] p-5 space-y-2">
                <span className="font-mono text-xs font-bold text-[var(--earth-copper)]">
                  02 // CAPABILITIES
                </span>
                <h3 className="text-sm font-bold text-[var(--text-main)] font-heading">
                  Resource Alignment
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                  Connecting requirements with specialized design, engineering, or machining methods.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-main)] bg-[var(--bg-app)] p-5 space-y-2">
                <span className="font-mono text-xs font-bold text-[var(--earth-sea-green)]">
                  03 // EXECUTION
                </span>
                <h3 className="text-sm font-bold text-[var(--text-main)] font-heading">
                  Transparent Delivery
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                  Active project coordination, milestone reviews, and dependable communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC SERVICES SECTION WITH WARM COPPER HIGHLIGHT */}
      <section id="services" className="py-16 sm:py-24 border-b border-[var(--border-main)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-3xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
                Services
              </span>
              <h2 className="mt-1 text-3xl font-extrabold text-[var(--text-main)] sm:text-4xl font-heading">
                Structured Engineering Capabilities
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] hover:underline"
            >
              <span>View full service overview</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Asymmetric 2-Row Layout */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1: Featured Product Development (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-7 sm:p-9 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--earth-sea-green)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                    <Compass className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[var(--earth-copper-border)] bg-[var(--earth-copper-subtle)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--earth-copper)] font-mono uppercase">
                    Core Capability
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading">
                  Product Development
                </h3>

                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Explore structured pathways for developing new products or refining existing
                  concepts. We assist from initial requirement definition through mechanical design,
                  CAD modeling, and prototyping validation.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)]" />
                    <span>Concept Feasibility &amp; Scoping</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)]" />
                    <span>3D CAD &amp; Engineering Modeling</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)]" />
                    <span>Design for Manufacturability</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)]" />
                    <span>Prototype Coordination Support</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border-main)] flex items-center justify-between">
                <Link
                  href="/services/product-development"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]"
                >
                  <span>Explore Product Development</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="text-[11px] font-mono text-[var(--text-subtle)]">STAGE 1 — 4</span>
              </div>
            </div>

            {/* Card 2: Custom Engineering Solutions (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-7 sm:p-8 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--earth-sea-green)]">
              <div className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                  <Cpu className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-bold text-[var(--text-main)] font-heading">
                  Custom Engineering Solutions
                </h3>

                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Targeted technical problem-solving suited to project-specific requirements,
                  mechanical assemblies, structural challenges, and customized engineering criteria.
                </p>

                <div className="space-y-1.5 pt-2 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)]" />
                    <span>Technical requirement decomposition</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)]" />
                    <span>Specialist engineering coordination</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border-main)]">
                <Link
                  href="/services/custom-engineering"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]"
                >
                  <span>Explore Custom Engineering</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Engineering & Manufacturing Coordination (Full 12 Columns) */}
            <div className="lg:col-span-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-7 sm:p-8 shadow-xs transition-all duration-200 hover:border-[var(--earth-sea-green)]">
              <div className="flex items-start sm:items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] font-heading">
                    Engineering &amp; Manufacturing Coordination
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
                    Connecting project requirements with suitable external engineering companies,
                    machinery providers, and manufacturing partners based on your specific scope.
                  </p>
                </div>
              </div>

              <Link
                href="/services/engineering-manufacturing"
                className="group shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-main)] bg-[var(--bg-app)] px-4 py-2.5 text-xs font-bold text-[var(--text-main)] transition hover:border-[var(--earth-sea-green)]"
              >
                <span>Learn More</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONNECTED PROCESS TIMELINE */}
      <section className="py-16 sm:py-24 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Working Process
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-[var(--text-main)] sm:text-4xl font-heading">
              A Clear Path from Requirement to Solution
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)]">
              A disciplined four-step engagement structure that keeps communication clear and progress transparent.
            </p>
          </div>

          <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-[var(--border-main)] -z-0" />

            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative z-10 flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--earth-sea-green)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-main)] text-xs font-bold font-mono text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] shadow-2xs">
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

      {/* 5. POTENTIAL INDUSTRIES (SOFT-SAGE TEXTURED SECTION) */}
      <section id="industries" className="py-16 sm:py-24 border-b border-[var(--border-main)] bg-[var(--bg-surface-muted)]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
              Potential Focus Areas
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-[var(--text-main)] sm:text-4xl font-heading">
              Sectors We Are Prepared to Support
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Engineering sectors where client requirements frequently align with specialized design, analysis, and production capabilities.
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

      {/* 6. WHY EARTHSCHELL (WORKING PRINCIPLES) */}
      <section className="py-16 sm:py-24 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Working Principles
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-[var(--text-main)] sm:text-4xl font-heading">
              Grounded in Technical Accountability
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              We focus on practical standards rather than inflated claims. Here is what you can expect when collaborating with Earthschell.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 shadow-2xs space-y-2"
              >
                <div className="h-1.5 w-6 rounded-full bg-[var(--earth-sea-green)] mb-3" />
                <h3 className="text-base font-bold text-[var(--text-main)] font-heading">
                  {principle.title}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IP PROTECTION & GOVERNANCE ASSURANCE (REPLACING UNAPPROVED PROJECTS SECTION) */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-app)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
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

      {/* 8. FINAL CTA */}
      <section className="py-16 sm:py-24 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-app)] p-8 sm:p-14 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--earth-copper-border)] bg-[var(--earth-copper-subtle)] px-3 py-1 text-[10px] font-bold text-[var(--earth-copper)] font-mono uppercase">
              Next Steps
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--text-main)] sm:text-4xl font-heading">
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
