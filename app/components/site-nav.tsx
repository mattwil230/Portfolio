import type { NavigationLink } from "../data/portfolio-content";

type SiteNavProps = {
  name: string;
  links: NavigationLink[];
};

export default function SiteNav({ name, links }: SiteNavProps) {
  return (
    <nav className="sticky top-0 z-40 border-b border-zinc-100/90 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-950 transition-colors duration-200 hover:text-blue-700"
        >
          {name}
        </a>

        <div className="flex items-center gap-6 text-sm text-zinc-600">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors duration-200 hover:text-zinc-950"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-blue-600 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
