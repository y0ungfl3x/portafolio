import type { ComponentType } from 'react'
import {
  SiCloudflare,
  SiExpo,
  SiGithubactions,
  SiLaravel,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { Globe, Server } from 'lucide-react'
import { cn } from '@/lib/utils'

type IconComponent = ComponentType<{ className?: string }>

const TECH_ICONS: Record<string, IconComponent> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  Laravel: SiLaravel,
  'Node.js': SiNodedotjs,
  'Nest.js': SiNestjs,
  'React Native': SiReact,
  Expo: SiExpo,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  SQLite: SiSqlite,
  Vercel: SiVercel,
  Cloudflare: SiCloudflare,
  Railway: SiRailway,
  DonWeb: Globe,
  VPS: Server,
  'GitHub Actions': SiGithubactions,
}

// Tamaño único de todos los iconos de tecnologías.
// Cambia este valor para ajustar el tamaño de TODOS los iconos a la vez.
export const TECH_ICON_SIZE = 'size-7'

type TechIconProps = {
  name: string
  className?: string
}

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = TECH_ICONS[name]
  if (!Icon) return null
  return <Icon className={cn(TECH_ICON_SIZE, className)} />
}
