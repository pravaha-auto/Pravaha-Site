"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProcessPage() {
  const steps = [
    { title: "1. Discover", description: "We map your goals, constraints, and existing tools. We identify the highest-ROI automation opportunities with you." },
    { title: "2. Design", description: "Solution blueprints with data flow, edge cases, and handoffs. Clear scope, timeline, and responsibilities." },
    { title: "3. Build", description: "Implement workflows and agents with best practices for reliability, observability, and security." },
    { title: "4. Deploy", description: "Staged rollout with validation and training. Smooth handover with documentation." },
    { title: "5. Support", description: "Monitor, iterate, and evolve as your processes grow. Optional monthly support." },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-[hsl(var(--primary))] mb-4 tracking-tight">
            How We Work
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--foreground)/0.75)] leading-snug">
            A clear, collaborative process—from discovery to ongoing support.
          </p>
        </header>

        <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map(({ title, description }) => (
            <div
              key={title}
              className="bg-white border border-[hsl(var(--border))] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-medium text-[hsl(var(--primary))] mb-2">
                {title}
              </h3>
              <p className="text-[hsl(var(--foreground)/0.8)] text-[1.05rem] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}