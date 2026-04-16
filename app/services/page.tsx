import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Bhoomi's Housekeeping",
  description: "Explore our comprehensive cleaning services including sofa cleaning, carpet shampooing, home cleaning, pest control, and more in Jaipur.",
}

const services = [
  {
    title: "Sofa Shampooing",
    description: "Deep cleaning and sanitization for all types of sofas and upholstery. We remove stains, dust, and allergens to restore your furniture's freshness.",
    icon: "sofa",
    afterImage: "/images/services/osimage6.jpeg",
  },
  {
    title: "Carpet Shampooing",
    description: "Professional carpet and rug cleaning using advanced shampooing techniques. Remove deep-seated dirt and restore carpet fibers.",
    icon: "carpet",
    afterImage: "/images/services/osimage7.jpeg",
  },
  {
    title: "Car Seat Dry Clean",
    description: "Thorough cleaning and conditioning of car seats and interiors. Keep your vehicle fresh and hygienic.",
    icon: "car",
    afterImage: "/images/services/car-after.jpg",
  },
  {
    title: "Home & Flat Cleaning",
    description: "Complete home cleaning services from floor to ceiling. Perfect for regular maintenance or deep cleaning sessions.",
    icon: "home",
    afterImage: "/images/services/osimage2.jpeg",
  },
  {
    title: "Bathroom Cleaning",
    description: "Complete bathroom cleaning services from floor to ceiling. Perfect for regular maintenance or deep cleaning sessions.",
    icon: "bathtub",
    afterImage: "/images/services/osimage1.jpeg",
  },
  {
    title: "Solar Panel Cleaning",
    description: "Professional solar panel cleaning to maximize energy efficiency. Safe techniques that protect your investment.",
    icon: "solar",
    afterImage: "/images/services/osimage5.jpeg",
  },
  {
    title: "Marble & Granite Polishing",
    description: "Expert polishing and restoration of marble and granite surfaces. Bring back the natural shine and luster.",
    icon: "marble",
    afterImage: "/images/services/marble-after.jpg",
  },
  {
    title: "Wooden Floor Polishing",
    description: "Professional wooden floor care including polishing, buffing, and protective coating application.",
    icon: "wood",
    afterImage: "/images/services/wood-after.jpg",
  },
  {
    title: "Garden Maintenance",
    description: "Complete garden care including plant maintenance, trimming, cutting, and landscaping services for homes and commercial spaces.",
    icon: "garden",
    afterImage: "/images/services/osimage3.jpeg",
  },
  {
    title: "Pest Control Services",
    description: "Safe and effective pest control solutions for homes and businesses. We handle termites, cockroaches, rodents, and more. By PMP Services ",
    icon: "pest",
    afterImage: "/images/services/osimage4.jpeg",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">Our Services</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From residential to commercial spaces, we offer comprehensive cleaning and maintenance services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground">Need a Custom Solution?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            {"We understand every space is unique. Contact us for customized cleaning packages tailored to your specific requirements."}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">
                Book a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
