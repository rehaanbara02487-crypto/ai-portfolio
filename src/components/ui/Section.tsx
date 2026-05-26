import type { PropsWithChildren } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}>) {
  return (
    <section id={id} className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 flex max-w-3xl flex-col gap-3">
          {eyebrow ? (
            <div className="text-xs font-medium tracking-[0.22em] text-[rgba(247,247,255,.55)]">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-pretty text-sm leading-7 text-[rgba(247,247,255,.68)] sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

