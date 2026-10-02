import Image from 'next/image';

import { Section } from '@/components/Section';
import { toolbox } from '@/content/site';
import portrait from '@/assets/images/portrait.png';

export function About() {
  return (
    <Section id="about" index="03" title="About">
      <div className="grid gap-10 lg:grid-cols-9">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft lg:col-span-5">
          <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
            Front end or back end, my favorite part of the job is that there&apos;s always something new to build.
          </p>
          <p>
            Lately that means React and TypeScript interfaces on top of Java Spring services, plus the tooling around
            them: faster builds, better tests, and smoother releases. I&apos;ve led small teams, run Scrum for larger
            ones, and enjoy mentoring engineers who are newer to a codebase.
          </p>
          <p>
            I studied Computer Science and Mathematics at UC San Diego and still call San Diego home. Outside of work I
            keep building side projects, one of which grew to more than ten thousand users.
          </p>
        </div>

        <div className="lg:col-span-4">
          <Image
            src={portrait}
            alt="Portrait of Bob Tabrizi standing in front of a redwood tree"
            placeholder="blur"
            sizes="(min-width: 1024px) 400px, 100vw"
            className="aspect-[4/5] w-full rounded-sm object-cover grayscale-[45%] brightness-90 transition duration-500 hover:grayscale-0 hover:brightness-100"
          />
        </div>
      </div>

      <div className="mt-16 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {toolbox.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">{group.label}</h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
