import { Zap, Cloud, Shield, Gauge, Workflow, Bot } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Processing",
    description:
      "Experience unmatched speed with our optimized cloud infrastructure designed for rapid automation execution.",
  },
  {
    icon: Workflow,
    title: "Advanced Workflow Builder",
    description:
      "Create complex automation workflows using n8n and Zapier integrations with our intuitive visual builder.",
  },
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Leverage artificial intelligence to make your automations smarter and more adaptive to changing conditions.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built for the cloud with scalable infrastructure that grows with your automation needs.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security ensures your data and automations are protected with end-to-end encryption.",
  },
  {
    icon: Gauge,
    title: "Real-Time Monitoring",
    description: "Monitor your automations in real-time with detailed analytics and performance insights.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll fade-in slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4 tracking-tight">
            Practical Capabilities That Deliver
          </h2>
          <p className="text-lg text-[hsl(var(--foreground)/0.7)] max-w-2xl mx-auto">
            We implement reliable, maintainable automation—tailored to your tools and processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll stagger-children">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-[hsl(var(--border))] hover:shadow-md transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 bg-[hsl(var(--secondary))] text-[hsl(var(--accent))]">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-[hsl(var(--foreground)/0.7)] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
