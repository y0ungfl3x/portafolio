'use client'

import { useSyncExternalStore } from 'react'
import { Moon, Sun } from 'lucide-react'

const THEME_EVENT = 'themechange'

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_EVENT, onStoreChange)
  return () => window.removeEventListener(THEME_EVENT, onStoreChange)
}

function getSnapshot() {
  return document.documentElement.classList.contains('dark')
}

function getServerSnapshot() {
  return true
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(THEME_EVENT))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
