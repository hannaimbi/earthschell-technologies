import type { Metadata } from "next";
import Link from "next/link";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Earthschell",
  description:
    "Earthschell draft terms and conditions governing website use, intellectual property, service inquiries, and general legal provisions.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-[var(--border-main)] py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--text-subtle)] font-mono">
            <Link href="/" className="hover:text-[var(--text-main)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-semibold">Terms and Conditions</span>
          </nav>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] font-mono uppercase">
              <Scale className="h-3.5 w-3.5" />
              <span>Draft Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] font-heading">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs font-mono text-[var(--text-subtle)]">
              Draft Version — Dated 24 October 2026 • Subject to company and legal counsel validation before publication
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10 text-sm leading-relaxed text-[var(--text-muted)]">
          {/* Note on draft status */}
          <div className="rounded-xl border border-[var(--earth-copper-border)] bg-[var(--earth-copper-subtle)]/70 p-4 text-xs text-[var(--text-main)] space-y-1">
            <strong>Legal Review Notice:</strong> This document is a preliminary operational draft outlining the terms
            of website use and project communication with Earthschell. Placeholders are explicitly denoted where formal
            statutory references, registered legal jurisdiction, and corporate registration details require final review.
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and navigating this website, you agree to comply with and be bound by these Terms and
              Conditions, along with our <Link href="/privacy-policy" className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] underline">Privacy Policy</Link>.
              If you do not agree with any portion of these terms, please refrain from using our website and services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              2. Permitted Website Use
            </h2>
            <p>
              This website is provided for informational and initial business communication purposes. Visitors may view
              content, read service capabilities, review industry scopes, and submit non-binding engineering inquiries.
              You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Use the site in any manner that disrupts, disables, or impairs website infrastructure or availability.</li>
              <li>Attempt unauthorized access to any system, server, or contact submission records.</li>
              <li>Transmit unsolicited advertising, spam, or malicious software through the contact forms.</li>
              <li>Scrape or reproduce technical copy, branding elements, or visual diagrams without prior written consent.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              3. Nature of Service Inquiries &amp; Non-Binding Estimates
            </h2>
            <p>
              Information published on this website regarding product development, custom engineering, or manufacturing
              coordination is descriptive and intended to illustrate technical capabilities. Submitting an inquiry through
              our contact form does not create an attorney-client, agency, partnership, or binding engineering services
              contract.
            </p>
            <p>
              All formal project scopes, deliverable schedules, milestone definitions, fees, warranties, and intellectual
              property assignments are established exclusively through signed, mutual Statements of Work (SOW) and
              formal engineering contracts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              4. Intellectual Property &amp; Website Content
            </h2>
            <p>
              All trademarks, the official Earthschell name, logos, website layout, diagrams, text, and source code are the
              exclusive intellectual property of Earthschell or its licensors and are protected under applicable intellectual
              property laws.
            </p>
            <p>
              Client-owned intellectual property, technical drawings, CAD assemblies, and confidential specifications
              shared during project scoping remain the sole and exclusive property of the respective client, subject to the
              terms of applicable Non-Disclosure Agreements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              5. Accuracy of Technical Information &amp; Disclaimer
            </h2>
            <p>
              While Earthschell strives to keep the information on this website accurate and up to date, all website
              content is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express
              or implied. Engineering specifications and feasibility depend on specific operating parameters and must be
              verified on an individual project basis.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Earthschell and its directors, employees, or technical
              advisors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
              arising out of your access to, or use of, the website content or any transmission errors in online submissions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              7. Governing Law &amp; Jurisdiction [Placeholder]
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction
              designated in final corporate filings, without regard to conflict of law principles.
            </p>
            <p className="text-xs bg-[var(--bg-app)] p-4 rounded-xl border border-[var(--border-main)] font-mono">
              [GOVERNING JURISDICTION AND APPLICABLE COURT DESIGNATION PENDING LEGAL REVIEW]<br />
              [DISPUTE RESOLUTION FORUM / ARBITRATION CLAUSE PENDING FINAL LEGAL SIGN-OFF]
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-main)] font-heading">
              8. Contact &amp; Legal Inquiries
            </h2>
            <p>
              For questions regarding these Terms &amp; Conditions or to request formal corporate documentation, please
              reach our team through our{" "}
              <Link href="/contact" className="text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] underline">
                contact page
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
