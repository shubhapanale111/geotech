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
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Mountain,
  Radio,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { EnrollmentModal } from '@/components/enrollment-modal'

const OFFICIAL_COURSES = [
  {
    id: 'gis-rs-6m',
    title: 'Certificate Course in GIS & RS',
    duration: 'Six Month Diploma',
    badge: 'Flagship Career Program',
    image: '/images/CoverPhoto.png',
    description:
      'Comprehensive master diploma covering GIS, Remote Sensing, Satellite Image Analysis, GPS field surveying, spatial databases, and Python geospatial automation.',
    highlights: [
      'Complete GIS & Remote Sensing Theory & Practical',
      'Satellite Image Processing & Classification (Optical & Radar)',
      'GPS & Field Surveying with DGPS and Total Station',
      'Spatial Data Modeling & Geodatabase Design',
      'Python Scripting with GeoPandas & Rasterio',
      '100% Job Placement Assistance & Internship Support',
    ],
    mode: 'Regular & Weekend Batches • Online & Offline',
    seats: 'Admissions Open',
  },
  {
    id: 'gis-3m',
    title: 'Certificate Course in GIS',
    duration: 'Three Month Course',
    badge: 'Core Professional Track',
    image: '/images/firmware-coding.png',
    description:
      'Master core GIS concepts, vector & raster spatial data processing, Coordinate Reference Systems (CRS), thematic cartography, and spatial database querying.',
    highlights: [
      'Vector Data (Points, Lines, Polygons) & Continuous Rasters',
      'Coordinate Reference Systems (Geographic vs Projected)',
      'Spatial Queries, Buffer Analysis & Proximity Tools',
      'QGIS 3 & ArcGIS Desktop Workflow Mastery',
      'Data Quality, Topology Rules & Metadata Standards',
      'Real-world GIS Project Portfolio with Certification',
    ],
    mode: 'Regular & Weekend Batches • Online & Offline',
    seats: 'Batches Enrolling',
  },
  {
    id: 'gis-survey-3m',
    title: 'Certificate Course in GIS & Land Surveying',
    duration: 'Three Month Course',
    badge: 'Civil & Survey Track',
    image: '/images/surveyor-field.png',
    description:
      'Bridge field surveying and digital GIS. Learn GPS / DGPS data collection, total station survey integration, topographic mapping, and revenue cadastral parcel georeferencing.',
    highlights: [
      'GPS, DGPS & Field Survey Techniques & Calibration',
      'Total Station Survey Data Ingestion & Correction',
      'Cadastral Revenue Map Georeferencing & Digitization',
      'Topographic Contour Mapping & Digital Elevation Models',
      'Highway, Pipeline & Infrastructure Corridor Surveys',
      'Field Training at FC Road Pune Center',
    ],
    mode: 'Regular & Weekend Batches • Online & Offline',
    seats: 'Field Labs Open',
  },
  {
    id: 'gis-python-1m',
    title: 'Certificate Course in GIS Python',
    duration: 'One Month Fast-Track',
    badge: 'Automation Track',
    image: '/images/engineering-3d-model.png',
    description:
      'Learn Python programming specifically tailored for geospatial workflows. Automate shapefile processing with GeoPandas, Shapely, Rasterio, and build spatial analysis pipelines.',
    highlights: [
      'Python Fundamentals, Variables, Loops & Functions',
      'GeoPandas Spatial DataFrames & Spatial Joins',
      'Shapely Geometric Operations & Buffer Algorithms',
      'Rasterio Multi-Band Satellite Raster Manipulation',
      'DEM Hydrological Drainage Network Extraction',
      'Automated Batch Geoprocessing Scripts',
    ],
    mode: 'Weekday Evenings & Weekend Batches',
    seats: 'Fast-Track',
  },
  {
    id: 'single-software-1m',
    title: 'Certificate Course in Single Software',
    duration: 'One Month Intensive',
    badge: 'Tool Specialization',
    image: '/images/aerial-map.png',
    description:
      'Targeted, hands-on mastery in a single industry-leading GIS software tool of your choice (QGIS, ArcGIS Pro, PostGIS / Spatial SQL, or Global Mapper).',
    highlights: [
      'Deep dive into software interface, toolboxes & plugins',
      'Geodatabase management & vector editing',
      'Advanced symbology, 3D terrain visualization & print layouts',
      'Spatial query builder & geoprocessing workflows',
      'Exporting web maps & publication-grade cartography',
      'Software-specific Institute Completion Certificate',
    ],
    mode: 'Flexible Timings • Online & Offline',
    seats: 'Open All Year',
  },
]

