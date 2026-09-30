const base = import.meta.env.BASE_URL

/*
 * FILL-IN GUIDE
 * - Empty strings, empty arrays and `null` are "not filled in yet": the matching block is simply
 *   not rendered, so the live site never shows an empty section.
 * - Placeholder text (a capital letter in square brackets) IS rendered as-is. Replace it before pushing;
 *   `npm run dev` lists any that remain in the browser console.
 * - Images go in /public (e.g. public/work/...). Reference them as `${base}work/file.webp`.
 */

export const siteUrl = 'https://gjo1998.github.io/portfolio/'

// Screenshots are exported at 800w and 1440w WebP; the browser picks the right one.
const responsiveShot = (name) => ({
  src: `${base}work/${name}-1440.webp`,
  srcSet: `${base}work/${name}-800.webp 800w, ${base}work/${name}-1440.webp 1440w`,
})

export const profile = {
  name: 'George K. J',
  title: 'Frontend & Full Stack Developer',
  // One sentence on who you build for; shown under your name in the hero.
  specialisation: 'I build for product teams, and for healthcare and service businesses that need a calm, trustworthy web presence.',
  location: 'Kannur, Kerala, India',
  locality: 'Kannur',
  region: 'Kerala',
  country: 'IN',
  email: 'georgejo1012@gmail.com',
  phone: '+91 7907351637',
  // true: the number stays out of the page HTML and appears only after a "Show number" click (reduces scraping).
  hidePhoneNumber: false,
  education: 'B.Tech — TOMS College of Engineering (2017–2021)',
  degree: { title: 'Bachelor of Technology (B.Tech)', school: 'TOMS College of Engineering', period: '2017 — 2021', startYear: '2017' },
  // Hero portrait: 640w for phones, 1000w for the half-screen desktop hero.
  photo: {
    src: `${base}george-portrait-1000.webp`,
    srcSet: `${base}george-portrait-640.webp 640w, ${base}george-portrait-1000.webp 1000w`,
  },
  resume: `${base}George_K_J_Resume_2026.pdf`,
  languages: ['English', 'Malayalam', 'Hindi', 'Tamil'],
  linkedin: 'https://www.linkedin.com/in/george-k-j/',
  // Must match the GitHub account that hosts this repo (github.com/gjo1998/portfolio),
  // so visitors can verify the code. Update siteUrl above too if the account changes.
  github: 'https://github.com/gjo1998',
}

// Formspree form endpoint, e.g. 'https://formspree.io/f/abcdwxyz'. Leave empty to hide the contact form
// (the mailto link and copy button always remain as a fallback).
export const formspreeEndpoint = ''

// A plain mailto works with whatever mail app the visitor uses (Gmail, Outlook, Apple Mail...).
export const mailtoUrl = `mailto:${profile.email}`

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Résumé', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

// About section copy (from the CV summary).
export const about = {
  bio: [
    'I’m a frontend-focused full stack developer with 4.5+ years of designing, building and optimising scalable, high-performance web applications.',
    'My core is Angular, TypeScript and RxJS, with hands-on React and backend work in Node.js, NestJS, Express, MySQL and MongoDB. I modernise legacy codebases, build reusable component libraries and use techniques like lazy loading to keep apps fast.',
    'I mentor junior developers, care about code review, and work closely with backend and product teams in Agile environments to ship reliable, business-focused software.',
  ],
}

export const heroStats = [
  { value: '4.5+', label: 'Years shipping production web apps' },
  { value: 'Angular · React · Node', label: 'Production apps across product teams and clients' },
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
    // e.g. { src: `${base}work/levshema-admin.webp`, alt: 'Admin console showing the week’s bookings' }
    admin: null,
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
  stack: ['Angular (standalone, signals, zoneless)', 'Firebase / Firestore', 'Lazy-loaded routes', 'Vercel', 'WhatsApp integration'],

  caseStudy: {
    // 2–3 sentences: how the centre worked before (bookings by phone? no website? scattered records?).
    problem: '',
    // Timeline, solo or team, budget. Leave a value empty to hide that row.
    constraints: [
      { label: 'Timeline', value: '' },
      { label: 'Team', value: '' },
      { label: 'Budget', value: '' },
    ],
    process: {
      // One step per stage. Text is optional; a step with empty text is hidden.
      steps: [
        { title: 'Research', text: '' },
        { title: 'Wireframes', text: '' },
        { title: 'Key decisions', text: '' },
      ],
      // 1–2 wireframe or early-sketch images, e.g. { src: `${base}work/levshema-wireframe.webp`, alt: '…', caption: '…' }
      images: [],
    },
    // Already-known design decisions for the booking flow; shown under Process.
    bookingNotes: [
      'Progress is always visible, so a first-time visitor knows exactly how much is left.',
      'Each service shows its duration and whether it’s offered online or in person.',
      'Clear inline validation, plus a fallback to call when online booking is closed.',
      'Privacy by design: the form asks visitors not to share health history before their session.',
    ],
    // A metric card renders only when its value is filled in, e.g. value: '98'.
    outcomes: [
      { label: 'Lighthouse performance (mobile)', value: '' },
      { label: 'Bookings per month', value: '' },
      { label: 'Median time to book', value: '' },
      { label: 'Home page weight', value: '' },
    ],
    // Optional. Leave quote empty to hide the block.
    testimonial: { quote: '', name: '', role: '' },
    // One paragraph on what you'd build or improve next.
    next: '',
  },
}

export const moreWork = [
  {
    title: 'Enterprise Angular platform modernisation',
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    summary:
      'Moved legacy Angular modules to lazy-loaded standalone components, cutting initial load time, with shared UI and cleaner API integration.',
    // One-line measurable result, shown as a highlighted line when filled in.
    result: '',
    // Optional: { href: 'https://…', label: 'Live site' | 'GitHub' }
    link: null,
    // Optional thumbnail: { src: `${base}work/…webp`, alt: '…' }. Switches the row to a card with an image.
    image: null,
  },
  {
    title: 'React + Node web applications',
    stack: ['React', 'Node.js', 'Tailwind CSS', 'MySQL'],
    summary:
      'Shipped two React + Node.js applications to production, with API-backed flows, responsive UI and a reusable component system.',
    result: '',
    link: null,
    image: null,
  },
  {
    title: 'Authentication & API workflow suite',
    stack: ['Angular', 'OAuth', 'Node.js', 'Express'],
    summary:
      'Secured sign-in for active business users with OAuth, protected routes and resilient async API handling across applications.',
    result: '',
    link: null,
    image: null,
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
    startYear: '2023',
    duration: formatDuration('2023-07'),
    highlights: [
      'Develop and maintain scalable web applications with Angular (v17+) and TypeScript.',
      'Optimise performance through lazy loading and efficient component design.',
      'Integrate RESTful APIs and improve data handling alongside backend teams.',
      'Migrate legacy code to modern Angular standards for long-term maintainability.',
      'Mentor junior developers and take part in code reviews to keep quality high.',
      'Built two React.js + Node.js web applications with reusable components and API integrations.',
    ],
  },
  {
    company: 'Cloudium Softwares Pvt Ltd',
    role: 'Junior Software Developer',
    period: 'Mar 2022 — Jun 2023',
    startYear: '2022',
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
    skills: ['Angular (v12–v20)', 'React', 'TypeScript', 'JavaScript (ES6+)', 'RxJS & Signals', 'HTML5 & CSS3', 'Tailwind CSS', 'Angular Material', 'Bootstrap', 'Vue.js'],
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
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
]
