"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const socials = useMemo(
    () => [
      { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-6 pt-5">
        <div
          className={[
            "flex items-center justify-between rounded-full px-4 py-3",
            scrolled ? "glass" : "bg-transparent",
            "transition-[background,box-shadow,border-color] duration-300",
          ].join(" ")}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight text-white"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setOpen(false);
            }}
          >
            <span className="h-2 w-2 rounded-full bg-[rgba(74,163,255,.9)] shadow-[0_0_22px_rgba(74,163,255,.6)]" />
            <span className="opacity-90 group-hover:opacity-100">
              {site.name}
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-sm text-[rgba(247,247,255,.72)] hover:text-white transition-colors"
              >
                {it.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.03)] text-white/80 hover:text-white hover:border-white/25 transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.03)] text-white/85"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <div className="mx-auto w-full max-w-6xl px-6 pt-3">
              <div className="glass rounded-3xl p-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((it) => (
                    <a
                      key={it.href}
                      href={it.href}
                      className="rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {it.label}
                    </a>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 px-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.03)] text-white/80 hover:text-white hover:border-white/25 transition-colors"
                      aria-label={label}
                    >
                    <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

