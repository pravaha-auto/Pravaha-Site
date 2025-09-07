"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4">About Pravāha</h1>
          <p className="text-lg text-[hsl(var(--foreground)/0.75)]">
            We are a services company focused on building tailored automation—AI agents, voice agents, workflows, and integrations.
          </p>
        </header>

        <section className="max-w-4xl mx-auto space-y-6 text-[hsl(var(--foreground)/0.85)] leading-relaxed">
          <p>
            Our mission is simple: make your operations flow. We work within your tools to design and deliver dependable automation
            that saves time, reduces errors, and scales with your business.
          </p>
          <p>
            Clients across industries trust us to connect data, orchestrate processes, and enable teams to focus on high‑impact work.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
