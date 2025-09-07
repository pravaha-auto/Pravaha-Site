"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const CAPABILITIES = [
  { title: "Lightning-Fast", desc: "Sub‑second triggers and batched execution keep flows snappy even at peak. Built‑in retries and circuit breakers ensure dependable runs without babysitting." },
  { title: "Visual Workflows", desc: "Design complex multi‑step automations with guards, approvals, and rollbacks. Reusable sub‑flows and inputs make changes safe and fast." },
  { title: "AI Native", desc: "Specialized agents for research, routing, and enrichment. Grounded on your data with safe tools and clear fallbacks to humans when needed." },
  { title: "Cloud Ready", desc: "Autoscale workers, queue backpressure, and idempotent steps so deployments remain smooth. Observability included for tracing and alerts." },
  { title: "Enterprise Guardrails", desc: "Least‑privilege access, audit logs, PII handling, and approval gates. Versioned changes and staged rollouts reduce risk." },
  { title: "Insights", desc: "Dashboards for throughput, error rates, and SLA budgets. Tie metrics to business KPIs to prove ROI and find bottlenecks quickly." },
  { title: "Data Sync", desc: "Bi‑directional sync for CRMs, ERPs, and warehouses. Schema‑aware mapping, deduplication, and conflict resolution keep records clean." },
  { title: "Voice Flows", desc: "Natural voice agents for booking, qualification, and updates. Custom intents, warm transfers, and call summaries to your CRM." },
] as const

const BG_IMAGES = [
  "https://cdn.builder.io/api/v1/image/assets%2F15e5ed9eb38a4cc78cc174f6d9972660%2Ff18f8a7d9d4e4165849c06c6233f58ce?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F15e5ed9eb38a4cc78cc174f6d9972660%2F0c54ad7cefa34c2eb07546f7400c6ec2?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F15e5ed9eb38a4cc78cc174f6d9972660%2F2720508f14184baa9a5885801588bdb9?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F15e5ed9eb38a4cc78cc174f6d9972660%2F5946ae67f60e47e9a67bac4e39a59d2c?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F15e5ed9eb38a4cc78cc174f6d9972660%2F02cb160ac0784ed4a6f29f71834d3bcd?format=webp&width=1600",
] as const

const GRADIENTS = [
  "from-teal-400   to-cyan-600",
  "from-indigo-400 to-sky-600",
  "from-amber-400  to-orange-600",
  "from-rose-400   to-pink-600",
  "from-emerald-400 to-lime-600",
  "from-purple-400 to-fuchsia-600",
] as const

