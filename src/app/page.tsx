import { About } from '@/components/About';
import { ArrowLink } from '@/components/ArrowLink';
import { Experience } from '@/components/Experience';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { site } from '@/content/site';

const footerLinks = [
  { label: 'Email', href: `mailto:${site.email}` },
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Résumé (PDF)', href: site.resume },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <footer className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="border-t border-rule py-10">
          <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-7 gap-y-3 text-lg">
            {footerLinks.map((link) => (
              <ArrowLink key={link.label} href={link.href}>
                {link.label}
              </ArrowLink>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-2 font-mono text-xs text-ink-faint sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name} · 32.72° N, 117.16° W
            </p>
            <p>
              Built with Next.js and Tailwind CSS ·{' '}
              <ArrowLink href={site.source} className="text-ink-soft">
                Source
              </ArrowLink>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
