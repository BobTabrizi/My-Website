type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
};

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`inline-block size-[0.8em] ${className}`}>
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Text link with a trailing arrow. Off-site links open in a new tab. */
export function ArrowLink({ href, children, className = '', download }: ArrowLinkProps) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      download={download}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className={`group inline-flex items-baseline gap-1 ${className}`}
    >
      <span className="link-draw">{children}</span>
      <Arrow className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
