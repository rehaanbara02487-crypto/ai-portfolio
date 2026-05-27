"use client";

import { site } from "@/content/site";
import { BusinessContactCard } from "@/components/ui/BusinessContactCard";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,.10)] py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-white/60">
          © 2026 Rehaan Bara • beingai.space • All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            className="text-white/65 transition-colors duration-300 hover:text-white"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="text-white/25">·</span>
          <BusinessContactCard variant="inline" />
        </div>
      </div>
    </footer>
  );
}
