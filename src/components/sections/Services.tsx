"use client";

import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="SERVICES"
      title="Services"
      subtitle="High-value offerings with a premium SaaS feel — no fluff."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {site.services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group glow-border"
            >
              <div className="glass rounded-3xl p-6">
                <div className="text-sm font-semibold text-white">
                  {s.title}
                </div>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  {s.description}
                </p>
                <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-4 text-xs tracking-[0.18em] text-white/55">
                  PREMIUM DELIVERY · FAST ITERATION · PRODUCTION READY
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

