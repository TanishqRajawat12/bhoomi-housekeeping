import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Shield,
  Heart,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Bhoomi's Housekeeping",
  description:
    "Learn about Bhoomi's Housekeeping - premium cleaning services in Jaipur founded by experienced hotelier Samanvya Singh.",
}

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We strive for perfection in every cleaning task, no matter how big or small.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Our background-verified team ensures your home and belongings are in safe hands.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "We treat every space as our own, with attention to detail and genuine care.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Premium products and professional techniques deliver superior results every time.",
  },
]

const milestones = [
  { number: "500+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Projects Completed" },
  { number: "100%", label: "Satisfaction Rate" },
]

// Helper to generate image paths for a range (inclusive, 1-indexed)
function imgRange(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => ({
    src: `/images/about/image${start + i}.jpeg`,
    alt: `Work showcase ${start + i}`,
  }))
}

const galleryCategories = [
  {
    id: "hotel-restaurant",
    label: "Hotel & Restaurant Cleaning",
    emoji: "🏨",
    description: "Hospitality-grade deep cleaning for hotels, restaurants, and commercial kitchens.",
    images: imgRange(1, 9),
  },
  {
    id: "home-flat",
    label: "Home & Flat Cleaning",
    emoji: "🏠",
    description: "Regular and deep cleaning services tailored for residences and apartments.",
    images: imgRange(10, 14),
  },
  {
    id: "garden",
    label: "Garden Maintenance",
    emoji: "🌿",
    description: "Lawn care, pruning, and outdoor space upkeep to keep your garden pristine.",
    images: [
      { src: "/images/about/image24.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/image29.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/image30.jpeg", alt: "Work showcase 30" },
      { src: "/images/about/image32.jpeg", alt: "Work showcase 32" },
      { src: "/images/about/abugm1.jpeg", alt: "Work showcase 37" },
    ],
  },
  {
    id: "sofa-shampooing",
    label: "Sofa Shampooing",
    emoji: "🛋️",
    description: "Professional upholstery cleaning to restore sofas, chairs, and fabric surfaces.",
    images: [
      { src: "/images/about/image1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/image3.jpeg", alt: "Work showcase 29" },
    ],
  },
  {
    id: "bathroom-cleaning",
    label: "Bathroom Cleaning",
    emoji: "🛁",
    description: "Professional bathroom cleaning to restore premium feel.",
    images: [
      { src: "/images/about/abubc1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abubc2.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abubc3.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/abubc4.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abubc5.jpeg", alt: "Work showcase 29" },
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">About Us</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"Bringing professional housekeeping excellence to Jaipur's homes and businesses since our founding."}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  {"Bhoomi's Housekeeping was founded with a simple vision: to bring hotel-quality cleanliness and service to every home and business in Jaipur."}
                </p>
                <p className="leading-relaxed">
                  {"Our founder, Samanvya Singh, brings over a decade of experience in the hospitality industry, having worked with some of Jaipur's finest hotels. This background in premium hospitality services shaped our commitment to excellence and attention to detail."}
                </p>
                <p className="leading-relaxed">
                  {"Today, we serve a diverse clientele including luxury hotels, restaurants, corporate offices, and residential homes. Our team of trained professionals uses advanced cleaning techniques and eco-friendly products to deliver results that exceed expectations."}
                </p>
              </div>
              <Button asChild>
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-primary/10 p-6">
                <div className="flex h-full flex-col items-center justify-center rounded-xl bg-card p-8 text-center shadow-lg">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <span className="font-heading text-2xl font-bold text-primary-foreground">SS</span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">Samanvya Singh</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Founder & Director</p>
                  <p className="text-sm italic text-muted-foreground">
                    {'"Excellence in cleanliness is not just our job, it\'s our passion."'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <div key={milestone.label} className="text-center">
                <p className="font-heading text-4xl font-bold text-primary-foreground">{milestone.number}</p>
                <p className="mt-2 text-primary-foreground/80">{milestone.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Gallery — Categorised */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Work</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A glimpse of the spaces we have transformed for our clients across Jaipur.
            </p>
          </div>

          {/* Category blocks */}
          <div className="space-y-16">
            {galleryCategories.map((category) => (
              <div key={category.id}>
                {/* Category header */}
                <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      <span className="mr-2">{category.emoji}</span>
                      {category.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                  </div>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {category.images.length} photo{category.images.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px bg-border" />

                {/* Image grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide every service we provide.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Mission</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {"To provide premium, reliable, and eco-friendly cleaning services that transform spaces and enhance quality of life for our clients across Jaipur."}
            </p>
            <ul className="inline-flex flex-col gap-3 text-left">
              {[
                "Professional and courteous service",
                "Eco-friendly cleaning products",
                "Trained and verified staff",
                "Customer satisfaction guaranteed",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">
            Ready to Experience the Difference?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            {"Join hundreds of satisfied clients who trust Bhoomi's Housekeeping for their cleaning needs."}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/booking">
                Book a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}