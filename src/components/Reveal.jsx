import { useEffect, useRef, useState } from 'react'

/*
 * Scroll reveal that fails safe: content is visible by default and is only hidden when the inline
 * head script has put `js` on <html> (see index.html and the .reveal rules in index.css). With no JS,
 * in print, or under prefers-reduced-motion, everything simply shows.
 * `onMount` elements (the hero) use a CSS-only rise that starts on first paint, without waiting for React.
 */
export function Reveal({ as: Tag = 'div', delay = 0, y = 28, className = '', children, onMount = false, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (onMount) return
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [onMount])

  const base = onMount ? 'reveal-mount' : `reveal${visible ? ' is-visible' : ''}`

  return (
    <Tag
      {...rest}
      ref={ref}
      className={`${base} ${className}`}
      style={{ '--reveal-delay': `${delay}s`, '--reveal-y': `${y}px` }}
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
