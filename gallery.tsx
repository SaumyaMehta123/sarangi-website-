import Image from "next/image"

const IMAGES = [
  { src: "/images/gallery-1.png", alt: "Detailer applying ceramic coating to a car panel" },
  { src: "/images/gallery-2.png", alt: "Pristine detailed luxury car interior with leather seats" },
  { src: "/images/gallery-3.png", alt: "Car covered in thick snow foam during a wash" },
]

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border/60 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our work
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Results that speak for themselves
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((image, i) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl border border-border ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
