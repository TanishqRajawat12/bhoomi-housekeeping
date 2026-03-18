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
    title: "Sofa Cleaning",
    description: "Deep cleaning and sanitization for all types of sofas and upholstery. We remove stains, dust, and allergens to restore your furniture's freshness.",
    icon: "sofa",
    beforeImage: "/images/services/sofa-before.jpg",
    afterImage: "/images/services/sofa-after.jpg",
  },
  {
    title: "Carpet Shampooing",
    description: "Professional carpet and rug cleaning using advanced shampooing techniques. Remove deep-seated dirt and restore carpet fibers.",
    icon: "carpet",
    beforeImage: "/images/services/carpet-before.jpg",
    afterImage: "/images/services/carpet-after.jpg",
  },
  {
    title: "Car Seat Cleaning",
    description: "Thorough cleaning and conditioning of car seats and interiors. Keep your vehicle fresh and hygienic.",
    icon: "car",
    beforeImage: "/images/services/car-before.jpg",
    afterImage: "/images/services/car-after.jpg",
  },
  {
    title: "Home & Flat Cleaning",
    description: "Complete home cleaning services from floor to ceiling. Perfect for regular maintenance or deep cleaning sessions.",
    icon: "home",
    beforeImage: "/images/services/home-before.jpg",
    afterImage: "/images/services/home-after.jpg",
  },
  {
    title: "Bathroom Cleaning",
    description: "Specialized bathroom deep cleaning including tiles, fixtures, and hard water stain removal. Sparkling results guaranteed.",
    icon: "bathroom",
    beforeImage: "/images/services/bathroom-before.jpg",
    afterImage: "/images/services/bathroom-after.jpg",
  },
  {
    title: "Kitchen Cleaning",
    description: "Comprehensive kitchen cleaning covering cabinets, appliances, countertops, and exhaust systems. Grease-free and hygienic kitchens.",
    icon: "kitchen",
    beforeImage: "/images/services/kitchen-before.jpg",
    afterImage: "/images/services/kitchen-after.jpg",
  },
  {
    title: "Solar Panel Cleaning",
    description: "Professional solar panel cleaning to maximize energy efficiency. Safe techniques that protect your investment.",
    icon: "solar",
    beforeImage: "/images/services/solar-before.jpg",
    afterImage: "/images/services/solar-after.jpg",
  },
  {
    title: "Marble & Granite Polishing",
    description: "Expert polishing and restoration of marble and granite surfaces. Bring back the natural shine and luster.",
    icon: "marble",
    beforeImage: "/images/services/marble-before.jpg",
    afterImage: "/images/services/marble-after.jpg",
  },
  {
    title: "Wooden Floor Polishing",
    description: "Professional wooden floor care including polishing, buffing, and protective coating application.",
    icon: "wood",
    beforeImage: "/images/services/wood-before.jpg",
    afterImage: "/images/services/wood-after.jpg",
  },
  {
    title: "Garden Maintenance",
    description: "Complete garden care including plant maintenance, trimming, cutting, and landscaping services for homes and commercial spaces.",
    icon: "garden",
    beforeImage: "/images/services/garden-before.jpg",
    afterImage: "/images/services/garden-after.jpg",
  },
  {
    title: "Pest Control Services",
    description: "Safe and effective pest control solutions for homes and businesses. We handle termites, cockroaches, rodents, and more.",
    icon: "pest",
    beforeImage: "/images/services/pest-before.jpg",
    afterImage: "/images/services/pest-after.jpg",
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