/* ------------------------------------------------------------------ */
/*  Utility helpers                                                   */
/* ------------------------------------------------------------------ */

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function HorizontalFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const didSnapRef = useRef(false)
  const lastYRef = useRef(0)

  /* -------------------------------------------------------------- */
  /*  Scroll / snap logic                                           */
  /* -------------------------------------------------------------- */

  useEffect(() => {
    let startY = 0
    let endY = 0
    let range = 1

    const setCardSize = () => {
      const el = containerRef.current
      if (!el) return
      const size = Math.round(Math.min(window.innerHeight * 0.72, window.innerWidth * 0.86))
      el.style.setProperty("--hf-card", `${Math.max(320, size)}px`)
    }

    const recalc = () => {
      const el = containerRef.current
      if (!el) return

      el.style.height = `${CAPABILITIES.length * 100}vh`
      setCardSize()

      const rect = el.getBoundingClientRect()
      startY = window.scrollY + rect.top
      endY = startY + el.offsetHeight - window.innerHeight
      range = Math.max(endY - startY, 1)
      lastYRef.current = window.scrollY
    }

    const scroll = () => {
      const el = containerRef.current
      const track = trackRef.current
      if (!el || !track) return

      const progress = clamp((window.scrollY - startY) / range, 0, 1)

      const trackWidth = track.scrollWidth
      const viewportWidth = window.innerWidth
      const maxTranslate = Math.max(0, trackWidth - viewportWidth)
      const translate = -progress * maxTranslate

      track.style.transform = `translate3d(${translate}px,0,0)`

      /* ---------- auto-snap ---------- */
      const hostSection = (el.closest("section") as HTMLElement | null) ?? undefined
      const isWithin = window.scrollY >= startY - 1 && window.scrollY <= endY + 1
      const scrollingDown = window.scrollY >= lastYRef.current
      const scrollingUp = !scrollingDown
      lastYRef.current = window.scrollY

      const firstCard = track.firstElementChild?.firstElementChild as HTMLElement | null
      const lastCard = track.lastElementChild?.lastElementChild as HTMLElement | null

      const firstVisible = firstCard
        ? firstCard.getBoundingClientRect().left >= -1 && firstCard.getBoundingClientRect().right <= window.innerWidth + 1
        : false
      const lastVisible = lastCard
        ? lastCard.getBoundingClientRect().left >= -1 && lastCard.getBoundingClientRect().right <= window.innerWidth + 1
        : false

      if (isWithin && scrollingDown && (lastVisible || progress >= 0.995) && !didSnapRef.current) {
        const next = hostSection?.nextElementSibling as HTMLElement | null
        if (next) {
          didSnapRef.current = true
          next.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }

      if (isWithin && scrollingUp && (firstVisible || progress <= 0.005) && !didSnapRef.current) {
        const prev = hostSection?.previousElementSibling as HTMLElement | null
        if (prev) {
          didSnapRef.current = true
          prev.scrollIntoView({ behavior: "smooth", block: "end" })
        }
      }

      if (!isWithin || (progress < 0.8 && progress > 0.2)) didSnapRef.current = false
    }

    const onWheel = (e: WheelEvent) => {
      const el = containerRef.current
      const hostSection = (el?.closest("section") as HTMLElement | null) ?? undefined
      if (!el || !hostSection) return

      const progress = (window.scrollY - startY) / range
      const isWithin = window.scrollY >= startY - 1 && window.scrollY <= endY + 1

      if (isWithin && progress >= 0.98 && e.deltaY > 0) {
        const next = hostSection.nextElementSibling as HTMLElement | null
        if (next) {
          e.preventDefault()
          next.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } else if (isWithin && progress <= 0.02 && e.deltaY < 0) {
        const prev = hostSection.previousElementSibling as HTMLElement | null
        if (prev) {
          e.preventDefault()
          prev.scrollIntoView({ behavior: "smooth", block: "end" })
        }
      }
    }

    const onResize = () => { recalc(); scroll() }

    recalc()
    let raf = requestAnimationFrame(function loop() { scroll(); raf = requestAnimationFrame(loop) })

    window.addEventListener("resize", onResize)
    window.addEventListener("wheel", onWheel, { passive: false })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("wheel", onWheel)
    }
  }, [])

  /* -------------------------------------------------------------- */
  /*  Render                                                        */
  /* -------------------------------------------------------------- */

  return (
    <section aria-labelledby="capabilities">
      <div ref={containerRef} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden bg-white">
          <div ref={trackRef} className="will-change-transform">
            <div className="flex h-screen">
              {CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="flex-shrink-0 px-6 md:px-12 flex items-center justify-center">
                  <div
                    className="relative overflow-hidden rounded-3xl shadow-xl bg-cover bg-center"
                    style={{
                      width: "var(--hf-card)",
                      height: "var(--hf-card)",
                      backgroundImage: `url(${BG_IMAGES[idx % BG_IMAGES.length]})`,
                    }}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-55",
                        GRADIENTS[idx % GRADIENTS.length],
                      )}
                    />
                    <Grain />

                    <div className="relative z-10 h-full w-full p-6 md:p-8 flex items-center justify-center text-white">
                      <div className="text-center">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">{cap.title}</h3>
                        <p className="mt-2 md:mt-3 text-white/90 text-base md:text-lg max-w-xl mx-auto">{cap.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute top-8 left-0 right-0 flex justify-center">
            <h2
              id="capabilities"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-border"
            >
              Practical Capabilities That Deliver
            </h2>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <a href="/services" className="text-accent hover:underline font-medium">Skip to Services →</a>
      </div>

      <style jsx global>{`
        :root {
          --hf-card: 320px;
        }
      `}</style>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-component                                                     */
/* ------------------------------------------------------------------ */

const Grain = () => (
  <div
    className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
    style={{
      backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(255,255,255,.25) 0%, transparent 20%),
        radial-gradient(circle at 80% 0%,   rgba(0,0,0,.25)      0%, transparent 22%),
        radial-gradient(circle at 0% 50%,   rgba(0,0,0,.2)       0%, transparent 25%),
        radial-gradient(circle at 90% 80%, rgba(255,255,255,.2) 0%, transparent 18%),
        radial-gradient(circle at 30% 90%, rgba(0,0,0,.2)        0%, transparent 24%)
      `,
      filter: "contrast(120%) saturate(110%)",
    }}
  />
)