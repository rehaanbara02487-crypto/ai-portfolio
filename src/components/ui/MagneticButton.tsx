"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
}>;

export function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  download,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-[transform,background,box-shadow,border-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(74,163,255,.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90 shadow-[0_18px_60px_rgba(74,163,255,.12)]"
      : "glass text-white hover:border-white/25 border border-[rgba(255,255,255,.14)]";

  const Comp: any = href ? motion.a : motion.button;
  const props: any = href
    ? { href, target, rel, download }
    : { type: "button", onClick };

  return (
    <Comp
      {...props}
      className={`${base} ${styles} ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(dx * 0.18);
        y.set(dy * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Comp>
  );
}

