'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Star,
  ShieldCheck,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

export interface RealStudentTestimonial {
  id: string
  name: string
  role: string
  company: string
  course: string
  image: string
  quote: string
  rating: number
}

// 12 Real Student Alumni from /public/testimonial/ and content.md Section 7
export const STUDENT_TESTIMONIALS: RealStudentTestimonial[] = [
  {
    id: 'st-1',
    name: 'Jayesh Mukund Deolalkar',
    role: 'GIS Engineer',
    company: 'Cognizant',
    course: 'Master Diploma in GIS & RS (6 Month)',
    image: '/testimonial/JAYESH MUKUND DEOLALKAR.png',
    quote:
      'The 6-month GIS & Remote Sensing diploma gave me end-to-end practical confidence. Working on real Pune municipal satellite imagery and PostGIS databases helped me crack Cognizant’s technical interview in my first attempt.',
    rating: 5,
  },
  {
    id: 'st-2',
    name: 'Sneha Ramesh Ghorpade',
    role: 'GIS Executive',
    company: 'Reliance Jio',
    course: 'GIS & Land Surveying (3 Month)',
    image: '/testimonial/Sneha Ramesh Ghorpade.png',
    quote:
      'Galaxia Geotech’s practical lab training at FC Road changed everything for me. The DGPS ground surveying combined with QGIS spatial analysis gave me real industry-ready skills.',
    rating: 5,
  },
  {
    id: 'st-3',
    name: 'Ashwini Charudatta Sarvagod',
    role: 'Junior GIS Analyst',
    company: 'Tech Mahindra',
    course: 'Certificate Course in GIS Python (1 Month)',
    image: '/testimonial/Ashwini Charudatta Sarvagod.png',
    quote:
      'Ashwik Sir’s Python GIS automation sessions were gold. Writing automated scripts with GeoPandas and Rasterio set me apart from other candidates during placements.',
    rating: 5,
  },
  {
    id: 'st-4',
    name: 'Vipul Dalvi',
    role: 'Remote Sensing Specialist',
    company: 'The Nisarga Consultancy',
    course: 'Master Diploma in GIS & RS (6 Month)',
    image: '/testimonial/Vipul Dalvi.png',
    quote:
      'The hands-on Sentinel-2 satellite image classification and DEM watershed modeling gave me an exceptional portfolio that employers immediately appreciated.',
    rating: 5,
  },
  {
    id: 'st-5',
    name: 'Shruti Bhausaheb Pawar',
    role: 'GIS Analyst',
    company: 'The Nisarga Consultancy',
    course: 'Certificate Course in GIS (3 Month)',
    image: '/testimonial/Shruti Bhausaheb pawar.png',
    quote:
      'From day one, the focus is on practical workstations. No rote theory. We solved real geospatial problems and created portfolio-ready map layouts.',
    rating: 5,
  },
  {
    id: 'st-6',
    name: 'Sanjay Thakur',
    role: 'GIS Specialist',
    company: 'ACS Technologies',
    course: 'GIS & Land Surveying (3 Month)',
    image: '/testimonial/Sanjay Thakur.jpeg',
    quote:
      'Coming from a civil background, the GIS & Land Surveying 3-month course was the perfect bridge. Prashant Sir made Total Station and DGPS concepts crystal clear.',
    rating: 5,
  },
  {
    id: 'st-7',
    name: 'Pramod Mahadeo Apune',
    role: 'GIS Analyst',
    company: 'Innover Systems',
    course: 'Certificate Course in GIS (3 Month)',
    image: '/testimonial/Pramod Mahadeo Apune.png',
    quote:
      'The 1-on-1 mentorship and resume portfolio guidance from Ashwik Sir helped me secure an immediate placement in Pune’s IT geospatial sector.',
    rating: 5,
  },
  {
    id: 'st-8',
    name: 'Aditi Aher',
    role: 'GIS Executive',
    company: 'STP Pune',
    course: 'Master Diploma in GIS & RS (6 Month)',
    image: '/testimonial/Aditi Aher.png',
    quote:
      'The urban healthcare buffer analysis and municipal zoning projects made my interview at STP Pune a breeze.',
    rating: 5,
  },
  {
    id: 'st-9',
    name: 'Pranita Bendre',
    role: 'GIS Analyst',
    company: 'Monarch',
    course: 'Certificate Course in GIS (3 Month)',
    image: '/testimonial/Pranita Bendre.jpeg',
    quote:
      'Weekend batches allowed me to upskill without leaving my current job. The recorded backup sessions were invaluable.',
    rating: 5,
  },
  {
    id: 'st-10',
    name: 'Yuvraj Subhash Sale',
    role: 'Geospatial Survey Specialist',
    company: 'Prashant Advance Survey LLP',
    course: 'GIS & Land Surveying (3 Month)',
    image: '/testimonial/Yuvraj Subhash Sale.jpeg',
    quote:
      'Practical field exposure with total stations and DGPS at FC Road made all the difference.',
    rating: 5,
  },
  {
    id: 'st-11',
    name: 'Nikita Anil Kumar Nair',
    role: 'Spatial Data Associate',
    company: 'Monarch',
    course: 'Master Diploma in GIS & RS (6 Month)',
    image: '/testimonial/NIKITA ANIL KUMAR NAIR.png',
    quote:
      'The dual-monitor workstations and dedicated lab guidance made mastering QGIS, ArcGIS and PostGIS intuitive and fast.',
    rating: 5,
  },
  {
    id: 'st-12',
    name: 'Akshay Shegokar',
    role: 'GIS Associate',
    company: 'Geospatial Enterprise',
    course: 'Professional GIS Developer (6 Month)',
    image: '/testimonial/akshay shegokar.png',
    quote:
      'Learning spatial ETL pipelines and DEM elevation processing gave me the exact skills demanded by engineering consultants.',
    rating: 5,
  },
]

