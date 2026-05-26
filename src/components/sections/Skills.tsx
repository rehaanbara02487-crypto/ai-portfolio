"use client";

import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="STACK"
      title="AI Skills & Tech Stack"
      subtitle="Interactive cards with glow lighting and depth — optimized for clarity."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.skills.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group glow-border"
            >
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">
                    {cat.category}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[rgba(74,163,255,.85)] shadow-[0_0_22px_rgba(74,163,255,.55)] opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.03)] px-3 py-1 text-xs text-white/75 group-hover:text-white/85 transition-colors"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

