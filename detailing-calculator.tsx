"use client"

import { useMemo, useState } from "react"
import {
  Car,
  Truck,
  Crown,
  Sparkles,
  ShieldCheck,
  Droplets,
  Wind,
  Lightbulb,
  Check,
  IndianRupee,
} from "lucide-react"

type Option = {
  id: string
  label: string
  description: string
  multiplier?: number
  price?: number
  icon: React.ComponentType<{ className?: string }>
}

const CAR_TYPES: Option[] = [
  { id: "hatchback", label: "Hatchback", description: "Compact cars", multiplier: 1, icon: Car },
  { id: "sedan", label: "Sedan", description: "Standard size", multiplier: 1.25, icon: Car },
  { id: "suv", label: "SUV / MUV", description: "Large vehicles", multiplier: 1.6, icon: Truck },
  { id: "luxury", label: "Luxury / Exotic", description: "Premium care", multiplier: 2.2, icon: Crown },
]

const SERVICES: Option[] = [
  { id: "wash", label: "Premium Wash", description: "Foam wash & dry", price: 1200, icon: Droplets },
  { id: "interior", label: "Interior Detailing", description: "Deep cabin clean", price: 3500, icon: Sparkles },
  { id: "ceramic", label: "Ceramic Coating", description: "9H protection", price: 18000, icon: ShieldCheck },
  { id: "ppf", label: "Paint Protection Film", description: "Full body PPF", price: 65000, icon: ShieldCheck },
]

const ADDONS: Option[] = [
  { id: "engine", label: "Engine Bay Cleaning", description: "Degrease & dress", price: 1500, icon: Wind },
  { id: "headlight", label: "Headlight Restoration", description: "Clarity restore", price: 1800, icon: Lightbulb },
  { id: "scratch", label: "Scratch Removal", description: "Paint correction", price: 4500, icon: Sparkles },
  { id: "polish", label: "Wax & Polish", description: "Gloss enhance", price: 2500, icon: Droplets },
]

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value)
}

export function DetailingCalculator() {
  const [carType, setCarType] = useState<string>("sedan")
  const [service, setService] = useState<string>("wash")
  const [addons, setAddons] = useState<string[]>([])

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    )
  }

  const { total, breakdown } = useMemo(() => {
    const selectedCar = CAR_TYPES.find((c) => c.id === carType)
    const selectedService = SERVICES.find((s) => s.id === service)
    const multiplier = selectedCar?.multiplier ?? 1
    const base = (selectedService?.price ?? 0) * multiplier
    const addonTotal = addons.reduce((sum, id) => {
      const addon = ADDONS.find((a) => a.id === id)
      return sum + (addon?.price ?? 0) * multiplier
    }, 0)
    return {
      total: Math.round(base + addonTotal),
      breakdown: {
        service: Math.round(base),
        addons: Math.round(addonTotal),
        multiplier,
      },
    }
  }, [carType, service, addons])

  return (
    <section
      id="calculator"
      className="relative w-full bg-background py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <IndianRupee className="size-4" />
            Instant Estimate
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Detailing Cost Calculator
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Choose your car type, service and add-ons to instantly estimate the
            cost of giving your car the treatment it deserves.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Selections */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <fieldset>
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                1. Car Type
              </legend>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CAR_TYPES.map((option) => {
                  const Icon = option.icon
                  const active = carType === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setCarType(option.id)}
                      aria-pressed={active}
                      className={`flex flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                        active
                          ? "border-primary bg-primary/10 ring-1 ring-primary"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <Icon
                        className={`size-6 ${active ? "text-primary" : "text-muted-foreground"}`}
                      />
                      <span className="text-sm font-medium text-foreground">
                        {option.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {option.description}
                      </span>
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                2. Primary Service
              </legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SERVICES.map((option) => {
                  const Icon = option.icon
                  const active = service === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setService(option.id)}
                      aria-pressed={active}
                      className={`flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition-all ${
                        active
                          ? "border-primary bg-primary/10 ring-1 ring-primary"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          className={`size-5 ${active ? "text-primary" : "text-muted-foreground"}`}
                        />
                        <span>
                          <span className="block text-sm font-medium text-foreground">
                            {option.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {option.description}
                          </span>
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        ₹{formatINR(option.price ?? 0)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                3. Add-ons
              </legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ADDONS.map((option) => {
                  const Icon = option.icon
                  const active = addons.includes(option.id)
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleAddon(option.id)}
                      aria-pressed={active}
                      className={`flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition-all ${
                        active
                          ? "border-primary bg-primary/10 ring-1 ring-primary"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          className={`size-5 ${active ? "text-primary" : "text-muted-foreground"}`}
                        />
                        <span>
                          <span className="block text-sm font-medium text-foreground">
                            {option.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {option.description}
                          </span>
                        </span>
                      </span>
                      <span
                        className={`flex size-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-transparent"
                        }`}
                      >
                        {active && <Check className="size-4" />}
                      </span>
                    </button>
                  )
                })}
              </div>
            </fieldset>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-2xl border border-border bg-card p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-foreground">
                Estimated Total
              </h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-2xl font-medium text-muted-foreground">₹</span>
                <span className="text-4xl font-semibold tracking-tight text-foreground tabular-nums">
                  {formatINR(total)}
                </span>
              </div>

              <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Car multiplier</dt>
                  <dd className="font-medium text-foreground">
                    {breakdown.multiplier}x
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Service</dt>
                  <dd className="font-medium text-foreground tabular-nums">
                    ₹{formatINR(breakdown.service)}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">
                    Add-ons ({addons.length})
                  </dt>
                  <dd className="font-medium text-foreground tabular-nums">
                    ₹{formatINR(breakdown.addons)}
                  </dd>
                </div>
              </dl>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Sparkles className="size-4" />
                Book This Service
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Final price confirmed after inspection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
