import Image from 'next/image';

import { ArrowLink } from '@/components/ArrowLink';
import { Section } from '@/components/Section';
import { projects, type Project } from '@/content/projects';

function ProjectEntry({ project, number }: { project: Project; number: string }) {
  return (
    <article className="grid gap-8 lg:grid-cols-9 lg:gap-10">
      <div className="lg:col-span-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          {number} <span className="text-accent">/</span> {project.kind}
        </p>
        <h3 className="mt-3 font-display text-4xl font-semibold leading-none tracking-tight md:text-5xl">{project.name}</h3>
        <p className="mt-5 text-xl leading-snug">{project.summary}</p>

        <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ink-soft">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        {project.stat && (
          <p className="mt-6 flex items-baseline gap-3 border-l-2 border-accent pl-4">
            <span className="font-display text-4xl font-semibold leading-none tracking-tight">{project.stat.value}</span>
            <span className="text-sm text-ink-soft">{project.stat.label}</span>
          </p>
        )}

        <p className="mt-6 font-mono text-xs leading-relaxed text-ink-faint">
          {project.stack.join('  ·  ')}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {project.links.map((link) => (
            <ArrowLink key={link.href} href={link.href}>
              {link.label}
            </ArrowLink>
          ))}
        </div>
      </div>

      <figure className="lg:col-span-5">
        <div className="overflow-hidden rounded-md border border-rule bg-surface p-2 transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_70px_-30px_rgb(77_141_255/0.55)]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            placeholder="blur"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full rounded-[3px]"
          />
        </div>
        <figcaption className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink-faint">
          Fig. {number}: {project.name}
        </figcaption>
      </figure>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="01" title="Projects" divider={false}>
      <p className="max-w-[46ch] text-lg text-ink-soft">
        Things I&apos;ve designed and built on my own time, from idea to something people actually use.
      </p>
      <div className="mt-16 space-y-24">
        {projects.map((project, i) => (
          <ProjectEntry key={project.slug} project={project} number={String(i + 1).padStart(2, '0')} />
        ))}
      </div>
    </Section>
  );
}
