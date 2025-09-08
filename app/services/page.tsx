"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
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
          <h1 className="text-4xl md:text-5xl font-medium text-[hsl(var(--primary))] mb-4 tracking-tight">
            Services
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--foreground)/0.75)] leading-snug">
            Custom automation services—not software licenses. We build what fits your business.
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-[hsl(var(--border))] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3 text-[hsl(var(--primary))]">
                {s.icon}
                <h3 className="text-xl md:text-2xl font-medium">{s.title}</h3>
              </div>
              <p className="text-[hsl(var(--foreground)/0.75)] text-[1.05rem] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}