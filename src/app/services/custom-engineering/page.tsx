import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  CheckCircle2,
  Wrench,
  SlidersHorizontal,
  FileCheck,
  ShieldCheck,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Engineering Solutions | Earthschell",
  description:
    "Targeted engineering analysis, mechanical problem-solving, and customized technical solutions for complex project requirements.",
};

const engineeringChallenges = [
  {
    icon: Wrench,
    title: "Mechanical Subsystem Redesign",
    description:
      "Modifying or adapting existing mechanical assemblies to satisfy revised dimensional envelopes, updated load ratings, or alternate mounting constraints.",
    deliverables: ["Interface Analysis", "Revised 3D CAD Assembly", "Interference Checks"],
  },
  {
    icon: Scale,
    title: "Material & Weight Optimization",
    description:
      "Evaluating material alternatives (alloys, engineering polymers, composites) to reduce weight, lower unit cost, or enhance corrosion resistance.",
    deliverables: ["Material Trade-off Matrix", "Mass Budget Calculations", "Cost Analysis"],
  },
  {
    icon: SlidersHorizontal,
    title: "Specialized Mechanism Development",
    description:
      "Designing kinematic linkages, gearing arrangements, articulated joints, and precision motion mechanisms tailored to specific duty cycles.",
    deliverables: ["Kinematic Analysis", "Motion Envelope Geometry", "Component Sizing"],
  },
  {
    icon: FileCheck,
    title: "Manufacturing Feasibility & Fit",
    description:
      "Bridging the gap between conceptual CAD and machine-shop capabilities through detailed tolerance studies and machining strategy reviews.",
    deliverables: ["Tolerance Stack-up", "Machining Process Plan", "Supplier Alignment"],
  },
];

const approachPillars = [
  {
    step: "01",
    name: "Problem Decomposition",
    detail: "Breaking down complex multidisciplinary challenges into discrete, measurable mechanical requirements.",
  },
  {
    step: "02",
    name: "Engineering Assessment",
    detail: "Evaluating physical constraints, material properties, and operational parameters against engineering standards.",
  },
  {
    step: "03",
    name: "Solution Modeling",
    detail: "Developing 3D parametric models, mechanical drawings, and detailed specifications for reviewed options.",
  },
  {
    step: "04",
    name: "Integration Support",
    detail: "Assisting through prototyping and physical assembly to ensure the engineered solution fits its operating environment.",
  },
];

export default function CustomEngineeringPage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[var(--border-main)] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--text-subtle)] font-mono">
            <Link href="/" className="hover:text-[var(--text-main)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--text-main)] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-semibold">Custom Engineering</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading & Introduction */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3.5 py-1 text-xs font-semibold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono uppercase">
                <Cpu className="h-3.5 w-3.5" />
                <span>Service Category 02</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-5xl font-heading leading-tight">
                Custom Engineering Solutions
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Targeted technical problem-solving for project-specific engineering requirements. We
                assist with mechanical design modifications, structural evaluations, mechanism development,
                and technical coordination.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                >
                  <span>Discuss an Engineering Challenge</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-main)] shadow-2xs transition hover:bg-[var(--bg-surface-muted)]"
                >
                  <span>All Services</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Technical Specification Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--border-main)] pb-3">
                  <span className="text-xs font-mono font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                    SOLUTION PROFILE
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-[var(--bg-surface-muted)] text-[var(--text-main)] px-2 py-0.5 rounded font-bold">
                    Project-Specific
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-[var(--text-muted)]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Problem Analysis:</strong> Clear breakdown of mechanical and physical parameters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Tailored CAD:</strong> Parametric modeling for custom assemblies and mechanisms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Tolerance Review:</strong> Ensuring mechanical compatibility and proper fit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Stakeholder Alignment:</strong> Clear communication between design and manufacturing</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-main)] flex items-center justify-between text-xs text-[var(--text-subtle)] font-mono">
                  <span>DISCIPLINE</span>
                  <span>MECHANICAL &amp; SYSTEMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TYPICAL CHALLENGES ADDRESSED */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
              Problem Domains
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Engineering Challenges We Address
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              When standard catalog parts or existing designs fall short, we help structure and
              execute custom mechanical solutions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringChallenges.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 sm:p-7 shadow-2xs transition-all duration-200 hover:border-[var(--earth-sea-green)]"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-main)] font-heading">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-main)]">
                    <div className="text-[11px] font-mono uppercase font-bold text-[var(--text-subtle)] mb-2">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-center gap-1.5 text-xs text-[var(--text-main)] font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)] shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. APPROACH PILLARS */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-app)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Working Method
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              How We Approach Custom Requirements
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              A systematic workflow designed to uncover technical risks early and validate viable solutions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approachPillars.map((pillar) => (
              <div
                key={pillar.step}
                className="flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 shadow-2xs"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[var(--bg-surface-muted)] text-xs font-bold font-mono text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                    {pillar.step}
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-main)] font-heading pt-1">
                    {pillar.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-app)] p-8 sm:p-12 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3 py-1 text-[10px] font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono uppercase">
              Get In Touch
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Have a Specific Engineering Challenge?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              Share your technical constraints, drawings, or problem description. We will explore
              viable engineering pathways and coordinate the necessary technical expertise.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)]"
              >
                <span>Discuss Custom Engineering</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
