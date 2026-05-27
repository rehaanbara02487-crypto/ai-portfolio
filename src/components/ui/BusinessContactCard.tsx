"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { site } from "@/content/site";

type Variant = "card" | "compact" | "inline";

type Props = {
  variant?: Variant;
  className?: string;
  onNavigate?: () => void;
};

export function BusinessContactCard({
  variant = "card",
  className = "",
  onNavigate,
}: Props) {
  const mailto = `mailto:${site.email}`;

  if (variant === "inline") {
    return (
      <a
        href={mailto}
        onClick={onNavigate}
        aria-label={`Email ${site.email}`}
        className={`group/email inline-flex items-center gap-1.5 text-white/70 transition-colors duration-300 hover:text-white ${className}`}
      >
        <Mail
          size={14}
          className="text-[rgba(74,163,255,.85)] transition-transform duration-300 group-hover/email:scale-110 group-hover/email:drop-shadow-[0_0_8px_rgba(74,163,255,.5)]"
          aria-hidden="true"
        />
        <span className="relative">
          {site.email}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[rgba(74,163,255,.8)] to-[rgba(138,91,255,.8)] transition-all duration-300 group-hover/email:w-full" />
        </span>
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <motion.a
        href={mailto}
        onClick={onNavigate}
        aria-label={`Email ${site.email} for business and collaborations`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        className={`group/email block rounded-2xl border border-[rgba(255,255,255,.10)] bg-[rgba(255,255,255,.03)] p-4 transition-[border-color,box-shadow] duration-300 hover:border-[rgba(74,163,255,.35)] hover:shadow-[0_0_28px_rgba(74,163,255,.15)] ${className}`}
      >
        <div className="text-xs tracking-[0.18em] text-white/55">
          {site.contact.label.toUpperCase()}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Mail
            size={15}
            className="text-[rgba(74,163,255,.9)] transition-transform duration-300 group-hover/email:scale-110"
            aria-hidden="true"
          />
          <span className="text-sm text-white/85 transition-colors duration-300 group-hover/email:text-white">
            {site.email}
          </span>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={`group/card glow-border ${className}`}
    >
      <div className="glass rounded-3xl p-6 md:p-7">
        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.04)] transition-[box-shadow,border-color] duration-300 group-hover/card:border-[rgba(74,163,255,.35)] group-hover/card:shadow-[0_0_24px_rgba(74,163,255,.2)]">
            <Mail
              size={18}
              className="text-[rgba(74,163,255,.9)] transition-transform duration-300 group-hover/card:scale-110"
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium tracking-[0.22em] text-white/55">
              {site.contact.label.toUpperCase()}
            </div>
            <a
              href={mailto}
              onClick={onNavigate}
              aria-label={`Email ${site.email} for business and collaborations`}
              className="group/link mt-2 inline-flex max-w-full items-center gap-2 text-base font-medium text-white transition-colors duration-300 hover:text-[rgba(74,163,255,.95)] sm:text-lg"
            >
              <span className="truncate">{site.email}</span>
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[rgba(138,91,255,.9)] opacity-70 shadow-[0_0_14px_rgba(138,91,255,.55)] transition-opacity duration-300 group-hover/link:opacity-100"
              />
            </a>
            <p className="mt-3 text-sm leading-7 text-white/65">
              {site.contact.subtitle}
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none mt-5 h-px w-full bg-gradient-to-r from-transparent via-[rgba(74,163,255,.35)] to-transparent opacity-60 transition-opacity duration-300 group-hover/card:opacity-100"
        />
        <div className="mt-4 text-xs tracking-[0.18em] text-white/45">
          TYPICALLY REPLIES WITHIN 24 HOURS
        </div>
      </div>
    </motion.div>
  );
}
