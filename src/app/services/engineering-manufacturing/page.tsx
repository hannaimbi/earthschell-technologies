import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  CheckCircle2,
  Factory,
  Cog,
  Users2,
  FileCheck,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Manufacturing Solutions | Earthschell",
  description:
    "Connecting project requirements with specialized engineering companies, machining providers, and manufacturing resources.",
};

const coordinationAreas = [
  {
    icon: Factory,
    title: "Machining & Fabrication Resources",
    description:
      "Identifying suitable facilities for CNC milling, multi-axis turning, sheet metal forming, laser cutting, and precision welding based on material and tolerance requirements.",
    focus: ["Process Compatibility", "Material Availability", "Capacity Alignment"],
  },
  {
    icon: Cog,
    title: "Tooling & Fixture Coordination",
    description:
      "Connecting clients with tooling specialists to evaluate mold design, jig and fixture manufacturing, and stamping die configurations.",
    focus: ["Tooling Feasibility", "Cycle Time Estimates", "Quality Standards"],
  },
  {
    icon: Users2,
    title: "Specialist Engineering Expertise",
    description:
      "Engaging niche engineering specialists when projects demand specialized disciplines like thermal analysis, composites, or complex kinematics.",
    focus: ["Discipline Sourcing", "Scope Alignment", "Technical Coordination"],
  },
  {
    icon: FileCheck,
    title: "Technical Requirement Translation",
    description:
      "Translating functional product needs into detailed manufacturing specifications, BOM hierarchies, and standard mechanical tolerances.",
    focus: ["Drawing Packages", "Tolerance Specifications", "Vendor Clarifications"],
  },
];

export default function EngineeringManufacturingPage() {
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
            <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-semibold">Engineering &amp; Manufacturing</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading & Introduction */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3.5 py-1 text-xs font-semibold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono uppercase">
                <Layers className="h-3.5 w-3.5" />
                <span>Service Category 03</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-5xl font-heading leading-tight">
                Engineering &amp; Manufacturing Solutions
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Connecting project requirements with suitable engineering companies, technical
                specialists, equipment, and manufacturing resources based on the specific needs of each
                engagement.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                >
                  <span>Discuss Resource Coordination</span>
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

            {/* Right Column: Coordination Governance Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--border-main)] pb-3">
                  <span className="text-xs font-mono font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                    COORDINATION MODEL
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-[var(--bg-surface-muted)] text-[var(--text-main)] px-2 py-0.5 rounded font-bold">
                    Partner Network
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-[var(--text-muted)]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Requirement Analysis:</strong> Mapping exact production specs before outreach</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Resource Identification:</strong> Evaluating machinery and vendor capabilities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Technical Interface:</strong> Coordinating drawings, tolerances, and RFQ details</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                    <span><strong>Progress Monitoring:</strong> Maintaining transparent updates throughout fabrication</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-main)] text-[11px] text-[var(--text-subtle)] leading-relaxed">
                  * Earthschell acts as a technical solutions and coordination partner, facilitating collaborations based on verified project scope.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COORDINATION DISCIPLINES */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
              Capabilities
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Resource Coordination Disciplines
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              We help you identify, evaluate, and coordinate the specific engineering and fabrication
              capabilities your project demands.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {coordinationAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 sm:p-7 shadow-2xs transition-all duration-200 hover:border-[var(--earth-sea-green)]"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-main)] font-heading">
                      {area.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                      {area.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-main)]">
                    <div className="text-[11px] font-mono uppercase font-bold text-[var(--text-subtle)] mb-2">
                      Key Criteria:
                    </div>
                    <ul className="space-y-1">
                      {area.focus.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-xs text-[var(--text-main)] font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)] shrink-0" />
                          <span>{item}</span>
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

      {/* 3. CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-app)] p-8 sm:p-12 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3 py-1 text-[10px] font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono uppercase">
              Partner With Us
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Need Manufacturing or Engineering Resources?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              Tell us about your production specifications, quantities, and timelines. We will review
              the technical requirements and explore appropriate coordination avenues.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)]"
              >
                <span>Discuss Resource Sourcing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
