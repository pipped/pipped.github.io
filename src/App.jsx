import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const projects = [
  {
    title: 'MessyApp',
    tag: 'Senior Design / NFC Application',
    description:
      'NFC-based wardrobe management app connecting physical clothing items to a digital system with weather-aware outfit suggestions.',
    stack: ['NFC', 'Full Stack', 'APIs', 'Team Project'],
    link: 'https://messyapp.org',
  },
  {
    title: 'Home Lab',
    tag: 'Infrastructure / Networking',
    description:
      'Virtualized lab using Hyper-V, pfSense, Windows Server, Docker, and Ubuntu for segmentation, server roles, and admin practice.',
    stack: ['Hyper-V', 'pfSense', 'Windows Server', 'Docker'],
    link: 'https://github.com/pipped/Home-Lab',
  },
  {
    title: 'AI Transcribe',
    tag: 'AI / Speech-to-Text',
    description:
      'Speech-to-text project focused on turning spoken audio into clean, usable text for real-world utility and automation workflows.',
    stack: ['AI', 'Transcription', 'Automation'],
    link: 'https://github.com/pipped/ai-transcribe',
  },
  {
    title: 'CIT',
    tag: 'IT Operations',
    description:
      'Hands-on IT support documentation covering installs, VMware deployment, troubleshooting, permissions, and security configuration.',
    stack: ['Windows', 'Linux', 'VMware', 'Security'],
    link: 'https://github.com/pipped/CIT',
  },
]

const skills = [
  'System Administration',
  'Networking',
  'AI / LLM Workflows',
  'Claude',
  'Codex',
  'Virtualization',
  'Windows Server',
  'Linux',
  'Active Directory',
  'DNS',
  'Docker',
  'pfSense',
  'Hyper-V',
  'VMware',
  'Troubleshooting',
]

const profileDetails = [
  { label: 'Infrastructure', value: 'Routing, segmentation, virtualization, and server roles' },
  { label: 'Security', value: 'Identity, access control, logs, hardening, and troubleshooting' },
  { label: 'Automation', value: 'AI-assisted workflows, documentation, scripting, and support utilities' },
]

const metrics = [
  { value: '4', label: 'featured builds' },
  { value: 'Security+', label: 'CompTIA certified' },
  { value: 'May 2026', label: 'CSUN IT degree' },
]

const operations = [
  { title: 'Infrastructure', detail: 'Routing, segmentation, identity, and virtualized services' },
  { title: 'AI workflow', detail: 'Practical LLM use with Claude and Codex for research, code, and automation' },
  { title: 'Operations', detail: 'Clear documentation, troubleshooting habits, and dependable handoffs' },
]

const zeroTrustPolicies = [
  { name: 'Verify identity', state: 'MFA mindset' },
  { name: 'Limit access', state: 'Least privilege' },
  { name: 'Watch activity', state: 'Logs and alerts' },
]

const portfolioSignals = [
  { service: 'Security+', state: 'Certified' },
  { service: 'AI / LLMs', state: 'Proficient' },
  { service: 'Systems', state: 'Practiced' },
  { service: 'Support', state: 'Ready' },
]

const terminalLines = [
  { prompt: '$', text: 'cd ~/homelab/topology' },
  { prompt: '$', text: 'ls' },
  { prompt: '>', text: 'pfSense  ad-dns  docker  logs' },
  { prompt: '$', text: 'open topology.map' },
]

const topologyNodes = [
  {
    label: 'WAN',
    detail: 'External network edge feeding the lab firewall.',
    style: { '--node-x': '18%', '--node-y': '50%' },
  },
  {
    label: 'pfSense',
    detail: 'Firewall and routing layer for segmented lab traffic.',
    style: { '--node-x': '50%', '--node-y': '50%' },
  },
  {
    label: 'AD / DNS',
    detail: 'Windows Server identity and name resolution practice.',
    style: { '--node-x': '82%', '--node-y': '30%' },
  },
  {
    label: 'LAN',
    detail: 'Internal network segment for workstation and service testing.',
    style: { '--node-x': '82%', '--node-y': '50%' },
  },
  {
    label: 'Docker',
    detail: 'Container services for dashboards, monitoring, and utilities.',
    style: { '--node-x': '82%', '--node-y': '70%' },
  },
  {
    label: 'Logs',
    detail: 'System and service logs used for troubleshooting practice.',
    style: { '--node-x': '50%', '--node-y': '78%' },
  },
]

