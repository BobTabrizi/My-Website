import { Section } from '@/components/Section';
import { interests } from '@/content/interests';
import { toolbox } from '@/content/site';

export function About() {
  return (
    <Section id="about" index="03" title="About">
      <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink-soft">
        <p className="max-w-[30ch] font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
          Front end or back end, my favorite part of the job is that there&apos;s always something new to build.
        </p>
        <p>
          Lately that means React and TypeScript interfaces on top of Java Spring services, plus the tooling around them:
          faster builds, better tests, and smoother releases. I&apos;ve led small teams, run Scrum for larger ones, and
          enjoy mentoring engineers who are newer to a codebase.
        </p>
        <p>
          I studied Computer Science and Mathematics at UC San Diego and still call San Diego home. Outside of work I keep
          building side projects, one of which grew to more than ten thousand users.
        </p>
      </div>

      <div className="mt-16 border-t border-rule pt-8">
        <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">My interests at a glance</h3>
        <ul className="mt-5 flex flex-wrap gap-4">
          {interests.map(({ name, Icon, iconClass }) => (
            <li key={name}>
              <span
                tabIndex={0}
                className="group relative flex size-20 items-center justify-center rounded-md border border-rule bg-surface/60 text-ink-soft transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-[0_12px_40px_-18px_rgb(77_141_255/0.6)] focus-visible:border-accent/50 focus-visible:text-accent"
              >
                <Icon className={iconClass ?? 'size-10'} />
                <span className="sr-only">{name}</span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded border border-rule bg-surface px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                >
                  {name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2 lg:grid-cols-4">
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
