import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import HorizontalFeatures from "@/components/horizontal-features"
import IntegrationsSection from "@/components/integrations-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Pravāha - Anything Automated | AI Automation & Workflow Solutions",
  description:
    "Experience unmatched AI automation with lightning-fast cloud processing. Pravāha specializes in creating workflows using n8n, Zapier, and managing CRM & ERP systems.",
  keywords: "automation, AI, workflows, n8n, Zapier, CRM, ERP, cloud processing, business automation",
  openGraph: {
    title: "Pravāha - Anything Automated",
    description: "Experience unmatched AI automation with lightning-fast cloud processing",
    type: "website",
  },
}

import ScrollAnimationProvider from "@/components/scroll-animation-provider"

import StackedCards from "@/components/stacked-cards"

export default function HomePage() {
  const servicesTeaser = [
    { title: "Automation Workflows", description: "Reliable multi-step automations built on n8n and Zapier." },
    { title: "AI & Voice Agents", description: "Assistants that handle research, routing, and conversations." },
    { title: "App Integration", description: "Connect CRMs, ERPs, data stores, and custom apps." },
  ]

  const howWeWork = [
    { title: "Discover", description: "Align on goals and identify highest-ROI opportunities." },
    { title: "Design", description: "Blueprint with data flow, edge cases, and handoffs." },
    { title: "Build", description: "Implement with reliability and observability." },
  ]

  return (
    <ScrollAnimationProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <HorizontalFeatures />

          {/* Services teaser using stacked cards */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-2">Services</h2>
                <p className="text-[hsl(var(--foreground)/0.75)]">Custom services—no software purchase required.</p>
              </div>
              <StackedCards items={servicesTeaser} className="max-w-4xl mx-auto" stickyOffset={24} />
              <div className="text-center mt-6">
                <a href="/services" className="text-[hsl(var(--accent))] hover:underline font-medium">Explore Services →</a>
              </div>
            </div>
          </section>

          {/* How we work preview */}
          <section id="how-it-works" className="py-16 px-4 bg-[hsl(var(--secondary))]">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-2">How We Work</h2>
                <p className="text-[hsl(var(--foreground)/0.75)]">Clear, collaborative, and outcome‑focused.</p>
              </div>
              <StackedCards items={howWeWork} className="max-w-4xl mx-auto" stickyOffset={20} />
              <div className="text-center mt-6">
                <a href="/process" className="text-[hsl(var(--accent))] hover:underline font-medium">See the full process →</a>
              </div>
            </div>
          </section>

          <IntegrationsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ScrollAnimationProvider>
  )
}