const TARGET_AUDIENCE = [
  {
    title: 'Students & Graduates',
    desc: 'B.Sc, M.Sc, B.E, B.Tech, Diploma in Science, Engineering, Geography, IT, or Civil looking to build a career in geospatial data science.',
    icon: GraduationCap,
  },
  {
    title: 'Surveyors & Civil Engineers',
    desc: 'Field surveyors, civil draughtsmen, and project engineers wanting to upgrade from manual CAD surveying to advanced GIS and DGPS.',
    icon: Compass,
  },
  {
    title: 'Urban Planners & Environmentalists',
    desc: 'Professionals and students in smart city planning, forestry, geology, and water resources needing spatial mapping and analysis skills.',
    icon: Mountain,
  },
  {
    title: 'Working Professionals',
    desc: 'IT developers, data analysts, and remote sensing executives seeking career transitions into high-growth GIS Developer and Analyst roles.',
    icon: Briefcase,
  },
  {
    title: 'Anyone Interested in GIS',
    desc: 'Passionate learners seeking practical, job-oriented geospatial knowledge backed by ISO 9001:2015 recognized institute certification.',
    icon: Globe,
  },
]

export function StudentPrograms() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  return (
    <section className="bg-background py-20 border-b border-border">
      <div className="container-page">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Eyebrow>OUR CERTIFIED PROGRAMS</Eyebrow>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[0.7rem] font-bold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="size-3" /> ISO 9001:2015 Certified
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-4xl text-foreground">
              Types of <span className="text-primary">GIS Courses</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Explore our industry-recognized certification tracks designed for career growth in GIS,
              Remote Sensing, Land Surveying, and Python geospatial automation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
            <Clock className="size-4" /> Regular &amp; Weekend Batches • Online &amp; Offline
          </div>
        </div>

        {/* 5 Courses Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {OFFICIAL_COURSES.map((course, idx) => {
            const isFeatured = idx === 0
            return (
              <div
                key={course.id}
                className={`flex flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg ${
                  isFeatured
                    ? 'border-primary md:col-span-2 lg:col-span-1 ring-1 ring-primary/30'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-navy">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 rounded bg-primary px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-primary-foreground">
                      {course.badge}
                    </span>
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white uppercase flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary" /> {course.duration}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {course.description}
                    </p>

                    <div className="mt-5 space-y-1.5 border-t border-border pt-4">
                      <p className="text-[0.7rem] font-bold uppercase tracking-wider text-foreground">
                        Syllabus Highlights:
                      </p>
                      {course.highlights.slice(0, 4).map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs font-medium text-foreground">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border bg-muted/40 p-5">
                  <p className="text-[0.65rem] font-semibold text-muted-foreground mb-3">
                    📍 {course.mode}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(course.title)}
                      className="w-full rounded-md bg-navy py-2.5 text-center text-xs font-bold uppercase tracking-wider text-navy-foreground hover:bg-navy/90 transition-colors dark:bg-primary dark:text-primary-foreground"
                    >
                      Enroll Now
                    </button>
                    <Link
                      href="/courses"
                      className="rounded-md border border-border bg-card px-3 py-2.5 text-center text-xs font-bold text-foreground hover:bg-muted transition-colors uppercase"
                      title="View Details"
                    >
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* WHO CAN APPLY? SECTION FROM TEMPLATE */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>ELIGIBILITY &amp; ADMISSIONS</Eyebrow>
            <h3 className="mt-2 font-display text-2xl font-extrabold uppercase sm:text-3xl text-foreground">
              🎯 Who Can Apply?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Our training is specifically structured to welcome both absolute beginners and experienced professionals.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TARGET_AUDIENCE.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h4 className="mt-3 font-display text-sm font-bold text-foreground uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}

            {/* Quick Demo CTA Card */}
            <div className="rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-5 flex flex-col justify-between text-center">
              <div>
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground mx-auto">
                  <Sparkles className="size-5" />
                </span>
                <h4 className="mt-3 font-display text-sm font-bold text-foreground uppercase tracking-wide">
                  Not Sure Which Course Fits You?
                </h4>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Talk to our chief counselor at FC Road Pune or attend a free demo session to review the syllabus.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCourse('Career Guidance & Course Consultation')}
                className="mt-4 rounded-md bg-primary py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book Free Counseling &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        defaultCourse={selectedCourse || undefined}
      />
    </section>
  )
}
