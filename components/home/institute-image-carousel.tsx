'use client'

import { EnrollmentModal } from '@/components/enrollment-modal'
import {
  ArrowRight,
  GraduationCap,
  MapPin
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

// =========================================================================
// 📸 STUDENT & CAMPUS GALLERY IMAGES
// 👉 You can easily add, edit, or replace your images and titles here!
// =========================================================================
export interface CarouselSlide {
  id: string
  image: string
  title: string
  category: string
  description: string
  location?: string
  badge?: string
}

export const INSTITUTE_GALLERY_IMAGES: CarouselSlide[] = [
  {
    id: 'slide-1',
    image: '/images/CoverPhoto.png',
    category: 'GIS & RS Computing Lab',
    badge: 'Flagship Facility',
    title: 'High-Performance Geospatial Workstations',
    description:
      'Hands-on training in satellite data processing, LiDAR point cloud visualization, and enterprise geodatabase modeling.',
    location: 'FC Road Campus, Pune',
  },
  {
    id: 'slide-2',
    image: '/images/surveyor-field.png',
    category: 'Practical Field Surveying',
    badge: 'Hands-On Ground Work',
    title: 'DGPS & Total Station Field Training',
    description:
      'Real-world field ground truthing, coordinate reference system calibration, and digital elevation model verification.',
    location: 'Outdoor Field Lab, Pune',
  },
  {
    id: 'slide-3',
    image: '/images/firmware-coding.png',
    category: 'Geospatial Programming',
    badge: 'Industry Coding Track',
    title: 'Python & Web GIS Development Sessions',
    description:
      'Building geospatial APIs, spatial data pipelines with GeoPandas & PostGIS, and interactive web mapping applications.',
    location: 'Software Lab 2, Pune',
  },
  {
    id: 'slide-4',
    image: '/images/aerial-map.png',
    category: 'Thematic Cartography',
    badge: 'Specialized Lab',
    title: 'Drone Survey & Multi-Band Satellite Analysis',
    description:
      'Multi-temporal NDVI analysis, flood inundation modeling, and precision cadastral map georeferencing.',
    location: 'Remote Sensing Division',
  },
  {
    id: 'slide-5',
    image: '/images/engineering-3d-model.png',
    category: '3D Terrain & Modeling',
    badge: 'Advanced GIS Lab',
    title: 'Digital Elevation & Watershed Modeling',
    description:
      '3D topographical surface rendering, hydrological flow accumulation extraction, and urban terrain planning.',
    location: 'GIS R&D Lab',
  },
]

export function InstituteImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const slides = INSTITUTE_GALLERY_IMAGES
  const totalSlides = slides.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])
  const goToSlide = (idx: number) => {
    setCurrentIndex(idx)
  }

  // Auto-play timer (5 seconds per slide)
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, 5000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="relative w-full bg-navy text-white overflow-hidden border-y border-white/10">
      <div className="relative z-10 w-full">
        <div
          className="relative w-full overflow-hidden border-y border-white/15 bg-black/40 shadow-2xl group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="h-[380px] sm:h-[460px] md:h-[520px] lg:h-[495px] w-full">
            {slides.map((slide, index) => {
              const isActive = index === currentIndex

              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive
                    ? 'opacity-100 z-10'
                    : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20" />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden md:block" />

                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 md:p-12 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="rounded bg-primary px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-primary-foreground shadow-md">
                        {slide.category}
                      </span>

                      {slide.badge && (
                        <span className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-[0.7rem] font-semibold text-white border border-white/20">
                          {slide.badge}
                        </span>
                      )}

                      {slide.location && (
                        <span className="inline-flex items-center gap-1 text-[0.75rem] font-medium text-gray-300">
                          <MapPin className="size-3 text-primary" />
                          {slide.location}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl font-extrabold uppercase sm:text-3xl md:text-4xl text-white tracking-tight leading-tight drop-shadow-md">
                      {slide.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedCourse('Campus & Lab Visit')}
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform active:scale-95"
                      >
                        <GraduationCap className="size-4" />
                        Book Free Lab Demo
                      </button>

                      <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-black/40 backdrop-blur-md px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/15 transition-colors"
                      >
                        Explore GIS Courses
                        <ArrowRight className="size-3.5 text-primary" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="border-t border-white/10 bg-black/60 backdrop-blur-md p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
                {slides.map((slide, idx) => {
                  const isSelected = idx === currentIndex

                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`group/thumb relative h-12 w-20 sm:h-14 sm:w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${isSelected
                        ? 'border-primary ring-2 ring-primary/40 scale-105'
                        : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                        }`}
                      title={slide.title}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover/thumb:opacity-0" />

                      <span className="absolute bottom-0.5 right-1 text-[0.6rem] font-bold text-white drop-shadow">
                        0{idx + 1}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {slides.map((_, idx) => {
                  const isSelected = idx === currentIndex

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${isSelected
                        ? 'w-7 bg-primary shadow-sm shadow-primary'
                        : 'w-2 bg-white/30 hover:bg-white/60'
                        }`}
                    />
                  )
                })}
              </div>
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
