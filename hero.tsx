import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Star className="size-4 fill-primary" />
            Rated 4.9 by 2,000+ car owners
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your car deserves a{" "}
            <span className="text-primary">showroom shine</span>, every day.
          </h1>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Premium auto detailing, ceramic coating and paint protection by
            certified specialists. Get an instant, transparent estimate in
            seconds.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Calculate Your Cost
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              View Services
            </a>
          </div>
          <div className="mt-4 flex gap-8">
            {[
              { value: "10K+", label: "Cars detailed" },
              { value: "9H", label: "Ceramic hardness" },
              { value: "5yr", label: "Coating warranty" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-2xl">
            <Image
              src="/images/hero-car.png"
              alt="Glossy black luxury car being detailed under blue studio lighting"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
