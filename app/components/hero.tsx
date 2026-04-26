import FadeInSection from "./fade-in-section";
import HeroBackdrop from "./hero-backdrop";
import HeroFlightOverlay from "./hero-flight-overlay";

type CtaLink = {
  href: string;
  label: string;
  external?: boolean;
  primary?: boolean;
};

type HeroProps = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  actions: CtaLink[];
};

function HeroActionLink({
  href,
  label,
  external = false,
  primary = false,
}: CtaLink) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={[
        "group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition duration-200",
        primary
          ? "bg-zinc-950 text-white hover:-translate-y-px hover:bg-zinc-800"
          : "border border-zinc-200 bg-white text-zinc-700 hover:-translate-y-px hover:border-blue-200 hover:text-zinc-950",
      ].join(" ")}
    >
      {label}
      <span className="h-px w-0 bg-current transition-all duration-200 group-hover:w-4" />
    </a>
  );
}

export default function Hero({
  eyebrow,
  heading,
  subtitle,
  actions,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100">
      <HeroBackdrop />
      <HeroFlightOverlay />

      <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-5xl items-center justify-center px-6 py-24 sm:py-32">
        <FadeInSection className="flex max-w-3xl flex-col items-center text-center">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-blue-700">
            {eyebrow}
          </p>

          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl lg:text-[5.5rem]">
            {heading}
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-zinc-600 sm:text-xl">
            {subtitle}
          </p>

          <div className="mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
            {actions.map((action) => (
              <HeroActionLink
                key={`${action.label}-${action.href}`}
                href={action.href}
                label={action.label}
                external={action.external}
                primary={action.primary}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
