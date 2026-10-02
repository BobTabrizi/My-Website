type SectionProps = {
  id: string;
  index: string;
  title: string;
  divider?: boolean;
  children: React.ReactNode;
};

/** Page section with a numbered label in the left rail on wide screens. */
export function Section({ id, index, title, divider = true, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-20 md:py-28 ${divider ? 'border-t border-rule' : ''}`}
    >
      <div className="grid gap-10 md:grid-cols-12">
        <header className="md:col-span-3">
          <h2
            id={`${id}-title`}
            className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint md:sticky md:top-24"
          >
            <span className="text-accent">{index}</span>
            {title}
          </h2>
        </header>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
