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
  const heightClasses = {
    compact: "h-7 sm:h-8",
    header: "h-8 sm:h-9",
    footer: "h-9 sm:h-10",
    hero: "h-14 sm:h-16",
  }[variant];

  const isFooter = variant === "footer" || forceDark;

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
          className={`font-heading font-bold text-lg sm:text-xl tracking-tight transition-colors ${
            isFooter
              ? "text-white"
              : "text-[var(--earth-teal)] dark:text-[var(--text-main)]"
          }`}
        >
          Earthschell
        </span>
      )}
    </Link>
  );
}
