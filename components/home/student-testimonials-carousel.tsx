'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Star,
  Quote,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  Briefcase,
  GraduationCap,
  Play,
  Pause,
  ArrowRight,
  Layers,
  Compass,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

interface TestimonialCardData {
  id: string
  name: string
  role: string
  company: string
  course: string
  prevBackground: string
  quote: string
  project: string
  rating: number
}

// Row 1 Testimonials (Moves Left to Right)
const ROW_1_TESTIMONIALS: TestimonialCardData[] = [
  {
    id: 'r1-1',
    name: 'Priya Sharma',
    role: 'GIS Analyst & Developer',
    company: 'Geospatial Analytics Solutions',
    course: 'One-Month Certificate Course in GIS Python',
    prevBackground: 'B.E. Civil Engineering',
    quote:
      'The 1-month Python GIS training completely transformed how I work. Learning GeoPandas and Rasterio automation helped me eliminate days of manual editing in QGIS. Directly cracked an interview at a geospatial firm in Pune!',
    project: 'Automated 500m Buffer Analysis & Flood Vulnerability Map',
    rating: 5,
  },
  {
    id: 'r1-2',
    name: 'Amit Deshmukh',
    role: 'Remote Sensing Specialist',
    company: 'SatSure Earth Analytics',
    course: 'Certificate Course in GIS & RS (Six Month)',
    prevBackground: 'M.Sc. Geography',
    quote:
      'The 6-month comprehensive program is the best investment I ever made. Covering GIS fundamentals, satellite image processing, GPS field surveying, and Python scripting under one roof gave me an unmatched skill set.',
    project: 'Multi-Temporal Sentinel-2 NDVI Land Cover Analysis',
    rating: 5,
  },
  {
    id: 'r1-3',
    name: 'Siddharth Patil',
    role: 'Cadastral & Land Surveyor',
    company: 'L&T Infrastructure Projects',
    course: 'Three-Month Certificate Course in GIS & Land Surveying',
    prevBackground: 'Diploma in Civil Engineering',
    quote:
      'Hands-on training with GPS field surveying and integrating total station coordinates directly into GIS parcel boundaries at the FC Road lab made me completely site-ready for infrastructure surveying.',
    project: 'High-Precision Highway Alignment & Cadastral Parcel Mapping',
    rating: 5,
  },
  {
    id: 'r1-4',
    name: 'Neha Joshi',
    role: 'Junior Urban Planner',
    company: 'Pune Smart City Development Corp',
    course: 'Certificate Course in GIS (Three Month)',
    prevBackground: 'B.Arch Urban Planning',
    quote:
      'The 3-month course gave me complete mastery over spatial database design, thematic cartography, and spatial joins. The mentors provide real municipal datasets for practice.',
    project: 'Smart City Healthcare Access & Amenity Buffer Zoning',
    rating: 5,
  },
  {
    id: 'r1-5',
    name: 'Vikram Shinde',
    role: 'Geospatial Data Engineer',
    company: 'Skymet Weather Services',
    course: 'One-Month Certificate Course in GIS Python',
    prevBackground: 'B.Sc. Computer Science',
    quote:
      'Transitioning from software development to geospatial engineering was seamless with Galaxia Geotech. Learning CRS transformations and raster algebra in Python was outstanding.',
    project: 'Automated Rainfall Raster Ingestion & Basin Zonal Statistics',
    rating: 5,
  },
]

