"use client"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sparkles, Shield, Heart, Award,
  ArrowRight, CheckCircle2, X, ChevronLeft, ChevronRight,
} from "lucide-react"

const values = [
  { icon: Sparkles, title: "Excellence", description: "We strive for perfection in every cleaning task, no matter how big or small." },
  { icon: Shield, title: "Trust", description: "Our background-verified team ensures your home and belongings are in safe hands." },
  { icon: Heart, title: "Care", description: "We treat every space as our own, with attention to detail and genuine care." },
  { icon: Award, title: "Quality", description: "Premium products and professional techniques deliver superior results every time." },
]

const milestones = [
  { number: "500+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Projects Completed" },
  { number: "100%", label: "Satisfaction Rate" },
]

type GalleryImage = { src: string; alt: string }
type GalleryCategory = {
  id: string
  label: string
  emoji: string
  description: string
  images: GalleryImage[]
}

const galleryCategories: GalleryCategory[] = [
  {
    id: "sofa-shampooing",
    label: "Sofa Shampooing",
    emoji: "🛋️",
    description: "Professional upholstery cleaning to restore sofas, chairs, and fabric surfaces.",
    images: [
      { src: "/images/about/image1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/image3.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/sofa1.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/abtsofa1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abtsofa3.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/abtsofa2.jpeg", alt: "Work showcase 29" },
    ],
  },
  {
    id: "carpet-shampooing",
    label: "Carpet Shampooing",
    emoji: "🀄️",
    description: "Hospitality-grade deep cleaning for carpets and rugs.",
    images: [
      { src: "/images/about/carpet1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/carpet2.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/carpet3.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/carpet4.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/carpet5.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/carpet6.jpeg", alt: "Work showcase 29" },
    ],
  },
  {
    id: "car-shampooing",
    label: "Car Seat Dry Clean",
    emoji: "🚗",
    description: "Deep cleaning for car seats and upholstery.",
    images: [
      { src: "/images/about/car1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/car2.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/car3.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/car4.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/car5.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/car7.jpeg", alt: "Work showcase 29" },
    ],
  },
  {
    id: "wooden-restaurant",
    label: "Wooden Polishing",
    emoji: "🏨",
    description: "Hospitality-grade deep polishing for hotels, restaurants, and homes.",
    images: [
      { src: "/images/about/wood1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/wood2.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/wood3.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/wood4.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/wood5.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/wood6.jpeg", alt: "Work showcase 24" },
    ],
  },
  {
    id: "marble-restaurant",
    label: "Marble Polishing",
    emoji: "🏨",
    description: "Hospitality-grade deep polishing for hotels, restaurants, and homes.",
    images: [
      { src: "/images/about/marble1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/marble2.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abtsmar4.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abtsmar1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abtsmar2.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abtsmar3.jpeg", alt: "Work showcase 24" },
    ],
  },
  {
    id: "home-flat",
    label: "Home & Flat Cleaning",
    emoji: "🏠",
    description: "Regular and deep cleaning services tailored for residences and apartments.",
    images: [
      { src: "/images/about/homeflat1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/homeflat2.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/homeflat3.jpeg", alt: "Work showcase 30" },
      { src: "/images/about/homeflat4.jpeg", alt: "Work showcase 32" },
      { src: "/images/about/abthf.jpeg", alt: "Work showcase 37" },
      { src: "/images/about/image12.jpeg", alt: "Work showcase 30" },
    ],
  },
  {
    id: "garden",
    label: "Garden Maintenance",
    emoji: "🌿",
    description: "Lawn care, pruning, and outdoor space upkeep to keep your garden pristine.",
    images: [
      { src: "/images/about/garden1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/garden2.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/image30.jpeg", alt: "Work showcase 30" },
      { src: "/images/about/abtgar1.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abtgar2.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abtgar3.jpeg", alt: "Work showcase 24" },
    ],
  },
  {
    id: "bathroom-cleaning",
    label: "Bathroom Cleaning",
    emoji: "🛁",
    description: "Professional bathroom cleaning to restore premium feel.",
    images: [
      { src: "/images/about/bathroom.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abubc2.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abubc3.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/abubc4.jpeg", alt: "Work showcase 24" },
      { src: "/images/about/abubc5.jpeg", alt: "Work showcase 29" },
      { src: "/images/about/abtbt.jpeg", alt: "Work showcase 29" },
    ],
  },
  {
    id: "solar-cleaning",
    label: "Solar Cleaning",
    emoji: "☀️",
    description: "Professional solar cleaning to restore full energy harvesting potential.",
    images: [
      { src: "/images/about/abtsl.jpeg", alt: "Work showcase 24" },
      { src: "/images/gallery/image3.jpeg", alt: "Work showcase 24" },
      { src: "/images/gallery/image4.jpeg", alt: "Work showcase 24" },
    ],
  },
]

export default function AboutPage() {
  const [lightbox, setLightbox] = useState<{ catId: string; index: number } | null>(null)

  const currentCat = lightbox ? galleryCategories.find((c) => c.id === lightbox.catId) : null
  const currentImage = currentCat ? currentCat.images[lightbox!.index] : null
  const total = currentCat ? currentCat.images.length : 0

  const close = () => setLightbox(null)

  const navigate = useCallback(
    (dir: "prev" | "next") => {
      if (!lightbox || !currentCat) return
      const next =
        dir === "prev"
          ? (lightbox.index - 1 + total) % total
          : (lightbox.index + 1) % total
      setLightbox({ catId: lightbox.catId, index: next })
    },
    [lightbox, currentCat, total]
  )

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") navigate("prev")
      if (e.key === "ArrowRight") navigate("next")
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox, navigate])

  return (
    <div className="flex flex-col">

      {/* Hero */}
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

      {/* Story */}
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
                  {"Our founder, Samanvya, brings over a decade of experience in the hospitality industry, having worked with some of Jaipur's finest hotels. This background in premium hospitality services shaped our commitment to excellence and attention to detail."}
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
                    <span className="font-heading text-2xl font-bold text-primary-foreground">S</span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">Samanvya</h3>
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

      {/* Stats */}
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

      {/* Our Work Gallery */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Work</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A glimpse of the spaces we have transformed for our clients across Jaipur.
            </p>
          </div>

          <div className="space-y-16">
            {galleryCategories.map((category) => (
              <div key={category.id}>
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

                <div className="mb-6 h-px bg-border" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setLightbox({ catId: category.id, index })}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-end bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="p-3 text-sm font-medium text-white">{category.label}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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

      {/* Mission */}
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

      {/* CTA */}
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

      {/* Lightbox */}
      {lightbox && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate("prev") }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate("next") }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative flex max-h-[95vh] w-full max-w-6xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[88vh] w-full overflow-hidden rounded-xl">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-sm font-medium">{currentCat!.label}</span>
              <span className="text-white/40">·</span>
              <span className="text-xs text-white/50">
                {lightbox.index + 1} / {total}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}