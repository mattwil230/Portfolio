import type { NavigationLink } from "../data/portfolio-content";
import ThemeToggle from "./theme-toggle";

type SiteNavProps = {
  name: string;
  links: NavigationLink[];
};

export default function SiteNav({ name, links }: SiteNavProps) {
  return (
    <nav className="sticky top-0 z-40 border-b border-zinc-100/90 bg-white/90 backdrop-blur-sm transition-colors duration-200 dark:border-slate-800/90 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-950 transition-colors duration-200 hover:text-blue-700 dark:text-slate-100 dark:hover:text-sky-300"
        >
          {name}
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors duration-200 hover:text-zinc-950 dark:hover:text-slate-100"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-blue-600 transition-transform duration-200 group-hover:scale-x-100 dark:bg-sky-400" />
            </a>
          ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
