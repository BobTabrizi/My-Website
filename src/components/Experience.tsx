import { Section } from '@/components/Section';
import { experience } from '@/content/experience';

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol>
        {experience.map((role) => (
          <li
            key={role.company}
            className="grid gap-3 border-t border-rule py-8 first:border-t-0 first:pt-0 md:grid-cols-9 md:gap-8"
          >
            <p className="font-mono text-sm text-ink-faint md:col-span-2">
              {role.start}–{role.end}
            </p>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold leading-tight">{role.company}</h3>
              <p className="mt-1 text-ink-soft">{role.title}</p>
            </div>
            <ul className="space-y-2 text-[0.95rem] leading-relaxed text-ink-soft md:col-span-4">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-4">
                  <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2 bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
