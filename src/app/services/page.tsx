import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | Earthschell",
  description:
    "Explore Earthschell's core service offerings across Product Development, Custom Engineering Solutions, and Engineering & Manufacturing Coordination.",
};

const services = [
  {
    category: "01 // PRODUCT DEVELOPMENT",
    title: "Product Development",
    href: "/services/product-development",
    icon: Compass,
    badge: "Core Service",
    badgeClass: "border-[var(--earth-copper-border)] bg-[var(--earth-copper-subtle)] text-[var(--earth-copper)]",
    description:
      "Structured pathways for turning concepts into viable physical hardware — covering concept feasibility, parametric 3D CAD modeling, design for manufacturability (DFM), and prototyping support.",
    highlights: [
      "Concept feasibility & requirement definition",
      "Parametric solid modeling & 2D drawing packages",
      "Tolerance stack-up & interference analysis",
      "Prototype fabrication coordination",
    ],
  },
  {
    category: "02 // CUSTOM SOLUTIONS",
    title: "Custom Engineering Solutions",
    href: "/services/custom-engineering",
    icon: Cpu,
    badge: "Specialized",
    badgeClass: "border-[var(--border-main)] bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]",
    description:
      "Targeted technical problem-solving for project-specific challenges, mechanical subsystem redesigns, specialized mechanism kinematic design, and material trade-off assessments.",
    highlights: [
      "Project-specific engineering decomposition",
      "Specialized kinematic & mechanism design",
      "Mechanical interface & assembly adaptation",
      "Material selection & mass optimization",
    ],
  },
  {
    category: "03 // RESOURCE COORDINATION",
    title: "Engineering & Manufacturing Solutions",
    href: "/services/engineering-manufacturing",
    icon: Layers,
    badge: "Coordination",
    badgeClass: "border-[var(--border-main)] bg-[var(--bg-surface-muted)] text-[var(--text-subtle)]",
    description:
      "Connecting client engineering needs with verified external manufacturing facilities, CNC machining shops, tooling providers, and multidisciplinary technical specialists.",
    highlights: [
      "Machining & fabrication resource identification",
      "Tooling & fixture capability matching",
      "Multidisciplinary engineering specialist sourcing",
      "Technical interface & drawing package alignment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[var(--border-main)] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--text-subtle)] font-mono">
            <Link href="/" className="hover:text-[var(--text-main)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-semibold">Services</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Service Capabilities
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-5xl font-heading leading-tight">
              Engineering Capabilities Built for Practical Execution
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
              Whether you need end-to-end product development support, targeted engineering problem-solving,
              or coordination with specialized manufacturing resources, we provide structured, disciplined pathways.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-7 sm:p-8 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--earth-sea-green)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-surface)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] shadow-2xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase ${service.badgeClass}`}>
                        {service.badge}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono font-bold text-[var(--text-subtle)]">
                      {service.category}
                    </div>

                    <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                      {service.description}
                    </p>

                    <div className="pt-2 border-t border-[var(--border-main)] space-y-1.5">
                      <div className="text-[10px] font-mono uppercase font-bold text-[var(--text-subtle)] mb-2">
                        Core Activities:
                      </div>
                      {service.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-1.5 text-xs text-[var(--text-main)]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--earth-sea-green)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--border-main)]">
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] hover:underline"
                    >
                      <span>Explore Detailed Service Page</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[var(--bg-app)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3 py-1 text-[10px] font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono uppercase">
              Project Scoping
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Not Sure Which Service Fits Your Need?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              Share your current project stage, technical challenges, or hardware concepts. We will help
              structure the most practical engineering approach.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
