'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Code,
  Compass,
  Database,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
  TrendingUp,
  XCircle,
  Zap,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { EnrollmentModal } from '@/components/enrollment-modal'

const FEATURED_COURSES = [
  {
    href: '/courses',
    badge: 'Flagship Program',
    rating: '4.9 ⭐ (320+ Reviews)',
    title: 'Python with GIS Master Program',
    description:
      'Python fundamentals, GeoPandas, Shapely, Fiona, Rasterio, PyProj, spatial data processing, geometry operations, spatial joins, and GIS workflow automation.',
    image: '/images/firmware-coding.png',
    duration: '3 Months',
    location: 'FC Road, Pune / Hybrid',
    placement: '100% Practical Projects',
    seats: 'Batches Enrolling',
  },
  {
    href: '/services',
    badge: 'Spatial Analysis Track',
    rating: '4.9 ⭐ (210+ Reviews)',
    title: 'DEM Drainage & Hydrological Modeling',
    description:
      'Fill sinks, flow direction, flow accumulation, stream definition, stream linking, and automated watershed delineation from Digital Elevation Models.',
    image: '/images/engineering-3d-model.png',
    duration: '60 Hours',
    location: 'Hands-on Labs',
    placement: 'Live Project Portfolio',
    seats: 'Weekend & Weekday',
  },
  {
    href: '/projects',
    badge: 'Geospatial Research Track',
    rating: '4.9 ⭐ (190+ Reviews)',
    title: 'Remote Sensing & Buffer Analysis',
    description:
      'Point/Line/Polygon buffer analysis, multi-temporal satellite imagery change detection, map projections (UTM/Mercator), and orthometric vs ellipsoidal heights.',
    image: '/images/aerial-map.png',
    duration: '8 Weeks',
    location: 'Pune Center / Online',
    placement: 'Institute Certification',
    seats: 'Open Now',
  },
]

const ACADEMY_STATS = [
  { value: '4 Modules', label: 'COMPREHENSIVE CURRICULUM' },
  { value: '40+', label: 'GIS RESEARCH IDEAS' },
  { value: '100%', label: 'PRACTICAL PROJECT WORK' },
  { value: 'Certified', label: 'INSTITUTE RECOGNITION' },
]

const COMPARISON = [
  {
    feature: 'Practical GIS Python Libraries',
    us: 'Hands-on GeoPandas, Shapely, Fiona, Rasterio & PyProj',
    others: 'Manual GUI clicking without programming automation',
  },
  {
    feature: 'Hydrological & DEM Workflows',
    us: 'Complete DEM drainage network extraction & watershed modeling',
    others: 'Basic theoretical overview of elevation data',
  },
  {
    feature: 'Map Projections & Geodetic Heights',
    us: 'In-depth Orthometric (H), Ellipsoidal (h) & Geoid (N) relationship',
    others: 'Simplified map reading without coordinate transformation math',
  },
  {
    feature: 'Real-World Project Portfolio',
    us: 'Hospital buffers, flood risk mapping, and land-use change detection',
    others: 'Generic sample files with no real-world portfolio value',
  },
]

export function StudentPrograms() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  return (
    <>
      <section className="bg-muted/40 py-24 text-foreground">
        <div className="container-page">
          {/* Header & Badges */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1 text-xs font-bold text-primary uppercase">
                🗺️ Turn Geospatial Data Into Real-World Solutions
              </div>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
                Why Learn Python with GIS?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Python makes GIS workflows faster, repeatable, and scalable. Master spatial data
                automation, raster and vector analysis, and build reproducible GIS workflows.
              </p>
            </div>

            {/* Quick Location & Contact Box */}
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm text-center">
              <p className="text-[0.65rem] font-bold tracking-widest text-primary uppercase flex items-center justify-center gap-1">
                <MapPin className="size-3 text-primary" /> GALAXIA GEOTECH PUNE
              </p>
              <p className="mt-1 font-display text-sm font-extrabold text-foreground">
                Fergusson College Road Center
              </p>
              <p className="text-[0.7rem] text-muted-foreground">
                Helpline: <a href="tel:7522929752" className="text-primary font-bold">752-2929-752</a>
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-6 shadow-sm sm:grid-cols-4">
            {ACADEMY_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-extrabold text-foreground">{s.value}</p>
                <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_COURSES.map((course) => (
              <article
                key={course.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded bg-navy px-2.5 py-1 text-[0.65rem] font-bold tracking-wider text-white uppercase shadow">
                    {course.badge}
                  </span>
                  <span className="absolute top-3 right-3 rounded bg-primary px-2.5 py-1 text-[0.65rem] font-bold text-primary-foreground uppercase shadow">
                    {course.seats}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-bold text-amber-500">{course.rating}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5 text-primary" /> {course.duration}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-4" /> {course.placement}
                    </span>
                    <Link
                      href={course.href}
                      className="font-bold text-foreground uppercase hover:text-primary"
                    >
                      Curriculum &rarr;
                    </Link>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(`Free Demo - ${course.title}`)}
                      className="rounded-md border border-border bg-card py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                    >
                      Free Demo
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(course.title)}
                      className="flex items-center justify-center gap-1.5 rounded-md bg-primary py-2.5 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow transition-colors hover:bg-primary/90"
                    >
                      <GraduationCap className="size-4" /> Enroll Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Comparison Matrix */}
          <div className="mt-20 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="bg-navy p-6 text-navy-foreground text-center">
              <Eyebrow tone="white">THE GEOSPATIAL ADVANTAGE</Eyebrow>
              <h3 className="mt-1 font-display text-2xl font-extrabold uppercase text-white">
                Why Python with GIS at Galaxia Geotech
              </h3>
              <p className="mt-1 text-xs text-navy-muted">
                Compare practical GIS programming automation with conventional static map training.
              </p>
            </div>

            <div className="divide-y divide-border">
              {COMPARISON.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-1 p-5 md:grid-cols-[1.2fr_1.5fr_1.5fr] md:items-center md:gap-4"
                >
                  <p className="text-xs font-bold text-foreground uppercase">{row.feature}</p>

                  <div className="mt-2 md:mt-0 flex items-start gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
                    <span>{row.us}</span>
                  </div>

                  <div className="mt-2 md:mt-0 flex items-start gap-2 text-xs text-muted-foreground">
                    <XCircle className="size-4 shrink-0 mt-0.5 text-rose-500" />
                    <span>{row.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnrollmentModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        defaultCourse={selectedCourse || undefined}
      />
    </>
  )
}
