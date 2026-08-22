import Link from 'next/link'
import { Star } from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'

const TESTIMONIALS = [
  {
    quote:
      'Galaxia\u2019s soil analysis was pivotal for our deep tunnel project. Their technical precision saved us weeks of potential delay during the excavation phase.',
    name: 'Sarah Jenkins',
    role: 'Director of Infrastructure, UrbanRail',
    initials: 'SJ',
  },
  {
    quote:
      'Professionalism and engineering rigor define Galaxia Geotech. Their foundation design for our skyscraper project exceeded structural requirements while staying cost-effective.',
    name: 'Markus Vance',
    role: 'Principal Engineer, SkyBuild Group',
    initials: 'MV',
  },
]

const QUERIES = [
  {
    question: 'What regions do you serve?',
    answer:
      'We operate across North America and select international territories, providing on-site investigation and remote consultancy for major civil works.',
  },
  {
    question: 'Are your labs ISO certified?',
    answer:
      'Yes. Our geotechnical laboratories are ISO 9001:2015 certified and follow ASTM standards for all material and soil testing procedures.',
  },
  {
    question: 'Do you provide on-site monitoring?',
    answer:
      'We deploy real-time geotechnical monitoring systems and field teams capable of continuous structural health and settlement tracking.',
  },
]

export function FeedbackQueries() {
  return (
    <section className="bg-background py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Client Feedback</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted By Global Leaders
          </h2>
          <div className="mt-8 space-y-5">
            {TESTIMONIALS.map((item) => (
              <figure key={item.name} className="rounded-lg border border-border bg-card p-6">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-navy text-xs font-semibold text-navy-foreground">
                    {item.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow>Information</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Common Queries
          </h2>
          <div className="mt-8 rounded-lg border border-border bg-card">
            <FaqAccordion items={QUERIES} />
          </div>

          <div className="mt-6 rounded-lg border border-border bg-muted p-6">
            <h3 className="text-sm font-semibold tracking-wide uppercase">Need a specific quote?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our consultants are ready to discuss your project requirements in detail.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
            >
              Contact an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
