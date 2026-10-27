import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  FileCode,
  Box,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Development | Earthschell",
  description:
    "End-to-end product development support from concept feasibility and 3D CAD modeling to design validation and prototype coordination.",
};

const stages = [
  {
    phase: "PHASE 01",
    title: "Concept Scoping & Feasibility",
    description:
      "Clarifying functional requirements, spatial constraints, material considerations, and preliminary cost benchmarks.",
    deliverables: ["Requirement Specification", "Technical Feasibility Assessment", "Architecture Outline"],
  },
  {
    phase: "PHASE 02",
    title: "Detailed 3D CAD & Mechanical Design",
    description:
      "Developing precision solid models, assembly configurations, tolerance calculations, and parametric geometry.",
    deliverables: ["Parametric 3D CAD Models", "Assembly Hierarchy & BOM", "2D Production Drawings"],
  },
  {
    phase: "PHASE 03",
    title: "Design for Manufacturability (DFM)",
    description:
      "Optimizing geometry for CNC machining, sheet metal fabrication, injection molding, or additive manufacturing.",
    deliverables: ["DFM Review & Feedback", "Draft Angle & Wall Thickness Analysis", "Material Optimization"],
  },
  {
    phase: "PHASE 04",
    title: "Prototyping & Physical Validation",
    description:
      "Coordinating prototype fabrication with specialized partners to validate form, fit, assembly, and functional performance.",
    deliverables: ["Functional Prototypes", "Fit & Assembly Verification", "Iteration Recommendations"],
  },
];

const technicalCapabilities = [
  {
    icon: Box,
    title: "Mechanical Enclosures & Housings",
    summary:
      "Engineering robust, functional enclosures designed for thermal dissipation, ingress protection, and ergonomic integration.",
  },
  {
    icon: Layers,
    title: "Multi-Part Assembly Architecture",
    summary:
      "Designing complex multi-body assemblies with rigorous tolerance stack-up analysis and standard fastening systems.",
  },
  {
    icon: FileCode,
    title: "Geometric Dimensioning & Tolerancing (GD&T)",
    summary:
      "Generating complete 2D engineering drawings adhering to ISO/ASME standards for seamless machine-shop interpretation.",
  },
];

export default function ProductDevelopmentPage() {
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
            <span className="text-[var(--earth-copper)] font-semibold">Product Development</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading & Introduction */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--earth-copper-border)] bg-[var(--earth-copper-subtle)] px-3.5 py-1 text-xs font-semibold text-[var(--earth-copper)] font-mono uppercase">
                <Compass className="h-3.5 w-3.5" />
                <span>Service Category 01</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-5xl font-heading leading-tight">
                Product Development Solutions
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                We help innovators and engineering teams bridge the gap between initial concepts and
                manufacturable hardware — combining structured requirement planning, 3D CAD modeling,
                and prototype coordination.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                >
                  <span>Discuss a Product Requirement</span>
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

            {/* Right Column: Visual Technical Summary Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--border-main)] pb-3">
                  <span className="text-xs font-mono font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                    DEVELOPMENT SCOPE
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-[var(--earth-copper-subtle)] text-[var(--earth-copper)] px-2 py-0.5 rounded font-bold">
                    4 Structured Stages
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-[var(--text-muted)]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Concept &amp; Feasibility:</strong> Define boundary constraints, physics, and targets</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Precision 3D CAD:</strong> Parametric solid modeling and assembly validation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>DFM Optimization:</strong> Adapting designs for target manufacturing processes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Prototype Support:</strong> Facilitating vendor fabrication and fit testing</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-main)] flex items-center justify-between text-xs text-[var(--text-subtle)] font-mono">
                  <span>CONFIDENTIALITY</span>
                  <span>NDA PROTECTED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR DEVELOPMENT STAGES */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Process Methodology
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Four Stages from Requirement to Prototype
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              We structure development into discrete, transparent milestones so you maintain complete
              oversight over technical progress and design intent.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((stage) => (
              <div
                key={stage.phase}
                className="flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 sm:p-7 shadow-2xs transition-all duration-200 hover:border-[var(--earth-sea-green)]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                      {stage.phase}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--earth-copper)]" />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-main)] font-heading">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-main)]">
                  <div className="text-[11px] font-mono uppercase font-bold text-[var(--text-subtle)] mb-2">
                    Key Outputs:
                  </div>
                  <ul className="space-y-1">
                    {stage.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-[var(--text-main)] font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE TECHNICAL CAPABILITIES */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-app)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
              Engineering Focus
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Technical Design Capabilities
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Core engineering disciplines utilized across product development engagements.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--text-main)] font-heading">
                      {cap.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                      {cap.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-app)] p-8 sm:p-12 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--earth-copper-border)] bg-[var(--earth-copper-subtle)] px-3 py-1 text-[10px] font-bold text-[var(--earth-copper)] font-mono uppercase">
              Get Started
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Have a Product Concept to Develop?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              Tell us about your functional requirements and current stage. We will evaluate technical
              feasibility and outline practical next steps.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)]"
              >
                <span>Discuss Product Development</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
