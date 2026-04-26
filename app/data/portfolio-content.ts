export type NavigationLink = {
  href: string;
  label: string;
};

export type ProjectStatus = "Live" | "In Progress";

export type Project = {
  title: string;
  summary: string;
  detail: string;
  status: ProjectStatus;
  technologies: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type LinkItem = {
  href: string;
  label: string;
};

export const navigationLinks: NavigationLink[] = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const heroContent = {
  eyebrow: "ML Engineer / Full-Stack Engineer",
  name: "Matt Williams",
  heading: "Hi, I'm Matt Williams",
  subtitle:
    "I'm an ML engineer building machine learning systems and full-stack products that actually ship.",
  actions: [
    {
      href: "#projects",
      label: "Projects",
      primary: true,
    },
    {
      href: "https://github.com/mattwil230",
      label: "GitHub",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/mattwilliams77/",
      label: "LinkedIn",
      external: true,
    },
    {
      href: "/matt-williams-resume.pdf",
      label: "Resume",
      external: true,
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Builda",
    summary:
      "Fusion 360 add-in that turns natural language into parametric CAD geometry.",
    detail:
      "Fine-tuned multiple LoRA-based models, built schema-constrained inference, and added human feedback workflows to benchmark output quality.",
    status: "In Progress",
    technologies: ["PyTorch", "LoRA", "Unsloth"],
  },
  {
    title: "QueryMango",
    summary:
      "Database monitoring tool that tracks freshness across 10+ tables and catches pipeline failures early.",
    detail:
      "Built during my AI engineering internship to surface real-time freshness issues and resolve dataset inconsistencies inside Snowflake-backed pipelines.",
    status: "Live",
    technologies: ["Snowflake", "Monitoring", "Alerting"],
  },
  {
    title: "Credential Recovery Ranking",
    summary:
      "ML-guided recovery system that improved successful credential recovery from 30% to 35% on 130M+ rows.",
    detail:
      "Combined large-scale preprocessing, PyTorch ranking models, and Hashcat prioritization to focus only on the highest-probability guesses.",
    status: "Live",
    technologies: ["Hashcat", "PyTorch", "Data Pipelines"],
  },
];

export const experienceContent = {
  eyebrow: "Experience",
  title: "Shipping applied ML in environments where the details matter.",
  description:
    "Most of my work sits across machine learning, data systems, and full-stack product development, with a bias for useful systems that hold up in production.",
};

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Crypto Asset Recovery",
    role: "AI Machine Learning Engineer",
    period: "Feb 2026 — Present",
    summary:
      "Built ranking models and large-scale preprocessing pipelines for credential recovery workflows operating on 130M+ rows.",
    highlights: [
      "Improved recovery success from 30% to 35% with optimized attack strategies.",
      "Trained PyTorch models on 10M+ cleaned samples, beating baseline top-N accuracy by roughly 12–18%.",
    ],
  },
  {
    company: "Business Automation",
    role: "AI Engineering Intern",
    period: "Nov 2025 — Feb 2026",
    summary:
      "Built internal tools for data freshness monitoring and used Snowflake workflows to track pipeline health across production datasets.",
    highlights: [
      "Built QueryMango to monitor 10+ tables and detect failures with real-time alerting.",
      "Resolved inconsistencies across 5–10% of datasets by auditing pipeline health directly in Snowflake.",
    ],
  },
  {
    company: "STS Aerospace",
    role: "Engineering Intern",
    period: "May 2024 — Sep 2024",
    summary:
      "Worked on manufacturing and process improvement with a mix of CAD design, operational analysis, and implementation detail.",
    highlights: [
      "Designed Slip-On Cuffs in SolidWorks and introduced a more efficient molding method.",
      "Used Excel and Python analysis to quantify efficiency gains, cost savings, and daily output improvements.",
    ],
  },
];

export const aboutContent = {
  eyebrow: "About",
  title: "I build machine learning systems and full-stack products with a bias for shipping.",
  description:
    "The work I care about most sits where models, infrastructure, and product all have to work together under real constraints.",
  paragraphs: [
    "I'm currently working as an ML engineer, and my background spans mathematics, mechanical engineering, and applied product work.",
    "Most of what I build lives between machine learning and full-stack software: training or evaluating models, shaping the frontend around the system, and building the infrastructure that keeps the product reliable once people actually use it.",
  ],
  focusAreas: [
    {
      label: "Machine Learning",
      value: "PyTorch, LoRA (PEFT), Unsloth, and model evaluation workflows.",
    },
    {
      label: "Data + Infra",
      value: "FastAPI, Snowflake, PostgreSQL, Docker, and large-scale pipeline work.",
    },
    {
      label: "Full-Stack Engineering",
      value: "React, Tailwind, TypeScript, and product interfaces that stay clear under real constraints.",
    },
  ],
};

export const contactContent = {
  eyebrow: "Contact",
  title: "Open to ML and full-stack product work that needs both systems thinking and execution.",
  description:
    "Best way to reach me is by email. You can also view the current resume PDF, GitHub, and LinkedIn from here.",
  email: "mattwil230@gmail.com",
  links: [
    {
      href: "/matt-williams-resume.pdf",
      label: "Resume",
    },
    {
      href: "https://github.com/mattwil230",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/mattwilliams77/",
      label: "LinkedIn / mattwilliams77",
    },
  ] satisfies LinkItem[],
};
