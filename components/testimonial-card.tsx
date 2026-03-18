import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
}

export function TestimonialCard({ name, location, rating, text }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted"}`}
          />
        ))}
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{`"${text}"`}</p>
      <div>
        <p className="font-heading font-bold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  )
}
