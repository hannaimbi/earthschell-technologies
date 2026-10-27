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
  { label: "Custom Engineering Solutions", href: "/services/custom-engineering" },
  {
    label: "Engineering & Manufacturing Coordination",
    href: "/services/engineering-manufacturing",
  },
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
    <footer className="border-t border-[#093C46] dark:border-[#1F3E46] bg-[#0A1C20] text-white transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Brand Column (Col 1-5) */}
          <div className="space-y-4 md:col-span-5">
            <EarthschellLogo variant="footer" priority={false} />
            <p className="max-w-md text-sm leading-relaxed text-[#D8E5DD]/85">
              Earthschell operates as an engineering solutions partner, helping
              businesses and innovators navigate product development, custom technical
              requirements, and manufacturing resource coordination.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#6F9584] hover:bg-[#7FA796] text-[#081D22] px-4 py-2 text-xs font-semibold shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Initiate a Project Discussion</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links (Col 6-7) */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#88B09F] font-heading">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#D8E5DD]/85">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links (Col 8-10) */}
          <div className="space-y-3 md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#88B09F] font-heading">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-[#D8E5DD]/85">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#88B09F]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Project Advisory Column (Col 11-12) */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#88B09F] font-heading">
              Enquiries
            </h3>
            <p className="text-xs leading-relaxed text-[#D8E5DD]/75">
              Have a technical requirement or product concept to explore?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#88B09F] hover:text-white transition-colors"
            >
              <span>Submit requirement</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#D8E5DD]/70 sm:flex-row">
          <p>© {currentYear} Earthschell. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
            >
              Terms and Conditions
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#88B09F]">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Engineering Solutions Partner</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
