import { Sparkles, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Sarangi <span className="text-primary">Auto Spa</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium auto detailing and paint protection. Giving every car the
              showroom shine it deserves since 2015.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Pune, Maharashtra
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" /> hello@sarangiautospa.in
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Hours</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Mon – Sat: 9:00 – 20:00</li>
              <li>Sunday: 10:00 – 16:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sarangi Auto Spa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
