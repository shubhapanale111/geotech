'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  Code,
  Compass,
  Database,
  Download,
  Filter,
  Globe,
  GraduationCap,
  HelpCircle,
  Laptop,
  Layers,
  MapPin,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'
import { EnrollmentModal } from '@/components/enrollment-modal'

const CATEGORIES = [
  'All Modules',
  'Python Fundamentals',
  'GIS Fundamentals',
  'Python for GIS',
  'Map Projections',
]

const MODULES = [
  {
    category: 'Python Fundamentals',
    badge: 'Module 01',
    rating: '4.9',
    reviews: 'Core Python',
    title: 'Module 1 — Python Fundamentals',
    description:
      'Master core Python programming syntax, data structures, control flow, functions, file handling, and object-oriented programming essential for writing clean geospatial automation scripts.',
    image: '/images/firmware-coding.png',
    duration: '4 Weeks',
    location: 'Pune Lab / Online',
    mode: 'Hands-on Coding',
    placement: 'Fundamental Scripting',
    seats: 'Included in Full Course',
    prereq: 'None (Beginner Friendly)',
    feeNote: 'Zero-Cost EMI Options Available',
    highlights: [
      'Python Syntax, Variables & Data Types',
      'Operators, Conditions & Loops',
      'Functions, Lists, Tuples, Dictionaries & Sets',
      'File Handling & Exception Handling',
      'Modules, Packages & Object-Oriented Programming (OOP)',
    ],
  },
  {
    category: 'GIS Fundamentals',
    badge: 'Module 02',
    rating: '4.9',
    reviews: 'Spatial Concepts',
    title: 'Module 2 — GIS Fundamentals',
    description:
      'Understand spatial data structures (vector & raster), attribute tables, Coordinate Reference Systems (CRS), spatial databases, data quality, and standard GIS data formats.',
    image: '/images/aerial-map.png',
    duration: '3 Weeks',
    location: 'Pune Lab / Online',
    mode: 'Spatial Data Lab',
    placement: 'Spatial Data Literacy',
    seats: 'Included in Full Course',
    prereq: 'Basic Computer Knowledge',
    feeNote: 'Included in Curriculum',
    highlights: [
      'Vector Data (Points, Lines, Polygons) & Raster Grids',
      'Attribute Data & Spatial Database Concepts',
      'Coordinate Reference Systems (CRS): Geographic vs Projected',
      'GIS Data Formats: Shapefiles, GeoJSON, GeoTIFF, GeoPackage',
      'Data Quality, Spatial Precision & Metadata Standards',
    ],
  },
  {
    category: 'Python for GIS',
    badge: 'Module 03',
    rating: '5.0',
    reviews: 'Advanced Automation',
    title: 'Module 3 — Python for GIS',
    description:
      'Harness the modern Python geospatial ecosystem: GeoPandas, Shapely, Fiona, Rasterio, and PyProj to process spatial datasets, transform coordinates, and perform automated spatial joins and queries.',
    image: '/images/engineering-3d-model.png',
    duration: '5 Weeks',
    location: 'Pune Lab / Online',
    mode: 'Hands-on Spatial Coding',
    placement: 'Geospatial Automation',
    seats: 'Included in Full Course',
    prereq: 'Python & GIS Fundamentals',
    feeNote: 'Core Specialization',
    highlights: [
      'GeoPandas & Shapely Geometry Operations',
      'Fiona & Rasterio for Raster/Vector I/O',
      'PyProj Coordinate Transformations',
      'Spatial Joins, Spatial Queries & Buffer Operations',
      'NumPy, Pandas & Matplotlib Spatial Visualizations',
    ],
  },
  {
    category: 'Map Projections',
    badge: 'Module 04',
    rating: '4.9',
    reviews: 'Geodetic Science',
    title: 'Module 4 — Map Projections & Geodetic Concepts',
    description:
      'Learn how the curved Earth is projected onto 2D surfaces, understand projection distortion properties (shape, area, distance, direction), and master UTM, Mercator, and Lambert Conformal Conic.',
    image: '/images/surveyor-field.png',
    duration: '2 Weeks',
    location: 'Pune Lab / Online',
    mode: 'Projection Labs',
    placement: 'Geodetic Precision',
    seats: 'Included in Full Course',
    prereq: 'CRS Fundamentals',
    feeNote: 'Included in Curriculum',
    highlights: [
      'Cylindrical, Conical & Planar / Azimuthal Projections',
      'Common Projections: Mercator, UTM, Robinson, Lambert Conformal',
      'Distortion Analysis (Tissot Indicatrix Concepts)',
      'Orthometric Height vs Ellipsoidal Height (h = H + N)',
      'Geoid Undulation & Elevation Reference Systems',
    ],
  },
]

const STUDENT_REVIEWS = [
  {
    name: 'Anjali Sharma',
    role: 'GIS Analyst & Developer',
    company: 'Urban Spatial Analytics',
    before: 'Geography Graduate',
    image: '/images/team-sarah.png',
    quote:
      'Automating spatial queries and raster processing with GeoPandas and Rasterio gave me an incredible edge. Galaxia Geotech provides practical knowledge that direct job roles require.',
    rating: 5,
  },
  {
    name: 'Vikram Joshi',
    role: 'Remote Sensing Specialist',
    company: 'EcoTerrain Systems',
    before: 'Civil & Surveying Engineer',
    image: '/images/team-david.png',
    quote:
      'The drainage network extraction from DEM and buffer analysis modules were very clear and thoroughly explained with real datasets. Best Python GIS training in Pune!',
    rating: 5,
  },
  {
    name: 'Rohan Patil',
    role: 'Geospatial Data Scientist',
    company: 'InfraPlan Geomatics',
    before: 'Computer Science Student',
    image: '/images/team-michael.png',
    quote:
      'Transitioning from general Python to spatial libraries was seamless. The faculty is experienced, and the project portfolio was pivotal in my interviews.',
    rating: 5,
  },
]

