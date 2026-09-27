export function BrowserFrame({ src, srcSet, sizes = '100vw', alt, domain, href, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${domain} in a new tab`}
      className={`group block overflow-hidden rounded-2xl border border-line-strong bg-surface-2 shadow-frame ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="mx-auto rounded-md bg-page px-3 py-1 font-mono text-xs text-faint">{domain}</span>
        <span className="w-10" aria-hidden="true" />
      </div>
      <div className="overflow-hidden">
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width="1440"
          height="900"
          loading="lazy"
          decoding="async"
          className="block w-full transition duration-[1200ms] ease-out group-hover:scale-[1.02]"
        />
      </div>
    </a>
  )
}
