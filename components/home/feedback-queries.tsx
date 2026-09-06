import Link from 'next/link'
import { Star } from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'

const TESTIMONIALS = [
  {
    quote:
      'Learning Python with GIS at Galaxia Geotech transformed my career. Automating raster workflows with Rasterio and vector operations with GeoPandas saved hundreds of hours in my geospatial consulting work.',
    name: 'Anjali Sharma',
    role: 'GIS Analyst, Geospatial Solutions',
    initials: 'AS',
  },
  {
    quote:
      'The hands-on hydrological processing module on DEM drainage extraction and buffer analysis was exceptionally clear. Instructors have real industry experience and provide personalized feedback on projects.',
    name: 'Vikram Joshi',
    role: 'Spatial Data Scientist, Urban Mapping',
    initials: 'VJ',
  },
]

const QUERIES = [
  {
    question: 'What are the prerequisites for learning Python with GIS?',
    answer:
      'Basic computer fundamentals. Prior experience in Python or GIS software (like QGIS/ArcGIS) is helpful but not mandatory, as the course begins with core Python programming fundamentals before advancing to spatial libraries.',
  },
  {
    question: 'Which Python geospatial libraries are taught in the course?',
    answer:
      'You will master the modern Python GIS ecosystem including GeoPandas, Shapely, Fiona, Rasterio, PyProj, Matplotlib, NumPy, and Pandas for spatial data processing, coordinate transformations, and spatial joins.',
  },
  {
    question: 'Do I receive a certificate upon completion?',
    answer:
      'Yes. Upon completing the course modules and practical capstone projects, you receive an institute-recognized certification in Python with GIS from Galaxia Geotech.',
  },
  {
    question: 'Can I attend a Free Demo Class before enrolling?',
    answer:
      'Yes, absolutely! You can register for a free live demo session to interact with our instructors, review the syllabus, and experience our hands-on teaching methodology.',
  },
]

export function FeedbackQueries() {
  return (
    <section className="bg-background py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Student Feedback</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Success Stories From Our Learners
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
            Frequently Asked Questions
          </h2>
          <div className="mt-8 rounded-lg border border-border bg-card">
            <FaqAccordion items={QUERIES} />
          </div>

          <div className="mt-6 rounded-lg border border-border bg-muted p-6">
            <h3 className="text-sm font-semibold tracking-wide uppercase">Have questions about upcoming batches?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our academic counselors are available to guide you on syllabus details and batch timings at FC Road, Pune.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-md bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-foreground transition-colors hover:bg-navy/90"
            >
              Contact Academic Counselor
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
