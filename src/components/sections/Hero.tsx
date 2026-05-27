"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DownloadResumeButton } from "@/components/ui/DownloadResumeButton";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

function useTypeOnce(text: string, speed = 26) {
  const [out, setOut] = useState("");

  useEffect(() => {
    if (!text) return;
    if (out === text) return;
    const t = window.setTimeout(() => {
      setOut(text.slice(0, out.length + 1));
    }, speed);
    return () => window.clearTimeout(t);
  }, [text, out, speed]);

  return out;
}

export function Hero() {
  const typing = useTypeOnce(site.hero.terminalLine, 22);
  const subtitle = useMemo(
    () => site.hero.description,
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero='reveal']",
        { y: 14, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.07,
          delay: 0.15,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28">
      <div className="absolute inset-0">
        <HeroScene />
        <div className="pointer-events-none absolute inset-0 animated-gradient opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6">
        <div className="mt-10 grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
          <div className="flex flex-col gap-6">
            <div data-hero="reveal" className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.04)] px-4 py-2 text-xs tracking-[0.22em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[rgba(138,91,255,.9)] shadow-[0_0_24px_rgba(138,91,255,.55)]" />
              PREMIUM AI ENGINEERING
            </div>

            <h1
              data-hero="reveal"
              className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl"
            >
              {site.title}
            </h1>

            <p data-hero="reveal" className="max-w-xl text-pretty text-base leading-7 text-[rgba(247,247,255,.72)] sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <div data-hero="reveal" className="flex items-center gap-2 text-sm text-white/70">
              <span className="font-mono text-[rgba(74,163,255,.85)]">$</span>
              <span className="font-mono">
                <span className="text-white">{typing}</span>
                <span className="ml-1 inline-block w-[10px] translate-y-[1px] bg-white/70" style={{ height: 14, animation: "blink 1s steps(2,end) infinite" }} />
              </span>
            </div>

            <div data-hero="reveal" className="mt-2 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#projects"
                variant="primary"
                onClick={() => {
                  const el = document.querySelector("#projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects <ArrowDown size={16} />
              </MagneticButton>
              <DownloadResumeButton />
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="glow-border"
            >
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white/90">
                    Availability
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.03)] px-3 py-1 text-xs text-white/70">
                    <span className="h-2 w-2 rounded-full bg-[rgba(74,163,255,.9)] shadow-[0_0_18px_rgba(74,163,255,.55)]" />
                    Open to roles & clients
                  </div>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.03)] p-4">
                    <div className="text-xs tracking-[0.18em] text-white/55">
                      LOCATION
                    </div>
                    <div className="mt-1 text-sm text-white/85">
                      {site.location}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.03)] p-4">
                    <div className="text-xs tracking-[0.18em] text-white/55">
                      SPECIALTY
                    </div>
                    <div className="mt-1 text-sm text-white/85">
                      LLM apps · Full‑stack · Security · Cloud
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.03)] p-4">
                    <div className="text-xs tracking-[0.18em] text-white/55">
                      EMAIL
                    </div>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block text-sm text-white/85 hover:text-white"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.04)] px-4 py-2 text-xs text-white/70 hover:text-white transition-colors"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to about section"
      >
        <span className="inline-flex items-center gap-2">
          Scroll <ArrowDown size={14} />
        </span>
      </a>

      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}

