import type { Project } from "../data/portfolio-content";

type ProjectCardProps = {
  project: Project;
};

const statusDotClass: Record<Project["status"], string> = {
  Live: "bg-blue-600",
  "In Progress": "bg-zinc-400",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            {project.summary}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-zinc-500">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${statusDotClass[project.status]}`}
          />
          {project.status}
        </div>
      </div>

      <div className="mt-6 border-t border-zinc-100 pt-4">
        <p className="text-sm leading-6 text-zinc-500 transition-all duration-300 md:max-h-0 md:translate-y-2 md:overflow-hidden md:opacity-0 md:group-hover:max-h-24 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          {project.detail}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 transition-all duration-300 md:mt-0 md:opacity-0 md:group-hover:mt-4 md:group-hover:opacity-100">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
