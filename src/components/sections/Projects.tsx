"use client";

import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

type Project = (typeof site.projects)[number];

function AutomationPreview() {
  return (
    <div className="relative h-20 overflow-hidden rounded-2xl border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.03)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(74,163,255,.18)] to-[rgba(138,91,255,.14)]" />
      <motion.div
        className="absolute top-4 h-2 w-2 rounded-full bg-[rgba(74,163,255,.95)] shadow-[0_0_16px_rgba(74,163,255,.7)]"
        animate={{ x: [10, 120, 210], y: [6, 16, 8] }}
        transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-8 top-9 h-px w-40 bg-gradient-to-r from-transparent via-white/45 to-transparent"
        animate={{ opacity: [0.35, 0.9, 0.35] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      />
      <div className="absolute bottom-3 right-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[rgba(74,163,255,.9)] shadow-[0_0_14px_rgba(74,163,255,.7)]" />
        <span className="h-2 w-2 rounded-full bg-[rgba(138,91,255,.9)] shadow-[0_0_14px_rgba(138,91,255,.7)]" />
        <span className="h-2 w-2 rounded-full bg-[rgba(53,216,255,.9)] shadow-[0_0_14px_rgba(53,216,255,.7)]" />
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="relative h-20 overflow-hidden rounded-2xl border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.03)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(138,91,255,.15)] to-[rgba(74,163,255,.12)]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-10 w-5 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[rgba(255,255,255,.20)] bg-[rgba(255,255,255,.08)]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(74,163,255,.9)] shadow-[0_0_18px_rgba(74,163,255,.7)]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.2 }}
      />
    </div>
  );
}

function TradingPreview() {
  return (
    <div className="relative h-20 overflow-hidden rounded-2xl border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.03)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(74,163,255,.15)] to-[rgba(138,91,255,.12)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M0,58 C25,44 42,49 64,35 C90,18 112,26 136,34 C160,42 184,24 208,28 C232,31 252,20 300,10"
          fill="none"
          stroke="rgba(74,163,255,.88)"
          strokeWidth="2.1"
          strokeLinecap="round"
          initial={{ pathLength: 0.25, opacity: 0.4 }}
          animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.4, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className="absolute right-6 top-2 h-16 w-16 rounded-full"
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.92, 1.08, 0.92] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(74,163,255,.4) 0%, rgba(74,163,255,0) 65%)",
        }}
      />
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  launchLabel,
  theme,
}: Project & { demo?: string; launchLabel?: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 24 });
  const sy = useSpring(my, { stiffness: 180, damping: 24 });

  return (
    <motion.div
      className="group glow-border"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        mx.set(x * 10);
        my.set(y * 10);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="glass rounded-3xl p-6 md:p-7"
        style={{ rotateX: sy, rotateY: sx }}
      >
        <div className="flex items-start justify-between gap-5">
          <div className="space-y-2">
            <div className="text-base font-semibold tracking-tight text-white">
              {title}
            </div>
            <p className="text-sm leading-7 text-white/72">{description}</p>
          </div>
          <div className="hidden h-14 w-14 shrink-0 rounded-2xl border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.04)] sm:block">
            <div className="h-full w-full rounded-2xl animated-gradient opacity-70" />
          </div>
        </div>

        <div className="mt-5">
          {theme === "trading" ? <TradingPreview /> : theme === "mobile" ? <MobilePreview /> : <AutomationPreview />}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.03)] px-3 py-1 text-xs text-white/75"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/launch relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(74,163,255,.75)] via-[rgba(138,91,255,.75)] to-[rgba(53,216,255,.7)] p-[1px]" />
              <span className="absolute inset-[1px] rounded-full bg-[rgba(8,10,20,.95)]" />
              <span className="relative flex items-center gap-2">
                <ExternalLink size={14} />
                {launchLabel ?? "Launch Product"}
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,.06),0_0_26px_rgba(74,163,255,.35),0_0_42px_rgba(138,91,255,.22)] opacity-70 transition-opacity duration-300 group-hover/launch:opacity-100" />
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.03)] px-4 py-2.5 text-xs text-white/78 transition-all duration-300 hover:scale-[1.03] hover:text-white hover:border-[rgba(74,163,255,.45)] hover:shadow-[0_0_24px_rgba(74,163,255,.2)]"
          >
            <GithubIcon size={15} /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="WORK"
      title="Featured Projects"
      subtitle="Live, deployed AI products with cinematic interactions and premium launch-ready presentation."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {site.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

