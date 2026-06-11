import { Star, Quote } from "lucide-react"

const REVIEWS = [
  {
    name: "Rohan Mehta",
    car: "BMW 5 Series",
    text: "The ceramic coating transformed my car. Water just slides off and it still looks brand new after a year. Worth every rupee.",
  },
  {
    name: "Priya Nair",
    car: "Hyundai Creta",
    text: "Booked an interior detail and was blown away. The cabin smells and feels like the day I bought it. Super professional team.",
  },
  {
    name: "Arjun Singh",
    car: "Mahindra Thar",
    text: "The cost calculator made it so easy to plan my budget. No surprises, transparent pricing and stunning results.",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="border-b border-border/60 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Reviews
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Loved by car enthusiasts
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="size-8 text-primary/40" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {review.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-foreground">
                  {review.name}
                </div>
                <div className="text-sm text-muted-foreground">{review.car}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
