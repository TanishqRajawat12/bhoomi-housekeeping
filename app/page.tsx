import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import {
  Sparkles,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

const featuredServices = [
  {
    title: "Sofa Cleaning",
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
    title: "Car Seat Cleaning",
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
    description: "Safe and effective pest control solutions for homes and businesses. We handle termites, cockroaches, rodents, and more.",
    icon: "pest",
    afterImage: "/images/services/osimage4.jpeg",
  },
]

const whyChooseUs = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "We use professional-grade equipment and eco-friendly products for the best results.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Our trained professionals are background-verified and insured for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book at your convenience with same-day and weekend availability options.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Years of hospitality experience ensuring top-notch service every time.",
  },
]

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Malviya Nagar, Jaipur",
    rating: 5,
    text: "Excellent service! They transformed my sofa completely. Very professional team.",
  },
  {
    name: "Rajesh Kumar",
    location: "Vaishali Nagar, Jaipur",
    rating: 5,
    text: "Best cleaning service in Jaipur. Punctual, efficient, and great results.",
  },
  {
    name: "Hotel Radiance",
    location: "C-Scheme, Jaipur",
    rating: 5,
    text: "We have been using their services for our hotel. Highly recommended for businesses.",
  },
]

const clientTypes = [
  "Hotels",
  "Restaurants & Cafes",
  "Offices",
  "Homes",
  "Commercial Spaces",
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                <Sparkles className="h-4 w-4" />
                <span>Premium Cleaning Services</span>
              </div>

              {/* Mobile Image — visible only on small screens */}
              <div className="block lg:hidden">
                <div className="rounded-2xl bg-primary/10 p-4">
                  <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-xl">
                    <img
                      src="images/hero.jpg"
                      alt="Professional cleaning service"
                      className="h-full w-full object-cover object-[center_80%]"
                    />
                  </div>
                </div>
              </div>

              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">Bhoomi's Housekeeping Services in Jaipur</span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Experience spotless spaces with our professional cleaning services. From homes to hotels, we deliver excellence in every corner.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/booking">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                {clientTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop Image — visible only on large screens */}
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-primary/10 p-8">
                <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="images/hero.jpg"
                    alt="Professional cleaning service"
                    className="h-full w-full object-cover object-[center_80%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive cleaning solutions tailored to your needs. From residential to commercial spaces, we have you covered.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              With years of hospitality experience, we bring professional standards to every cleaning job.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Trusted by homeowners and businesses across Jaipur.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials">
                Read More Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
                Ready for a Spotless Space?
              </h2>
              <p className="max-w-xl text-primary-foreground/80">
                Book your cleaning service today and experience the difference professional care makes.
              </p>
              <ul className="flex flex-wrap justify-center gap-4 lg:justify-start">
                {["Free Estimates", "Same Day Service", "100% Satisfaction"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/booking">Schedule Service</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <a href="tel:+917014337079">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}