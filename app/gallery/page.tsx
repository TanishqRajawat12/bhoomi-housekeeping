"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/images/services/sofa-before.jpg",
    afterSrc: "/images/services/sofa-after.jpg",
    alt: "Sofa cleaning",
    category: "Sofa Cleaning",
  },
  {
    id: 2,
    src: "/images/services/carpet-before.jpg",
    afterSrc: "/images/services/carpet-after.jpg",
    alt: "Carpet cleaning",
    category: "Carpet Shampooing",
  },
  {
    id: 3,
    src: "/images/services/marble-before.jpg",
    afterSrc: "/images/services/marble-after.jpg",
    alt: "Marble floor polishing",
    category: "Marble Polishing",
  },
  {
    id: 4,
    src: "/images/services/pest-before.jpg",
    afterSrc: "/images/services/pest-after.jpg",
    alt: "Pest control service",
    category: "Pest Control",
  },
  {
    id: 5,
    src: "/images/services/home-before.jpg",
    afterSrc: "/images/services/home-after.jpg",
    alt: "Home cleaning service",
    category: "Home Cleaning",
  },
  {
    id: 6,
    src: "/images/services/garden-before.jpg",
    afterSrc: "/images/services/garden-after.jpg",
    alt: "Garden maintenance",
    category: "Garden Maintenance",
  },
  {
    id: 7,
    src: "/images/services/car-before.jpg",
    afterSrc: "/images/services/car-after.jpg",
    alt: "Car cleaning service",
    category: "Car Cleaning",
  },
  {
    id: 8,
    src: "/images/services/solar-before.jpg",
    afterSrc: "/images/services/solar-after.jpg",
    alt: "Solar panel cleaning",
    category: "Solar Cleaning",
  },
  {
    id: 9,
    src: "/images/services/wood-before.jpg",
    afterSrc: "/images/services/wood-after.jpg",
    alt: "Wood polishing service",
    category: "Wood Polishing",
  },
]

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [lightboxShowAfter, setLightboxShowAfter] = useState(false)

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const currentImageIndex =
    selectedImage !== null
      ? filteredImages.findIndex((img) => img.id === selectedImage)
      : -1

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    setLightboxShowAfter(false)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setLightboxShowAfter(false)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (currentImageIndex === -1) return
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentImageIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[newIndex].id)
    setLightboxShowAfter(false)
  }

  const currentImage = currentImageIndex !== -1 ? filteredImages[currentImageIndex] : null

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Our Gallery
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              See the transformations we achieve. Before and after shots showcasing our quality work.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((image) => {
              const isHovered = hoveredImage === image.id
              return (
                <button
                  key={image.id}
                  onClick={() => openLightbox(image.id)}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {/* Before Image */}
                  <Image
                    src={image.src}
                    alt={`${image.alt} - Before`}
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {/* After Image */}
                  <Image
                    src={image.afterSrc}
                    alt={`${image.alt} - After`}
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Before/After Badge */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ${
                        isHovered
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/70 text-background"
                      }`}
                    >
                      {isHovered ? "AFTER" : "BEFORE"}
                    </span>
                  </div>

                  {/* Category label on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">{image.category}</p>
                  </div>

                  {/* Mobile hint */}
                  <div className="absolute right-3 top-3 z-10 rounded-full bg-background/80 px-2 py-1 text-xs text-muted-foreground sm:hidden">
                    Tap to view
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-background/10 p-2 text-white transition-colors hover:bg-background/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("prev") }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/10 p-2 text-white transition-colors hover:bg-background/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("next") }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/10 p-2 text-white transition-colors hover:bg-background/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Before/After Toggle */}
            <div className="flex overflow-hidden rounded-full border border-white/20 bg-background/10">
              <button
                onClick={() => setLightboxShowAfter(false)}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${
                  !lightboxShowAfter
                    ? "bg-white text-foreground"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setLightboxShowAfter(true)}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${
                  lightboxShowAfter
                    ? "bg-primary text-primary-foreground"
                    : "text-white hover:bg-white/10"
                }`}
              >
                After
              </button>
            </div>

            {/* Image */}
            <div className="relative h-[70vh] w-full overflow-hidden rounded-xl">
              <Image
                src={currentImage.src}
                alt={`${currentImage.alt} - Before`}
                fill
                className={`object-contain transition-opacity duration-500 ${
                  lightboxShowAfter ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src={currentImage.afterSrc}
                alt={`${currentImage.alt} - After`}
                fill
                className={`object-contain transition-opacity duration-500 ${
                  lightboxShowAfter ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Caption */}
            <p className="text-sm font-medium text-white/80">{currentImage.category}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground">
            Want Results Like These?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            Book your cleaning service today and experience the transformation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/booking">Book Now</a>
          </Button>
        </div>
      </section>
    </div>
  )
}