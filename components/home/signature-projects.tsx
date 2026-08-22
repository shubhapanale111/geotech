import Link from 'next/link'
import Image from 'next/image'
import { Eyebrow } from '@/components/primitives'

const PROJECTS = [
  {
    image: '/images/bridge-construction.png',
    category: 'Infrastructure',
    meta: 'River Gorge',
    title: 'Metropolitan Suspension Bridge',
  },
  {
    image: '/images/tunnel-construction.png',
    category: 'Transport',
    meta: 'Metropolis Central',
    title: 'Sub-City Transit Tunnel',
  },
  {
    image: '/images/skyscraper-steel.png',
    category: 'Commercial',
    meta: 'Skyline District',
    title: 'Sky-Point Financial Tower',
  },
]

export function SignatureProjects() {
  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="container-page">
        <Eyebrow>Proven Success</Eyebrow>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Signature Projects
            </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />
          </div>
          <Link
            href="/projects"
            className="inline-flex w-fit rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            View All Case Studies
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group overflow-hidden rounded-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              </div>
              <div className="pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[0.7rem] font-semibold tracking-[0.15em] text-primary uppercase">
                    {project.category}
                  </span>
                  <span className="text-[0.7rem] tracking-[0.1em] text-navy-muted uppercase">
                    {project.meta}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
