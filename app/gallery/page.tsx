"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// ─── Image data ────────────────────────────────────────────────────────────────
// Adjust category assignments to match your actual photos.
// imgRange(start, end, category) generates entries for image{start}.jpeg … image{end}.jpeg

function imgRange(start: number, end: number, category: string) {
  return Array.from({ length: end - start + 1 }, (_, i) => ({
    id: start + i,
    src: `/images/gallery/image${start + i}.jpeg`,
    alt: `${category} – photo ${start + i}`,
    category,
  }))
}

const galleryImages = [
  ...imgRange(1, 1, "Solar Panel Cleaning"),
  ...imgRange(5, 5, "Car Cleaning"),
  ...imgRange(13, 13, "Sofa Shampooing"),
  ...imgRange(19, 19, "Carpet Shampooing"),
  ...imgRange(23, 23, "Marble & Floor Polishing"),
  ...imgRange(27, 27, "Specialised Cleaning"),
]

const CATEGORIES = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

// ─── Component ─────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxId, setLightboxId] = useState<number | null>(null)

  const filtered =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const currentIndex = lightboxId !== null ? filtered.findIndex((img) => img.id === lightboxId) : -1
  const currentImage = currentIndex !== -1 ? filtered[currentIndex] : null

  const openLightbox = (id: number) => setLightboxId(id)
  const closeLightbox = () => setLightboxId(null)

  const navigate = useCallback(
    (dir: "prev" | "next") => {
      if (currentIndex === -1) return
      const next =
        dir === "prev"
          ? (currentIndex - 1 + filtered.length) % filtered.length
          : (currentIndex + 1) % filtered.length
      setLightboxId(filtered[next].id)
    },
    [currentIndex, filtered]
  )

  // Keyboard navigation
  useEffect(() => {
    if (lightboxId === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") navigate("prev")
      if (e.key === "ArrowRight") navigate("next")
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxId, navigate])

  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Our Gallery
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A visual showcase of the spaces we have transformed across Jaipur.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category filter ───────────────────────────────────────────────────── 
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setLightboxId(null)
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* ── Grid ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground">No photos in this category yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((image) => (
                <button
                  key={image.id}
                  onClick={() => openLightbox(image.id)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category overlay on hover */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="p-3 text-sm font-medium text-white">{image.category}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      {lightboxId !== null && currentImage && (
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
            onClick={(e) => { e.stopPropagation(); navigate("prev") }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/10 p-2 text-white transition-colors hover:bg-background/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate("next") }}
            className="absolute right-14 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/10 p-2 text-white transition-colors hover:bg-background/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-full overflow-hidden rounded-xl">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption + counter */}
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-sm font-medium">{currentImage.category}</span>
              <span className="text-xs text-white/50">
                {currentIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
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