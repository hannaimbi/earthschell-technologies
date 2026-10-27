import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building,
  Target,
  Compass,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company Information | Earthschell",
  description:
    "Learn about Earthschell's role as an engineering solutions partner, our operating philosophy, and our commitment to practical technical execution.",
};

const principles = [
  {
    title: "Requirement-Led Thinking",
    description:
      "We begin by thoroughly understanding the physical, material, and operational parameters of your challenge before prescribing a path forward.",
  },
  {
    title: "Practical Planning",
    description:
      "Every project engagement is mapped with realistic technical stages, clear boundaries, and honest feasibility assessments.",
  },
  {
    title: "Collaborative Delivery",
    description:
      "We act as an active technical interface, working closely with your team and external manufacturing resources throughout execution.",
  },
  {
    title: "Direct Communication",
    description:
      "We value transparency over hype. You receive clear progress updates, honest risk identification, and straightforward technical documentation.",
  },
];

export default function CompanyPage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[var(--border-main)] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--text-subtle)] font-mono">
            <Link href="/" className="hover:text-[var(--text-main)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-semibold">Company</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              About Earthschell
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-5xl font-heading leading-tight">
              An Engineering Solutions Partner
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
              Earthschell operates as a dedicated partner for businesses, technical innovators, and
              manufacturing stakeholders — connecting engineering challenges with appropriate technical
              expertise, methods, and production resources.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OPERATING MODEL (EDITORIAL SPLIT) */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono">
                Operating Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading leading-tight">
                How We Provide Value
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                Moving from a product concept or mechanical problem to a tangible, manufactured solution
                demands multiple specialized competencies.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                Rather than claiming universal in-house fabrication across every material and process,
                Earthschell provides requirement understanding, CAD design, DFM analysis, and technical
                coordination — connecting you with specialized engineering companies, machining
                providers, and manufacturing resources tailored to your exact project scope.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                  <span>01 // REQUIREMENT DECOMPOSITION</span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-main)] font-heading">
                  Clear Engineering Translation
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  We translate customer objectives into precise 3D CAD models, tolerance specifications,
                  and manufacturing requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-[var(--earth-copper)]">
                  <span>02 // CAPABILITY MATCHING</span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-main)] font-heading">
                  Targeted Resource Identification
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  We explore and engage the right machining, casting, forming, or rapid prototyping
                  facilities suited to your volume and budget.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-[var(--earth-sea-green)]">
                  <span>03 // ACTIVE INTERFACE</span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-main)] font-heading">
                  Technical Project Coordination
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  We maintain continuous technical dialogue between stakeholders, ensuring design intent
                  is accurately maintained through physical delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKING PRINCIPLES */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-app)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Core Principles
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Grounded in Professional Rigor
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Our operational standards are built on clarity, accountability, and technical accuracy.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex flex-col justify-between rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 shadow-2xs"
              >
                <div className="space-y-2">
                  <div className="h-1.5 w-6 rounded-full bg-[var(--earth-sea-green)] mb-3" />
                  <h3 className="text-base font-bold text-[var(--text-main)] font-heading">
                    {principle.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IP & CONFIDENTIALITY ASSURANCE */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-8 sm:p-10 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-surface)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] border border-[var(--border-main)]">
                <Lock className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[var(--text-main)] font-heading">
                  Intellectual Property &amp; Confidentiality
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-3xl">
                  We treat all technical data, trade secrets, CAD files, and product specifications
                  under strict confidentiality. Client engagements are conducted under Non-Disclosure
                  Agreements (NDAs), ensuring full ownership of designs and innovations remains with
                  our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[var(--bg-app)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-heading">
              Ready to Initiate a Project Discussion?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              Let&apos;s evaluate your project requirements and determine how Earthschell can assist.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)]"
              >
                <span>Connect With Earthschell</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
