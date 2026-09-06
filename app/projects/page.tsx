'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Compass,
  Database,
  Download,
  Filter,
  Globe,
  GraduationCap,
  Layers,
  Leaf,
  MapPin,
  Radio,
  Search,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sprout,
  Waves,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { EnrollmentModal } from '@/components/enrollment-modal'

const CATEGORIES = [
  'All Projects & Ideas',
  'Featured Projects',
  'Climate & Environment',
  'Water & Hydrology',
  'Agriculture & Resources',
  'Urban & Infrastructure',
  'Society & Public Services',
  'Technology & Advanced GIS',
]

const PRACTICAL_PROJECTS = [
  {
    image: '/images/aerial-map.png',
    status: 'Core Project',
    statusTone: 'navy',
    category: 'Featured Projects',
    year: 'Python & GeoPandas',
    title: 'Hospital Service Area & Buffer Analysis',
    description:
      'Analyze areas within specified distances of healthcare facilities using point and polygon buffer analysis to evaluate accessibility, underserved zones, and population coverage.',
    spec1Label: 'TECH STACK',
    spec1Value: 'GeoPandas, Shapely',
    spec2Label: 'OUTPUT',
    spec2Value: 'Service Accessibility Map',
    location: 'Urban Healthcare Analytics',
  },
  {
    image: '/images/engineering-3d-model.png',
    status: 'Hydrology Lab',
    statusTone: 'navy',
    category: 'Featured Projects',
    year: 'DEM Hydrology',
    title: 'Drainage Network Extraction From DEM Data',
    description:
      'Extract a natural drainage network from a Digital Elevation Model using hydrological processing (sink filling, flow direction, flow accumulation, and stream linking).',
    spec1Label: 'TECH STACK',
    spec1Value: 'Rasterio, PyProj, DEM',
    spec2Label: 'OUTPUT',
    spec2Value: 'Watershed & Stream Order',
    location: 'Hydrological Modeling',
  },
  {
    image: '/images/surveyor-field.png',
    status: 'Remote Sensing',
    statusTone: 'navy',
    category: 'Featured Projects',
    year: 'Satellite Imagery',
    title: 'Land Use / Land Cover Change Detection',
    description:
      'Compare multi-temporal satellite imagery from different years to compute change statistics, land classification transitions, and vegetation index (NDVI) shifts.',
    spec1Label: 'TECH STACK',
    spec1Value: 'NumPy, Matplotlib, Rasterio',
    spec2Label: 'OUTPUT',
    spec2Value: 'LULC Change Maps',
    location: 'Environmental Monitoring',
  },
  {
    image: '/images/survey-tripod.png',
    status: 'Risk Modeling',
    statusTone: 'orange',
    category: 'Featured Projects',
    year: 'Multi-Criteria GIS',
    title: 'Flood Risk Susceptibility Mapping',
    description:
      'Combine elevation contours, drainage density, land cover, slope, and rainfall datasets to generate flood hazard susceptibility maps and identify vulnerable infrastructure.',
    spec1Label: 'TECH STACK',
    spec1Value: 'Python MCDA, GeoPandas',
    spec2Label: 'OUTPUT',
    spec2Value: 'Flood Hazard Zones',
    location: 'Disaster Management',
  },
]

