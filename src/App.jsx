import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  BriefcaseBusiness,
  Building2,
  Download,
  Mail,
  MapPin,
  Moon,
  Network,
  Phone,
  Sun,
} from 'lucide-react'

const profile = {
  name: 'George K. J',
  title: 'Frontend / Full Stack Developer',
  experienceLabel: '4+ Years Building Production Web Apps',
  location: 'Kannur, Kerala, India',
  email: 'georgejo1012@gmail.com',
  phone: '+91 7907351637',
  intro:
    'Results-driven developer focused on scalable, user-centered products with Angular and React, backed by Node.js and SQL-driven backend systems.',
}

const heroHeadline = 'Frontend / Full Stack Developer'
const heroSubheadline = 'Building premium, scalable web products with modern frontend and full stack engineering.'
const profileImageUrl = `${import.meta.env.BASE_URL}george-profile.jpeg`
const resumeUrl = `${import.meta.env.BASE_URL}GEORGE_2026.pdf`

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const metrics = [
  { value: '4+', label: 'Years of Experience' },
  { value: 'Angular 12-18', label: 'Framework Coverage' },
  { value: '2+', label: 'React Apps Delivered' },
  { value: 'Agile', label: 'Team Delivery Model' },
]

const skillGroups = [
  {
    title: 'Frontend Engineering',
    skills: [
      'Angular (v12-v18)',
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Angular Material',
      'Vue.js',
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      'Node.js',
      'NestJS',
      'Express.js',
      'REST API Integration',
      'MySQL',
      'MongoDB',
      'MVC Architecture',
      'Authentication (OAuth)',
    ],
  },
  {
    title: 'Workflow & Quality',
    skills: [
      'Performance Optimization',
      'Reusable Component Design',
      'Testing & Debugging',
      'Agile Methodologies',
      'Git & Version Control',
      'Cross-team Collaboration',
      'Code Reviews',
      'Mentoring',
    ],
  },
]

const experiences = [
  {
    company: 'Lithos Technosoft Pvt Ltd',
    role: 'Associate Angular Developer',
    period: 'Jul 2023 - Present',
    highlights: [
      'Built and maintained scalable Angular (v17+) modules for production web applications.',
      'Improved rendering performance through lazy loading and efficient component architecture.',
      'Integrated RESTful APIs with resilient state handling and cleaner data flow.',
      'Migrated legacy Angular code to modern standards and improved maintainability.',
      'Mentored junior developers and supported team code review processes.',
    ],
  },
  {
    company: 'Cloudium Softwares Pvt Ltd',
    role: 'Junior Software Developer',
    period: 'Mar 2022 - Jun 2023',
    highlights: [
      'Developed reusable Angular and TypeScript components to speed up feature delivery.',
      'Implemented asynchronous API workflows using RxJS.',
      'Contributed to OAuth-based authentication and secure user-flow implementation.',
      'Improved application responsiveness and overall performance through targeted optimizations.',
      'Worked in Agile sprints with planning, daily standups, and retrospectives.',
    ],
  },
]

const projects = [
  {
    title: 'Enterprise Angular Platform Modernization',
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    summary:
      'Modernized legacy Angular modules into maintainable, performant architecture with upgraded patterns and cleaner API integration.',
    points: [
      'Introduced lazy-loaded modules and reusable shared components.',
      'Reduced UI bottlenecks and improved first-load responsiveness.',
      'Strengthened code quality with reviews and maintainable structure.',
    ],
  },
  {
    title: 'React + Node Web Apps (AI-assisted Delivery)',
    stack: ['React.js', 'Node.js', 'Tailwind CSS', 'MySQL'],
    summary:
      'Delivered two modern React web applications with API-backed flows, responsive UI, and production-ready component systems.',
    points: [
      'Accelerated delivery with AI-assisted coding while keeping code clean.',
      'Built reusable UI patterns and robust data-integration workflows.',
      'Focused on fast iteration, polished UX, and strong performance.',
    ],
  },
  {
    title: 'Authentication & API Workflow Suite',
    stack: ['Angular', 'OAuth', 'Node.js', 'Express.js'],
    summary:
      'Implemented secure authentication and dynamic API workflows for business applications handling active user sessions and protected routes.',
    points: [
      'Integrated OAuth flows and protected app routes.',
      'Managed async API calls with resilient error handling patterns.',
      'Improved reliability of user-facing data interactions.',
    ],
  },
]

const services = [
  {
    title: 'Frontend Development',
    description:
      'Production-grade Angular and React interfaces with scalable component architecture and clean UX.',
  },
  {
    title: 'Full Stack Feature Delivery',
    description:
      'End-to-end implementation across React/Angular frontends, Node/NestJS backends, and SQL-driven data layers.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Bundle and runtime tuning, lazy loading, and rendering improvements for smoother, faster apps.',
  },
  {
    title: 'Legacy Migration Support',
    description:
      'Structured migration from older codebases into modern, maintainable frontend architecture.',
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/george-k-j/',
    icon: Network,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/georgejo1012',
    icon: Code2,
  },
  {
    label: 'Email',
    href: gmailComposeUrl,
    icon: Mail,
  },
]

const languages = ['English', 'Malayalam', 'Hindi', 'Tamil']

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  }),
}

