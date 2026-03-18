import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"
import { Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Testimonials | Bhoomi's Housekeeping",
  description: "Read what our clients say about our cleaning services. Trusted by homes and businesses across Jaipur.",
}

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Malviya Nagar, Jaipur",
    rating: 5,
    text: "Excellent service! They transformed my sofa completely. The team was very professional and punctual. Will definitely use their services again.",
  },
  {
    name: "Rajesh Kumar",
    location: "Vaishali Nagar, Jaipur",
    rating: 5,
    text: "Best cleaning service in Jaipur. Punctual, efficient, and great results. My entire home looks brand new after their deep cleaning.",
  },
  {
    name: "Hotel Radiance Management",
    location: "C-Scheme, Jaipur",
    rating: 5,
    text: "We have been using their services for our hotel for over 2 years. Consistently excellent work. Highly recommended for businesses.",
  },
  {
    name: "Anita Gupta",
    location: "Jagatpura, Jaipur",
    rating: 5,
    text: "Amazing carpet cleaning results. They removed stains I thought were permanent. The team was courteous and left everything spotless.",
  },
  {
    name: "Cafe Aroma",
    location: "MI Road, Jaipur",
    rating: 5,
    text: "Regular kitchen deep cleaning from Bhoomi's Housekeeping keeps our cafe sparkling clean. Our customers notice the difference!",
  },
  {
    name: "Vikram Singh",
    location: "Mansarovar, Jaipur",
    rating: 5,
    text: "Booked their pest control service. Very effective and safe for my family. No more pest issues since their treatment.",
  },
  {
    name: "Meera Jain",
    location: "Raja Park, Jaipur",
    rating: 5,
    text: "The marble polishing they did has made my floors look absolutely stunning. Very professional team with great attention to detail.",
  },
  {
    name: "Corporate Office - TechSoft",
    location: "Sitapura Industrial Area",
    rating: 5,
    text: "They handle our entire office cleaning needs. Reliable, thorough, and always on time. A great partner for corporate cleaning.",
  },
  {
    name: "Sunita Agarwal",
    location: "Tonk Road, Jaipur",
    rating: 5,
    text: "The bathroom deep cleaning was fantastic. They removed all the hard water stains and everything sparkles now. Highly satisfied!",
  },
  {
    name: "Garden Restaurant",
    location: "Civil Lines, Jaipur",
    rating: 5,
    text: "Their garden maintenance service keeps our outdoor seating area beautiful. Professional landscaping and regular upkeep.",
  },
  {
    name: "Amit Saxena",
    location: "Bani Park, Jaipur",
    rating: 5,
    text: "Car interior cleaning was top-notch. My car seats look and smell fresh. Quick service and reasonable pricing.",
  },
  {
    name: "Pooja Mehta",
    location: "Shyam Nagar, Jaipur",
    rating: 5,
    text: "Solar panel cleaning improved our energy efficiency noticeably. Safe handling and professional work. Very happy!",
  },
]

export default function TestimonialsPage() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">What Our Clients Say</h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {"Don't just take our word for it. Here's what our satisfied clients have to say about our services."}
            </p>
            <div className="inline-flex items-center gap-4 rounded-full border border-border bg-card px-6 py-3 shadow-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.round(averageRating) ? "fill-amber-400 text-amber-400" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="font-semibold text-foreground">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">{testimonials.length} Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground">Join Our Happy Clients</h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            Experience the quality service that has earned us 5-star reviews across Jaipur.
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
