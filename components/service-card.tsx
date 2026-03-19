"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
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
  const [showAfter, setShowAfter] = useState(false)
  const hasImages = beforeImage && afterImage

  const handleImageClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowAfter(prev => !prev)
  }

  return (
    <Link
      href="/booking"
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
    >
      {/* Before/After Image Section */}
      {hasImages && (
        <div 
          className="relative h-70 w-full overflow-hidden cursor-pointer"
          onMouseEnter={() => setShowAfter(true)}
          onMouseLeave={() => setShowAfter(false)}
          onClick={handleImageClick}
          onTouchEnd={handleImageClick}
        >
          <Image
            src={beforeImage}
            alt={`${title} - Before`}
            fill
            className={`object-cover object-center transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
          />
          <Image
            src={afterImage}
            alt={`${title} - After`}
            fill
            className={`object-cover object-center transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Before/After Label */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className={`rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ${
              showAfter 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-foreground/80 text-background'
            }`}>
              {showAfter ? 'AFTER' : 'BEFORE'}
            </span>
          </div>

          {/* Hint — shows "Tap" on mobile, "Hover" on desktop */}
          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-background/80 px-2 py-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
            <span className="hidden sm:inline">Hover to see after</span>
            <span className="sm:hidden">Tap to see {showAfter ? 'before' : 'after'}</span>
          </div>

          {/* Mobile tap hint — always visible on small screens */}
          <div className="absolute top-3 right-3 z-10 rounded-full bg-background/80 px-2 py-1 text-xs text-muted-foreground sm:hidden">
            Tap image to compare
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-4 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Book Now →
        </span>
      </div>
    </Link>
  )
}