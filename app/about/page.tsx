"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[hsl(var(--muted))]">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-[hsl(var(--primary))] mb-4 tracking-tight">
            About Pravāha
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--foreground)/0.75)] leading-snug">
            Tailored automation that makes your operations flow—
            <br className="hidden sm:block" />
            AI agents, voice agents, workflows & integrations.
          </p>
        </header>

        <section className="max-w-3xl mx-auto">
          <div className="relative bg-white/60 backdrop-blur rounded-2xl p-8 md:p-10 shadow-subtle border border-[hsl(var(--border))]">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-[hsl(var(--primary)/0.08)] rounded-full blur-2xl" />
            <div className="space-y-5 text-[hsl(var(--foreground)/0.85)] text-[1.05rem] leading-relaxed">
              <p>
                Our mission is simple: make your operations flow. We embed ourselves in your existing tools to design and deliver
                dependable automation that saves time, reduces errors, and scales with your business.
              </p>
              <p>
                From finance to healthcare, startups to Fortune-500, teams trust us to connect data, orchestrate processes, and
                free people to focus on high-impact, creative work.
              </p>
              <p className="font-medium text-[hsl(var(--primary))]">
                If it can be repeated, it can be automated—let’s build the current that moves you forward.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .shadow-subtle {
          box-shadow: 0 4px 24px -6px hsl(var(--primary)/0.06);
        }
      `}</style>
    </div>
  )
}