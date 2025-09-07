import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = ["No setup fees", "24/7 expert support", "Cancel anytime"]

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="rounded-3xl border border-[hsl(var(--border))] p-8 md:p-12 text-center bg-[hsl(var(--secondary))] animate-on-scroll fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-6">Start Your Automation Journey</h2>
          <p className="text-lg md:text-xl text-[hsl(var(--foreground)/0.8)] mb-8 max-w-2xl mx-auto">
            Book a free consultation. We’ll map opportunities and outline a practical plan—no software purchase required.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-[hsl(var(--foreground))]">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] mr-2" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.9)] text-white font-semibold px-8 py-4 text-lg">
              <Link href="/schedule">Book Your Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[hsl(var(--border))] text-[hsl(var(--primary))] hover:bg-white px-8 py-4 text-lg"
            >
              <Link href="/process">See How We Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
