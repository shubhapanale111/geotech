'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Filter, Search, SlidersHorizontal } from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

const CATEGORIES = ['All Projects', 'Infrastructure', 'Commercial', 'Specialized Services']

const PROJECTS = [
  {
    image: '/images/bridge-construction.png',
    status: 'Completed',
    statusTone: 'navy',
    category: 'Infrastructure',
    year: '2023 - 2024',
    title: 'Grand Metropolitan Bridge',
    description:
      'Deep foundation engineering and seismic stability analysis for a 1.2km suspension bridge. Our team ensured stability under riverbed conditions.',
    spec1Label: 'DRILL DEPTH',
    spec1Value: '45m',
    spec2Label: 'SOIL TYPE',
    spec2Value: 'Alluvial',
    location: 'Metro City, Central District',
  },
  {
    image: '/images/tunnel-construction.png',
    status: 'Completed',
    statusTone: 'navy',
    category: 'Infrastructure',
    year: '2022 - 2023',
    title: 'Interstate-85 Tunnel',
    description:
      'Geotechnical site investigation and rock mass characterization for a 4-lane highway tunnel through complex geological formations.',
    spec1Label: 'ROCK CLASS',
    spec1Value: 'RMR IV',
    spec2Label: 'MONITORING',
    spec2Value: '24/7 IoT',
    location: 'Northern Highlands',
  },
  {
    image: '/images/skyscraper-steel.png',
    status: 'In Progress',
    statusTone: 'orange',
    category: 'Commercial',
    year: '2024 - Present',
    title: 'Skyline Plaza Foundation',
    description:
      'Comprehensive foundation design for a 65-story mixed-use skyscraper. Utilized high-capacity friction piles and deep excavation shoring.',
    spec1Label: 'FLOORS',
    spec1Value: '65',
    spec2Label: 'PILE CAP',
    spec2Value: '3,500 m³',
    location: 'Downtown Financial Hub',
  },
  {
    image: '/images/soil-lab.png',
    status: 'Completed',
    statusTone: 'navy',
    category: 'Specialized Services',
    year: '2023',
    title: 'Coastal Reclamation',
    description:
      'Detailed analysis of soil compaction and drainage for a multi-million dollar coastal reclamation project supporting port expansion.',
    spec1Label: 'AREA',
    spec1Value: '120 Hectares',
    spec2Label: 'CONSOLIDATION',
    spec2Value: '98%',
    location: 'East Coast Port Authority',
  },
  {
    image: '/images/blueprint-desk.png',
    status: 'Completed',
    statusTone: 'navy',
    category: 'Specialized Services',
    year: '2022',
    title: 'Precision Laboratory',
    description:
      'Blueprint development and site investigation for high-vibration sensitive laboratory facilities requiring ultra-stable mat foundations.',
    spec1Label: 'VIBRATION CLASS',
    spec1Value: 'VC-E',
    spec2Label: 'MAT THICKNESS',
    spec2Value: '1.2m',
    location: 'Science & Innovation Park',
  },
  {
    image: '/images/surveyor-field.png',
    status: 'In Progress',
    statusTone: 'orange',
    category: 'Infrastructure',
    year: '2024 - Present',
    title: 'Central Rail Hub',
    description:
      'On-site surveying and geotechnical testing for the integration of high-speed rail lines into an existing urban transport terminal.',
    spec1Label: 'BOREHOLES',
    spec1Value: '42',
    spec2Label: 'FREQUENCY',
    spec2Value: 'Daily',
    location: 'Western Transit Terminal',
  },
]

