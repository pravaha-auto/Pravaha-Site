"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import StackedCards from "@/components/stacked-cards"
import { Workflow, Bot, PhoneCall, Plug } from "lucide-react"

export default function ServicesPage() {
  const stacks = [
    {
      title: "Automation Workflows",
      description:
        "Design and implement reliable multi-step workflows using n8n and Zapier. Triggers, data transforms, approvals, and error handling included.",
      icon: <Workflow className="w-5 h-5" />,
    },
    {
      title: "AI Agents",
      description:
        "Task-specific AI assistants for research, support, routing, and enrichment—grounded in your data and integrated in your stack.",
      icon: <Bot className="w-5 h-5" />,
    },
    {
      title: "Voice Agents",
      description:
        "Natural voice interfaces for booking, qualification, and notifications. Integrate with telephony and CRMs.",
      icon: <PhoneCall className="w-5 h-5" />,
    },
    {
      title: "App Integration",
      description:
        "Connect CRMs, ERPs, support desks, data stores, and custom apps with clean, documented interfaces.",
      icon: <Plug className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4">Services</h1>
          <p className="text-lg text-[hsl(var(--foreground)/0.75)]">
            Custom automation services—not software licenses. We build what fits your business.
          </p>
        </header>

        <StackedCards items={stacks} className="max-w-4xl mx-auto" stickyOffset={28} />
      </main>
      <Footer />
    </div>
  )
}
