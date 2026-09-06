import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code, Compass, Database, Layers, Sparkles } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Code,
    image: '/images/firmware-coding.png',
    title: 'Hands-on GIS Python Training',
    description:
      'Practice Python programming with real-world GIS and geospatial projects, learning vector/raster data structures, coordinate systems, and automation scripts.',
  },
  {
    icon: Layers,
    image: '/images/aerial-map.png',
    title: 'Modern GIS Tools & Libraries',
    description:
      'Master the Python geospatial ecosystem: GeoPandas, Shapely, Fiona, Rasterio, PyProj, Matplotlib, NumPy, and Pandas for spatial joins and queries.',
  },
  {
    icon: Compass,
    image: '/images/survey-tripod.png',
    title: 'Industry Experienced Trainers',
    description:
      'Learn directly from instructors with practical industry experience in remote sensing, spatial database management, terrain modeling, and cartography.',
  },
]

export function CoreCapabilities() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <p className="text-xs font-bold tracking-widest text-primary uppercase">
          Key Course Highlights
        </p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-gray-900 sm:text-4xl">
              Building Industry-Ready Geospatial Skills
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Galaxia Geotech provides comprehensive training combining Python programming with
              geospatial analysis, remote sensing, and automated GIS workflows.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold tracking-widest text-gray-900 hover:text-primary uppercase"
          >
            View Full Curriculum <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CAPABILITIES.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <span className="absolute top-4 left-4 flex size-10 items-center justify-center rounded bg-navy text-white">
                    <Icon className="size-5 text-primary" />
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    href="/courses"
                    className="mt-8 flex w-full items-center justify-center rounded bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-gray-100"
                  >
                    Explore Syllabus &rarr;
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
