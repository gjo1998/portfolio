const base = import.meta.env.BASE_URL

// Screenshots are exported at 800w and 1440w WebP; the browser picks the right one.
const responsiveShot = (name) => ({
  src: `${base}work/${name}-1440.webp`,
  srcSet: `${base}work/${name}-800.webp 800w, ${base}work/${name}-1440.webp 1440w`,
})

export const profile = {
  name: 'George K. J',
  title: 'Frontend & Full Stack Developer',
  location: 'Kannur, Kerala, India',
  email: 'georgejo1012@gmail.com',
  phone: '+91 7907351637',
  education: 'B.Tech — TOMS College of Engineering (2017–2021)',
  photo: `${base}george-profile.webp`,
  resume: `${base}George_K_J_Resume.pdf`,
  languages: ['English', 'Malayalam', 'Hindi', 'Tamil'],
}

// A plain mailto works with whatever mail app the visitor uses (Gmail, Outlook, Apple Mail...).
export const mailtoUrl = `mailto:${profile.email}`

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '4.5+', label: 'Years shipping production web apps' },
  { value: 'Angular 12–18', label: 'Plus React, Node.js & NestJS' },
  { value: 'Full stack', label: 'From UI to APIs to data' },
]

export const featuredProject = {
  name: 'Lev Shema',
  url: 'https://levshema.com',
  domain: 'levshema.com',
  logo: `${base}levshema-logo.webp`,
  kind: 'Counselling Centre & Training Institute',
  year: '2026',
  role: 'Design & full stack development',
  summary:
    'A complete digital home for a counselling, psychotherapy and training centre in Kerala: a calm public website, a guided online booking flow, and a private admin console that runs the practice day to day.',
  images: {
    home: { ...responsiveShot('levshema-home'), alt: 'Lev Shema home page with the headline “Healing minds, strengthening relationships.”' },
    booking: { ...responsiveShot('levshema-book'), alt: 'Lev Shema booking flow, step one of four: choosing the kind of support.' },
  },
  pillars: [
    {
      title: 'Public website',
      text: 'Services, the director’s profile, training programmes, research and resources, written and laid out to feel warm, safe and trustworthy.',
    },
    {
      title: 'Online booking',
      text: 'A four-step flow: service, counsellor, date and time, then details. Live availability, online or in-person sessions, and a prefilled WhatsApp confirmation.',
    },
    {
      title: 'Admin console',
      text: 'A private dashboard for bookings, calendar, counsellor availability, services and client records.',
    },
  ],
  bookingNotes: [
    'Progress is always visible, so a first-time visitor knows exactly how much is left.',
    'Each service shows its duration and whether it’s offered online or in person.',
    'Clear inline validation, plus a fallback to call when online booking is closed.',
    'Privacy by design: the form asks visitors not to share health history before their session.',
  ],
  stack: ['Angular (standalone, signals, zoneless)', 'Firebase / Firestore', 'Lazy-loaded routes', 'Vercel', 'WhatsApp integration'],
}

export const moreWork = [
  {
    title: 'Enterprise Angular platform modernisation',
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    summary:
      'Moved legacy Angular modules to a maintainable, high-performance architecture with lazy-loaded modules, shared components and cleaner API integration.',
  },
  {
    title: 'React + Node web applications',
    stack: ['React', 'Node.js', 'Tailwind CSS', 'MySQL'],
    summary:
      'Two React applications with API-backed flows, responsive UI and production-ready component systems, delivered quickly with AI-assisted development.',
  },
  {
    title: 'Authentication & API workflow suite',
    stack: ['Angular', 'OAuth', 'Node.js', 'Express'],
    summary:
      'Secure OAuth sign-in, protected routes and resilient async API handling for business applications with active user sessions.',
  },
]

// Inclusive month count, e.g. Mar 2022 – Jun 2023 → "1 yr 4 mos". Ongoing roles count up to today.
function formatDuration(start, end) {
  const [sy, sm] = start.split('-').map(Number)
  const now = new Date()
  const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1]
  const total = (ey - sy) * 12 + (em - sm) + 1
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts = []
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
  return parts.join(' ')
}

export const experiences = [
  {
    company: 'Lithos Technosoft Pvt Ltd',
    role: 'Associate Angular Developer',
    period: 'Jul 2023 — Present',
    duration: formatDuration('2023-07'),
    highlights: [
      'Develop and maintain scalable web applications with Angular (v17+) and TypeScript.',
      'Optimise performance through lazy loading and efficient component design.',
      'Integrate RESTful APIs and improve data handling alongside backend teams.',
      'Migrate legacy code to modern Angular standards for long-term maintainability.',
      'Mentor junior developers and take part in code reviews to keep quality high.',
      'Built two React.js + Node.js web applications using AI-assisted development for fast delivery.',
    ],
  },
  {
    company: 'Cloudium Softwares Pvt Ltd',
    role: 'Junior Software Developer',
    period: 'Mar 2022 — Jun 2023',
    duration: formatDuration('2022-03', '2023-06'),
    highlights: [
      'Developed and maintained web applications with Angular and TypeScript.',
      'Built reusable components that sped up feature delivery across the team.',
      'Integrated RESTful APIs and managed asynchronous data flows with RxJS.',
      'Contributed to an OAuth-based authentication system.',
      'Worked in Agile sprints: planning, stand-ups and retrospectives.',
    ],
  },
]

export const services = [
  {
    title: 'Websites & web apps',
    description: 'Production-grade Angular and React interfaces with scalable component architecture and considered UX.',
  },
  {
    title: 'Full stack features',
    description: 'End-to-end delivery across the frontend, Node/NestJS backends, Firebase and SQL data layers.',
  },
  {
    title: 'Performance',
    description: 'Bundle and runtime tuning, lazy loading and rendering improvements for noticeably faster apps.',
  },
  {
    title: 'Modernisation',
    description: 'Structured migration of older codebases to modern, maintainable frontend architecture.',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Angular (v12–v18)', 'React', 'TypeScript', 'JavaScript (ES6+)', 'RxJS & Signals', 'HTML5 & CSS3', 'Tailwind CSS', 'Angular Material', 'Bootstrap', 'Vue.js'],
  },
  {
    title: 'Backend & data',
    skills: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Firebase / Firestore', 'MySQL', 'MongoDB', 'OAuth', 'MVC architecture'],
  },
  {
    title: 'Practice',
    skills: ['Performance optimisation', 'Reusable component design', 'Testing & debugging', 'AI-assisted development', 'Agile / Scrum', 'Git', 'Code review', 'Mentoring'],
  },
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/george-k-j/' },
  { label: 'GitHub', href: 'https://github.com/georgejo1012' },
]
