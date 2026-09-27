import { moreWork } from '../data/content'
import { Reveal } from './Reveal'

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
              <h3 className="font-display text-3xl leading-tight sm:col-span-5 sm:text-4xl">
                {item.title}
              </h3>
              <div className="sm:col-span-6">
                <p className="leading-relaxed text-muted">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
