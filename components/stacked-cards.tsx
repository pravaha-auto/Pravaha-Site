"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef } from "react"

export type StackedCard = {
  title: string
  description?: string
  icon?: React.ReactNode
  content?: React.ReactNode
}

type Props = {
  items: StackedCard[]
  className?: string
  cardClassName?: string
  stickyOffset?: number // px offset between cards
}

export default function StackedCards({ items, className, cardClassName, stickyOffset = 32 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef<number | null>(null)
  const tiltRef = useRef<{ x: number; y: number }[]>([])

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return
      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const vh = window.innerHeight
      const step = Math.min(0.28 * vh, 280) // scroll distance per card
      const scrolled = Math.max(0, Math.min((vh * 0.6) - rect.top, step * (items.length - 1)))

      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const local = Math.max(0, Math.min((scrolled - i * step) / step, 1))
        const baseScale = 1 - i * 0.04
        const scale = baseScale + local * (1 - baseScale)
        const y = (1 - local) * i * 12 // px
        const rotate = (1 - local) * 1.5 // deg subtle
        const tilt = tiltRef.current[i] || { x: 0, y: 0 }
        el.style.transform = `translate3d(0, ${y}px, 0) scale(${scale}) rotateX(${rotate + tilt.x}deg) rotateY(${tilt.y}deg)`
        el.style.zIndex = String(items.length - i)
        el.style.opacity = String(0.96 + local * 0.04)
      })
    }

    const loop = () => {
      onScroll()
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [items.length])

  // Tilt on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const el = cardRefs.current[idx]
    if (!el) return
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = (e.clientX - cx) / r.width
    const dy = (e.clientY - cy) / r.height
    tiltRef.current[idx] = { x: (-dy) * 4, y: dx * 4 }
  }
  const handleMouseLeave = (idx: number) => {
    tiltRef.current[idx] = { x: 0, y: 0 }
  }

  return (
    <div ref={containerRef} className={cn("relative perspective-[1200px]", className)}>
      <div className="space-y-4 md:space-y-0">
        {items.map((item, i) => (
          <article
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={cn(
              "bg-white border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 shadow-sm md:shadow-lg transition-[transform,box-shadow] duration-300 will-change-transform",
              "md:sticky md:top-24",
              "hover:shadow-xl",
              cardClassName
            )}
            style={{ top: `calc(6rem + ${i * stickyOffset}px)`, transformStyle: "preserve-3d" as any }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <div className="flex items-start gap-4">
              {item.icon && (
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[hsl(var(--secondary))] text-[hsl(var(--accent))] flex-shrink-0">
                  {item.icon}
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] tracking-tight">{item.title}</h3>
                {item.description && (
                  <p className="mt-2 text-[hsl(var(--foreground)/0.75)] leading-relaxed">{item.description}</p>
                )}
              </div>
            </div>
            {item.content && <div className="mt-4">{item.content}</div>}
          </article>
        ))}
      </div>
    </div>
  )
}
