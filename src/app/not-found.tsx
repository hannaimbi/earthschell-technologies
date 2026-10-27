import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Earthschell",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 py-20">
      {/* Animated 3D Shell / Orbiting Rings Composition */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 mb-10">
        {/* Outer pulse ring */}
        <div className="absolute inset-0 rounded-full border border-[var(--border-main)] animate-pulse-ring" />

        {/* Orbiting ring 1 — slow orbit */}
        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full animate-schematic-spin"
          style={{ animationDuration: "30s", transformOrigin: "150px 150px" }}
          aria-hidden="true"
        >
          <ellipse
            cx="150"
            cy="150"
            rx="130"
            ry="50"
            fill="none"
            stroke="var(--earth-teal)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            opacity="0.3"
            className="dark:stroke-[var(--earth-sea-green)]"
          />
        </svg>

        {/* Orbiting ring 2 — tilted, reverse */}
        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full"
          style={{
            animation: "schematic-spin 22s linear infinite reverse",
            transformOrigin: "150px 150px",
            transform: "rotateX(60deg) rotateZ(30deg)",
          }}
          aria-hidden="true"
        >
          <ellipse
            cx="150"
            cy="150"
            rx="110"
            ry="45"
            fill="none"
            stroke="var(--earth-sea-green)"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.25"
          />
          <circle cx="260" cy="150" r="3" fill="var(--earth-copper)" opacity="0.7" />
        </svg>

        {/* Orbiting ring 3 — opposite tilt */}
        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full"
          style={{
            animation: "schematic-spin 35s linear infinite",
            transformOrigin: "150px 150px",
            transform: "rotateX(70deg) rotateZ(-45deg)",
          }}
          aria-hidden="true"
        >
          <ellipse
            cx="150"
            cy="150"
            rx="100"
            ry="40"
            fill="none"
            stroke="var(--earth-copper)"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            opacity="0.2"
          />
          <circle cx="50" cy="150" r="2.5" fill="var(--earth-sea-green)" opacity="0.6" />
        </svg>

        {/* Center shell form */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative animate-float">
            <svg
              viewBox="0 0 160 160"
              className="w-28 h-28 sm:w-32 sm:h-32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Layered geometric shell */}
              <circle
                cx="80"
                cy="80"
                r="55"
                stroke="var(--earth-teal)"
                strokeWidth="2"
                fill="none"
                opacity="0.15"
                className="dark:stroke-[var(--earth-sea-green)]"
              />
              <circle
                cx="80"
                cy="80"
                r="40"
                stroke="var(--earth-sea-green)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.25"
              />
              <circle
                cx="80"
                cy="80"
                r="25"
                fill="var(--bg-surface-muted)"
                stroke="var(--earth-teal)"
                strokeWidth="2"
                className="dark:stroke-[var(--earth-sea-green)]"
              />
              {/* Inner shell wave motif */}
              <path
                d="M65 85 Q72 72 80 85 Q88 98 95 85"
                stroke="var(--earth-sea-green)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M60 80 Q70 68 80 80 Q90 92 100 80"
                stroke="var(--earth-teal)"
                strokeWidth="1.2"
                fill="none"
                opacity="0.35"
                className="dark:stroke-[var(--earth-sea-green)]"
              />
              {/* Small dot node at center */}
              <circle cx="80" cy="80" r="4" fill="var(--earth-copper)" opacity="0.7" />
            </svg>
          </div>
        </div>

        {/* 404 indicator - positioned below center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="font-mono text-xs font-bold text-[var(--earth-copper)] bg-[var(--bg-surface)] border border-[var(--border-main)] px-3 py-1 rounded-full shadow-sm">
            ERR 404
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="text-center max-w-lg space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-main)] font-heading tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] shadow-xs transition-all hover:bg-[var(--btn-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
          >
            <span>Back to Home</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-main)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-main)] shadow-2xs transition hover:bg-[var(--bg-surface-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
          >
            <Mail className="h-4 w-4" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>

      {/* Technical footer */}
      <div className="mt-12 text-center">
        <p className="text-[11px] font-mono text-[var(--text-subtle)]">
          STATUS 404 • RESOURCE NOT FOUND • EARTHSCHELL
        </p>
      </div>
    </div>
  );
}
