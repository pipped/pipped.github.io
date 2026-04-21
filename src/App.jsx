export default function DylanPortfolio() {
  const projects = [
    {
      title: "MessyApp",
      tag: "Senior Design • NFC Application",
      description:
        "Developed an NFC-based wardrobe management application that connects physical clothing items to a digital system. Integrated weather data and implemented outfit generation features to provide intelligent clothing recommendations. Worked across the stack to build, test, and deploy a real-world application.",
      stack: ["NFC", "Full Stack", "Web App", "APIs", "Team Project"],
      link: "https://messyapp.org",
    },
    {
      title: "Home Lab",
      tag: "Infrastructure / Networking",
      description:
        "Built a personal homelab as a virtualized network environment for testing, development, and system administration practice. The setup runs on a physical Hyper-V host and includes pfSense for firewall segmentation, a Windows Server 2019 VM for Active Directory and DNS, a Docker host for tools like Portainer and Pi-hole, and an Ubuntu VM for scripting and SSH-based management.",
      stack: ["Hyper-V", "pfSense", "Windows Server", "Active Directory", "DNS", "Docker", "Ubuntu"],
      link: "https://github.com/pipped/Home-Lab",
    },
    {
      title: "CIT",
      tag: "IT Operations",
      description:
        "Showcases hands-on IT work including Windows and Linux OS installations, system wipes and reinstalls, VMware-based virtual server deployment, troubleshooting compatibility issues, configuring user permissions, and applying network and security settings in lab-style environments.",
      stack: ["Windows", "Linux", "VMware", "System Administration", "Troubleshooting", "Security Policies"],
      link: "https://github.com/pipped/CIT",
    },
    {
      title: "COMP",
      tag: "CS Foundations",
      description:
        "A computer science repository organized across branches that reflects coursework, technical growth, and a foundation in software and systems thinking that complements hands-on IT and infrastructure work.",
      stack: ["Computer Science", "Git", "Branching", "Coursework"],
      link: "https://github.com/pipped/COMP",
    },
  ];

  const skills = [
    "System Administration",
    "Networking",
    "Virtualization",
    "Windows Server",
    "Linux",
    "Active Directory",
    "DNS",
    "Docker",
    "pfSense",
    "Hyper-V",
    "VMware",
    "Technical Troubleshooting",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient text-slate-100">
      <main className="relative mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        <section className="animate-fade grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-12">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 shadow-lg shadow-black/20 backdrop-blur">
              Dylan • IT Portfolio
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                IT graduate building real systems, networks, and lab environments.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                I’m Dylan, an IT student graduating this year with a focus on hands-on infrastructure,
                system administration, virtualization, and networking. I enjoy building practical
                environments that mirror real-world IT operations, from Windows Server services to
                virtualized lab networks and Linux-based tooling.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/pipped"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dylansokolov/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-medium text-slate-100 transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
              >
                LinkedIn
              </a>

              <a
                href="mailto:dylansokolov1@gmail.com"
                className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-medium text-slate-100 transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Why hire me</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                I bring a practical, hands-on approach to IT work and enjoy learning by building,
                testing, and troubleshooting real systems.
              </p>
              <p>
                My projects reflect experience with virtual environments, operating systems,
                firewall segmentation, server roles, and technical documentation.
              </p>
              <p>
                I’m looking for an opportunity where I can grow in IT support, systems,
                infrastructure, or junior administrator roles.
              </p>
            </div>
          </div>
        </section>

        <section className="animate-fade mt-16 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">About me</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Focused on practical IT work</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              My portfolio is centered on the kind of work I want to keep doing professionally:
              building environments, supporting systems, solving technical problems, and improving
              reliability through thoughtful configuration and testing.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I’m especially interested in roles where I can contribute to infrastructure, support,
              networking, virtualization, or systems administration while continuing to grow my
              technical depth.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Core skills</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition duration-200 ease-in-out hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="animate-fade mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Featured work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Projects that represent my experience</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-xl shadow-black/20 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:border-slate-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {project.tag}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition duration-200 ease-in-out hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-300 transition duration-200 ease-in-out group-hover:text-blue-200"
                  >
                    View project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/75 p-8 shadow-2xl shadow-black/30">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Next step</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Let’s connect</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            I’m graduating this year with an IT degree and actively looking for opportunities where I can
            contribute, keep learning, and grow in infrastructure, support, or systems-focused roles.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/pipped"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            >
              GitHub Profile
            </a>
            <a
              href="mailto:dylansokolov1@gmail.com"
              className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-medium text-slate-100 transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}