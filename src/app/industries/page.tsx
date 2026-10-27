import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Factory,
  Lightbulb,
  Building2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries & Potential Focus Areas | Earthschell",
  description:
    "Explore the potential industry domains Earthschell is prepared to support across automotive systems, industrial equipment, and product innovation.",
};

const industries = [
  {
    id: "automotive",
    name: "Automotive Systems",
    icon: Car,
    tag: "MECHANICAL PACKAGING & CHASSIS",
    accentBorder: "border-[var(--earth-copper-border)]",
    accentBadge: "bg-[var(--earth-copper-subtle)] text-[var(--earth-copper)]",
    summary:
      "Supporting subsystem packaging, bracketry, structural component adaptations, and technical drawing packages for automotive and e-mobility concepts.",
    typicalNeeds: [
      "Mechanical packaging within constrained spatial envelopes",
      "Material selection for vibration and temperature resilience",
      "3D CAD assembly modeling and kinematic joint checks",
      "DFM reviews for casting, stamping, and CNC machining",
    ],
  },
  {
    id: "manufacturing",
    name: "Industrial & Manufacturing",
    icon: Factory,
    tag: "EQUIPMENT & TOOLING",
    accentBorder: "border-[var(--accent-yellow-border)]",
    accentBadge: "bg-[var(--accent-yellow-subtle)] text-[var(--accent-yellow)]",
    summary:
      "Assisting manufacturing teams and plant operators with custom tooling, assembly fixtures, component redesigns, and machine-shop capability sourcing.",
    typicalNeeds: [
      "Custom jig and fixture design for assembly lines",
      "Component redesigns to replace obsolete machine parts",
      "Sourcing specialized multi-axis CNC and turning capacity",
      "Tolerance coordination for precision mating interfaces",
    ],
  },
  {
    id: "innovation",
    name: "Product Innovation & Startups",
    icon: Lightbulb,
    tag: "CONCEPT TO PROTOTYPE",
    accentBorder: "border-[var(--accent-terracotta-border)]",
    accentBadge: "bg-[var(--accent-terracotta-subtle)] text-[var(--accent-terracotta)]",
    summary:
      "Guiding innovators, founders, and research teams through early technical scoping, solid modeling, feasibility validation, and prototype coordination.",
    typicalNeeds: [
      "Converting preliminary sketches and concepts into solid models",
      "Identifying critical physical and material failure modes early",
      "Prototyping resource coordination under tight development cycles",
      "BOM structuring and preliminary unit cost benchmarking",
    ],
  },
  {
    id: "services",
    name: "Technical & Engineering Services",
    icon: Building2,
    tag: "MULTIDISCIPLINARY COLLABORATION",
    accentBorder: "border-[var(--border-main)]",
    accentBadge: "bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]",
    summary:
      "Connecting multidisciplinary engineering requirements with specialized external technical service providers, analysis consultancies, and testing labs.",
    typicalNeeds: [
      "Scoping specialized structural or thermal analysis challenges",
      "Coordinating multi-party technical communication and milestones",
      "Drafting clear engineering RFQ documentation packages",
      "Reviewing technical deliverables against customer criteria",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[var(--border-main)] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--text-subtle)] font-mono">
            <Link href="/" className="hover:text-[var(--text-main)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-semibold">Industries</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Potential Focus Areas
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-5xl font-heading leading-tight">
              Sectors We Are Prepared to Support
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
              We focus on mechanical, product development, and technical coordination challenges where
              disciplined engineering methods yield measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DETAILED INDUSTRY SECTIONS WITH ANCHORS */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="scroll-mt-24 rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-7 sm:p-10 shadow-xs transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-surface)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] shadow-2xs border border-[var(--border-main)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase ${ind.accentBadge}`}>
                        {ind.tag}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[var(--text-main)] font-heading">
                      {ind.name}
                    </h2>

                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                      {ind.summary}
                    </p>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] hover:underline"
                      >
                        <span>Discuss an {ind.name} project</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7 rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 space-y-3">
                    <div className="text-[11px] font-mono font-bold uppercase text-[var(--text-subtle)]">
                      Typical Engineering Needs:
                    </div>
                    <div className="space-y-2">
                      {ind.typicalNeeds.map((need) => (
                        <div key={need} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-main)]">
                          <CheckCircle2 className="h-4 w-4 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                          <span>{need}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface-muted)]/70 p-4 text-xs text-[var(--text-subtle)] text-center leading-relaxed">
            Note: Industry focus areas reflect potential application domains based on mechanical and technical capabilities. Specific service offerings are evaluated and confirmed per client engagement.
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[var(--bg-app)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Have a Project in Your Industry?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              Let&apos;s review your specific operating constraints and engineering requirements.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)]"
              >
                <span>Initiate a Discussion</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
