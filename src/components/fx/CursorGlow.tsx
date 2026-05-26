"use client";

import { useEffect, useMemo, useRef } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
}

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const enabled = useMemo(() => !prefersReducedMotion(), []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    document.body.classList.add("cursor-hidden");
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("cursor-hidden");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[60] h-0 w-0"
      style={{ transform: "translate3d(-9999px,-9999px,0)" }}
    >
      <div
        className="absolute -left-10 -top-10 h-20 w-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(74,163,255,.28), rgba(138,91,255,.14) 45%, rgba(0,0,0,0) 70%)",
          filter: "blur(2px)",
          boxShadow:
            "0 0 40px rgba(74,163,255,.18), 0 0 80px rgba(138,91,255,.12)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute -left-2 -top-2 h-4 w-4 rounded-full"
        style={{
          background: "rgba(247,247,255,.85)",
          boxShadow:
            "0 0 18px rgba(74,163,255,.35), 0 0 30px rgba(138,91,255,.25)",
        }}
      />
    </div>
  );
}

