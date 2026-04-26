type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </p>

      <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-balance text-base leading-7 text-zinc-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
