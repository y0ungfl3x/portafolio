'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { TechIcon } from '@/components/tech-icons'
import { HeroNetwork } from '@/components/hero-network'
import {
  CV_URL,
  EMAIL,
  GITHUB_URL,
  certifications,
  experience,
  impact,
  marqueeItems,
  process,
  projects,
  skills,
  stack,
} from '@/lib/content'

function GitHubIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ '--delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
      {children}
    </p>
  )
}

function getProjectPreviewUrl(url: string) {
  return `https://image.thum.io/get/width/1200/noanimate/${url}`
}

export default function Home() {
  const [showTop, setShowTop] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [failedPreviews, setFailedPreviews] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Mensaje de ${form.name} — ${form.email}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Header */}
      <header className="site-header mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-12">
        <a href="#inicio" className="font-mono text-sm font-semibold tracking-tight" aria-label="Inicio">
          RC<span className="text-muted-foreground">/</span>
        </a>
        <nav
          className="hidden items-center gap-8 font-mono text-xs text-muted-foreground sm:flex"
          aria-label="Navegación principal"
        >
          <a className="transition-colors hover:text-foreground" href="#sobre-mi">Sobre mí</a>
          <a className="transition-colors hover:text-foreground" href="#stack">Stack</a>
          <a className="transition-colors hover:text-foreground" href="#proyectos">Proyectos</a>
          <a className="transition-colors hover:text-foreground" href="#experiencia">Experiencia</a>
          <a className="transition-colors hover:text-foreground" href="#contacto">Contacto</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${EMAIL}`}
            className="group hidden items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <span className="status-dot h-2 w-2 rounded-full bg-foreground" />
            Disponible para proyectos
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="hero-grid relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-16 md:px-10 lg:px-12"
      >
        <HeroNetwork />
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10">
          <Reveal className="mb-10 flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="h-px w-8 bg-foreground" />
            INGENIERO DE SOFTWARE · BARINAS, VE
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-5xl text-balance text-[clamp(3.75rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Robert
              <br />
              <span className="text-muted-foreground">Cardenas.</span>
            </h1>
          </Reveal>
          <Reveal delay={200} className="mt-12 flex max-w-3xl flex-col justify-between gap-8 border-t border-border pt-6 sm:flex-row sm:items-end">
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Construyo productos digitales de punta a punta: del backend y la arquitectura a interfaces que se sienten simples.
            </p>
            <a
              href="#proyectos"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider"
            >
              Ver proyectos
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
          <Reveal delay={300} className="mt-16 flex flex-wrap items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-2 font-mono text-xs text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-2 font-mono text-xs text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <Mail className="size-4" />
              Email
            </a>
            <a
              href={CV_URL}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-mono text-xs text-background transition-colors hover:bg-foreground/80"
            >
              <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
              Descargar CV
            </a>
          </Reveal>
        </div>

        <div className="hero-card absolute bottom-20 right-12 z-10 hidden w-52 border border-border bg-background/80 p-4 backdrop-blur md:block">
          <div className="mb-8 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>NOW BUILDING</span>
            <span className="animate-pulse">●</span>
          </div>
          <p className="text-sm leading-relaxed">
            SaaS y productos digitales que pasan de la idea a producción.
          </p>
          <div className="mt-6 h-px w-full bg-border">
            <span className="pulse-line block h-px w-1/3 bg-foreground" />
          </div>
        </div>

        <a
          href="#sobre-mi"
          className="absolute bottom-8 left-6 z-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground md:left-12"
        >
          <ArrowDown className="size-4 animate-bounce" />
          Scroll to explore
        </a>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-10 lg:px-12 lg:py-32">
          <Reveal>
            <SectionLabel>/ Sobre mí</SectionLabel>
          </Reveal>
          <Reveal delay={100} className="max-w-3xl">
            <p className="text-pretty text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Me interesa resolver problemas reales con software que se siente simple.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Soy ingeniero de software y desarrollador full-stack de Barinas, Venezuela. Construyo productos digitales de punta a punta —arquitectura, backend e interfaces— y los llevo de cero a producción. Fundé SmartGym, un SaaS de gestión de gimnasios con reconocimiento facial, y disfruto convertir ideas ambiciosas en herramientas útiles y confiables.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground"
                >
                  <TechIcon name={skill} className="shrink-0 text-foreground" />
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impacto */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 border-y border-border sm:grid-cols-3">
          {impact.map(([number, label], index) => (
            <Reveal
              key={label}
              delay={index * 100}
              className="border-b border-border px-2 py-8 last:border-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-0"
            >
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">{number}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <Reveal>
            <SectionLabel>/ Stack</SectionLabel>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {stack.map((group, index) => (
              <Reveal key={group.group} delay={index * 100} className="bg-background p-8 md:p-10">
                <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {group.group}
                </h2>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground"
                    >
                      <TechIcon name={item} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <Reveal>
            <SectionLabel>/ Cómo trabajo</SectionLabel>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {process.map(([number, title, description], index) => (
              <Reveal
                key={title}
                delay={index * 100}
                className="group bg-background p-8 transition-colors hover:bg-foreground hover:text-background md:p-10"
              >
                <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">
                  {number}
                </span>
                <h2 className="mt-20 text-2xl font-medium tracking-tight">{title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground group-hover:text-background/70">
                  {description}
                </p>
                <span className="mt-10 block h-px w-10 bg-foreground transition-all group-hover:w-full group-hover:bg-background" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <SectionLabel>/ Experiencia</SectionLabel>
          </Reveal>
          <div>
            {experience.map((exp, index) => {
              const Icon = exp.icon
              return (
                <Reveal
                  key={exp.title}
                  delay={index * 100}
                  className="grid gap-3 border-t border-border py-7 sm:grid-cols-[150px_1fr]"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-foreground" />
                    <span className="font-mono text-xs text-muted-foreground">{exp.date}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-medium tracking-tight">{exp.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{exp.detail}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
            <SectionLabel>/ Proyectos seleccionados</SectionLabel>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">
              2022 — 2025
            </span>
          </div>
          <div className="space-y-20">
            {projects.map((project, index) => {
              const reverse = index % 2 === 1
              const previewSrc = project.screenshot ?? (project.url ? getProjectPreviewUrl(project.url) : undefined)
              const canRenderPreview = Boolean(previewSrc) && !failedPreviews[project.number]
              const screenshot = (
                canRenderPreview && previewSrc ? (
                  <Image
                    src={previewSrc}
                    alt={`Vista previa de ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
                    onError={() =>
                      setFailedPreviews((prev) =>
                        prev[project.number] ? prev : { ...prev, [project.number]: true },
                      )
                    }
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-card p-6 text-center">
                    <span className="relative flex size-14 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-2">
                      <Image
                        src={project.logo}
                        alt={`Logo de ${project.title}`}
                        fill
                        sizes="56px"
                        className={`object-contain ${project.invertLogo ? 'dark:invert' : ''}`}
                      />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Vista previa no disponible
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">{project.title}</p>
                    </div>
                  </div>
                )
              )
              const frameClass = `relative block aspect-[16/9] overflow-hidden border border-border ${reverse ? 'md:order-2' : ''}`
              return (
                <Reveal key={project.number} delay={index * 100}>
                  <article className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${project.title}`}
                        className={frameClass}
                      >
                        {screenshot}
                      </a>
                    ) : (
                      <div className={frameClass}>{screenshot}</div>
                    )}
                    <div>
                      <div className="mb-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                        <span>{project.number}</span>
                        <span className="h-px w-8 bg-border" />
                        <span className="text-[10px] uppercase tracking-wider">{project.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-lg border border-border bg-background p-1">
                          <Image
                            src={project.logo}
                            alt={`Logo de ${project.title}`}
                            fill
                            sizes="36px"
                            className={`object-contain ${project.invertLogo ? 'dark:invert' : ''}`}
                          />
                        </span>
                        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">{project.title}</h2>
                      </div>
                      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground transition-opacity hover:opacity-60"
                        >
                          Visitar sitio
                          <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section id="certificaciones" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <Reveal>
            <SectionLabel>/ Certificaciones</SectionLabel>
          </Reveal>
          <div className="mt-14">
            {certifications.map((cert, index) => (
              <Reveal
                key={cert.name}
                delay={index * 100}
                className="grid gap-3 border-t border-border py-7 last:border-b sm:grid-cols-[150px_1fr]"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-xl font-medium tracking-tight">{cert.name}</h2>
                  <span className="font-mono text-xs text-muted-foreground">{cert.entity}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border bg-foreground py-5 text-background">
        <div className="marquee flex w-max gap-8 font-mono text-xs uppercase tracking-[0.25em]">
          {Array.from({ length: 2 }, (_, index) => (
            <span key={index}>
              {marqueeItems.map((item) => (
                <span key={item}>
                  {item} <b>·</b>{' '}
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-wider opacity-60">/ Contacto</p>
          <div className="mt-8 grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="max-w-3xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-8xl">
                Hagamos algo
                <br />
                que importe.
              </h2>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-12 inline-flex items-center gap-3 border-b border-background pb-3 font-mono text-sm transition-opacity hover:opacity-60"
              >
                {EMAIL}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-wider opacity-60">
                  Nombre
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-b border-background/30 bg-transparent py-3 text-base outline-none transition-colors focus:border-background"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider opacity-60">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-b border-background/30 bg-transparent py-3 text-base outline-none transition-colors focus:border-background"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-wider opacity-60">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="resize-none border-b border-background/30 bg-transparent py-3 text-base outline-none transition-colors focus:border-background"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-fit items-center gap-2 border border-background px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-background hover:text-foreground"
              >
                Enviar mensaje
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-12">
        <span>© 2026 Robert Cardenas</span>
        <span>Diseñado y construido con intención.</span>
      </footer>

      {showTop && (
        <a
          href="#inicio"
          className="fixed bottom-6 right-6 z-20 flex size-11 items-center justify-center border border-border bg-background text-foreground shadow-lg transition-transform hover:-translate-y-1"
          aria-label="Volver arriba"
        >
          <ArrowUpRight className="size-4 -rotate-45" />
        </a>
      )}
    </main>
  )
}
