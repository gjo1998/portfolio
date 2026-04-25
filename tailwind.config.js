/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        page: 'var(--page)',
        surface: 'var(--surface)',
        'surface-soft': 'var(--surface-soft)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
        warm: 'var(--warm)',
      },
      boxShadow: {
        panel:
          '0 18px 34px -24px rgba(15, 23, 42, 0.42), 0 8px 18px -16px rgba(15, 118, 110, 0.3)',
      },
      backgroundImage: {
        mesh: 'linear-gradient(115deg, rgba(13, 148, 136, 0.14), rgba(249, 115, 22, 0.16))',
      },
    },
  },
  plugins: [],
}
