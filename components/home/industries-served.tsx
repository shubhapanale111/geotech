import Link from 'next/link'
import {
  Activity,
  Building,
  Flame,
  Globe,
  Leaf,
  Plus,
  Radio,
  ShieldAlert,
  Sprout,
  TowerControl,
} from 'lucide-react'
import { CheckItem, Eyebrow } from '@/components/primitives'

const INDUSTRIES = [
  { icon: Building, label: 'Urban Planning' },
  { icon: ShieldAlert, label: 'Disaster Management' },
  { icon: Leaf, label: 'Environmental Science' },
  { icon: Activity, label: 'Emergency Services' },
  { icon: Sprout, label: 'Precision Agriculture' },
]

const POINTS = [
  'City planning: Roads, schools, hospitals & public facilities',
  'Disaster mitigation: Flood susceptibility & hazard vulnerability mapping',
  'Natural resource protection: Rivers, forests & wetland conservation',
  'Emergency response: Optimizing ambulance & fire station service buffers',
]

export function IndustriesServed() {
  return (
    <section className="bg-background py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Applied Geospatial Science</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Real-World GIS Applications
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Geospatial technology and Python automation are essential across government,
            environmental, urban, agricultural, and telecommunications sectors worldwide.
          </p>
          <ul className="mt-6 space-y-3.5">
            {POINTS.map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </ul>
          <Link
            href="/courses"
            className="mt-8 inline-flex rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90 uppercase tracking-wide"
          >
            Explore GIS Modules
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
            <Radio className="size-6 text-primary" />
            <span className="text-xs font-semibold tracking-[0.12em] uppercase">Telecom &amp; Towers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
