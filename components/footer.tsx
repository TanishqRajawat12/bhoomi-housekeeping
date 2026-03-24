import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail } from "lucide-react"

const services = [
  "Sofa Cleaning",
  "Carpet Shampooing",
  "Home Cleaning",
  "Kitchen Cleaning",
  "Pest Control",
]

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Service" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Bhoomi's Housekeeping Logo"
                width={400}
                height={200}
                className="h-40 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Premium housekeeping services in Jaipur. We bring cleanliness and comfort to your spaces with professional care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917014337079" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>+91 70143 37079</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@bhoomihousekeeping.com" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>info@bhoomihousekeeping.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>D-153, Siddarth Nagar A B C D Block, Ward No-28, Malviya Nagar, Jaipur, Rajasthan - 302017</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {"© 2026 Bhoomi's Housekeeping. All rights reserved."} Powered by <a target="#" href="https://rajputanards.com"><u>Q Engine</u></a>
          </p>
        </div>
      </div>
    </footer>
  )
}
