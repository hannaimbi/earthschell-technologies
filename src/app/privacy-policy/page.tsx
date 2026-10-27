import type { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Earthschell",
  description:
    "Earthschell draft privacy policy outlining data handling practices, enquiry processing, and user rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-[var(--border-main)] py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--text-subtle)] font-mono">
            <Link href="/" className="hover:text-[var(--text-main)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-semibold">Privacy Policy</span>
          </nav>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono uppercase">
              <Shield className="h-3.5 w-3.5" />
              <span>Draft Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] font-heading">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-[var(--text-subtle)]">
              Draft Version — Dated 24 October 2026 • Subject to final company and legal review before publication
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10 text-sm leading-relaxed text-[var(--text-muted)]">
          {/* Note on draft status */}
          <div className="rounded-xl border border-[var(--earth-copper-border)] bg-[var(--earth-copper-subtle)]/70 p-4 text-xs text-[var(--text-main)] space-y-1">
            <strong>Legal Review Notice:</strong> This document represents an initial operational draft of the
            privacy practices for Earthschell. Placeholders are indicated where corporate registration details,
            specific legal entity designations, and designated data officers remain pending final validation.
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              1. Introduction &amp; Scope
            </h2>
            <p>
              This Privacy Policy explains how Earthschell (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects,
              uses, and protects personal and technical information submitted by visitors through our website.
              We are committed to processing data responsibly and respecting the confidentiality of your project
              inquiries and engineering specifications.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              2. Information Submitted Through the Contact Form
            </h2>
            <p>
              When initiating a project discussion or inquiry through our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Contact Information:</strong> Full name and work email address.</li>
              <li><strong>Organizational Details:</strong> Company or organization name (optional).</li>
              <li><strong>Project Details:</strong> Service of interest, engineering constraints, project descriptions, and technical drawings provided.</li>
              <li><strong>Confidentiality Preferences:</strong> Requests for Non-Disclosure Agreements (NDAs).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              3. Purpose of Processing
            </h2>
            <p>
              We process information solely for legitimate business purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Reviewing technical scope, feasibility, and required competencies for potential engagements.</li>
              <li>Responding directly to inquiries and scheduling engineering consultation discussions.</li>
              <li>Executing mutual Non-Disclosure Agreements before proprietary data exchange.</li>
              <li>Coordinating with specialist technical partners strictly where approved by the client.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              4. Cookies, Analytics &amp; Tracking
            </h2>
            <p>
              Our website uses local client storage exclusively for remembering user theme preferences (light
              or dark theme). We do not deploy third-party advertising trackers or invasive profiling tools.
              Any future implementation of privacy-friendly aggregate analytics will be updated in this policy.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              5. Data Sharing &amp; Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. Project data and technical inquiries
              are shared with external manufacturing partners or engineering specialists only when:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Explicitly agreed upon during the project scoping process.</li>
              <li>Covered by enforceable confidentiality commitments or NDAs.</li>
              <li>Required by applicable legal or statutory obligations.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              6. Data Retention &amp; Security
            </h2>
            <p>
              Project inquiries that do not proceed to an active engagement are retained only as long as necessary
              to complete the initial scoping discussion, after which they may be archived or deleted. We maintain
              appropriate administrative and technical safeguards to prevent unauthorized access or disclosure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              7. User Rights &amp; Inquiries
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections,
              or ask for its deletion. To submit a request, contact our advisory team through the website{" "}
              <Link href="/contact" className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] underline">
                contact form
              </Link>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              8. Legal Entity Details [Placeholder]
            </h2>
            <p className="text-xs bg-[var(--bg-app)] p-4 rounded-xl border border-[var(--border-main)] font-mono">
              [CONFIRMED CORPORATE ENTITY NAME PENDING]<br />
              [REGISTERED OFFICE ADDRESS PENDING FINAL PUBLICATION]<br />
              [DESIGNATED PRIVACY CONTACT EMAIL PENDING]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