const ROW_1 = STUDENT_TESTIMONIALS.slice(0, 4)
const ROW_2 = STUDENT_TESTIMONIALS.slice(4, 8)
const ROW_3 = STUDENT_TESTIMONIALS.slice(8, 12)

export function StudentTestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card via-background to-muted/30 py-20 border-y border-border">
      {/* Subtle Map Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:32px_32px] dark:[background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />

      {/* Left and Right Gradient Fade Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Eyebrow>VERIFIED ALUMNI SUCCESS</Eyebrow>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[0.7rem] font-bold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="size-3" /> ISO 9001:2015 Certified
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-4xl text-foreground">
              What Our <span className="text-primary">Graduates Say</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Real career journeys, job placements, and authentic feedback from alumni trained at our Shreenath Plaza, FC Road Pune lab.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 rounded-md bg-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-foreground hover:bg-navy/90 transition-colors dark:bg-primary dark:text-primary-foreground"
            >
              Explore 6 Certified Tracks &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 3 Infinite Scrolling Rows Container with real student photos */}
      <div
        className="mt-12 space-y-6 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ROW 1: Moves Left to Right */}
        <div className="overflow-hidden">
          <div
            className={`animate-marquee-ltr-row1 flex items-center gap-6 ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
          >
            {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((item, idx) => (
              <TestimonialCard key={`r1-${item.id}-${idx}`} data={item} />
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Left to Right (offset speed) */}
        <div className="overflow-hidden">
          <div
            className={`animate-marquee-ltr-row2 flex items-center gap-6 ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
          >
            {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((item, idx) => (
              <TestimonialCard key={`r2-${item.id}-${idx}`} data={item} />
            ))}
          </div>
        </div>

        {/* ROW 3: Moves Right to Left */}
        <div className="overflow-hidden">
          <div
            className={`animate-marquee-rtl-row3 flex items-center gap-6 ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
          >
            {[...ROW_3, ...ROW_3, ...ROW_3, ...ROW_3].map((item, idx) => (
              <TestimonialCard key={`r3-${item.id}-${idx}`} data={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Summary Metrics Bar */}
      <div className="container-page mt-12 relative z-10">
        <div className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5 sm:grid-cols-4 sm:p-6 text-center shadow-sm">
          <div>
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">500+ Alumni</p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Trained across Maharashtra
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl text-primary">100%</p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Practical &amp; Job-Oriented
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">6 Tracks</p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              GIS, RS, Survey, Dev &amp; Python
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl text-emerald-600 dark:text-emerald-400">ISO 9001</p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              2015 Certified Institute
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ data }: { data: RealStudentTestimonial }) {
  const [imgError, setImgError] = useState(false)
  const initials = data.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

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
          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-3" /> Placed
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
      </div>

      {/* Footer with Student Photo from /testimonial/ */}
      <div className="mt-4 border-t border-border pt-3 flex items-center gap-3">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-primary/40 bg-muted shadow-sm">
          {!imgError ? (
            <Image
              src={data.image}
              alt={data.name}
              fill
              sizes="48px"
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center bg-navy text-xs font-bold text-white dark:bg-primary dark:text-primary-foreground">
              {initials}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h4 className="font-display text-xs font-bold text-foreground truncate">
            {data.name}
          </h4>
          <p className="text-[0.72rem] font-semibold text-primary truncate">
            {data.role}
          </p>
          <p className="text-[0.68rem] font-medium text-muted-foreground truncate flex items-center gap-1">
            <Briefcase className="size-3 shrink-0 text-muted-foreground" />
            <span className="truncate">{data.company}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
