'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Mail, MoveUpRight } from 'lucide-react'

const projects = [
  { number: '01', title: 'Sistema de operaciones', description: 'Plataforma interna para automatizar procesos, centralizar datos y tomar mejores decisiones.', tags: ['Next.js', 'TypeScript', 'PostgreSQL'], type: 'Producto digital' },
  { number: '02', title: 'E-commerce headless', description: 'Experiencia de compra rápida y flexible, diseñada para crecer junto al negocio.', tags: ['React', 'Node.js', 'Stripe'], type: 'Comercio digital' },
  { number: '03', title: 'Dashboard de métricas', description: 'Visualización clara de indicadores clave para convertir datos complejos en acción.', tags: ['React', 'APIs', 'Charts'], type: 'Data experience' },
]
const skills = ['TypeScript', 'React / Next.js', 'Node.js', 'Bases de datos', 'APIs REST', 'UI systems']
const impact = [['05+', 'años construyendo'], ['30+', 'proyectos enviados'], ['100%', 'curiosidad activa']]
const process = [
  ['01', 'Descubrir', 'Entender el problema, el contexto y las personas antes de escribir la primera línea de código.'],
  ['02', 'Construir', 'Crear una base sólida, iterar rápido y convertir decisiones complejas en interfaces simples.'],
  ['03', 'Refinar', 'Medir, escuchar y pulir cada detalle hasta que el producto se sienta inevitable.'],
]
const experience = [
  ['Ahora', 'Construyendo productos digitales', 'Frontend · Full-stack · Producto'],
  ['2022 — 2024', 'Ingeniería de software', 'Arquitectura web · APIs · Sistemas'],
  ['Siempre', 'Aprendiendo en público', 'Open source · Nuevas herramientas · Comunidad'],
]

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` } as React.CSSProperties}>{children}</div>
}

export default function Home() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-12">
        <a href="#inicio" className="font-mono text-sm font-semibold tracking-tight" aria-label="Inicio">RC<span className="text-muted-foreground">/</span></a>
        <nav className="hidden items-center gap-8 font-mono text-xs text-muted-foreground sm:flex" aria-label="Navegación principal">
          <a className="transition-colors hover:text-foreground" href="#sobre-mi">Sobre mí</a><a className="transition-colors hover:text-foreground" href="#proceso">Proceso</a><a className="transition-colors hover:text-foreground" href="#proyectos">Proyectos</a><a className="transition-colors hover:text-foreground" href="#contacto">Contacto</a>
        </nav>
        <a href="mailto:robert@example.com" className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"><span className="status-dot h-2 w-2 rounded-full bg-foreground" /> Disponible para proyectos</a>
      </header>

      <section id="inicio" className="hero-grid relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-16 md:px-10 lg:px-12">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10">
          <Reveal className="mb-10 flex items-center gap-3 font-mono text-xs text-muted-foreground"><span className="h-px w-8 bg-foreground" /> INGENIERO DE SOFTWARE · BOGOTÁ, CO</Reveal>
          <Reveal delay={100}><h1 className="max-w-5xl text-balance text-[clamp(3.75rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">Robert<br /><span className="text-muted-foreground">Cárdenas.</span></h1></Reveal>
          <Reveal delay={200} className="mt-12 flex max-w-3xl flex-col justify-between gap-8 border-t border-border pt-6 sm:flex-row sm:items-end">
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">Construyo productos digitales claros, rápidos y confiables. Del primer concepto a una solución lista para crecer.</p>
            <a href="#proyectos" className="group inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider">Ver proyectos <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </Reveal>
          <Reveal delay={300} className="mt-16 flex items-center gap-6 text-muted-foreground"><a href="https://github.com" className="font-mono text-xs transition-colors hover:text-foreground">GitHub</a><a href="https://linkedin.com" className="font-mono text-xs transition-colors hover:text-foreground">LinkedIn</a><a href="mailto:robert@example.com" aria-label="Correo electrónico" className="transition-colors hover:text-foreground"><Mail className="size-5" /></a></Reveal>
        </div>
        <div className="hero-card absolute bottom-20 right-12 z-10 hidden w-52 border border-border bg-background/80 p-4 backdrop-blur md:block"><div className="mb-8 flex items-center justify-between font-mono text-[10px] text-muted-foreground"><span>NOW BUILDING</span><span className="animate-pulse">●</span></div><p className="text-sm leading-relaxed">Interfaces que convierten ideas complejas en experiencias simples.</p><div className="mt-6 h-px w-full bg-border"><span className="pulse-line block h-px w-1/3 bg-foreground" /></div></div>
        <a href="#sobre-mi" className="absolute bottom-8 left-6 z-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground md:left-12"><ArrowDown className="size-4 animate-bounce" /> Scroll to explore</a>
      </section>

      <section id="sobre-mi" className="border-y border-border bg-card/40"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-10 lg:px-12 lg:py-32"><Reveal><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">/ Sobre mí</p></Reveal><Reveal delay={100} className="max-w-3xl"><p className="text-pretty text-3xl font-medium leading-tight tracking-tight md:text-5xl">Me interesa resolver problemas reales con software que se siente simple.</p><p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">Soy ingeniero de software enfocado en crear experiencias web y sistemas que combinan una buena arquitectura con una interfaz pensada para las personas. Disfruto trabajar cerca del producto, aprender constantemente y convertir ideas ambiciosas en herramientas útiles.</p><div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-3">{skills.map((skill) => <span key={skill} className="font-mono text-xs text-muted-foreground">{skill}</span>)}</div></Reveal></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12"><div className="grid grid-cols-1 border-y border-border sm:grid-cols-3">{impact.map(([number, label], index) => <Reveal key={label} delay={index * 100} className="border-b border-border px-2 py-8 last:border-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-0"><p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">{number}</p><p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p></Reveal>)}</div></section>

      <section id="proceso" className="border-y border-border bg-card/40"><div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32"><Reveal><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">/ Cómo trabajo</p></Reveal><div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">{process.map(([number, title, description], index) => <Reveal key={title} delay={index * 100} className="group bg-background p-8 transition-colors hover:bg-foreground hover:text-background md:p-10"><span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">{number}</span><h2 className="mt-20 text-2xl font-medium tracking-tight">{title}</h2><p className="mt-4 leading-relaxed text-muted-foreground group-hover:text-background/70">{description}</p><span className="mt-10 block h-px w-10 bg-foreground transition-all group-hover:w-full group-hover:bg-background" /></Reveal>)}</div></div></section>

      <section id="experiencia" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32"><div className="grid gap-12 md:grid-cols-[1fr_2fr]"><Reveal><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">/ Experiencia</p></Reveal><div>{experience.map(([date, title, detail], index) => <Reveal key={title} delay={index * 100} className="grid gap-3 border-t border-border py-7 sm:grid-cols-[150px_1fr]"><span className="font-mono text-xs text-muted-foreground">{date}</span><div><h2 className="text-xl font-medium tracking-tight">{title}</h2><p className="mt-2 text-sm text-muted-foreground">{detail}</p></div></Reveal>)}</div></div></section>

      <section id="proyectos" className="border-t border-border"><div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32"><div className="mb-14 flex items-end justify-between border-b border-border pb-6"><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">/ Proyectos seleccionados</p><span className="hidden font-mono text-xs text-muted-foreground sm:block">2022 — 2025</span></div><div>{projects.map((project, index) => <Reveal key={project.number} delay={index * 100}><article className="group grid gap-5 border-b border-border py-8 transition-colors hover:bg-card/60 md:grid-cols-[80px_1fr_auto] md:items-start md:gap-8 md:py-10"><span className="font-mono text-xs text-muted-foreground">{project.number}</span><div><div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{project.type}</div><h2 className="text-2xl font-medium tracking-tight md:text-3xl">{project.title}</h2><p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{tag}</span>)}</div></div><MoveUpRight className="hidden size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:block" /></article></Reveal>)}</div></div></section>

      <section className="overflow-hidden border-y border-border bg-foreground py-5 text-background"><div className="marquee flex w-max gap-8 font-mono text-xs uppercase tracking-[0.25em]">{Array.from({ length: 2 }, (_, index) => <span key={index}>TypeScript <b>·</b> React <b>·</b> Systems thinking <b>·</b> Digital products <b>·</b></span>)}</div></section>

      <section id="contacto" className="border-t border-border bg-foreground text-background"><div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32"><p className="font-mono text-xs uppercase tracking-wider opacity-60">/ Contacto</p><div className="mt-8 flex flex-col justify-between gap-12 md:flex-row md:items-end"><h2 className="max-w-3xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-8xl">Hagamos algo<br />que importe.</h2><a href="mailto:robert@example.com" className="group inline-flex items-center gap-3 border-b border-background pb-3 font-mono text-sm transition-opacity hover:opacity-60">robert@example.com <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></div></section>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-12"><span>© 2025 Robert Cárdenas</span><span>Diseñado y construido con intención.</span></footer>
      {showTop && <a href="#inicio" className="fixed bottom-6 right-6 z-20 flex size-11 items-center justify-center border border-border bg-background text-foreground shadow-lg transition-transform hover:-translate-y-1" aria-label="Volver arriba"><ArrowUpRight className="size-4 -rotate-45" /></a>}
    </main>
  )
}