const FAQS = [
  {
    question: 'WHAT IS THE COURSE STRUCTURE AND DURATION?',
    answer:
      'The complete Python with GIS course is structured into 4 intensive modules spanning Python Fundamentals, GIS Fundamentals, Python Geospatial Libraries (GeoPandas, Shapely, Rasterio), and Map Projections & Geodetic Concepts. It typically takes 8 to 12 weeks with flexible weekday and weekend options.',
  },
  {
    question: 'DO I NEED PRIOR PROGRAMMING EXPERIENCE?',
    answer:
      'No! The course starts from Module 1 covering Python fundamentals (syntax, variables, data structures, functions, OOP) before progressing to spatial libraries.',
  },
  {
    question: 'WHAT REAL-WORLD PROJECTS WILL I BUILD?',
    answer:
      'You will build hands-on portfolio projects including: 1) Hospital Service Area & Buffer Analysis, 2) DEM Drainage Network Extraction, 3) Multi-temporal Land Use Change Detection, and 4) Flood Risk Susceptibility Mapping.',
  },
  {
    question: 'IS AN INSTITUTE CERTIFICATE PROVIDED?',
    answer:
      'Yes. Upon completing the course curriculum and submitting the practical project assignments, you will receive an institute-recognized Python with GIS Certification from Galaxia Geotech.',
  },
  {
    question: 'CAN I ATTEND A FREE DEMO CLASS BEFORE ENROLLING?',
    answer:
      'Yes! Click on "Book Free Demo Class" to register for a live or classroom demo session at our FC Road, Pune center.',
  },
]

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('All Modules')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const filteredModules = MODULES.filter((m) => {
    const matchesTab =
      activeTab === 'All Modules' || m.category.toLowerCase() === activeTab.toLowerCase()
    const matchesSearch =
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTab && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-navy py-16 text-navy-foreground md:min-h-[500px] md:py-24">
        <Image
          src="/images/firmware-coding.png"
          alt="Hands-on Embedded Systems Firmware Coding background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/55 to-navy/75" />
        <div className="container-page relative z-10 w-full text-center">
          {/* Accreditation Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded bg-primary/20 px-3 py-1 text-xs font-bold text-primary uppercase">
              🗺️ Python with GIS Certification
            </span>
            <span className="rounded bg-white/10 px-3 py-1 text-xs font-bold text-white uppercase">
              📍 FC Road, Pune Center
            </span>
            <span className="rounded bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 uppercase">
              ⭐ 4.9/5 Rating (320+ Reviews)
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            Python with GIS <span className="text-primary">Curriculum</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-navy-muted">
            Learn Python programming, GIS automation and geospatial analysis through practical,
            real-world projects with modern GIS tools and geospatial Python libraries.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setSelectedCourse('Python with GIS Full Program')}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow-lg transition-colors hover:bg-primary/90"
            >
              <GraduationCap className="size-4" /> Enroll Now
            </button>
            <button
              type="button"
              onClick={() => setSelectedCourse('Python with GIS - Free Demo')}
              className="rounded-md border border-white/30 bg-white/5 px-8 py-3.5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/15"
            >
              <Sparkles className="size-4 inline mr-1 text-primary" /> Book Free Demo Class
            </button>
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
                className={`rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
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
              placeholder="Search GeoPandas, DEM, Buffer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-border bg-background py-2 pr-4 pl-9 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Modules Detailed Grid */}
      <section className="bg-background py-16">
        <div className="container-page space-y-12">
          {filteredModules.map((mod, index) => {
            const isEven = index % 2 === 0
            return (
              <article
                key={mod.title}
                className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md md:p-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border sm:h-80">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 rounded bg-navy px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow">
                      {mod.badge}
                    </span>
                    <span className="absolute top-4 right-4 rounded bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground uppercase shadow">
                      {mod.duration}
                    </span>
                  </div>
                </div>

                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                    <Code className="size-4" /> {mod.category}
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                    {mod.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {mod.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <p className="text-xs font-bold tracking-wider text-foreground uppercase">
                      Module Topics &amp; Practical Labs:
                    </p>
                    <ul className="space-y-1.5">
                      {mod.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(mod.title)}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                      <GraduationCap className="size-4" /> Enroll in this Module
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(`Free Demo - ${mod.title}`)}
                      className="rounded-md border border-border bg-card px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
                    >
                      Free Demo Class
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Reviews & Testimonials Section */}
      <section className="border-t border-border bg-muted/40 py-20">
        <div className="container-page">
          <div className="text-center">
            <Eyebrow>ALUMNI SUCCESS</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              What Our Geospatial Learners Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Hear from graduates who automated spatial data pipelines and advanced their careers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STUDENT_REVIEWS.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div>
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-xs leading-relaxed text-foreground italic">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="relative size-10 overflow-hidden rounded-full border border-primary">
                    <Image src={review.image} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-foreground">{review.name}</span>
                    <span className="block text-[0.65rem] text-muted-foreground">{review.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-background py-20">
        <div className="container-page max-w-4xl">
          <div className="text-center">
            <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Course Details &amp; Admissions FAQ
            </h2>
          </div>

          <div className="mt-10 rounded-xl border border-border bg-card">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* Global Enrollment Modal */}
      <EnrollmentModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        defaultCourse={selectedCourse || undefined}
      />
    </>
  )
}
