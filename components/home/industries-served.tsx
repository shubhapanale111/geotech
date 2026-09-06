import Link from 'next/link'
import {
  Activity,
  Car,
  Cpu,
  Factory,
  Plane,
  Plus,
  Radio,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react'
import { CheckItem, Eyebrow } from '@/components/primitives'

const INDUSTRIES = [
  { icon: Car, label: 'Automotive & EV' },
  { icon: Smartphone, label: 'Consumer IoT' },
  { icon: Factory, label: 'Industrial Automation' },
  { icon: Activity, label: 'Medical Devices' },
  { icon: Plane, label: 'Aerospace & Avionics' },
]

const POINTS = [
  'Direct campus placement drives with 500+ tech companies',
  'Curriculum aligned with Tier-1 automotive and semiconductor hiring standards',
  'Resume building and technical interview prep by senior engineers',
  'Lifetime alumni support and career transition guidance',
]

export function IndustriesServed() {
  return (
    <section className="bg-background py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Career Opportunities</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Industries Hiring Our Embedded Engineers
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Embedded systems engineers are in massive demand across global R&amp;D domains. Our alumni
            work in world-class automotive, semiconductor, and industrial tech enterprises.
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
            Explore Career Tracks
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
            <Plus className="size-6 text-primary" />
            <span className="text-xs font-semibold tracking-[0.12em] uppercase">500+ Companies</span>
          </div>
        </div>
      </div>
    </section>
  )
}