const topologyLegend = ['Edge', 'Firewall', 'Identity', 'Services', 'Logs']

const introLines = [
  'ssh dylan@portfolio-node',
  'handshake accepted :: aes256-gcm',
  'scanning projects/ skills/ lab-notes/',
  'elevating session profile...',
  'render --target web',
  "Dylan's Portfolio",
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const MotionAside = motion.aside
const MotionDiv = motion.div
const MotionHeader = motion.header
const MotionSection = motion.section
const MotionArticle = motion.article

function IntroTerminal() {
  return (
    <MotionDiv
      className="intro-terminal-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Portfolio loading animation"
    >
      <div className="intro-terminal" aria-hidden="true">
        <div className="intro-terminal-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="intro-terminal-lines">
          {introLines.map((line, index) => (
            <p
              key={line}
              className={index === introLines.length - 1 ? 'intro-line intro-line-final' : 'intro-line'}
              style={{
                '--char-count': line.length,
                '--type-width': `${line.length}ch`,
                '--intro-delay': `${index * 0.46}s`,
              }}
            >
              <span className="intro-prompt">{index === introLines.length - 1 ? '>' : '$'}</span>
              <span className="intro-type">{line}</span>
            </p>
          ))}
        </div>
      </div>
    </MotionDiv>
  )
}

function Icon({ name }) {
  const paths = {
    moon: 'M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z',
    sun: 'M12 4V2m0 20v-2m8-8h2M2 12h2m14.95 6.95 1.41 1.41M3.64 3.64l1.41 1.41m13.9-1.41-1.41 1.41M3.64 20.36l1.41-1.41M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
    arrow: 'M5 12h14m-6-6 6 6-6 6',
    external: 'M7 17 17 7m0 0H9m8 0v8',
    shield: 'M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z',
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

function CyberVisual() {
  return (
    <div className="cyber-visual" aria-label="Animated home lab network topology">
      <svg viewBox="0 0 420 240" role="img" aria-hidden="true">
        <title>Home lab network topology</title>
        <rect className="topology-zone zone-edge" x="24" y="26" width="104" height="188" rx="8" />
        <rect className="topology-zone zone-lan" x="292" y="26" width="104" height="188" rx="8" />
        <path className="topology-link link-main" d="M76 120H180" />
        <path className="topology-link link-main" d="M240 120H344" />
        <path className="topology-link link-branch" d="M344 120V72" />
        <path className="topology-link link-branch" d="M344 120v48" />
        <path className="topology-link link-branch" d="M210 150v36h134" />

        <g className="topology-device device-edge" transform="translate(76 120)">
          <circle r="24" />
          <text y="5">WAN</text>
        </g>
        <g className="topology-device device-firewall" transform="translate(210 120)">
          <rect x="-36" y="-28" width="72" height="56" rx="8" />
          <text y="-2">pfSense</text>
          <text y="15">Firewall</text>
        </g>
        <g className="topology-device device-node" transform="translate(344 72)">
          <rect x="-34" y="-21" width="68" height="42" rx="8" />
          <text y="5">AD / DNS</text>
        </g>
        <g className="topology-device device-node" transform="translate(344 120)">
          <rect x="-34" y="-21" width="68" height="42" rx="8" />
          <text y="5">LAN</text>
        </g>
        <g className="topology-device device-node" transform="translate(344 168)">
          <rect x="-34" y="-21" width="68" height="42" rx="8" />
          <text y="5">Docker</text>
        </g>
        <g className="topology-device device-log" transform="translate(210 186)">
          <rect x="-34" y="-18" width="68" height="36" rx="8" />
          <text y="5">Logs</text>
        </g>

        <circle className="packet packet-a" r="4" />
        <circle className="packet packet-b" r="4" />
        <circle className="packet packet-c" r="3.5" />
        <circle className="packet packet-d" r="3.5" />
        <circle className="packet packet-e" r="3.5" />
      </svg>
      <div className="topology-hotspots" aria-label="Home lab topology nodes">
        {topologyNodes.map((node) => (
          <button
            key={node.label}
            className="topology-hotspot"
            type="button"
            style={node.style}
            aria-label={`${node.label}: ${node.detail}`}
          >
            <span className="hotspot-ring" aria-hidden="true" />
            <span className="hotspot-tooltip">
              <strong>{node.label}</strong>
              <span>{node.detail}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="topology-legend" aria-label="Topology legend">
        {topologyLegend.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <span className="scan-line" aria-hidden="true" />
    </div>
  )
}

function RevealSection({ className, children, ...props }) {
  return (
    <MotionSection
      {...props}
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </MotionSection>
  )
}

export default function DylanPortfolio() {
  const [theme, setTheme] = useState('dark')
  const [introComplete, setIntroComplete] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    if (introComplete) {
      return undefined
    }

    const introTimer = window.setTimeout(() => {
      setIntroComplete(true)
    }, 6500)

    return () => window.clearTimeout(introTimer)
  }, [introComplete])

  const isDark = theme === 'dark'

  return (
    <>
      <AnimatePresence>{!introComplete && <IntroTerminal />}</AnimatePresence>
      <MotionDiv
        className="site-shell"
        initial={{
          opacity: introComplete ? 1 : 0,
          y: introComplete ? 0 : 14,
          filter: introComplete ? 'blur(0px)' : 'blur(10px)',
        }}
        animate={{
          opacity: introComplete ? 1 : 0,
          y: introComplete ? 0 : 14,
          filter: introComplete ? 'blur(0px)' : 'blur(10px)',
        }}
        transition={{
          delay: introComplete ? 0.22 : 0,
          duration: 1.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
      <div className="grid-field" aria-hidden="true" />
      <div className="ambient ambient-cyan" aria-hidden="true" />
      <div className="ambient ambient-gold" aria-hidden="true" />

      <MotionHeader
        className="topbar"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#top" className="brand-lockup" aria-label="Dylan Sokolov home">
          <span className="brand-mark">DS</span>
          <span>
            <strong>Dylan Sokolov</strong>
            <small>Cybersecurity, IT systems, and AI workflow portfolio</small>
          </span>
        </a>
        <nav className="topbar-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          <Icon name={isDark ? 'sun' : 'moon'} />
        </button>
      </MotionHeader>

      <main id="top" className="page">
        <MotionSection className="hero-card" variants={containerVariants} initial="hidden" animate="show">
          <div className="hero-layout">
            <MotionDiv className="hero-copy" variants={itemVariants}>
              <p className="eyebrow">Network engineering & cybersecurity path</p>
              <h1>Building toward secure networks & resilient IT systems.</h1>
              <p className="hero-text">
                I&apos;m Dylan Sokolov, focused on network engineering & cybersecurity. I&apos;m especially
                interested in routing, segmentation, defensive security, and lab-based troubleshooting,
                while staying open to IT support, systems, infrastructure, and entry-level technical
                roles where I can keep learning fast.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  View Work
                  <Icon name="arrow" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button button-secondary">
                  Resume
                  <Icon name="external" />
                </a>
              </div>
            </MotionDiv>

            <MotionAside className="summary-panel" variants={itemVariants} aria-label="HomeLab console">
              <div className="panel-topline">
                <span>HomeLab Console</span>
                <span className="status-dot">Open to roles</span>
              </div>
              <div className="security-checks" aria-label="Zero Trust policy checks">
                <div className="security-checks-header">
                  <span>Zero Trust Policy</span>
                  <strong>Practice</strong>
                </div>
                <div className="security-checks-list">
                  {zeroTrustPolicies.map((policy) => (
                    <div key={policy.name} className="security-check">
                      <span className="check-mark" aria-hidden="true" />
                      <div>
                        <strong>{policy.name}</strong>
                        <span>{policy.state}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="terminal-widget" aria-label="Mock CLI activity">
                <div className="terminal-widget-header">
                  <span>CLI Monitor</span>
                  <strong>Lab</strong>
                </div>
                <div className="terminal-lines">
                  {terminalLines.map((line, index) => (
                    <p key={`${line.prompt}-${line.text}`} style={{ '--line-index': index }}>
                      <span>{line.prompt}</span>
                      {line.text}
                    </p>
                  ))}
                </div>
                <CyberVisual />
              </div>
            </MotionAside>
          </div>

          <MotionDiv className="metric-grid" variants={containerVariants}>
            {metrics.map((metric) => (
              <MotionDiv className="metric" key={metric.label} variants={itemVariants}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </MotionDiv>
            ))}
          </MotionDiv>

          <div className="signal-rail" aria-label="Portfolio readiness monitor">
            <div className="heartbeat-monitor" aria-hidden="true">
              <span className="monitor-label">Career signal</span>
              <svg viewBox="0 0 260 44">
                <path className="heartbeat-grid-line" d="M0 22H260" />
                <path className="heartbeat-path" d="M0 22h40l10-15 15 30 14-22h30l9-11 16 27 12-17h114" />
              </svg>
            </div>
            <div className="focus-strip">
              {portfolioSignals.map((item) => (
                <span key={item.service}>
                  <strong>{item.service}</strong>
                  <small>{item.state}</small>
                </span>
              ))}
            </div>
          </div>
        </MotionSection>

        <RevealSection id="about" className="section-stack">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Cybersecurity enthusiast with a practical IT foundation.</h2>
          </div>

          <div className="content-grid">
            <MotionArticle className="info-card info-card-large" variants={itemVariants}>
              <h3>Curious about how systems are protected</h3>
              <p>
                I&apos;m drawn to cybersecurity because it connects the parts of IT I enjoy most:
                networks, identity, access control, logs, troubleshooting, and understanding how
                systems behave when something goes wrong.
              </p>
              <p>
                My goal is to keep building toward network engineering and security work while staying
                open to roles across IT support, systems, and infrastructure where I can strengthen
                the fundamentals and contribute quickly.
              </p>
            </MotionArticle>

            <MotionArticle className="info-card" variants={itemVariants}>
              <h3>Technical range</h3>
              <div className="profile-detail-grid">
                {profileDetails.map((item) => (
                  <p key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </p>
                ))}
              </div>
              <div className="chip-grid">
                {skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </MotionArticle>
          </div>
        </RevealSection>

        <RevealSection className="section-stack">
          <div className="section-heading">
            <p className="eyebrow">Working style</p>
            <h2>Clear notes, practical tests, useful automation.</h2>
          </div>

          <MotionDiv className="ops-grid" variants={containerVariants}>
            {operations.map((item) => (
              <MotionArticle className="ops-card" key={item.title} variants={itemVariants}>
                <Icon name="shield" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </MotionArticle>
            ))}
          </MotionDiv>

        </RevealSection>

        <RevealSection id="projects" className="section-stack">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Featured work</p>
            <h2>Projects with a clear technical signal.</h2>
            <p>
              A compact view of infrastructure practice, security-minded lab work, AI utility work,
              application building, and support documentation.
            </p>
          </div>

          <MotionDiv className="projects-grid" variants={containerVariants}>
            {projects.map((project, index) => (
              <MotionArticle
                className="project-card"
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{project.tag}</p>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="mini-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  Open project
                  <Icon name="external" />
                </a>
              </MotionArticle>
            ))}
          </MotionDiv>
        </RevealSection>

        <MotionSection
          id="contact"
          className="contact-panel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={containerVariants}
        >
          <MotionDiv variants={itemVariants}>
            <p className="eyebrow">Connect with me</p>
            <h2>Let&apos;s connect about technical roles where I can contribute and keep learning.</h2>
            <p>
              I&apos;m interested in networking, cybersecurity, systems, IT support, and practical AI-enabled
              workflows where troubleshooting, documentation, and reliable execution matter.
            </p>
          </MotionDiv>
          <MotionDiv className="contact-actions" variants={itemVariants}>
            <a href="https://github.com/pipped" target="_blank" rel="noreferrer" className="button button-primary">
              GitHub
              <Icon name="external" />
            </a>
            <a
              href="https://www.linkedin.com/in/dylansokolov/"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              LinkedIn
              <Icon name="external" />
            </a>
            <a href="mailto:dylansokolov1@gmail.com" className="button button-secondary">
              Email
              <Icon name="arrow" />
            </a>
          </MotionDiv>
        </MotionSection>
      </main>
      </MotionDiv>
    </>
  )
}