// Row 2 Testimonials (Moves Left to Right)
const ROW_2_TESTIMONIALS: TestimonialCardData[] = [
  {
    id: 'r2-1',
    name: 'Sneha Kulkarni',
    role: 'Senior GIS Consultant',
    company: 'InfraPlan Geomatics',
    course: 'Certificate Course in GIS & RS (Six Month)',
    prevBackground: 'B.Tech Planning & GIS',
    quote:
      'Galaxia Geotech’s ISO 9001:2015 certification carries immense weight with corporate recruiters. The syllabus is completely practical, job-oriented, and updated with current industry trends.',
    project: 'Watershed Basin Modeling & Flood Hazard Zoning in Sahyadris',
    rating: 5,
  },
  {
    id: 'r2-2',
    name: 'Rahul Kadam',
    role: 'GIS Field Survey Lead',
    company: 'MegaSurvey Solutions Pune',
    course: 'Three-Month Certificate Course in GIS & Land Surveying',
    prevBackground: 'Civil & Surveying Diploma',
    quote:
      'I loved the practical field sessions on DGPS calibration, rover setups, and importing field point clouds into GIS software. Weekend batch timing was perfect while working full-time.',
    project: 'DGPS Topographic Contour Survey for Pune Industrial Belt',
    rating: 5,
  },
  {
    id: 'r2-3',
    name: 'Aniket Jadhav',
    role: 'QGIS Specialist & Cartographer',
    company: 'EcoTerrain Environmental',
    course: 'Certificate Course in Single Software (One Month)',
    prevBackground: 'B.Sc. Environmental Science',
    quote:
      'Needed fast, expert-level training in QGIS for an upcoming project deadline. In just 4 weeks, I learned advanced symbology, print composer layouts, spatial queries, and plugins.',
    project: 'Forest Canopy Density & Protected Area Buffer Mapping',
    rating: 5,
  },
  {
    id: 'r2-4',
    name: 'Tanvi Patel',
    role: 'Satellite Imagery Analyst',
    company: 'Genesys International Corp',
    course: 'Certificate Course in GIS & RS (Six Month)',
    prevBackground: 'M.Sc. Applied Geology',
    quote:
      'The remote sensing module covering satellite band ratios, supervised classification, and LiDAR point clouds was thorough and crystal clear. Top tier faculty with 10+ years experience.',
    project: 'Geological Fault Line Mapping & Mineral Exploration GIS',
    rating: 5,
  },
  {
    id: 'r2-5',
    name: 'Karan Mehra',
    role: 'GIS Developer',
    company: 'MapmyIndia / CE Info Systems',
    course: 'One-Month Certificate Course in GIS Python',
    prevBackground: 'B.E. Information Technology',
    quote:
      'Writing Python scripts with Shapely and Fiona to clean up topology errors saved hundreds of hours. The 1-on-1 code reviews by the trainers were game changing.',
    project: 'Automated Vector Topology Validation & Boundary Repair Pipeline',
    rating: 5,
  },
]

// Row 3 Testimonials (Moves Right to Left)
const ROW_3_TESTIMONIALS: TestimonialCardData[] = [
  {
    id: 'r3-1',
    name: 'Pooja Gaikwad',
    role: 'Hydrological Modeling Engineer',
    company: 'Water Resources Consultancy',
    course: 'One-Month Certificate Course in GIS Python',
    prevBackground: 'M.Tech Water Resource Engineering',
    quote:
      'Extracting drainage networks from DEMs using automated Python scripts was the highlight for me. Galaxia Geotech is the only institute in Pune teaching actual spatial scripting with real elevation data.',
    project: 'SRTM DEM Sink Filling & Automated Stream Order Extraction',
    rating: 5,
  },
  {
    id: 'r3-2',
    name: 'Rohan Deshpande',
    role: 'GIS Project Coordinator',
    company: 'Reliance Jio Fiber GIS Operations',
    course: 'Certificate Course in GIS (Three Month)',
    prevBackground: 'B.Sc. Physics & IT',
    quote:
      'Got placed within 3 weeks of completing the 3-month GIS course. The placement team helped refine my resume and prepared me thoroughly for GIS technical interview rounds.',
    project: 'Telecom Utility Fiber Network Route Optimization & As-Built GIS',
    rating: 5,
  },
  {
    id: 'r3-3',
    name: 'Aditya More',
    role: 'Cadastral GIS Specialist',
    company: 'State Land Records Project',
    course: 'Three-Month Certificate Course in GIS & Land Surveying',
    prevBackground: 'Civil Draughtsman / Surveyor',
    quote:
      'Learning how to georeference old village revenue maps (7/12 land records) and align them with satellite imagery and GPS coordinates helped me secure a high-paying consulting role.',
    project: 'Village Cadastral Revenue Map Digitization & Georeferencing',
    rating: 5,
  },
  {
    id: 'r3-4',
    name: 'Divya Nair',
    role: 'Remote Sensing Researcher',
    company: 'AgroSpatial Research Labs',
    course: 'Certificate Course in GIS & RS (Six Month)',
    prevBackground: 'M.Sc. Agriculture',
    quote:
      'Hands-on multi-spectral satellite image processing for crop health monitoring and yield estimation. The institute’s lab at FC Road Pune has excellent high-performance systems.',
    project: 'Crop Health NDVI Monitoring & Drought Stress Assessment',
    rating: 5,
  },
  {
    id: 'r3-5',
    name: 'Nikhil Rane',
    role: 'ArcGIS Desktop Specialist',
    company: 'Urban Infra Planners',
    course: 'Certificate Course in Single Software (One Month)',
    prevBackground: 'Civil Engineering Graduate',
    quote:
      'Completed the 1-month intensive ArcGIS Pro module. The trainer explained geodatabases, ModelBuilder automation, and spatial analysis tools step-by-step with practical assignments.',
    project: 'Highway Corridor 100m Buffer & Environmental Impact Assessment',
    rating: 5,
  },
]

