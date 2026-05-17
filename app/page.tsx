import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import ExperienceSection from "./components/experience-section";
import Hero from "./components/hero";
import ProjectsSection from "./components/projects-section";
import SiteNav from "./components/site-nav";
import {
  aboutContent,
  contactContent,
  experienceContent,
  experienceEntries,
  heroContent,
  navigationLinks,
  projects,
} from "./data/portfolio-content";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-white text-zinc-950 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100"
    >
      <SiteNav name={heroContent.name} links={navigationLinks} />
      <Hero
        eyebrow={heroContent.eyebrow}
        heading={heroContent.heading}
        subtitle={heroContent.subtitle}
        actions={heroContent.actions}
      />
      <ProjectsSection projects={projects} />
      <ExperienceSection
        eyebrow={experienceContent.eyebrow}
        title={experienceContent.title}
        description={experienceContent.description}
        entries={experienceEntries}
      />
      <AboutSection
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        description={aboutContent.description}
        paragraphs={aboutContent.paragraphs}
        focusAreas={aboutContent.focusAreas}
      />
      <ContactSection
        eyebrow={contactContent.eyebrow}
        title={contactContent.title}
        description={contactContent.description}
        email={contactContent.email}
        links={contactContent.links}
      />
    </main>
  );
}
