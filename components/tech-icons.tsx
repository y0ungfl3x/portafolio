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

type IconComponent = ComponentType<{ className?: string }>

export const TECH_ICONS: Record<string, IconComponent> = {
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
