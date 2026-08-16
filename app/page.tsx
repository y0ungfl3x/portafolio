import { ArrowUpRight, Mail, MoveUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Sistema de operaciones',
    description: 'Plataforma interna para automatizar procesos, centralizar datos y tomar mejores decisiones.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'E-commerce headless',
    description: 'Experiencia de compra rápida y flexible, diseñada para crecer junto al negocio.',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    number: '03',
    title: 'Dashboard de métricas',
    description: 'Visualización clara de indicadores clave para convertir datos complejos en acción.',
    tags: ['React', 'APIs', 'Charts'],
  },
]

const skills = ['TypeScript', 'React / Next.js', 'Node.js', 'Bases de datos', 'APIs REST', 'UI systems']

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-12">
        <a href="#inicio" className="font-mono text-sm font-semibold tracking-tight" aria-label="Inicio">
          RC<span className="text-muted-foreground">/</span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs text-muted-foreground sm:flex" aria-label="Navegación principal">
          <a className="transition-colors hover:text-foreground" href="#sobre-mi">Sobre mí</a>
          <a className="transition-colors hover:text-foreground" href="#proyectos">Proyectos</a>
          <a className="transition-colors hover:text-foreground" href="#contacto">Contacto</a>
        </nav>
        <a href="mailto:robert@example.com" className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
          Disponible para proyectos <span className="inline-block h-2 w-2 rounded-full bg-foreground" aria-hidden="true" />
        </a>
      </header>

      <section id="inicio" className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-16 md:px-10 lg:px-12">
        <div className="mb-10 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="h-px w-8 bg-foreground" />
          INGENIERO DE SOFTWARE · BOGOTÁ, CO
        </div>
        <h1 className="max-w-5xl text-balance text-[clamp(3.75rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
          Robert<br /><span className="text-muted-foreground">Cárdenas.</span>
        </h1>
        <div className="mt-12 flex max-w-2xl flex-col justify-between gap-8 border-t border-border pt-6 sm:flex-row sm:items-end">
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Construyo productos digitales claros, rápidos y confiables. Del primer concepto a una solución lista para crecer.
          </p>
          <a href="#proyectos" className="group inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider">
            Ver proyectos <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        <div className="mt-16 flex items-center gap-6 text-muted-foreground">
          <a href="https://github.com" className="font-mono text-xs transition-colors hover:text-foreground">GitHub</a>
          <a href="https://linkedin.com" className="font-mono text-xs transition-colors hover:text-foreground">LinkedIn</a>
          <a href="mailto:robert@example.com" aria-label="Correo electrónico" className="transition-colors hover:text-foreground"><Mail className="size-5" /></a>
        </div>
      </section>

      <section id="sobre-mi" className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-10 lg:px-12 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">/ Sobre mí</p>
          <div className="max-w-3xl">
            <p className="text-pretty text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Me interesa resolver problemas reales con software que se siente simple.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Soy ingeniero de software enfocado en crear experiencias web y sistemas que combinan una buena arquitectura con una interfaz pensada para las personas. Disfruto trabajar cerca del producto, aprender constantemente y convertir ideas ambiciosas en herramientas útiles.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-3">
              {skills.map((skill) => <span key={skill} className="font-mono text-xs text-muted-foreground">{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
        <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">/ Proyectos seleccionados</p>
          <span className="hidden font-mono text-xs text-muted-foreground sm:block">2022 — 2025</span>
        </div>
        <div>
          {projects.map((project) => (
            <article key={project.number} className="group grid gap-5 border-b border-border py-8 transition-colors hover:bg-card/60 md:grid-cols-[80px_1fr_auto] md:items-start md:gap-8 md:py-10">
              <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
              <div>
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{project.title}</h2>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{tag}</span>)}
                </div>
              </div>
              <MoveUpRight className="hidden size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:block" />
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-wider opacity-60">/ Contacto</p>
          <div className="mt-8 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-8xl">Hagamos algo<br />que importe.</h2>
            <a href="mailto:robert@example.com" className="group inline-flex items-center gap-3 border-b border-background pb-3 font-mono text-sm transition-opacity hover:opacity-60">
              robert@example.com <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-12">
        <span>© 2025 Robert Cárdenas</span>
        <span>Diseñado y construido con intención.</span>
      </footer>
    </main>
  )
}
