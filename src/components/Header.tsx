"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Compass,
  Cpu,
  Layers,
  Car,
  Factory,
  Lightbulb,
  Building2,
  Briefcase,
} from "lucide-react";
import { EarthschellLogo } from "./EarthschellLogo";
import { ThemeToggle } from "./ThemeToggle";

const serviceItems = [
  {
    label: "All Services Overview",
    href: "/services",
    description: "Explore all engineering and coordination capabilities",
    icon: Briefcase,
  },
  {
    label: "Product Development",
    href: "/services/product-development",
    description: "Concept to functional prototype design and CAD modeling",
    icon: Compass,
  },
  {
    label: "Custom Engineering Solutions",
    href: "/services/custom-engineering",
    description: "Technical problem-solving for specialized challenges",
    icon: Cpu,
  },
  {
    label: "Engineering & Manufacturing",
    href: "/services/engineering-manufacturing",
    description: "Sourcing and coordinating with manufacturing partners",
    icon: Layers,
  },
];

const industryItems = [
  {
    label: "Automotive Systems",
    href: "/industries#automotive",
    description: "Component design & technical packaging",
    icon: Car,
  },
  {
    label: "Industrial & Manufacturing",
    href: "/industries#manufacturing",
    description: "Specialized machinery & tooling coordination",
    icon: Factory,
  },
  {
    label: "Product Innovation & Startups",
    href: "/industries#innovation",
    description: "Turning concepts into viable prototypes",
    icon: Lightbulb,
  },
  {
    label: "Technical & Engineering Services",
    href: "/industries#services",
    description: "Connecting challenges with specialist resources",
    icon: Building2,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menus when route changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Body scroll lock on mobile
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
        setServicesOpen(false);
        setIndustriesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth hover handlers with bridge delay to prevent accidental closure
  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
    setIndustriesOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesOpen(true);
    setServicesOpen(false);
  };

  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 150);
  };

  const isServicesActive = pathname.startsWith("/services");
  const isIndustriesActive = pathname.startsWith("/industries");
  const isCompanyActive = pathname === "/company" || pathname === "/about";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-main)] bg-[var(--bg-app)]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Brand Wordmark (Strictly 'Earthschell') */}
        <EarthschellLogo variant="header" priority={true} />

        {/* Desktop Navigation with Smooth Hover/Focus Dropdowns */}
        <nav
          className="hidden items-center gap-1 sm:gap-2 md:flex"
          aria-label="Primary navigation"
        >
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              onFocus={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
              className={`group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] ${
                isServicesActive
                  ? "text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] bg-[var(--bg-surface-muted)]"
                  : "text-[var(--text-main)] hover:bg-[var(--bg-surface-muted)]/70"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[var(--earth-sea-green)]" : "text-[var(--text-subtle)]"
                }`}
              />
            </button>

            {/* Services Dropdown Panel */}
            {servicesOpen && (
              <div
                className="absolute top-full left-0 z-50 mt-1 w-80 rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-2.5 shadow-lg animate-in fade-in slide-in-from-top-1 duration-150"
                role="menu"
                aria-label="Services menu"
              >
                <div className="space-y-1">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[var(--bg-surface-muted)]"
                        role="menuitem"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] group-hover:bg-[var(--earth-teal)] group-hover:text-white dark:group-hover:bg-[var(--earth-sea-green)] dark:group-hover:text-[#0E2024] transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[var(--text-main)] group-hover:text-[var(--earth-teal)] dark:group-hover:text-[var(--earth-sea-green)]">
                            {item.label}
                          </div>
                          <div className="text-[11px] leading-snug text-[var(--text-subtle)] line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleIndustriesEnter}
            onMouseLeave={handleIndustriesLeave}
          >
            <button
              type="button"
              onClick={() => setIndustriesOpen(!industriesOpen)}
              onFocus={() => setIndustriesOpen(true)}
              aria-expanded={industriesOpen}
              className={`group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] ${
                isIndustriesActive
                  ? "text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] bg-[var(--bg-surface-muted)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-muted)]/70"
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  industriesOpen ? "rotate-180 text-[var(--earth-sea-green)]" : "text-[var(--text-subtle)]"
                }`}
              />
            </button>

            {/* Industries Dropdown Panel */}
            {industriesOpen && (
              <div
                className="absolute top-full left-0 z-50 mt-1 w-80 rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-2.5 shadow-lg animate-in fade-in slide-in-from-top-1 duration-150"
                role="menu"
                aria-label="Industries menu"
              >
                <div className="space-y-1">
                  {industryItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIndustriesOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[var(--bg-surface-muted)]"
                        role="menuitem"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-surface-muted)] text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] group-hover:bg-[var(--earth-teal)] group-hover:text-white dark:group-hover:bg-[var(--earth-sea-green)] dark:group-hover:text-[#0E2024] transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[var(--text-main)] group-hover:text-[var(--earth-teal)] dark:group-hover:text-[var(--earth-sea-green)]">
                            {item.label}
                          </div>
                          <div className="text-[11px] leading-snug text-[var(--text-subtle)] line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Company Link */}
          <Link
            href="/company"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] ${
              isCompanyActive
                ? "text-[var(--earth-teal)] dark:text-[var(--earth-sea-green)] bg-[var(--bg-surface-muted)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-muted)]/50"
            }`}
          >
            Company
          </Link>
        </nav>

        {/* Desktop Theme Toggle & Primary Action */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-[var(--btn-primary-bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--btn-primary-text)] shadow-2xs transition-all hover:bg-[var(--btn-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-main)] bg-[var(--bg-surface)] p-2 text-[var(--text-main)] transition-colors hover:border-[var(--earth-sea-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Accordion Submenus */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-x-0 top-[53px] bottom-0 z-40 bg-[var(--bg-app)]/98 backdrop-blur-lg border-b border-[var(--border-main)] px-5 py-6 overflow-y-auto md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile menu navigation">
            {/* Services Accordion */}
            <div className="border-b border-[var(--border-main)] pb-3">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-[var(--text-main)]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 flex flex-col gap-1 pl-3">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg py-2 px-2 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-muted)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div className="border-b border-[var(--border-main)] pb-3">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex w-full items-center justify-between py-2 text-sm font-bold text-[var(--text-main)]"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileIndustriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileIndustriesOpen && (
                <div className="mt-2 flex flex-col gap-1 pl-3">
                  {industryItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg py-2 px-2 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-muted)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/company"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-bold text-[var(--text-main)]"
            >
              Company Information
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-bold text-[var(--text-main)]"
            >
              Contact
            </Link>

            {/* Action CTA */}
            <div className="pt-4 mt-2 border-t border-[var(--border-main)]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] py-3 text-center text-sm font-semibold text-[var(--btn-primary-text)] shadow-sm transition hover:bg-[var(--btn-primary-hover)]"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
