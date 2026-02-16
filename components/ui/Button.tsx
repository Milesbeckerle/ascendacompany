import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  ariaLabel?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const variantStyles = {
  primary:
    "border-orange-300/60 bg-gradient-to-r from-orange-400 to-rose-500 text-slate-950 shadow-[0_0_24px_rgba(251,146,60,0.35)] hover:scale-[1.02]",
  secondary: "border-white/20 bg-white/5 text-white hover:bg-white/10",
  ghost: "border-transparent bg-transparent text-white/80 hover:text-white",
};

export function Button({ children, href, className, variant = "primary", ariaLabel }: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
