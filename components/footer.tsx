import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-white border-t border-[hsl(var(--border))]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logos/Pravahaicon2.png"
                alt="Pravāha Logo"
                className="w-8 h-8 rounded-md object-contain"
              />
              <div className="text-[hsl(var(--primary))]">
                <div className="text-lg font-bold tracking-tight">Pravāha</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[hsl(var(--primary)/0.7)]">Automation Services</div>
              </div>
            </Link>
            <p className="text-[hsl(var(--foreground)/0.75)] max-w-sm">
              We design and deliver dependable automation—so your teams can focus on high‑impact work.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <div className="flex items-center text-[hsl(var(--foreground)/0.8)]">
              <Mail className="w-4 h-4 mr-2 text-[hsl(var(--accent))]" />
              <span className="text-sm">contact.pravaha@gmail.com</span>
            </div>
            <div className="flex items-center text-[hsl(var(--foreground)/0.8)]">
              <Phone className="w-4 h-4 mr-2 text-[hsl(var(--accent))]" />
              <span className="text-sm">+91-63 5543 3022</span>
            </div>
            <div className="flex items-center text-[hsl(var(--foreground)/0.8)]">
              <MapPin className="w-4 h-4 mr-2 text-[hsl(var(--accent))]" />
              <span className="text-sm">Gandhinagar, Gujarat, India</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--border))] mt-12 pt-6 flex justify-center">
          <p className="text-[hsl(var(--foreground)/0.6)] text-sm">© 2025 Pravāha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
