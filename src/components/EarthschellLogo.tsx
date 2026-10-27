import Image from "next/image";
import Link from "next/link";

interface EarthschellLogoProps {
  variant?: "header" | "footer" | "hero" | "compact";
  showText?: boolean;
  priority?: boolean;
  className?: string;
  forceDark?: boolean;
}

export function EarthschellLogo({
  variant = "header",
  showText = true,
  priority = false,
  className = "",
  forceDark = false,
}: EarthschellLogoProps) {
  // Proportions: Original logo is 1536 x 1024 (exact 3:2 ratio).
  // Increased desktop sizes for better visibility
  const heightClasses = {
    compact: "h-7 sm:h-8",
    header: "h-10 sm:h-11 lg:h-12",
    footer: "h-9 sm:h-10",
    hero: "h-14 sm:h-16",
  }[variant];

  const isFooter = variant === "footer" || forceDark;

  // Text sizing per variant
  const textSizeClasses = {
    compact: "text-sm sm:text-base",
    header: "text-base sm:text-lg lg:text-xl",
    footer: "text-base sm:text-lg",
    hero: "text-2xl sm:text-3xl",
  }[variant];

  return (
    <Link
      href="/"
      aria-label="Earthschell Home"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] rounded-lg ${className}`}
    >
      {/* 
        Native Transparent Logo Integration:
        - Light mode: /logo-light.png (pristine transparent background, authentic teal/cyan)
        - Dark mode & Footer: /logo-dark.png (pristine transparent background, high-contrast white & soft cyan)
        - Zero awkward background tiles or mismatched boxes!
      */}
      <div className="relative flex items-center justify-center">
        {isFooter ? (
          /* Footer is always deep teal, so always use the light/white logo variant */
          <Image
            src="/logo-dark.png"
            alt="Earthschell logo"
            width={150}
            height={100}
            priority={priority}
            className={`${heightClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
          />
        ) : (
          /* Header & general layout: CSS-driven instant theme switching without layout shift */
          <>
            <Image
              src="/logo-light.png"
              alt="Earthschell logo"
              width={150}
              height={100}
              priority={priority}
              className={`${heightClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] dark:hidden`}
            />
            <Image
              src="/logo-dark.png"
              alt="Earthschell logo"
              width={150}
              height={100}
              priority={priority}
              className={`${heightClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] hidden dark:block`}
            />
          </>
        )}
      </div>

      {showText && (
        <span
          className={`${textSizeClasses} tracking-[0.25em] uppercase font-light transition-colors`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span
            className={
              isFooter
                ? "text-white"
                : "text-[var(--earth-teal)] dark:text-[#E0EFEA]"
            }
          >
            Earth
          </span>
          <span
            className={
              isFooter
                ? "text-[#88C8D8]"
                : "text-[#3DA5B5] dark:text-[#6FC8D8]"
            }
          >
            schell
          </span>
        </span>
      )}
    </Link>
  );
}
