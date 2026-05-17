import type { LinkItem } from "../data/portfolio-content";
import FadeInSection from "./fade-in-section";

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  links: LinkItem[];
};

export default function ContactSection({
  eyebrow,
  title,
  description,
  email,
  links,
}: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <FadeInSection className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-blue-700 dark:text-sky-300">
              {eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-slate-100 sm:text-5xl">
              {title}
            </h2>

            <p className="mt-4 max-w-2xl text-balance text-base leading-7 text-zinc-600 dark:text-slate-400 sm:text-lg">
              {description}
            </p>

            <a
              href={`mailto:${email}`}
              className="group mt-8 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-zinc-950 transition-colors duration-200 hover:text-blue-700 dark:text-slate-100 dark:hover:text-sky-300 sm:text-3xl"
            >
              {email}
              <span className="h-px w-0 bg-current transition-all duration-200 group-hover:w-10" />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-200 hover:text-zinc-950 dark:text-slate-400 dark:hover:text-slate-100"
              >
                {link.label}
                <span className="h-px w-0 bg-blue-600 transition-all duration-200 group-hover:w-4 dark:bg-sky-400" />
              </a>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
