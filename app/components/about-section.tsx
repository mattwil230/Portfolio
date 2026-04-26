import FadeInSection from "./fade-in-section";
import SectionHeading from "./section-heading";

type FocusArea = {
  label: string;
  value: string;
};

type AboutSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  focusAreas: FocusArea[];
};

export default function AboutSection({
  eyebrow,
  title,
  description,
  paragraphs,
  focusAreas,
}: AboutSectionProps) {
  return (
    <section id="about" className="border-b border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <FadeInSection>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
          </FadeInSection>

          <FadeInSection delay={80} className="space-y-5 text-base leading-7 text-zinc-600">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeInSection>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {focusAreas.map((area, index) => (
            <FadeInSection key={area.label} delay={index * 80}>
              <div className="rounded-[24px] border border-zinc-200 p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blue-700">
                  {area.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {area.value}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
