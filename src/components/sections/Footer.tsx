"use client";

import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,.10)] py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-white/60">
          © 2026 Rehaan Bara • beingai.space • All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            className="text-white/65 hover:text-white transition-colors"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="text-white/25">·</span>
          <a
            className="text-white/65 hover:text-white transition-colors"
            href={`mailto:${site.email}`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

