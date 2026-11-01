"use client";

import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT"
      title="About Me"
      subtitle="Professional, focused, and built for impact."
    >
      <div className="grid gap-6 md:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <div className="glow-border">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.06)]">
                  <div className="absolute inset-0 animated-gradient opacity-80" />
                  <div className="absolute inset-0 bg-black/35" />
                  <span className="relative z-10 text-sm font-semibold tracking-tight text-white">
                    {site.name
                      .split(" ")
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((s) => s[0]?.toUpperCase())
                      .join("") || "AI"}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {site.name}
                  </div>
                  <div className="text-xs text-white/60">{site.tagline}</div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
                {site.about.body.split("\n\n").map((p) => (
                  <span key={p} className="block">
                    {p}
                    <span className="block h-3" />
                  </span>
                ))}
              </p>

              <div className="mt-6 grid gap-3">
                {site.about.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-2xl border border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.03)] px-4 py-3 text-sm text-white/80"
                  >
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4">
            <div className="glass glow-border rounded-3xl p-6">
              <div className="text-xs tracking-[0.22em] text-white/55">
                PRINCIPLES
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["Practical Solutions", "Real-world problem solving."],
                  ["Production-first", "Evals, monitoring, and reliability."],
                  ["Code Quality", "Clean architecture and maintainability."],
                  ["Performance budgets", "Fast loads, smooth interactions."],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.03)] p-4"
                  >
                    <div className="text-sm font-semibold text-white/90">
                      {t}
                    </div>
                    <div className="mt-1 text-sm text-white/65">{d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.02)] p-6">
              <div className="text-xs tracking-[0.22em] text-white/55">
                SIGNAL
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Agents",
                  "RAG",
                  "Evals",
                  "Guardrails",
                  "Observability",
                  "Cost control",
                  "Three.js",
                  "Motion",
                  "Next.js",
                  "AWS",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.03)] px-3 py-1 text-xs text-white/75"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

