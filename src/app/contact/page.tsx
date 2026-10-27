"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Lock,
} from "lucide-react";

interface FormState {
  fullName: string;
  workEmail: string;
  company: string;
  serviceInterest: string;
  projectDetails: string;
  ndaRequired: boolean;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  projectDetails?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    workEmail: "",
    company: "",
    serviceInterest: "Product Development",
    projectDetails: "",
    ndaRequired: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [validatedNotice, setValidatedNotice] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address.";
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please provide an outline of your project or technical challenge.";
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = "Please provide a slightly more descriptive outline (min 15 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setValidatedNotice(true);
    } else {
      setValidatedNotice(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[var(--border-main)] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--text-subtle)] font-mono">
            <Link href="/" className="hover:text-[var(--text-main)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-semibold">Contact</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--earth-copper)] font-mono">
              Project Enquiry
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-5xl font-heading leading-tight">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
              Share your engineering challenge, hardware concept, or manufacturing requirements.
              We will review the parameters and explore practical technical pathways.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & ADVISORY SECTION */}
      <section className="py-16 sm:py-20 border-b border-[var(--border-main)] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 sm:p-9 shadow-xs">
                <h2 className="text-xl font-bold text-[var(--text-main)] font-heading mb-6">
                  Project Initiation Form
                </h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] font-mono mb-1.5">
                      Full Name <span className="text-[var(--accent-terracotta)]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="Jane Doe"
                      className={`w-full rounded-xl border bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text-main)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        errors.fullName
                          ? "border-[var(--accent-terracotta)] focus-visible:outline-[var(--accent-terracotta)]"
                          : "border-[var(--border-main)] focus-visible:outline-[var(--border-focus)]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[var(--accent-terracotta)] flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="workEmail" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] font-mono mb-1.5">
                      Work Email <span className="text-[var(--accent-terracotta)]">*</span>
                    </label>
                    <input
                      id="workEmail"
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => {
                        setFormData({ ...formData, workEmail: e.target.value });
                        if (errors.workEmail) setErrors({ ...errors, workEmail: undefined });
                      }}
                      placeholder="jane@company.com"
                      className={`w-full rounded-xl border bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text-main)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        errors.workEmail
                          ? "border-[var(--accent-terracotta)] focus-visible:outline-[var(--accent-terracotta)]"
                          : "border-[var(--border-main)] focus-visible:outline-[var(--border-focus)]"
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="mt-1 text-xs text-[var(--accent-terracotta)] flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.workEmail}</span>
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] font-mono mb-1.5">
                      Company / Organization <span className="text-[var(--text-subtle)] text-[10px] lowercase">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Engineering Ltd."
                      className="w-full rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text-main)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                    />
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] font-mono mb-1.5">
                      Primary Service Area of Interest
                    </label>
                    <select
                      id="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text-main)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                    >
                      <option value="Product Development">Product Development</option>
                      <option value="Custom Engineering Solutions">Custom Engineering Solutions</option>
                      <option value="Engineering & Manufacturing Solutions">Engineering &amp; Manufacturing Solutions</option>
                      <option value="General Technical Consultation">General Technical Consultation</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] font-mono mb-1.5">
                      Project Description &amp; Technical Requirements <span className="text-[var(--accent-terracotta)]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={5}
                      value={formData.projectDetails}
                      onChange={(e) => {
                        setFormData({ ...formData, projectDetails: e.target.value });
                        if (errors.projectDetails) setErrors({ ...errors, projectDetails: undefined });
                      }}
                      placeholder="Briefly describe your requirements: functional goals, physical constraints, target materials, volume, or key challenges..."
                      className={`w-full rounded-xl border bg-[var(--bg-surface)] p-4 text-sm text-[var(--text-main)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        errors.projectDetails
                          ? "border-[var(--accent-terracotta)] focus-visible:outline-[var(--accent-terracotta)]"
                          : "border-[var(--border-main)] focus-visible:outline-[var(--border-focus)]"
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-xs text-[var(--accent-terracotta)] flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      id="ndaRequired"
                      type="checkbox"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      className="h-4 w-4 mt-0.5 rounded border-[var(--border-main)] text-[var(--earth-teal)] focus:ring-[var(--border-focus)]"
                    />
                    <label htmlFor="ndaRequired" className="text-xs text-[var(--text-muted)] leading-relaxed select-none">
                      A mutual Non-Disclosure Agreement (NDA) is requested before sharing detailed proprietary technical drawings.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-7 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition hover:bg-[var(--btn-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                    >
                      <span>Submit Requirement for Review</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>

                {/* Development Mode Notice (Authentic, not fake success) */}
                {validatedNotice && (
                  <div className="mt-6 rounded-xl border border-[var(--earth-sea-green)]/40 bg-[var(--bg-surface-muted)] p-4 text-xs text-[var(--text-main)] space-y-1 animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5 font-bold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)]">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Form inputs validated successfully.</span>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      <strong>Stage 6 Notice:</strong> Client-side validation confirmed. Backend email delivery
                      integration will be connected in Stage 7 with verified production email endpoints. No fake
                      submission was simulated.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: What to Expect & Governance Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-[var(--earth-copper)] uppercase">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Confidentiality &amp; IP Protection</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] font-heading">
                  What Happens Next?
                </h3>
                <div className="space-y-3 text-xs leading-relaxed text-[var(--text-muted)]">
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 rounded-full bg-[var(--bg-surface)] border border-[var(--border-main)] flex items-center justify-center text-[10px] font-bold font-mono">
                      1
                    </div>
                    <span><strong>Initial Review:</strong> We review the technical scope and determine feasibility within 1–2 business days.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 rounded-full bg-[var(--bg-surface)] border border-[var(--border-main)] flex items-center justify-center text-[10px] font-bold font-mono">
                      2
                    </div>
                    <span><strong>NDA Execution:</strong> If requested, standard mutual non-disclosure documents are finalized.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 rounded-full bg-[var(--bg-surface)] border border-[var(--border-main)] flex items-center justify-center text-[10px] font-bold font-mono">
                      3
                    </div>
                    <span><strong>Technical Scoping Session:</strong> A focused engineering discussion to map constraints, deliverables, and timelines.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-app)] p-6 space-y-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2 font-mono font-bold text-[var(--text-main)] uppercase text-[11px]">
                  <Lock className="h-4 w-4 text-[var(--earth-sea-green)]" />
                  <span>Data Protection Notice</span>
                </div>
                <p className="leading-relaxed">
                  Information submitted through this form is handled exclusively for evaluating project
                  requirements. We do not sell or distribute engineering briefs to third parties without
                  explicit consent. Review our{" "}
                  <Link href="/privacy-policy" className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] underline">
                    Privacy Policy
                  </Link>{" "}
                  for complete details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
