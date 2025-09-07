"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

/* ----------------  DATA  ---------------- */
const CAPABILITIES = [
  { title: "Lightning-Fast", desc: "Sub-second triggers and batched execution keep flows snappy even at peak. Built-in retries and circuit breakers ensure dependable runs without babysitting." },
  { title: "Visual Workflows", desc: "Design complex multi-step automations with guards, approvals, and rollbacks. Reusable sub-flows and inputs make changes safe and fast." },
  { title: "AI Native", desc: "Specialized agents for research, routing, and enrichment. Grounded on your data with safe tools and clear fallbacks to humans when needed." },
  { title: "Cloud Ready", desc: "Autoscale workers, queue backpressure, and idempotent steps so deployments remain smooth. Observability included for tracing and alerts." },
  { title: "Enterprise Guardrails", desc: "Least-privilege access, audit logs, PII handling, and approval gates. Versioned changes and staged rollouts reduce risk." },
  { title: "Insights", desc: "Dashboards for throughput, error rates, and SLA budgets. Tie metrics to business KPIs to prove ROI and find bottlenecks quickly." },
  { title: "Data Sync", desc: "Bi-directional sync for CRMs, ERPs, and warehouses. Schema-aware mapping, deduplication, and conflict resolution keep records clean." },
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

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

/* ------------------------------------------------------------------ */
export default function HorizontalFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let startY = 0
    let endY = 0
    let range = 1

    const setCardSize = () => {
      const el = containerRef.current
      if (!el) return
      const size = Math.round(Math.min(window.innerHeight * 0.5, window.innerWidth * 0.86))
      el.style.setProperty("--hf-card", `${Math.max(280, size)}px`)
    }

    const recalc = () => {
      const el = containerRef.current
      if (!el) return
      el.style.height = `${CAPABILITIES.length * 100 + 15}vh`
      setCardSize()
      const rect = el.getBoundingClientRect()
      startY = window.scrollY + rect.top
      endY = startY + el.offsetHeight - window.innerHeight - window.innerHeight * 0.15
      range = Math.max(endY - startY, 1)
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
    }

    const onResize = () => { recalc(); scroll() }

    recalc()
    let raf = requestAnimationFrame(function loop() { scroll(); raf = requestAnimationFrame(loop) })

    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <section aria-labelledby="capabilities" className="relative">
      <div ref={containerRef} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden bg-gray-50">
          <div ref={trackRef} className="will-change-transform">
            <div className="flex h-screen">
              {CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="flex-shrink-0 px-6 md:px-12 flex items-center justify-center">
                  <article
                    className="relative grid grid-cols-6 grid-rows-6 w-[var(--hf-card)] h-[var(--hf-card)] rounded-[2.5rem] shadow-2xl bg-cover bg-center overflow-hidden group"
                    style={{ backgroundImage: `url(${BG_IMAGES[idx % BG_IMAGES.length]})` }}
                  >
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60", GRADIENTS[idx % GRADIENTS.length])} />
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 /%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 /%3E%3C/svg%3E')]" />
                    <span className="absolute top-5 left-5 text-6xl font-black text-white/20">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="relative z-10 col-span-6 row-span-6 self-end p-7 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight drop-shadow-md">{cap.title}</h3>
                      <p className="mt-2 text-base md:text-lg max-w-md text-white/90 drop-shadow-sm">{cap.desc}</p>
                    </div>
                    <div className="absolute -inset-10 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out rounded-full blur-3xl" />
                  </article>
                </div>
              ))}
              <div className="flex-shrink-0 w-[15vw]" />
            </div>
          </div>

          {/*<div className="pointer-events-none absolute top-6 left-0 right-0 flex justify-center z-30">
            <h2 id="capabilities" className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">Practical Capabilities That Deliver</h2>
          </div>*/}
        </div>
      </div>

      <div className="text-center mt-6"><a href="/services" className="text-accent hover:underline font-medium">Skip to Services →</a></div>

      <style jsx global>{`
        :root { --hf-card: min(50vh, 86vw); }
      `}</style>
    </section>
  )
}