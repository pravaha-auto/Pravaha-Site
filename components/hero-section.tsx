"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroFlow from "@/components/hero-flow"

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center px-4 py-24 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left animate-on-scroll fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--primary))] leading-tight mb-6 tracking-tight">
              Tailor-Made Automation Workflows & AI Assistants for Your Business.
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--foreground)/0.8)] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build and integrate automation using tools like n8n, Zapier, and AI no software purchase required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.9)] text-white px-8 py-6 h-14 text-base"
              >
                <Link href="/schedule">Book Your Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[hsl(var(--border))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] px-8 py-6 h-14 text-base"
              >
                <Link href="#how-it-works">How We Work</Link>
              </Button>
            </div>
          </div>

          {/* Animated flow diagram */}
          <div className="animate-on-scroll slide-up delay-200">
            <HeroFlow />
          </div>
        </div>
      </div>
    </section>
  )
}
