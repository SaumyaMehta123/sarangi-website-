import {
  Droplets,
  Sparkles,
  ShieldCheck,
  Wind,
  Lightbulb,
  Car,
} from "lucide-react"

const SERVICES = [
  {
    icon: Droplets,
    title: "Premium Wash & Detail",
    description:
      "pH-neutral foam wash, hand dry and interior vacuum for a spotless finish.",
  },
  {
    icon: ShieldCheck,
    title: "Ceramic Coating",
    description:
      "9H nano-ceramic protection that repels water, dirt and UV for years.",
  },
  {
    icon: Car,
    title: "Paint Protection Film",
    description:
      "Self-healing transparent film that shields paint from chips and scratches.",
  },
  {
    icon: Sparkles,
    title: "Interior Detailing",
    description:
      "Deep cabin cleaning, leather conditioning and odor elimination.",
  },
  {
    icon: Wind,
    title: "Engine Bay Cleaning",
    description:
      "Safe degreasing and dressing for a factory-fresh engine bay.",
  },
  {
    icon: Lightbulb,
    title: "Headlight Restoration",
    description:
      "Restore clarity and brightness to foggy, yellowed headlights.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border/60 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            What we do
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Complete care, from wash to armor
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Every service uses pro-grade products and certified technicians so
            your vehicle always looks its absolute best.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
