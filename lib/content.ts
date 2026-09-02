import {
  GraduationCap,
  Layers,
  Rocket,
  ScanFace,
  Server,
  type LucideIcon,
} from 'lucide-react'

export const EMAIL = 'robertcardenas7777@gmail.com'
export const GITHUB_URL = 'https://github.com/y0ungfl3x'
export const CV_URL = '/cv-robert-cardenas.pdf'

export type Project = {
  number: string
  title: string
  description: string
  tags: string[]
  type: string
  url?: string
  logo: string
  invertLogo?: boolean
  screenshot?: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'SmartGym',
    description:
      'SaaS para la gestión y control de gimnasios: reconocimiento facial, pagos, recordatorios y más.',
    tags: ['Laravel', 'MySQL', 'Reconocimiento facial'],
    type: 'SaaS · En producción',
    url: 'https://smartgyms.org',
    logo: '/SMARTGYM.png',
  },
  {
    number: '02',
    title: 'NC Natural Cosmetic',
    description:
      'E-commerce de cosméticos de lociones naturales, con una experiencia de compra rápida y clara.',
    tags: ['Next.js', 'Nest.js', 'PostgreSQL'],
    type: 'E-commerce · En producción',
    url: 'https://ncnaturalcosmetic.com',
    logo: '/nc.svg',
    invertLogo: true,
  },
  {
    number: '03',
    title: 'Odonto Core',
    description:
      'Software para la gestión de consultorios odontológicos: agenda, pacientes e historial clínico.',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    type: 'Software médico',
    url: 'https://odonto-core.vercel.app/',
    logo: '/odonto.png',
  },
  {
    number: '04',
    title: 'K-Score',
    description:
      'Sistema completo para competencias de karate: preinscripciones y toda la lógica de gestión de la competencia.',
    tags: ['Next.js', 'Nest.js', 'Turborepo'],
    type: 'Próximamente',
    url: 'https://k-score.com',
    logo: '/k0score.png',
  },
]

export const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Laravel',
  'Node.js',
  'Nest.js',
  'React Native',
  'Expo',
  'PostgreSQL',
  'Supabase',
]

export type StackGroup = {
  group: string
  items: string[]
}

export const stack: StackGroup[] = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Laravel', 'Node.js', 'Nest.js'] },
  { group: 'Móvil', items: ['React Native', 'Expo'] },
  { group: 'Bases de datos', items: ['MySQL', 'PostgreSQL', 'Supabase', 'SQLite'] },
  {
    group: 'DevOps & Infra',
    items: ['Vercel', 'Cloudflare', 'Railway', 'DonWeb', 'VPS', 'GitHub Actions'],
  },
]

export const impact: [string, string][] = [
  ['05+', 'proyectos construidos'],
  ['03', 'en producción'],
  ['01', 'SaaS fundado'],
]

export const process: [string, string, string][] = [
  ['01', 'Descubrir', 'Entender el problema, el contexto y las personas antes de escribir la primera línea de código.'],
  ['02', 'Construir', 'Crear una base sólida, iterar rápido y convertir decisiones complejas en interfaces simples.'],
  ['03', 'Refinar', 'Medir, escuchar y pulir cada detalle hasta que el producto se sienta inevitable.'],
]

export type Experience = {
  icon: LucideIcon
  date: string
  title: string
  detail: string
}

export const experience: Experience[] = [
  { icon: Rocket, date: 'Ahora', title: 'CEO & Fundador · SmartGym', detail: 'SaaS de gestión de gimnasios en producción' },
  { icon: Layers, date: 'Ahora', title: 'Desarrollador Full-stack', detail: 'Web y móvil con Next.js, Nest.js, Laravel y React Native' },
  { icon: ScanFace, date: 'Especializado', title: 'Reconocimiento facial', detail: 'Enrolamiento con dispositivos Hikvision en SmartGym' },
  { icon: Server, date: 'DevOps', title: 'Infraestructura y despliegues', detail: 'Cloudflare, Vercel, Railway, DonWeb, VPS, GitHub Actions' },
  { icon: GraduationCap, date: 'Pasantías', title: 'Desarrollo web · Sistempro Barinas', detail: 'Landing page para vozipnet.com' },
]

export type Certification = {
  name: string
  entity: string
}

export const certifications: Certification[] = [
  { name: 'React: De Cero a Experto', entity: 'DevTalles' },
  { name: 'React Native + Expo', entity: 'DevTalles' },
]

export const marqueeItems = [
  'TypeScript',
  'React',
  'Next.js',
  'Laravel',
  'React Native',
  'Node.js',
]
