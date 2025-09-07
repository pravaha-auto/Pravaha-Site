"use client"

import Image from "next/image"
import Link from "next/link"

const integrations = [
  { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/n8n-icon.png?height=60&width=120", category: "Workflow" },
  { name: "Zapier", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Zapier-icon.jpeg?height=60&width=120", category: "Automation" },
  { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Salesforce-icon.jpeg?height=60&width=120", category: "CRM" },
  { name: "HubSpot", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Hubspot-icon.png?height=60&width=120", category: "CRM" },
  { name: "SAP", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/SAP-icon.jpeg?height=60&width=120", category: "ERP" },
  { name: "Microsoft Dynamics", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Microsoft-Icon.jpeg?height=60&width=120", category: "ERP" },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/slack -Icon.jpeg?height=60&width=120", category: "Communication" },
  { name: "Google Workspace", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Google-Icon.jpeg?height=60&width=120", category: "Productivity" },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Notion-icon.jpeg?height=60&width=120", category: "Productivity" },
  { name: "Airtable", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/AIrtable-icon.jpeg?height=60&width=120", category: "Database" },
  { name: "Stripe", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Stripe-Icon.jpeg?height=60&width=120", category: "Payment" },
  { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Shopify-Icon.jpeg?height=60&width=120", category: "E-commerce" },
]

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll fade-in slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">Seamless Integrations</h2>
          <p className="text-lg text-[hsl(var(--foreground)/0.7)] max-w-2xl mx-auto">
            We work across your stack — CRM, ERP, comms, and data tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 animate-on-scroll stagger-children">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[hsl(var(--border))] hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[hsl(var(--secondary))] rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <img
                  src={integration.logo || "/placeholder.svg"}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[hsl(var(--foreground))] font-medium text-sm mb-1">{integration.name}</h3>
              <p className="text-[hsl(var(--foreground)/0.6)] text-xs">{integration.category}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-on-scroll fade-in delay-200">
          <p className="text-[hsl(var(--foreground)/0.7)] mb-4">{"Don't see your tool? We can integrate with any API."}</p>
          <Link href="/contact" className="text-[hsl(var(--accent))] hover:underline font-medium">Request Custom Integration</Link>
        </div>
      </div>
    </section>
  )
}
