"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="Let’s build something premium."
      subtitle="Tell me what you’re shipping. I’ll reply with a crisp plan + timeline."
    >
      <div className="grid gap-6 md:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <div className="glow-border">
            <div className="glass rounded-3xl p-6">
              <form
                className="grid gap-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus("sending");
                  const form = new FormData(e.currentTarget as HTMLFormElement);
                  const payload = {
                    name: String(form.get("name") || ""),
                    email: String(form.get("email") || ""),
                    message: String(form.get("message") || ""),
                  };

                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });
                    if (!res.ok) throw new Error("Failed");
                    setStatus("sent");
                    setMessage("Received. I’ll reply shortly.");
                    (e.currentTarget as HTMLFormElement).reset();
                  } catch {
                    setStatus("error");
                    setMessage("Something went wrong. Please email me directly.");
                  }
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs tracking-[0.18em] text-white/55">
                      NAME
                    </span>
                    <input
                      required
                      name="name"
                      className="h-11 rounded-2xl border border-[rgba(255,255,255,.14)] bg-[rgba(0,0,0,.25)] px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[rgba(74,163,255,.35)]"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs tracking-[0.18em] text-white/55">
                      EMAIL
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="h-11 rounded-2xl border border-[rgba(255,255,255,.14)] bg-[rgba(0,0,0,.25)] px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[rgba(74,163,255,.35)]"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs tracking-[0.18em] text-white/55">
                    MESSAGE
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="rounded-2xl border border-[rgba(255,255,255,.14)] bg-[rgba(0,0,0,.25)] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[rgba(74,163,255,.35)]"
                    placeholder="What are you building? What’s the timeline?"
                  />
                </label>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm text-white/65">
                    Or email:{" "}
                    <a className="text-white hover:underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                  <MagneticButton variant="primary" className="min-w-[170px]">
                    {status === "sending" ? "Sending..." : "Send Message"}{" "}
                    <Send size={16} />
                  </MagneticButton>
                </div>

                {message ? (
                  <div
                    className={[
                      "mt-2 rounded-2xl border px-4 py-3 text-sm",
                      status === "sent"
                        ? "border-[rgba(74,163,255,.25)] bg-[rgba(74,163,255,.06)] text-white/85"
                        : "border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.04)] text-white/75",
                    ].join(" ")}
                    role="status"
                  >
                    {message}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4">
            <div className="glass glow-border rounded-3xl p-6">
              <div className="text-xs tracking-[0.22em] text-white/55">
                WHAT YOU GET
              </div>
              <ul className="mt-4 grid gap-2">
                {[
                  "Clear scope + milestones",
                  "Production-grade architecture choices",
                  "Fast iteration with premium polish",
                  "Security + performance as defaults",
                ].map((x) => (
                  <li key={x} className="text-sm text-white/70 leading-7">
                    <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[rgba(74,163,255,.9)] shadow-[0_0_18px_rgba(74,163,255,.55)]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.02)] p-6">
              <div className="text-xs tracking-[0.22em] text-white/55">
                RESPONSE TIME
              </div>
              <div className="mt-3 text-sm text-white/75">
                Typically within 24 hours.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

