import { site } from '@/content/site';

const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-night/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-xl font-bold leading-none tracking-tight">
          bt<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.15em]">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-draw hidden text-ink-soft hover:text-ink md:inline">
              {item.label}
            </a>
          ))}
          <a
            href={site.resume}
            className="rounded-full border border-ink/25 px-3 py-1.5 transition-colors hover:border-accent hover:text-accent"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
