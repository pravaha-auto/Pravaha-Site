"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, User, MessageSquare, Send, CheckCircle, MapPin } from "lucide-react"
import ScrollAnimationProvider from "@/components/scroll-animation-provider"

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Send data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }
      
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError(typeof err === 'object' && err !== null && 'message' in err 
        ? (err as Error).message 
        : 'There was an error submitting your message. Please try again.')
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ScrollAnimationProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
                Get in Touch
              </h1>
              <p className="text-[hsl(var(--foreground)/0.75)] text-lg max-w-2xl mx-auto">
                Have questions about our services or need support? We're here to help.
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="relative bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm overflow-hidden p-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 border border-white/10 rounded-2xl glow-border"></div>
                
                <div className="flex flex-col items-center justify-center space-y-4 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-white/70 max-w-md">
                    Thank you for reaching out. We've received your message and will get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 border border-white/10 rounded-2xl glow-border"></div>
                <div className="data-flow-particles"></div>
                
                {/* Form Header */}
                <div className="relative p-4 border-b border-[hsl(var(--border))] bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 glow-dot"></div>
                    <span className="text-[hsl(var(--foreground))] text-sm font-medium">
                      Contact Form
                    </span>
                  </div>
                </div>
                
                {/* Form Content */}
                <div className="relative p-6 space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[hsl(var(--foreground))] text-sm font-medium">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <User className="w-5 h-5" />
                        </div>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="pl-10 bg-white border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-gray-400 focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]/30"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[hsl(var(--foreground))] text-sm font-medium">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="pl-10 bg-white border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-gray-400 focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]/30"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[hsl(var(--foreground))] text-sm font-medium">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is your inquiry about?"
                        required
                        className="pl-10 bg-white border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-gray-400 focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]/30"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[hsl(var(--foreground))] text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your query in detail..."
                      required
                      className="min-h-[150px] bg-white border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-gray-400 focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]/30"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.9)] text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </div>
                
                {/* Processing Indicator */}
               
              </form>
            )}
            
            {/* Contact Information */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-[hsl(var(--border))] hover:shadow-md transition-all duration-300">
                <MapPin className="w-8 h-8 text-[hsl(var(--accent))] mb-4" />
                <h3 className="text-[hsl(var(--foreground))] font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-[hsl(var(--foreground)/0.75)] mb-3">Come say hello</p>
                <address className="text-orange-400 not-italic">
                Ahmedabad<br />
                India
                </address>
                </div>
              
              <div className="bg-white rounded-xl p-6 border border-[hsl(var(--border))] hover:shadow-md transition-all duration-300">
                <Phone className="w-8 h-8 text-[hsl(var(--accent))] mb-4" />
                <h3 className="text-[hsl(var(--foreground))] font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-[hsl(var(--foreground)/0.75)] mb-3">Mon-Fri from 9am to 6pm</p>
                <a href="tel:+1234567890" className="text-[hsl(var(--accent))] hover:opacity-90 transition-colors duration-200">
                +91-79 8244 6541
                </a>
              </div>
             
              <div className="bg-white rounded-xl p-6 border border-[hsl(var(--border))] hover:shadow-md transition-all duration-300">
             
                <Mail className="w-8 h-8 text-[hsl(var(--accent))] mb-4" />
                <h3 className="text-[hsl(var(--foreground))] font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-[hsl(var(--foreground)/0.75)] mb-3">Our team is here to help</p>
                <a href="mailto:contact.pravaha@gmail.com" className="text-[hsl(var(--accent))] hover:opacity-90 transition-colors duration-200">
                  contact.pravaha@gmail.com
                </a>
             
              </div>  
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ScrollAnimationProvider>
  )
}

import { Phone } from "lucide-react"
