"use client"

import React, { useEffect, useRef } from "react"

export default function HeroFlow() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // gentle float for pills
    const pills = ref.current?.querySelectorAll('[data-float]') || []
    let raf: number
    let t = 0
    const loop = () => {
      t += 0.01
      pills.forEach((el, i) => {
        const y = Math.sin(t + i) * 3
        const x = Math.cos(t * 0.8 + i) * 2
        ;(el as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div ref={ref} className="relative w-full max-w-xl mx-auto">
      <div className="relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] p-6 overflow-hidden">
        <svg viewBox="0 0 520 240" className="w-full h-[240px]">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(173 68% 36%)" />
              <stop offset="100%" stopColor="hsl(218 64% 22%)" />
            </linearGradient>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 z" fill="url(#flowGrad)" />
            </marker>
          </defs>

          {/* path 1: Your Apps -> n8n/Zapier */}
          <path d="M120 70 C 220 70, 260 70, 320 90" className="flow-path" stroke="url(#flowGrad)" markerEnd="url(#arrow)" />
          {/* path 2: n8n/Zapier -> AI Agents */}
          <path d="M330 90 C 380 110, 400 120, 430 140" className="flow-path delay-100" stroke="url(#flowGrad)" markerEnd="url(#arrow)" />
          {/* path 3: AI Agents -> Results */}
          <path d="M440 140 C 400 180, 240 200, 160 180" className="flow-path delay-200" stroke="url(#flowGrad)" markerEnd="url(#arrow)" />

          {/* glow dots along the flow */}
          <circle r="4" className="flow-dot" style={{ transformOrigin: "120px 70px" }} />
          <circle r="4" className="flow-dot delay-100" style={{ transformOrigin: "330px 90px" }} />
          <circle r="4" className="flow-dot delay-200" style={{ transformOrigin: "440px 140px" }} />
        </svg>

        {/* Pills */}
        <div className="absolute left-4 top-6">
          <div data-float className="inline-flex items-center gap-2 rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]"></span>
            <span className="text-xs font-medium text-[hsl(var(--foreground))]">Your Apps</span>
          </div>
        </div>
        <div className="absolute left-[58%] top-[34%] -translate-x-1/2">
          <div data-float className="inline-flex items-center gap-2 rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]"></span>
            <span className="text-xs font-medium text-[hsl(var(--foreground))]">n8n / Zapier</span>
          </div>
        </div>
        <div className="absolute right-4 bottom-10">
          <div data-float className="inline-flex items-center gap-2 rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]"></span>
            <span className="text-xs font-medium text-[hsl(var(--foreground))]">AI Agents</span>
          </div>
        </div>
        <div className="absolute left-8 bottom-6">
          <div data-float className="inline-flex items-center gap-2 rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]"></span>
            <span className="text-xs font-medium text-[hsl(var(--foreground))]">Results</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flow-path {
          fill: none;
          stroke-width: 3;
          stroke-dasharray: 10 10;
          animation: dash 2s linear infinite;
          opacity: 0.9;
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .flow-dot {
          fill: hsl(173 68% 36%);
          filter: drop-shadow(0 0 6px hsla(173,68%,36%,0.6));
          animation: dot 2.2s linear infinite;
          transform: translate(120px, 70px);
        }
        .flow-dot.delay-100 { animation-delay: .3s; }
        .flow-dot.delay-200 { animation-delay: .6s; }
        @keyframes dot {
          0% { transform: translate(120px, 70px); }
          33% { transform: translate(330px, 90px); }
          66% { transform: translate(440px, 140px); }
          100% { transform: translate(160px, 180px); }
        }
      `}</style>
    </div>
  )
}
