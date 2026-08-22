import Link from 'next/link'
import { Building, Factory, Landmark, Mountain, Plus, Zap } from 'lucide-react'
import { CheckItem, Eyebrow } from '@/components/primitives'

const INDUSTRIES = [
  { icon: Building, label: 'Bridges' },
  { icon: Landmark, label: 'High-Rise' },
  { icon: Factory, label: 'Industrial' },
  { icon: Zap, label: 'Energy' },
  { icon: Mountain, label: 'Mining' },
]

const POINTS = [
  'Strategic risk assessment for large-scale projects',
  'ISO-9001 certified laboratory procedures',
  'Real-time geotechnical monitoring systems',
  'Regulatory compliance and environmental impact analysis',
]

export function IndustriesServed() {
  return (
    <section className="bg-background py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Domain Expertise</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            From critical transport networks to high-density urban developments, our geotechnical
            insights provide the foundation for essential infrastructure worldwide.
          </p>
          <ul className="mt-6 space-y-3.5">
            {POINTS.map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-8 inline-flex rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
          >
            Download Capability Statement
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {INDUSTRIES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-3 bg-card px-4 py-8 text-center"
              >
                <Icon className="size-6 text-primary" />
                <span className="text-xs font-semibold tracking-[0.12em] uppercase">
                  {item.label}
                </span>
              </div>
            )
          })}
          <div className="flex flex-col items-center justify-center gap-3 bg-navy px-4 py-8 text-center text-navy-foreground">
            <Plus className="size-6" />
            <span className="text-xs font-semibold tracking-[0.12em] uppercase">More Sectors</span>
          </div>
        </div>
      </div>
    </section>
  )
}
