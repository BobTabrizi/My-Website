import Image from 'next/image';

import { ArrowLink } from '@/components/ArrowLink';
import { site } from '@/content/site';
import portrait from '@/assets/images/portrait.png';

const facts = [
  { label: 'Now', value: 'Senior Software Engineer, Booz Allen Hamilton' },
  { label: 'Before', value: 'Full Stack Team Lead, G2 Software Systems' },
  { label: 'Studied', value: 'Computer Science & Mathematics, UC San Diego' },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-36 md:pt-24 md:pb-48">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            {site.role} <span className="text-accent">/</span> {site.location}
          </p>

          <h1 className="mt-6 font-display text-[clamp(3.5rem,12vw,9rem)] font-semibold leading-[0.9] tracking-[-0.025em]">
            Bob <span className="text-starlight">Tabrizi</span>
          </h1>

          <p className="mt-10 max-w-[34ch] text-2xl leading-snug text-ink-soft md:text-[1.85rem]">
            I build <span className="text-ink">React and TypeScript</span> interfaces, the{' '}
            <span className="text-ink">Java and Node</span> services behind them, and the tooling that helps teams ship
            with confidence.
          </p>
        </div>

        {/* Portrait styled as a moon: phase shadow and moonlight, with a small satellite on an orbit. */}
        <div className="moon group relative size-24 shrink-0 rounded-full md:size-42 lg:size-52">
          <div aria-hidden="true" className="orbit absolute -inset-2.5 rounded-full border border-accent/20 md:-inset-4">
            <span className="absolute -top-[3px] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-[#dfe9ff] shadow-[0_0_8px_2px_rgb(156_192_255/0.75)]" />
          </div>
          <Image
            src={portrait}
            alt="Portrait of Bob Tabrizi"
            placeholder="blur"
            loading="eager"
            sizes="(min-width: 1024px) 208px, (min-width: 768px) 168px, 96px"
            className="size-full rounded-full object-cover grayscale-[55%] transition duration-700 group-hover:grayscale-0"
          />
          <div aria-hidden="true" className="moon-phase pointer-events-none absolute inset-0 rounded-full" />
        </div>
      </div>

      <dl className="mt-14 grid gap-6 border-t border-rule pt-6 sm:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">{fact.label}</dt>
            <dd className="mt-1.5 text-[0.95rem] leading-snug">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-lg">
        <ArrowLink href={`mailto:${site.email}`}>Email</ArrowLink>
        <ArrowLink href={site.github}>GitHub</ArrowLink>
        <ArrowLink href={site.linkedin}>LinkedIn</ArrowLink>
        <ArrowLink href={site.resume}>Résumé (PDF)</ArrowLink>
      </div>

      {/* The lit edge of a very large circle, faded out at both sides and below. */}
      <div
        aria-hidden="true"
        className="horizon-fade pointer-events-none absolute bottom-0 left-1/2 h-48 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="horizon absolute top-20 left-1/2 aspect-square w-[260vw] -translate-x-1/2 rounded-full" />
      </div>
    </section>
  );
}
