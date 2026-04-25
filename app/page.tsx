import ContactActions from "./components/contact-actions";

export default function Home() {
  const experience = [
    {
      title: "ML Engineer",
      company: "Crypto Asset Recovery",
      description:
        "Building machine learning systems for password recovery optimization, focusing on improving prediction accuracy and evaluation pipelines.",
      stack: ["Python", "Machine Learning", "Evaluation"],
    },
    {
      title: "AI Intern",
      company: "AI Internship",
      description:
        "Worked with ML models, datasets, and evaluation systems to improve performance and reliability.",
      stack: ["Python", "ML Models", "Datasets"],
    },
  ];

  const education = [
    {
      program: "B.S. in Mathematics, Minor in Mechanical Engineering",
      school: "University of New Hampshire",
      description:
        "Built a strong foundation in quantitative reasoning, systems thinking, and technical problem-solving that now informs my work in machine learning and AI systems.",
      focus: [
        "Mathematics",
        "Mechanical Engineering",
        "Modeling",
        "Problem Solving",
      ],
    },
  ];

  const projects = [
    {
      title: "Builda",
      description:
        "Fine-tuned LLM that converts text into structured CAD build plans for automated part generation.",
      stack: ["Python", "PyTorch", "LoRA", "FastAPI"],
    },
    {
      title: "QueryMango",
      description:
        "Database freshness monitoring tool that alerts when pipelines break or data stops updating.",
      stack: ["Python", "FastAPI", "PostgreSQL"],
    },
    {
      title: "Cloudline",
      description:
        "Automated daily weather + news email system with scheduling and subscriber management.",
      stack: ["FastAPI", "PostgreSQL", "APIs"],
    },
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "PyTorch",
    "Data Engineering",
    "SQL",
    "FastAPI",
    "Docker",
    "PostgreSQL",
    "APIs",
    "Model Training",
    "Data Pipelines",
    "Linux",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-200 text-black scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-[rgb(var(--accent-soft-blue-rgb)/0.4)] bg-zinc-200/88 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold tracking-tight">
            Matt Williams
          </p>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#experience" className="hover:text-[var(--accent-soft-blue)]">
              Experience
            </a>
            <a href="#education" className="hover:text-[var(--accent-soft-blue)]">
              Education
            </a>
            <a href="#projects" className="hover:text-[var(--accent-soft-blue)]">
              Projects
            </a>
            <a href="#about" className="hover:text-[var(--accent-soft-blue)]">
              About
            </a>
            <a href="#skills" className="hover:text-[var(--accent-soft-blue)]">
              Skills
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto flex max-w-6xl flex-col px-6 pt-28 pb-16">
        {/* HERO */}
        <section className="flex min-h-[62vh] flex-col items-center justify-start gap-6 pt-8 text-center sm:pt-12">
          <h1 className="text-6xl font-semibold tracking-tight text-zinc-900 sm:text-8xl">
            Hi, I&apos;m Matt Williams
          </h1>

          <h2 className="text-2xl font-semibold text-[var(--accent-soft-blue)] sm:text-3xl">
            Machine Learning / AI Engineer
          </h2>

          <p className="max-w-2xl text-lg text-zinc-900">
            I build machine learning systems and data products — from custom
            datasets and model training to deployed AI systems.
          </p>

          <ContactActions
            email="mattwil230@gmail.com"
            phone="603-327-9001"
            githubUrl="https://github.com/mattwil230"
            linkedinUrl="https://www.linkedin.com/in/mattwilliams77/"
          />
        </section>
      </section>

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/golden-gate-bridge-bg.png')] bg-cover bg-top"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(239,246,255,0.68)_0%,rgba(240,249,255,0.76)_35%,rgba(255,255,255,0.86)_100%)]"
        />

        <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pt-4 pb-20 sm:pt-6">
        {/* EXPERIENCE */}
        <section
          id="experience"
          className="scroll-mt-24 flex flex-col gap-8 sm:scroll-mt-28"
        >
          <h2 className="text-4xl font-bold">Experience</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((role) => (
              <div
                key={role.title}
                className="rounded-xl border border-[rgb(var(--accent-soft-blue-rgb)/0.45)] bg-zinc-200/82 p-6 shadow-[0_18px_50px_-40px_rgb(var(--accent-soft-blue-rgb)/0.34)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[var(--accent-soft-blue)]"
              >
                <p className="text-sm font-semibold text-[var(--accent-soft-blue)]">
                  {role.company}
                </p>

                <h3 className="mt-2 text-xl font-bold">{role.title}</h3>

                <p className="mt-3 text-sm text-zinc-900">
                  {role.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[rgb(var(--accent-soft-blue-rgb)/0.14)] px-3 py-1 text-xs text-[var(--accent-soft-blue)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="scroll-mt-24 flex flex-col gap-8 sm:scroll-mt-28"
        >
          <h2 className="text-4xl font-bold">Education</h2>

          <div className="grid gap-6">
            {education.map((item) => (
              <div
                key={item.program}
                className="rounded-xl border border-[rgb(var(--accent-soft-blue-rgb)/0.45)] bg-zinc-200/82 p-6 shadow-[0_18px_50px_-40px_rgb(var(--accent-soft-blue-rgb)/0.34)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[var(--accent-soft-blue)]"
              >
                <p className="text-sm font-semibold text-[var(--accent-soft-blue)]">
                  {item.school}
                </p>

                <h3 className="mt-2 text-xl font-bold">{item.program}</h3>

                <p className="mt-3 max-w-3xl text-sm text-zinc-900">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.focus.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-[rgb(var(--accent-soft-blue-rgb)/0.14)] px-3 py-1 text-xs text-[var(--accent-soft-blue)]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="scroll-mt-24 flex flex-col gap-8 sm:scroll-mt-28"
        >
          <h2 className="text-4xl font-bold">Projects</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-[rgb(var(--accent-soft-blue-rgb)/0.45)] bg-zinc-200/82 p-6 shadow-[0_18px_50px_-40px_rgb(var(--accent-soft-blue-rgb)/0.34)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[var(--accent-soft-blue)]"
              >
                <div className="mb-4 h-1 w-12 bg-[var(--accent-soft-blue)]" />

                <h3 className="text-lg font-bold">{project.title}</h3>

                <p className="mt-3 text-sm text-zinc-900">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[rgb(var(--accent-soft-blue-rgb)/0.14)] px-3 py-1 text-xs text-[var(--accent-soft-blue)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="max-w-3xl scroll-mt-24 space-y-6 sm:scroll-mt-28"
        >
          <h2 className="text-4xl font-bold">About</h2>

          <p className="text-zinc-900">
            I have a background in mathematics and mechanical engineering and
            focus on building applied machine learning systems.
          </p>

          <p className="text-zinc-900">
            I’m especially interested in model fine-tuning, AI infrastructure,
            and building systems where ML directly creates value.
          </p>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="scroll-mt-24 flex flex-col gap-6 sm:scroll-mt-28"
        >
          <h2 className="text-4xl font-bold">Skills</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-[rgb(var(--accent-soft-blue-rgb)/0.45)] bg-zinc-200/82 p-4 text-sm text-zinc-900 shadow-[0_18px_50px_-40px_rgb(var(--accent-soft-blue-rgb)/0.34)] backdrop-blur-sm transition hover:border-[var(--accent-soft-blue)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
        </section>
      </section>
    </main>
  );
}
