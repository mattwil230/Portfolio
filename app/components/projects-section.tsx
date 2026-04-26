import type { Project } from "../data/portfolio-content";
import FadeInSection from "./fade-in-section";
import ProjectCard from "./project-card";
import SectionHeading from "./section-heading";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="border-b border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <FadeInSection>
          <SectionHeading
            eyebrow="Selected Projects"
            title="Systems I've Built"
            description="A few products I've taken from rough idea to production-ready shape across AI, data, and the frontend."
          />
        </FadeInSection>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInSection
              key={project.title}
              delay={index * 80}
              className="h-full"
            >
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