const RESEARCH_IDEAS = [
  // Climate & Environment
  { id: 1, title: 'GIS for Climate Change Analysis', category: 'Climate & Environment' },
  { id: 2, title: 'Climate Vulnerability Mapping', category: 'Climate & Environment' },
  { id: 3, title: 'GIS and Green Infrastructure', category: 'Climate & Environment' },
  { id: 4, title: 'Urban Heat Island Mapping', category: 'Climate & Environment' },
  { id: 5, title: 'GIS for Environmental Impact Assessment', category: 'Climate & Environment' },
  { id: 6, title: 'Forest Fire Risk Mapping', category: 'Climate & Environment' },
  { id: 7, title: 'GIS for Sustainable Urban Planning', category: 'Climate & Environment' },
  { id: 8, title: 'Land Use/Land Cover Change Detection', category: 'Climate & Environment' },
  { id: 9, title: 'Soil Erosion Mapping with GIS', category: 'Climate & Environment' },
  { id: 10, title: 'Biodiversity Conservation with GIS', category: 'Climate & Environment' },
  // Water & Hydrology
  { id: 11, title: 'Flood Risk Assessment using GIS', category: 'Water & Hydrology' },
  { id: 12, title: 'Groundwater Mapping using GIS', category: 'Water & Hydrology' },
  { id: 13, title: 'GIS for Water Resource Management', category: 'Water & Hydrology' },
  { id: 14, title: 'Hydrological Modeling with GIS', category: 'Water & Hydrology' },
  { id: 15, title: 'Drainage Network Extraction from DEM', category: 'Water & Hydrology' },
  // Agriculture & Natural Resources
  { id: 16, title: 'GIS and Agricultural Productivity', category: 'Agriculture & Resources' },
  { id: 17, title: 'Remote Sensing for Crop Disease Monitoring', category: 'Agriculture & Resources' },
  { id: 18, title: 'Remote Sensing for Deforestation Monitoring', category: 'Agriculture & Resources' },
  { id: 19, title: 'GIS in Renewable Resource Monitoring', category: 'Agriculture & Resources' },
  { id: 20, title: 'GIS for Solid Waste Management', category: 'Agriculture & Resources' },
  // Urban & Infrastructure
  { id: 21, title: '3D GIS and Urban Modeling', category: 'Urban & Infrastructure' },
  { id: 22, title: 'Urban Growth and Expansion Analysis', category: 'Urban & Infrastructure' },
  { id: 23, title: 'Transportation Network Analysis with GIS', category: 'Urban & Infrastructure' },
  { id: 24, title: 'GIS in Oil and Gas Management', category: 'Urban & Infrastructure' },
  { id: 25, title: 'GIS for Disaster Management', category: 'Urban & Infrastructure' },
  { id: 26, title: 'Urban Planning using GIS', category: 'Urban & Infrastructure' },
  // Society & Public Services
  { id: 27, title: 'GIS in Wildlife Habitat Analysis', category: 'Society & Public Services' },
  { id: 28, title: 'GIS and Archaeological Site Mapping', category: 'Society & Public Services' },
  { id: 29, title: 'Mapping Economic Inequality with Spatial Analytics', category: 'Society & Public Services' },
  { id: 30, title: 'GIS in Crime Pattern Analysis', category: 'Society & Public Services' },
  { id: 31, title: 'GIS for Public Health & Epidemiology', category: 'Society & Public Services' },
  { id: 32, title: 'GIS for Cultural Heritage Preservation', category: 'Society & Public Services' },
  // Technology & Advanced GIS
  { id: 33, title: 'Geospatial Analysis of Renewable Energy Sites', category: 'Technology & Advanced GIS' },
  { id: 34, title: 'Geospatial Data Mining for Predictive Analysis', category: 'Technology & Advanced GIS' },
  { id: 35, title: 'Multispectral vs Hyperspectral Imaging for Land Use', category: 'Technology & Advanced GIS' },
  { id: 36, title: 'Spatial Analysis of Air Quality & Pollution', category: 'Technology & Advanced GIS' },
  { id: 37, title: 'GIS and Machine Learning for Spatial Prediction', category: 'Technology & Advanced GIS' },
  { id: 38, title: 'Remote Sensing for Vegetation Monitoring', category: 'Technology & Advanced GIS' },
  { id: 39, title: 'GIS in Supply Chain & Logistics Optimization', category: 'Technology & Advanced GIS' },
  { id: 40, title: 'Automated Spatial Python Pipelines with GeoPandas', category: 'Technology & Advanced GIS' },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('All Projects & Ideas')
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined)

  const handleOpenEnrollModal = (topicTitle?: string) => {
    setSelectedTopic(topicTitle)
    setIsModalOpen(true)
  }

  const filteredProjects = PRACTICAL_PROJECTS.filter((p) => {
    const matchesTab =
      activeTab === 'All Projects & Ideas' ||
      activeTab === 'Featured Projects' ||
      p.category === activeTab
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  const filteredResearch = RESEARCH_IDEAS.filter((r) => {
    const matchesTab =
      activeTab === 'All Projects & Ideas' ||
      r.category.toLowerCase() === activeTab.toLowerCase()
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <>
      {/* Hero Section with Same Theme: Image + Overlay */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-navy py-16 text-navy-foreground md:min-h-[500px] md:py-24">
        <Image
          src="/images/hero-circuit-macro.png"
          alt="Geospatial Projects and Research background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        
        <div className="container-page relative z-10 w-full text-center">
          <Eyebrow tone="white">PORTFOLIO &amp; RESEARCH DIRECTORY</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            Practical Projects &amp; <span className="text-primary">40 GIS Research Ideas</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-navy-muted">
            Explore hands-on geospatial capstone projects and our curated directory of 40 GIS
            research topics across climate, hydrology, agriculture, urban planning, and machine learning.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => handleOpenEnrollModal('GIS Projects & Research Ideas')}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Sparkles className="size-4" /> Start a GIS Project / Enroll
            </button>
            <Link
              href="/courses"
              className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/15"
            >
              Explore Course Syllabus
            </Link>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="border-b border-border bg-card py-6">
        <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`rounded-md px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === cat
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search 40 research ideas, DEM, flood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-border bg-background py-2 pr-4 pl-9 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Practical Projects Grid (if applicable) */}
      {filteredProjects.length > 0 && (
        <section className="bg-background py-16">
          <div className="container-page">
            <Eyebrow>CORE PRACTICAL PROJECTS</Eyebrow>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-foreground sm:text-3xl">
              Hands-on Geospatial Capstones
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded bg-navy px-2.5 py-1 text-[0.65rem] font-bold tracking-wider text-white uppercase shadow">
                      {project.location}
                    </span>
                    <span className="absolute top-3 right-3 rounded bg-primary px-2.5 py-1 text-[0.65rem] font-bold text-primary-foreground uppercase shadow">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-border bg-muted/50 p-3 text-[0.7rem]">
                      <div>
                        <p className="text-[0.6rem] font-bold text-muted-foreground uppercase">
                          {project.spec1Label}
                        </p>
                        <p className="font-bold text-foreground">{project.spec1Value}</p>
                      </div>
                      <div>
                        <p className="text-[0.6rem] font-bold text-muted-foreground uppercase">
                          {project.spec2Label}
                        </p>
                        <p className="font-bold text-foreground">{project.spec2Value}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOpenEnrollModal(project.title)}
                      className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-card py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
                    >
                      Inquire About This Project <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 40 GIS Research Ideas Directory Grid */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container-page">
          <Eyebrow>RESEARCH DIRECTORY</Eyebrow>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-extrabold uppercase text-foreground sm:text-3xl">
                40 GIS &amp; Geospatial Research Ideas
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Topics for academic projects, dissertations, and industry portfolio case studies.
              </p>
            </div>
            <span className="text-xs font-bold text-primary">
              Showing {filteredResearch.length} Research Topics
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredResearch.map((idea) => (
              <div
                key={idea.id}
                className="group flex flex-col justify-between rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-[0.65rem] font-bold text-primary uppercase">
                    {idea.category}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {idea.id}. {idea.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenEnrollModal(`Research Topic: ${idea.title}`)}
                  className="mt-4 flex items-center gap-1 text-[0.7rem] font-bold text-muted-foreground uppercase transition-colors hover:text-primary"
                >
                  Start Project &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Enrollment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={selectedTopic}
      />
    </>
  )
}