const CASE_STUDY_BULLETS = [
  'Detailed Soil & Rock Mechanics Reports',
  'Foundation Settlement & Displacement Models',
  'Seismic Risk Mitigation Strategies',
  'Advanced Structural Health Monitoring Data',
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('All Projects')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesTab =
      activeTab === 'All Projects' || p.category.toLowerCase() === activeTab.toLowerCase()
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-navy-foreground md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="white">PORTFOLIO OF EXCELLENCE</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
              Engineering the Foundations of <span className="text-primary">Global Progress</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-navy-muted">
              From critical transport infrastructure to high-rise commercial icons, explore how
              Galaxia Geotech ensures structural stability and safety in diverse geological
              environments.
            </p>

            <div className="mt-8 flex items-center gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="font-display text-3xl font-extrabold text-white">250+</p>
                <p className="mt-1 text-[0.7rem] font-bold tracking-widest text-navy-muted uppercase">
                  PROJECTS DELIVERED
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-white">15M+</p>
                <p className="mt-1 text-[0.7rem] font-bold tracking-widest text-navy-muted uppercase">
                  SQUARE METERS ANALYZED
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <Image
              src="/images/bridge-construction.png"
              alt="Construction site drilling rig"
              width={900}
              height={650}
              className="h-80 w-full object-cover sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* Explore Our Work (Filterable Portfolio) */}
      <section className="bg-background py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Explore Our Work
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our portfolio spans complex geotechnical assessments, foundational designs, and site
                investigations across multiple industries.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by project or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border border-border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:border-primary"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
              >
                <SlidersHorizontal className="size-3.5" /> Filter
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <span
                    className={`absolute top-3 left-3 rounded px-2.5 py-1 text-[0.65rem] font-bold tracking-wider uppercase text-white shadow ${
                      project.statusTone === 'orange' ? 'bg-primary' : 'bg-navy'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-[0.7rem] font-bold tracking-widest text-primary uppercase">
                    {project.category} &bull; {project.year}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-2 border-t border-border pt-4 text-xs">
                    <div>
                      <p className="text-[0.65rem] font-bold text-muted-foreground uppercase">
                        {project.spec1Label}
                      </p>
                      <p className="font-bold text-foreground">{project.spec1Value}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold text-muted-foreground uppercase">
                        {project.spec2Label}
                      </p>
                      <p className="font-bold text-foreground">{project.spec2Value}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
                    <span className="text-muted-foreground">{project.location}</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 font-bold text-foreground uppercase hover:text-primary"
                    >
                      Case Study <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              className="inline-flex rounded-md border border-border bg-card px-6 py-3 text-xs font-bold tracking-wider text-foreground uppercase shadow-sm transition-colors hover:bg-muted"
            >
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Deep Dive Analysis */}
      <section className="bg-muted/40 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/tunnel-construction.png"
              alt="Tunnel engineering case study"
              width={900}
              height={650}
              className="h-80 w-full object-cover sm:h-96"
            />
            <div className="absolute bottom-4 right-4 rounded-lg bg-primary p-4 text-center text-primary-foreground shadow-lg">
              <p className="font-display text-2xl font-extrabold">100%</p>
              <p className="text-[0.65rem] font-bold tracking-widest uppercase">PRECISION RATING</p>
            </div>
          </div>

          <div>
            <Eyebrow>DEEP DIVE ANALYSIS</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Comprehensive Case Studies Available Upon Request
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We provide detailed documentation for all our major projects, covering geological
              challenges encountered, technical solutions implemented, and long-term stability
              results.
            </p>

            <div className="mt-6 space-y-3">
              {CASE_STUDY_BULLETS.map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 text-xs font-bold text-foreground">
                  <span className="flex size-5 items-center justify-center rounded bg-navy text-navy-foreground">
                    <ChevronRight className="size-3.5" />
                  </span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-md bg-navy px-6 py-3.5 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90"
            >
              Download Capability Statement
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Banner */}
      <section className="bg-navy py-16 text-navy-foreground">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl">
            Partner with Geotechnical Experts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy-muted">
            Secure the integrity of your next project with industry-leading consultancy and
            technical expertise. Let&apos;s discuss your site requirements today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              Consult Our Engineers
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
