"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="relative z-50 w-full border-b border-[hsl(var(--border))] bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md overflow-hidden">
              <img
                src="https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Pravahaicon2.png"
                alt="Pravāha Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-[hsl(var(--primary))]">
              <div className="text-xl font-bold tracking-tight">Pravaha</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[hsl(var(--primary)/0.7)]">Automation Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--foreground))] transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.9)] transition-colors"
            >
              Book Your Free Consultation
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[hsl(var(--foreground))]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-[hsl(var(--border))]">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.9)]"
                  >
                    Book Your Free Consultation
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
