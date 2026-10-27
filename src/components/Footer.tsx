"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react";
import { EarthschellLogo } from "./EarthschellLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Product Development", href: "/services/product-development" },
  { label: "Custom Engineering", href: "/services/custom-engineering" },
  {
    label: "Engineering & Manufacturing",
    href: "/services/engineering-manufacturing",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

function subscribe() {
  return () => {};
}
function getSnapshot() {
  return new Date().getFullYear();
}
function getServerSnapshot() {
  return 2026;
}

export function Footer() {
  const currentYear = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <footer className="border-t transition-colors"
      style={{
        borderColor: "var(--footer-border)",
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-text)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Brand Column (Col 1-5) */}
          <div className="space-y-4 md:col-span-5">
            <EarthschellLogo variant="footer" priority={false} />
            <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--footer-text-muted)" }}>
              Earthschell operates as an engineering solutions partner, helping
              businesses and innovators navigate product development, custom technical
              requirements, and manufacturing resource coordination.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                style={{
                  backgroundColor: "var(--footer-cta-bg)",
                  color: "var(--footer-cta-text)",
                }}
              >
                <span>Initiate a Project Discussion</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links (Col 6-7) */}
          <div className="space-y-3 md:col-span-2">
            <h3
              className="text-xs font-semibold uppercase tracking-wider font-heading"
              style={{ color: "var(--footer-heading)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--footer-text-muted)" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                    style={{ color: "inherit" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--footer-link-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links (Col 8-10) */}
          <div className="space-y-3 md:col-span-3">
            <h3
              className="text-xs font-semibold uppercase tracking-wider font-heading"
              style={{ color: "var(--footer-heading)" }}
            >
              Services
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--footer-text-muted)" }}>
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1 transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                    style={{ color: "inherit" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--footer-link-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" style={{ color: "var(--footer-heading)" }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Project Advisory Column (Col 11-12) */}
          <div className="space-y-3 md:col-span-2">
            <h3
              className="text-xs font-semibold uppercase tracking-wider font-heading"
              style={{ color: "var(--footer-heading)" }}
            >
              Enquiries
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: "var(--footer-text-muted)", opacity: 0.85 }}>
              Have a technical requirement or product concept to explore?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
              style={{ color: "var(--footer-heading)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--footer-link-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--footer-heading)")}
            >
              <span>Submit requirement</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row"
          style={{ borderColor: "var(--footer-border)", color: "var(--footer-text-muted)", opacity: 0.8 }}
        >
          <p>© {currentYear} Earthschell. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
                style={{ color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--footer-link-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                {link.label}
              </Link>
            ))}
            <span className="hidden sm:inline-flex items-center gap-1" style={{ color: "var(--footer-heading)" }}>
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Engineering Solutions Partner</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
