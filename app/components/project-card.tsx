import Link from "next/link";
import type { Project } from "../data/portfolio-content";

type ProjectCardProps = {
  project: Project;
};

const statusDotClass: Record<Project["status"], string> = {
  Live: "bg-blue-600",
  "In Progress": "bg-emerald-500",
  Internal: "bg-amber-500",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectLinks =
    project.links ??
    (project.href
      ? [{ href: project.href, label: project.hrefLabel ?? "Visit site" }]
      : []);

  return (
    <article className="flex h-full flex-col rounded-[28px] border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600 dark:hover:shadow-[0_24px_60px_-34px_rgba(2,12,27,0.68)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-slate-100">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-slate-400">
            {project.summary}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-zinc-500 dark:border-slate-700 dark:text-slate-400">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${statusDotClass[project.status]}`}
          />
          {project.status}
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col border-t border-zinc-100 pt-4 dark:border-slate-800">
        <p className="text-sm leading-6 text-zinc-500 dark:text-slate-400">
          {project.detail}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500 dark:border-slate-700 dark:text-slate-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {projectLinks.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4">
            {projectLinks.map((link) => (
              <Link
                key={`${project.title}-${link.href}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
