/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', '"Instrument Serif Fallback"', 'Georgia', 'serif'],
        body: ['"Inter Tight"', '"Inter Tight Fallback"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"JetBrains Mono Fallback"', 'ui-monospace', 'monospace'],
      },
      colors: {
        page: 'var(--page)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        status: 'var(--status)',
      },
      boxShadow: {
        frame: 'var(--shadow-frame)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
