import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ as = 'div', delay = 0, y = 28, className, children, onMount = false }) {
  const Tag = motion[as]
  const target = { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease } }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, amount: 0.2 } })}
    >
      {children}
    </Tag>
  )
}

export function SectionLabel({ index, children }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line-strong" />
      {children}
    </p>
  )
}
