import Image from "next/image"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Form side */}
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <LoginForm />
      </div>

      {/* Visual side */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/hero-car.png"
          alt="Glossy black luxury car in a premium detailing studio"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="absolute bottom-0 left-0 right-0 p-10">
          <blockquote className="max-w-md text-balance text-xl font-medium leading-relaxed text-foreground">
            “Showroom shine, every single time. Sarangi Auto Spa treats every car
            like a masterpiece.”
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground">
            Trusted by 2,000+ car owners
          </p>
        </div>
      </div>
    </main>
  )
}
