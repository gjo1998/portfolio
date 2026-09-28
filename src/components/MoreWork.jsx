import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { moreWork } from '../data/content'
import { Reveal } from './Reveal'

function Details({ item }) {
  return (
    <>
      <p className="leading-relaxed text-muted">{item.summary}</p>
      {item.result && (
        <p className="mt-4 flex items-start gap-2 text-text">
          <TrendingUp size={18} className="mt-0.5 flex-none text-accent" aria-hidden="true" />
          {item.result}
        </p>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {item.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
        {item.link && (
          <a
            href={item.link.href}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex min-h-11 items-center gap-1.5 text-sm text-text transition-colors hover:text-accent"
          >
            <span className="link-underline">{item.link.label}</span>
            <ArrowUpRight size={15} />
            <span className="sr-only">: {item.title} (opens in a new tab)</span>
          </a>
        )}
      </div>
    </>
  )
}

export function MoreWork() {
  return (
    <section aria-labelledby="more-work" className="pb-24 sm:pb-32">
      <div className="shell">
        <Reveal>
          <h2 id="more-work" className="eyebrow">
            More work — product &amp; enterprise
          </h2>
        </Reveal>

        <ol className="mt-8 border-t border-line">
          {moreWork.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={0.06 * index}
              className="grid gap-4 border-b border-line py-8 sm:grid-cols-12 sm:gap-8 sm:px-4"
            >
              <span className="font-mono text-xs text-faint sm:col-span-1 sm:pt-2">0{index + 1}</span>
              {item.image ? (
                // With a thumbnail: image + title on the left, details on the right.
                <>
                  <div className="sm:col-span-5">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full rounded-xl border border-line bg-surface-2 object-cover object-top"
                    />
                    <h3 className="mt-4 font-display text-3xl leading-tight">{item.title}</h3>
                  </div>
                  <div className="sm:col-span-6">
                    <Details item={item} />
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-display text-3xl leading-tight sm:col-span-5 sm:text-4xl">{item.title}</h3>
                  <div className="sm:col-span-6">
                    <Details item={item} />
                  </div>
                </>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
