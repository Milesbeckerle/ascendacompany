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
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f1a] active:scale-[0.98]";

const variantStyles = {
  primary:
    "border-orange-300/60 bg-[#120f1f] text-orange-50 shadow-[0_0_28px_rgba(251,146,60,0.25)] hover:scale-[1.02]",
  secondary:
    "border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:scale-[1.01]",
  ghost: "border-transparent bg-transparent text-white/80 hover:text-white",
};

function ButtonInner({ children, primary }: { children: ReactNode; primary: boolean }) {
  if (!primary) return <span className="relative z-10">{children}</span>;

  return (
    <>
      <span className="pointer-events-none absolute inset-0 -z-0 bg-[linear-gradient(120deg,rgba(251,146,60,0.95),rgba(244,63,94,0.85),rgba(168,85,247,0.9))] bg-[length:200%_200%] transition-all duration-500 group-hover:animate-[gradientShift_2s_linear_infinite]" />
      <span className="pointer-events-none absolute inset-[1px] -z-0 rounded-full bg-[#120f1f] opacity-10" />
      <span className="relative z-10 drop-shadow-[0_0_12px_rgba(251,146,60,0.4)]">{children}</span>
    </>
  );
}

export function Button({ children, href, className, variant = "primary", ariaLabel }: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);
  const isPrimary = variant === "primary";

  if (href) {
    return (
      <Link href={href} className={styles} aria-label={ariaLabel}>
        <ButtonInner primary={isPrimary}>{children}</ButtonInner>
      </Link>
    );
  }

  return (
    <button className={styles} aria-label={ariaLabel}>
      <ButtonInner primary={isPrimary}>{children}</ButtonInner>
    </button>
  );
}