export function StudentTestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card via-background to-muted/30 py-20 border-y border-border">
      {/* Subtle Map Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:32px_32px] dark:[background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />

      {/* Left and Right Gradient Fade Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Eyebrow>ALUMNI SUCCESS &amp; REVIEWS</Eyebrow>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[0.7rem] font-bold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="size-3" /> ISO 9001:2015 Certified
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-4xl text-foreground">
              What Our <span className="text-primary">Graduates Say</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Real career journeys, job placements, and course feedback from engineers, surveyors,
              geographers, and analysts across our 6-Month, 3-Month, Land Surveying, and Python GIS programs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shadow-sm"
            >
              {isPaused ? <Play className="size-3 text-primary" /> : <Pause className="size-3 text-primary" />}
              <span>{isPaused ? 'Resume Scroll' : 'Pause on Hover'}</span>
            </button>
            <Link
              href="/courses"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-foreground hover:bg-navy/90 transition-colors dark:bg-primary dark:text-primary-foreground"
            >
              Explore All Courses &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 3 Infinite Scrolling Rows Container */}
      <div
        className={`mt-12 space-y-6 overflow-hidden ${
          isPaused ? '' : 'marquee-pause-hover'
        }`}
      >
        {/* ROW 1: Moves Left to Right */}
        <div className="overflow-hidden">
          <div
            className={`animate-marquee-ltr-row1 flex items-center gap-6 ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
          >
            {[...ROW_1_TESTIMONIALS, ...ROW_1_TESTIMONIALS, ...ROW_1_TESTIMONIALS].map(
              (item, idx) => (
                <TestimonialCard key={`r1-${item.id}-${idx}`} data={item} />
              )
            )}
          </div>
        </div>

        {/* ROW 2: Moves Left to Right (offset speed) */}
        <div className="overflow-hidden">
          <div
            className={`animate-marquee-ltr-row2 flex items-center gap-6 ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
          >
            {[...ROW_2_TESTIMONIALS, ...ROW_2_TESTIMONIALS, ...ROW_2_TESTIMONIALS].map(
              (item, idx) => (
                <TestimonialCard key={`r2-${item.id}-${idx}`} data={item} />
              )
            )}
          </div>
        </div>

        {/* ROW 3: Moves Right to Left */}
        <div className="overflow-hidden">
          <div
            className={`animate-marquee-rtl-row3 flex items-center gap-6 ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
          >
            {[...ROW_3_TESTIMONIALS, ...ROW_3_TESTIMONIALS, ...ROW_3_TESTIMONIALS].map(
              (item, idx) => (
                <TestimonialCard key={`r3-${item.id}-${idx}`} data={item} />
              )
            )}
          </div>
        </div>
      </div>

      {/* Summary Metrics Bar */}
      <div className="container-page mt-12 relative z-10">
        <div className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5 sm:grid-cols-4 sm:p-6 text-center shadow-sm">
          <div>
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">4.9 / 5.0</p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              ⭐ 350+ Verified Reviews
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">100%</p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Practical &amp; Job-Oriented
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">5 Tracks</p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              GIS, RS, Survey &amp; Python
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">ISO 9001</p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              2015 Certified Institute
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ data }: { data: TestimonialCardData }) {
  // Generate initials for clean typography badge without face photos
  const initials = data.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)

  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between">
      <div>
        {/* Top Badges & Stars */}
        <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: data.rating }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
            <span className="ml-1 text-[0.7rem] font-bold text-foreground">5.0</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-[0.65rem] font-bold text-primary uppercase">
            <CheckCircle2 className="size-2.5" /> Verified Alum
          </span>
        </div>

        {/* Course Badge */}
        <div className="mt-2.5">
          <span className="inline-block text-[0.7rem] font-bold tracking-wide text-primary uppercase truncate max-w-full">
            {data.course}
          </span>
        </div>

        {/* Quote */}
        <blockquote className="mt-2.5 text-xs leading-relaxed text-foreground font-medium italic line-clamp-4">
          &ldquo;{data.quote}&rdquo;
        </blockquote>

        {/* Project Tag */}
        <div className="mt-3 rounded-lg border border-border bg-muted/40 p-2 text-[0.7rem]">
          <span className="font-bold text-muted-foreground block text-[0.65rem] uppercase tracking-wider">
            Capstone Project:
          </span>
          <p className="font-semibold text-foreground truncate mt-0.5">
            {data.project}
          </p>
        </div>
      </div>

      {/* Footer / Student Info (No face photos, pure elegant card typography) */}
      <div className="mt-4 border-t border-border pt-3 flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white shadow dark:bg-primary dark:text-primary-foreground">
          {initials}
        </span>
        <div className="min-w-0">
          <h4 className="font-display text-xs font-bold text-foreground truncate">
            {data.name}
          </h4>
          <p className="text-[0.7rem] text-primary font-medium truncate">
            {data.role} • <span className="text-muted-foreground">{data.company}</span>
          </p>
          <p className="text-[0.65rem] text-muted-foreground truncate">
            Prior: {data.prevBackground}
          </p>
        </div>
      </div>
    </div>
  )
}
