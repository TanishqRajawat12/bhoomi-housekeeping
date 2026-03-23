"use client"
import Link from "next/link"
import Image from "next/image"
import { 
Sofa, 
Home, 
UtensilsCrossed, 
Layers, 
Bug, 
Sparkles,
Car,
Bath,
Sun,
TreeDeciduous,
Wrench
} from "lucide-react"

const iconMap: Record<string, typeof Sofa> = {
  sofa: Sofa,
  home: Home,
  kitchen: UtensilsCrossed,
  carpet: Layers,
  pest: Bug,
  marble: Sparkles,
  car: Car,
  bathroom: Bath,
  solar: Sun,
  garden: TreeDeciduous,
  wood: Wrench,
}

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  beforeImage?: string
  afterImage?: string
}

export function ServiceCard({ title, description, icon, beforeImage, afterImage }: ServiceCardProps) {
  const Icon = iconMap[icon] || Sparkles
  const image = afterImage || beforeImage

  return (
    <Link
      href="/booking"
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-70 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-3 font-heading text-lg font-bold text-foreground">{title}</h3>
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-4 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Book Now →
        </span>
      </div>
    </Link>
  )
}