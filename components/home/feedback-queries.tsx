'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  HelpCircle,
  Laptop,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'
import { EnrollmentModal } from '@/components/enrollment-modal'

const WHY_US_PILLARS = [
  {
    icon: Laptop,
    title: 'Hands-on Spatial Code Lab',
    desc: 'Work on actual high-res satellite rasters, DEM elevation models, and vector shapefiles on dedicated lab systems at FC Road, Pune.',
  },
  {
    icon: Users,
    title: 'Strict 15-Student Cohorts',
    desc: 'Never get lost in a crowd. Every student gets personalized 1-on-1 code reviews and troubleshooting from experienced instructors.',
  },
  {
    icon: Compass,
    title: 'Industry Portfolio Capstones',
    desc: 'Build four GitHub-ready geospatial projects (Buffer analysis, DEM drainage modeling, satellite NDVI change detection) that prove your skills.',
  },
  {
    icon: GraduationCap,
    title: 'Recognized Institute Certificate',
    desc: 'Earn a verified Python with GIS Specialist Certificate with verifiable credentials recognized across engineering and geospatial firms.',
  },
]

const QUERIES = [
  {
    question: 'What are the prerequisites for learning Python with GIS?',
    answer:
      'Basic computer literacy. Prior experience in Python or GIS software (like QGIS/ArcGIS) is helpful but not required, as the curriculum begins with core Python fundamentals before advancing into spatial libraries.',
  },
  {
    question: 'Which Python geospatial libraries are mastered in the course?',
    answer:
      'You will master the modern Python GIS ecosystem: GeoPandas, Shapely, Fiona, Rasterio, PyProj, Matplotlib, NumPy, and Pandas for spatial data processing, coordinate transformations, and automated spatial queries.',
  },
  {
    question: 'What is the schedule for working professionals?',
    answer:
      'We offer dedicated Weekend Batches (Saturdays and Sundays) as well as evening weekday slots, with hybrid access (attend in Pune lab or live online).',
  },
  {
    question: 'Do you assist with job placements and resume building?',
    answer:
      'Yes! We provide dedicated placement assistance, portfolio reviews, GIS interview preparation, and direct referrals to hiring partner companies across Pune, Bengaluru, and Mumbai.',
  },
  {
    question: 'Can I attend a Free Demo Class before enrolling?',
    answer:
      'Yes, absolutely! You can register for a free live demo session to interact with our instructors, review the syllabus in detail, and experience our hands-on teaching methodology.',
  },
]

export function FeedbackQueries() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="bg-background py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left Column: Institute Excellence */}
        <div>
          <Eyebrow>TRAINING ADVANTAGE</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl text-foreground">
            Why Learn Python With GIS At <span className="text-primary">Galaxia Geotech</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We bridge the gap between traditional map reading and modern computational geospatial data science.
          </p>

          <div className="mt-8 space-y-4">
            {WHY_US_PILLARS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <Sparkles className="size-3.5" /> Book Free Demo Class
            </button>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
            >
              About Our Pune Lab &rarr;
            </Link>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div>
          <div className="flex items-center justify-between">
            <div>
              <Eyebrow>ADMISSIONS &amp; SYLLABUS</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card">
            <FaqAccordion items={QUERIES} />
          </div>

          <div className="mt-6 rounded-xl border border-border bg-muted/60 p-6">
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase">
              <MapPin className="size-4" /> Pune Training Center
            </div>
            <h3 className="mt-2 text-sm font-semibold tracking-wide uppercase text-foreground">
              Have questions about upcoming batches?
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Our academic counselors are available to guide you at Shreenath Plaza, FC Road, Pune.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-md bg-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-foreground transition-colors hover:bg-navy/90 dark:bg-primary dark:text-primary-foreground"
              >
                Contact Academic Counselor
              </Link>
              <a
                href="tel:7522929752"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-primary transition-colors"
              >
                <Phone className="size-3 text-primary" /> 752-2929-752
              </a>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourse="Python with GIS - Free Demo Session"
      />
    </section>
  )
}
