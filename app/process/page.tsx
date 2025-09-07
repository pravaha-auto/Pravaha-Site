"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import StackedCards from "@/components/stacked-cards"

export default function ProcessPage() {
  const steps = [
    {
      title: "1. Discover",
      description:
        "We map your goals, constraints, and existing tools. We identify the highest-ROI automation opportunities with you.",
    },
    {
      title: "2. Design",
      description:
        "Solution blueprints with data flow, edge cases, and handoffs. Clear scope, timeline, and responsibilities.",
    },
    {
      title: "3. Build",
      description:
        "Implement workflows and agents with best practices for reliability, observability, and security.",
    },
    {
      title: "4. Deploy",
      description:
        "Staged rollout with validation and training. Smooth handover with documentation.",
    },
    {
      title: "5. Support",
      description:
        "Monitor, iterate, and evolve as your processes grow. Optional monthly support.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4">How We Work</h1>
          <p className="text-lg text-[hsl(var(--foreground)/0.75)]">
            A clear, collaborative process—from discovery to ongoing support.
          </p>
        </header>

        <StackedCards items={steps} className="max-w-4xl mx-auto" stickyOffset={28} />
      </main>
      <Footer />
    </div>
  )
}
