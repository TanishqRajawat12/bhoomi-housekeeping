import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Bhoomi's Housekeeping",
  description: "Get in touch with Bhoomi's Housekeeping. Call us, WhatsApp us, or visit our office in Malviya Nagar, Jaipur.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 70143 37079",
    href: "tel:+917014337079",
    description: "Call us for quick inquiries",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 70143 37079",
    href: "https://wa.me/917014337079?text=Hi%20I%20want%20to%20book%20a%20service",
    description: "Chat with us for bookings",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@bhoomihousekeeping.com",
    href: "mailto:info@bhoomihousekeeping.com",
    description: "Send us your queries",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 8AM - 8PM",
    href: null,
    description: "Sunday by appointment",
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">Contact Us</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"Have questions or ready to book? We're here to help. Reach out through any of our channels below."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-primary hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{item.value}</p>
                )}
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Map Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Address Details */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">Visit Our Office</h2>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Registered Office</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      D-153, Siddarth Nagar A B C D Block,<br />
                      Ward No-28, Malviya Nagar,<br />
                      Jaipur, Rajasthan - 302017
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">Quick Actions</h3>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1">
                    <Link href="/booking">
                      Book a Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <a
                    href="https://wa.me/917014337079?text=Hi%20I%20want%20to%20book%20a%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2 font-medium text-white transition-colors hover:bg-[#22c55e]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </div>
                <a
                  href="tel:+917014337079"
                  className="flex items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-3 font-medium transition-colors hover:bg-secondary"
                >
                  <Phone className="h-4 w-4" />
                  Call: +91 70143 37079
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8544949854!2d75.79641461504!3d26.8561698832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f5c5555555%3A0x5555555555555555!2sMalviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhoomi's Housekeeping Location"
                className="h-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            {"Experience the difference professional cleaning makes. Book your service today or reach out with any questions."}
          </p>
          <Button size="lg" asChild>
            <Link href="/booking">
              Book Your Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
