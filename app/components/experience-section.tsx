import type { ExperienceEntry } from "../data/portfolio-content";
import FadeInSection from "./fade-in-section";
import SectionHeading from "./section-heading";

type ExperienceSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  entries: ExperienceEntry[];
};

export default function ExperienceSection({
  eyebrow,
  title,
  description,
  entries,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="border-b border-zinc-100 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <FadeInSection>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeInSection>

        <div className="mt-12 divide-y divide-zinc-100 border-t border-zinc-100 dark:divide-slate-800 dark:border-slate-800">
          {entries.map((entry, index) => (
            <FadeInSection key={`${entry.company}-${entry.role}`} delay={index * 70}>
              <article
                className={`grid gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] ${
                  index === entries.length - 1 ? "pb-0 pt-8" : "py-8"
                }`}
              >
                <div className="space-y-2">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blue-700 dark:text-sky-300">
                    {entry.period}
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-slate-100">
                      {entry.company}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500 dark:text-slate-400">{entry.role}</p>
                  </div>
                </div>

                <div>
                  <p className="text-base leading-7 text-zinc-600 dark:text-slate-300">
                    {entry.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-500 dark:text-slate-400">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-sky-400"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
