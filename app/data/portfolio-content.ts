export type NavigationLink = {
  href: string;
  label: string;
};

export type ProjectStatus = "Live" | "In Progress" | "Internal";

export type Project = {
  title: string;
  summary: string;
  detail: string;
  status: ProjectStatus;
  technologies: string[];
  href?: string;
  hrefLabel?: string;
  links?: LinkItem[];
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
  { href: "#experience", label: "Experience" },
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
      href: "/Matt_Williams_Engineer_Resume.pdf",
      label: "Resume",
      external: true,
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Unclone.io",
    summary:
      "Brand protection company focused on identifying cloned websites and driving remediation.",
    detail:
      "Built a product around detecting impersonation sites, helping businesses surface fraudulent clones quickly and take them down before they cause brand or customer harm.",
    status: "Live",
    technologies: ["Brand Protection", "Fraud Detection", "Web Monitoring"],
    href: "https://unclone.io",
  },
  {
    title: "Builda",
    summary:
      "Fusion 360 add-in that turns natural language into parametric CAD geometry.",
    detail:
      "Fine-tuned multiple LoRA-based models, built schema-constrained inference, and added human feedback workflows to benchmark output quality.",
    status: "In Progress",
    technologies: ["PyTorch", "LoRA", "Unsloth"],
    href: "https://www.loom.com/share/333651cbf499422a96b998036b3cb5f0",
    hrefLabel: "Watch demo",
    links: [
      {
        href: "https://www.loom.com/share/333651cbf499422a96b998036b3cb5f0",
        label: "Watch demo",
      },
      {
        href: "https://builda-sigma.vercel.app/",
        label: "Visit site",
      },
    ],
  },
  {
    title: "QueryMango",
    summary:
      "Database monitoring tool that tracks freshness across 10+ tables and catches pipeline failures early.",
    detail:
      "Built during my AI engineering internship to surface real-time freshness issues and resolve dataset inconsistencies inside Snowflake-backed pipelines.",
    status: "Internal",
    technologies: ["Snowflake", "Monitoring", "Alerting"],
  },
];

export const experienceContent = {
  eyebrow: "Experience",
  title: "Building production systems where AI, security, and product meet.",
  description:
    "Most of my work sits across machine learning, data systems, and full-stack product development, with a bias for useful systems that hold up in production.",
};

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "NoInfra",
    role: "Founding Full-Stack Engineer",
    period: "March 2026 — Present",
    summary:
      "Founding engineer at a pre-seed startup, building core agent infrastructure spanning persistent memory, model routing, and go-to-market automation.",
    highlights: [
      "Engineered a persistent memory system for AI agents that ingests session data, converts interactions into structured observations, and retrieves user-specific context through an isolated knowledge layer.",
      "Designed an OpenAI-compatible inference layer that unifies multiple model providers, supports streaming responses, and routes requests across hosted LLM endpoints for multiple agent applications.",
      "Led development of internal marketing and go-to-market automation systems that analyzed search demand, ranked keywords, generated campaign assets, and supported autonomous customer-acquisition workflows.",
    ],
  },
  {
    company: "Crypto Asset Recovery",
    role: "Full-Stack Engineer",
    period: "Dec 2025 — Present",
    summary:
      "Full-stack engineer building Unclone.io, CAR's AI-powered clone-site detection platform, alongside ML evaluation workflows for credential recovery.",
    highlights: [
      "Developed backend systems for Unclone's AI-powered clone-site detection platform using Python, Django, Celery, PostgreSQL, and Docker, supporting signal ingestion, enrichment, similarity scoring, and domain verification workflows.",
      "Built a human-in-the-loop remediation agent that generates provider-specific abuse reports and evidence bundles while enforcing review and approval before external submission.",
      "Engineered full-stack ML evaluation workflows using Python, Django/FastAPI, PostgreSQL, Pandas, NumPy, and PyTorch, helping improve recovery success from 30% to 35% across a 130M+ row dataset.",
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
  title:
    "I build machine learning systems and full-stack products with a focus on turning technical ideas into usable products.",
  description:
    "My work sits at the intersection of AI, infrastructure, and product — turning models, data, and backend systems into tools people can actually use.",
  paragraphs: [
    "I’m currently an ML Engineer and founder building products across applied AI, fraud detection, and developer tooling. My background spans mathematics, mechanical engineering, machine learning, and full-stack software, which gives me a practical approach to building systems from model development through deployment and user experience.",
    "Most of what I build involves training or evaluating models, designing reliable backend workflows, and creating clear interfaces around complex technical systems.",
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
    "The best way to reach me is to send me an email. You can also see my resume, GitHub, and LinkedIn here.",
  email: "mattwil230@gmail.com",
  links: [
    {
      href: "/Matt_Williams_Engineer_Resume.pdf",
      label: "Resume",
    },
    {
      href: "https://github.com/mattwil230",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/mattwilliams77/",
      label: "LinkedIn",
    },
  ] satisfies LinkItem[],
};
