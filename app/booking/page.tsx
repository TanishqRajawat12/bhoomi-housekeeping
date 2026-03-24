"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Clock, Phone, MessageCircle } from "lucide-react"

const services = [
  "Sofa Cleaning",
  "Carpet Shampooing",
  "Car Seat Cleaning",
  "Home & Flat Cleaning",
  "Bathroom Cleaning",
  "Kitchen Cleaning",
  "Solar Panel Cleaning",
  "Marble & Granite Polishing",
  "Wooden Floor Polishing",
  "Garden Maintenance",
  "Pest Control Services",
]

const WHATSAPP_NUMBER = "917014337079"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const buildWhatsAppURL = () => {
    // Format date nicely if provided
    const formattedDate = formData.date
      ? new Date(formData.date).toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : ""

    // Format time nicely if provided
    const formattedTime = formData.time
      ? new Date(`1970-01-01T${formData.time}`).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : ""

    const lines = [
      "Hello! I'd like to book a service. Here are my details:",
      "",
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `📍 *Address:* ${formData.address}`,
      `🧹 *Service:* ${formData.service}`,
      `📅 *Date:* ${formattedDate}`,
      `🕐 *Time:* ${formattedTime}`,
      formData.message ? `📝 *Message:* ${formData.message}` : "",
    ]
      .filter((line) => line !== "")
      .join("\n")

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildWhatsAppURL(), "_blank")
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Book a Service
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Fill out the form below and we'll open WhatsApp with your booking
              details pre-filled — no waiting, instant confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-foreground">
                  Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="address"
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground">
                  Service Type <span className="text-destructive">*</span>
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date & Time */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-foreground">
                    Preferred Date <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="pl-10"
                      required
                    />
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-foreground">
                    Preferred Time <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="pl-10"
                      required
                    />
                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Additional Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Any specific requirements or details..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit Button — opens WhatsApp directly */}
              <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Booking via WhatsApp
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Clicking the button will open WhatsApp with your booking details
                pre-filled. Just hit send!
              </p>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 border-t border-border pt-8">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Or reach us directly
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+917014337079"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to book a service.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#22c55e]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}