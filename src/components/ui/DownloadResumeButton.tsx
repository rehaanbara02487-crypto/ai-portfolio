"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Download } from "lucide-react";
import { site } from "@/content/site";

const RESUME_FILENAME = "Rehaan_Bara_Resume.pdf";

export function DownloadResumeButton() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  return (
    <motion.a
      href={site.resumePath}
      download={RESUME_FILENAME}
      target="_blank"
      rel="noopener noreferrer"
      title="Download Resume"
      aria-label="Download Resume"
      className="group/resume relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(74,163,255,.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * 0.16);
        y.set((e.clientY - (rect.top + rect.height / 2)) * 0.16);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(74,163,255,.55)] via-[rgba(138,91,255,.55)] to-[rgba(53,216,255,.45)] p-[1px] opacity-80 transition-opacity duration-300 group-hover/resume:opacity-100"
      />
      <span
        aria-hidden="true"
        className="absolute inset-[1px] rounded-full border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.06)] backdrop-blur-xl transition-[background,box-shadow] duration-300 group-hover/resume:bg-[rgba(255,255,255,.09)] group-hover/resume:shadow-[0_0_32px_rgba(74,163,255,.22),0_0_48px_rgba(138,91,255,.14)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 shadow-[0_0_40px_rgba(74,163,255,.35)] transition-opacity duration-300 group-hover/resume:opacity-100"
      />

      <span className="relative flex items-center gap-2">
        <span>Download Resume</span>
        <motion.span
          className="inline-flex"
          animate={{ y: [0, 2, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.4,
            ease: "easeInOut",
          }}
          whileHover={{ y: 4 }}
        >
          <Download
            size={16}
            className="transition-transform duration-300 group-hover/resume:translate-y-0.5 group-hover/resume:drop-shadow-[0_0_8px_rgba(74,163,255,.6)]"
            aria-hidden="true"
          />
        </motion.span>
      </span>
    </motion.a>
  );
}
