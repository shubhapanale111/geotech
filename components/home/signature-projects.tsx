import Link from 'next/link'
import Image from 'next/image'
import { Eyebrow } from '@/components/primitives'

const PROJECTS = [
  {
    image: '/images/aerial-map.png',
    category: 'Buffer Analysis',
    meta: 'GeoPandas & Proximity',
    title: 'Hospital Service Area & Accessibility Mapping',
  },
  {
    image: '/images/engineering-3d-model.png',
    category: 'Hydrology / DEM',
    meta: 'Flow Accumulation & Stream Linking',
    title: 'Drainage Network Extraction From DEM Data',
  },
  {
    image: '/images/surveyor-field.png',
    category: 'Remote Sensing',
    meta: 'Multi-Temporal Satellite Imagery',
    title: 'Land Use / Land Cover Change Detection',
  },
]

export function SignatureProjects() {
  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="container-page">
        <Eyebrow tone="white">PRACTICAL PORTFOLIO</Eyebrow>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl text-white">
              Practical Geospatial Projects
            </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />
          </div>
          <Link
            href="/projects"
            className="inline-flex w-fit rounded-md border border-white/25 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
          >
            View All 40+ Project Ideas
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg bg-white/5 border border-white/10"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[0.7rem] font-bold tracking-[0.15em] text-primary uppercase">
                    {project.category}
                  </span>
                  <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-navy-muted uppercase">
                    {project.meta}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