function SectionHeader({ title, subtitle }) {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-page/85 backdrop-blur-xl">
        <div className="shell flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 font-display text-base font-semibold sm:text-lg"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.name}
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 px-1.5 py-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted transition hover:bg-surface hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            title="Toggle color mode"
            aria-label="Toggle color mode"
            onClick={() => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:text-text"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="border-t border-line/70 md:hidden">
          <div className="shell flex items-center gap-2 overflow-x-auto py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-muted"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="section-offset pb-10 pt-12 sm:pb-14 sm:pt-16">
          <div className="shell">
            <div className="panel hero-panel overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="grid items-center gap-8">
                <div>
                  <motion.div
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-soft px-3 py-1 text-xs font-semibold uppercase text-muted"
                  >
                    <BriefcaseBusiness size={14} className="text-accent" />
                    {profile.experienceLabel}
                  </motion.div>

                  <motion.h1
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                    custom={0.08}
                    className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl"
                  >
                    {heroHeadline}
                  </motion.h1>

                  <motion.p
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                    custom={0.12}
                    className="mt-4 max-w-2xl text-sm font-semibold text-accent sm:text-base"
                  >
                    {heroSubheadline}
                  </motion.p>

                  <motion.p
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                    custom={0.16}
                    className="mt-4 max-w-2xl text-base text-muted sm:text-lg"
                  >
                    {profile.intro}
                  </motion.p>

                <motion.div
                  variants={reveal}
                  initial="hidden"
                  animate="visible"
                  custom={0.22}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(15,118,110,0.95)] transition hover:bg-accent-strong"
                  >
                    Hire Me
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={resumeUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-text transition hover:border-accent/50 hover:bg-surface-soft"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="panel bg-surface/90 p-5 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                >
                  <p className="font-display text-2xl font-semibold text-text">{metric.value}</p>
                  <p className="mt-1 text-sm text-muted">{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-offset border-t border-line/70">
          <div className="shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <SectionHeader
                title="About Me"
                subtitle="A collaborative developer focused on business impact, maintainable architecture, and reliable delivery."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              custom={0.1}
              className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_1fr]"
            >
              <div className="panel p-6 sm:p-7">
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  Frontend and full stack developer with professional experience in modern JavaScript
                  ecosystems, especially Angular and React. I focus on building web products that stay
                  fast under scale, keep code clean for teams, and deliver polished user experiences.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  Over the last four years, I have worked on API-driven products, migration efforts,
                  performance upgrades, and production features across Agile teams. I combine practical
                  engineering decisions with consistent execution to help teams ship confidently.
                </p>
              </div>

              <div className="panel p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-text">Quick Facts</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
                  <li className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 text-accent" />
                    <span>{profile.location}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail size={16} className="mt-1 text-accent" />
                    <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="hover:text-text">
                      {profile.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone size={16} className="mt-1 text-accent" />
                    <a href={`tel:${profile.phone}`} className="hover:text-text">
                      {profile.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building2 size={16} className="mt-1 text-accent" />
                    <span>B.Tech - TOMS College of Engineering (2017-2021)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section-offset border-t border-line/70">
          <div className="shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <SectionHeader
                title="Skills"
                subtitle="A full stack toolkit for building scalable, polished, and business-ready applications."
              />
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group, index) => (
                <motion.article
                  key={group.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  custom={0.08 * (index + 1)}
                  className="panel p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                >
                  <h3 className="font-display text-xl font-semibold text-text">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              custom={0.3}
              className="panel mt-4 p-6 transition hover:border-accent/40"
            >
              <h3 className="font-display text-xl font-semibold text-text">Languages</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span key={language} className="tag">
                    {language}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section-offset border-t border-line/70">
          <div className="shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <SectionHeader
                title="Experience Timeline"
                subtitle="Professional journey delivering frontend and full stack features across modern product teams."
              />
            </motion.div>

            <ol className="relative mt-10 border-l border-line pl-7">
              {experiences.map((item, index) => (
                <motion.li
                  key={item.company}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  custom={0.1 * (index + 1)}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full border border-line bg-accent" />
                  <article className="panel p-6 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-text">{item.role}</h3>
                        <p className="mt-1 text-sm font-semibold text-muted">{item.company}</p>
                      </div>
                      <span className="tag">{item.period}</span>
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-muted sm:text-base">
                      {item.highlights.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-warm" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="section-offset border-t border-line/70">
          <div className="shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <SectionHeader
                title="Projects Showcase"
                subtitle="Representative production work and delivery patterns aligned with enterprise and client-facing outcomes."
              />
            </motion.div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  custom={0.1 * (index + 1)}
                  className="panel flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                >
                  <h3 className="font-display text-xl font-semibold text-text">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-muted sm:text-base">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-offset border-t border-line/70">
          <div className="shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <SectionHeader
                title="Services Offered"
                subtitle="Flexible engagement for product teams, startups, and client projects."
              />
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  custom={0.1 * (index + 1)}
                  className="panel p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                >
                  <h3 className="font-display text-xl font-semibold text-text">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-offset border-t border-line/70 pb-20">
          <div className="shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <SectionHeader
                title="Contact"
                subtitle="Available for full-time roles, freelance projects, and long-term client collaborations."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              custom={0.1}
              className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_1fr]"
            >
              <div className="panel p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-text">Let&apos;s Build Something Great</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  I help teams design, build, and ship robust web platforms with clean architecture,
                  modern UI, and strong delivery discipline.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(15,118,110,0.95)] transition hover:bg-accent-strong"
                  >
                    <Mail size={16} />
                    Email Me
                  </a>
                  <a
                    href={resumeUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-text transition hover:border-accent/50 hover:bg-surface-soft"
                  >
                    <Download size={16} />
                    Resume
                  </a>
                </div>
              </div>

              <div className="panel p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-text">Connect</h3>
                <ul className="mt-4 space-y-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-between rounded-md border border-line bg-surface-soft px-4 py-3 text-sm font-semibold text-muted transition hover:border-accent/40 hover:text-text"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Icon size={16} />
                            {link.label}
                          </span>
                          <ArrowRight size={14} />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70 py-6">
        <div className="shell flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted">
            (c) {currentYear} {profile.name}. Frontend / Full Stack Developer.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:border-accent/40 hover:text-text"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
