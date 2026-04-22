import heroImage from './assets/hero.png'

const projects = [
  {
    title: 'MessyApp',
    tag: 'Senior Design / NFC Application',
    description:
      'Developed an NFC-based wardrobe management app that connects physical clothing items to a digital system with weather-aware outfit suggestions.',
    stack: ['NFC', 'Full Stack', 'Web App', 'APIs', 'Team Project'],
    link: 'https://messyapp.org',
  },
  {
    title: 'COMP',
    tag: 'CS Foundations',
    description:
      'A coursework repository organized across branches that reflects steady technical growth in software, systems thinking, and version control.',
    stack: ['Computer Science', 'Git', 'Branching', 'Coursework'],
    link: 'https://github.com/pipped/COMP',
  },
  {
    title: 'Home Lab',
    tag: 'Infrastructure / Networking',
    description:
      'Built a virtualized lab with Hyper-V, pfSense, Windows Server, Docker, and Ubuntu to practice segmentation, server roles, and day-to-day administration.',
    stack: ['Hyper-V', 'pfSense', 'Windows Server', 'Active Directory', 'DNS', 'Docker'],
    link: 'https://github.com/pipped/Home-Lab',
  },
  {
    title: 'CIT',
    tag: 'IT Operations',
    description:
      'Documented hands-on IT support work including installs, reinstalls, VMware deployment, troubleshooting, permissions, and security configuration.',
    stack: ['Windows', 'Linux', 'VMware', 'SysAdmin', 'Troubleshooting', 'Security'],
    link: 'https://github.com/pipped/CIT',
  },
]

const skills = [
  'CompTIA Security+',
  'System Administration',
  'Networking',
  'Virtualization',
  'Windows Server',
  'Linux',
  'Active Directory',
  'DNS',
  'Docker',
  'pfSense',
  'Hyper-V',
  'VMware',
  'Technical Troubleshooting',
]

const highlights = [
  { value: '4', label: 'featured projects' },
  { value: 'Security+', label: 'CompTIA certified' },
  { value: '1', label: 'clear focus: infrastructure' },
]

const focusAreas = [
  'Building realistic lab environments',
  'Troubleshooting across Windows and Linux systems',
  'Learning through hands-on infrastructure projects',
]

export default function DylanPortfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_#17304f_0%,_#09111d_38%,_#050914_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb orb-cyan" />
        <div className="orb orb-amber" />
        <div className="grid-overlay" />
      </div>

      <main className="relative mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-12">
        <header className="glass-panel glow-shell reveal-up mb-10 flex flex-col gap-4 rounded-[2rem] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">Dylan Sokolov</p>
            <p className="mt-2 text-sm text-slate-300">Portfolio for IT support, systems, and infrastructure roles.</p>
          </div>

          <nav className="flex flex-wrap gap-2 text-sm text-slate-200">
            <a href="#about" className="nav-pill">
              About
            </a>
            <a href="#projects" className="nav-pill">
              Projects
            </a>
            <a href="#contact" className="nav-pill">
              Contact
            </a>
          </nav>
        </header>

        <section className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel glow-shell reveal-up rounded-[2rem] p-7 sm:p-9">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100">
              Available for IT and infrastructure roles
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hands-on IT work, presented like someone ready to step into production environments.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I&apos;m Dylan, an IT graduate focused on systems administration, networking, virtualization,
              and practical troubleshooting. I enjoy building environments that feel real, useful, and
              close to the kinds of problems teams solve every day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/pipped"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                View GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dylansokolov/"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                LinkedIn
              </a>
              <a href="mailto:dylansokolov1@gmail.com" className="button-secondary">
                Email Me
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <div key={item.label} className="stat-card reveal-up" style={{ animationDelay: `${0.08 * (index + 1)}s` }}>
                  <div className="text-3xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="grid gap-6">
            <div className="glass-panel glow-shell reveal-up relative overflow-hidden rounded-[2rem] p-5">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-300/15 to-transparent" />
              <img
                src={heroImage}
                alt="Portfolio hero graphic"
                className="floating-hero h-56 w-full rounded-[1.5rem] object-cover object-center"
              />

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="glow-shell rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Current focus</p>
                  <p className="mt-3 text-lg font-medium text-white">Support, systems, networking, and lab operations</p>
                </div>

                <div className="glow-shell rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">What stands out</p>
                  <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                    {focusAreas.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel glow-shell reveal-up rounded-[2rem] p-7">
            <p className="section-label">About Me</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Focused on practical infrastructure work</h2>
            <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
              My portfolio is centered on the kind of work I want to keep doing professionally:
              supporting systems, building environments, solving technical problems, and improving
              reliability through careful setup and testing.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
              I also hold the CompTIA Security+ certification, which strengthens the security
              foundation behind my systems, networking, and support work.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
              The goal of this site is to show technical depth clearly. Instead of listing buzzwords, it
              points to real projects involving Windows Server, virtualization, networking, Linux tools,
              and hands-on troubleshooting.
            </p>
          </div>

          <div className="glass-panel glow-shell reveal-up rounded-[2rem] p-7">
            <p className="section-label">Core Skills</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mt-8">
          <div className="glass-panel glow-shell reveal-up rounded-[2rem] p-7 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label">Featured Work</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Projects that show how I work</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                Each project reflects a different angle of my experience, from application work to
                infrastructure, support, and foundational computer science.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => (
                <article key={project.title} className="project-card reveal-up">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                        Project {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs text-amber-100">
                      {project.tag}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
                    >
                      Open project
                      <span aria-hidden="true">-&gt;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-8">
          <div className="glass-panel glow-shell reveal-up rounded-[2rem] p-7 sm:p-8">
            <p className="section-label">Next Step</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-semibold text-white">Let&apos;s connect</h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                  I&apos;m actively looking for opportunities where I can contribute, keep learning, and
                  grow in infrastructure, support, or systems-focused roles. If that aligns with what
                  you&apos;re building, I&apos;d love to talk.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="https://github.com/pipped"
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  GitHub Profile
                </a>
                <a href="mailto:dylansokolov1@gmail.com" className="button-secondary">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
