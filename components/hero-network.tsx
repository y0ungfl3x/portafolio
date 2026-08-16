'use client'

import { useEffect, useRef } from 'react'

const SPACING = 64
const SPEED = 160
const TRAIL_LENGTH = 24

const DIRS: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

export function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let rgb = '255, 255, 255'
    let raf = 0
    let last = 0

    let head = { x: 0, y: 0 }
    let dx = 1
    let dy = 0
    let turns: { x: number; y: number }[] = []

    const updateColor = () => {
      rgb = document.documentElement.classList.contains('dark') ? '255, 255, 255' : '20, 20, 20'
    }

    const reset = () => {
      const cols = Math.max(1, Math.floor(width / SPACING) - 1)
      const rows = Math.max(1, Math.floor(height / SPACING) - 1)
      head = {
        x: Math.floor(Math.random() * cols) * SPACING + SPACING,
        y: Math.floor(Math.random() * rows) * SPACING + SPACING,
      }
      const d = DIRS[Math.floor(Math.random() * DIRS.length)]
      dx = d[0]
      dy = d[1]
      turns = []
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      reset()
    }

    const pickDir = (): [number, number] => {
      const candidates = DIRS.filter(([a, b]) => !(a === -dx && b === -dy))
      const inBounds = candidates.filter(([a, b]) => {
        const nx = head.x + a * SPACING
        const ny = head.y + b * SPACING
        return nx >= 0 && nx <= width && ny >= 0 && ny <= height
      })
      const pool = inBounds.length > 0 ? inBounds : candidates
      const straight = pool.find(([a, b]) => a === dx && b === dy)
      if (straight && Math.random() < 0.5) return [straight[0], straight[1]]
      return pool[Math.floor(Math.random() * pool.length)]
    }

    const step = (dist: number) => {
      let remaining = dist
      let guard = 0
      while (remaining > 0 && guard++ < 1000) {
        const nextX =
          dx > 0 ? (Math.floor(head.x / SPACING) + 1) * SPACING
            : dx < 0 ? (Math.ceil(head.x / SPACING) - 1) * SPACING
            : head.x
        const nextY =
          dy > 0 ? (Math.floor(head.y / SPACING) + 1) * SPACING
            : dy < 0 ? (Math.ceil(head.y / SPACING) - 1) * SPACING
            : head.y
        const distToNext = dx !== 0 ? Math.abs(nextX - head.x) : Math.abs(nextY - head.y)

        if (remaining >= distToNext) {
          head = { x: nextX, y: nextY }
          remaining -= distToNext
          turns.unshift({ x: nextX, y: nextY })
          if (turns.length > TRAIL_LENGTH) turns.pop()
          const [ndx, ndy] = pickDir()
          dx = ndx
          dy = ndy
        } else {
          head = { x: head.x + dx * remaining, y: head.y + dy * remaining }
          remaining = 0
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const points = [head, ...turns]
      const n = points.length

      for (let i = 0; i < n - 1; i++) {
        const a = points[i]
        const b = points[i + 1]
        const t = i / Math.max(1, n - 1)
        const alpha = (1 - t) * (1 - t) * 0.4

        ctx.strokeStyle = `rgba(${rgb}, ${alpha * 0.45})`
        ctx.lineWidth = 5
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()

        ctx.strokeStyle = `rgba(${rgb}, ${alpha})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }

      const hx = head.x
      const hy = head.y
      const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, 14)
      glow.addColorStop(0, `rgba(${rgb}, 0.9)`)
      glow.addColorStop(0.4, `rgba(${rgb}, 0.35)`)
      glow.addColorStop(1, `rgba(${rgb}, 0)`)
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(hx, hy, 14, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = `rgba(${rgb}, 0.95)`
      ctx.beginPath()
      ctx.arc(hx, hy, 2.2, 0, Math.PI * 2)
      ctx.fill()
    }

    const loop = (time: number) => {
      if (last === 0) last = time
      const dt = Math.min((time - last) / 1000, 0.05)
      last = time
      step(SPEED * dt)
      draw()
      raf = requestAnimationFrame(loop)
    }

    updateColor()
    resize()

    if (reduced) {
      draw()
    } else {
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('themechange', updateColor)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('themechange', updateColor)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="hero-network pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
