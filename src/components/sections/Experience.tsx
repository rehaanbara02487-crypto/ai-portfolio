"use client";

import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="TIMELINE"
      title="Experience"
      subtitle="Clean, recruiter-friendly timeline with premium visual depth."
    >
      <div className="grid gap-4">
        {site.experience.map((x, i) => (
          <Reveal key={x.role + x.company} delay={i * 0.06}>
            <div className="glow-border">
              <div className="glass rounded-3xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-sm font-semibold text-white">
                    {x.role} · <span className="text-white/75">{x.company}</span>
                  </div>
                  <div className="text-xs text-white/55 tracking-[0.18em]">
                    {x.period}
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  {x.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm leading-7 text-white/70"
                    >
                      <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[rgba(138,91,255,.9)] shadow-[0_0_18px_rgba(138,91,255,.55)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

