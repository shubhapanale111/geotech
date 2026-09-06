'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Award,
  CheckCircle2,
  Clock,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Phone,
  Sparkles,
  Zap,
} from 'lucide-react'
import { EnrollmentModal } from '@/components/enrollment-modal'

export function HomeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalCourse, setModalCourse] = useState('Python with GIS Course')

  const openDemoModal = (course = 'Python with GIS Course') => {
    setModalCourse(course)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src="/images/aerial-map.png"
          alt="Geospatial analysis, Python with GIS and remote sensing"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/80" />

        <div className="container-page relative z-10 py-14 md:py-24 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Left Content Column */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/20 px-3.5 py-1 text-xs font-bold tracking-wider text-primary uppercase backdrop-blur-sm">
                  <Layers className="size-3.5" /> Python with GIS &amp; Geospatial Technology
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">
                  <MapPin className="size-3 text-primary" /> FC Road, Pune
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Master Python with <span className="text-primary">GIS</span>
              </h1>

              <p className="mt-4 text-lg font-semibold text-gray-100 sm:text-xl">
                Learn Python programming, GIS automation and geospatial analysis through practical,
                real-world projects.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base">
                Build industry-ready geospatial skills with hands-on training, modern GIS tools and
                Python libraries (GeoPandas, Shapely, Rasterio, PyProj).
              </p>

              {/* Key Highlights from content.md */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Hands-on GIS Python Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Modern GIS Tools &amp; Libraries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Industry Experienced Trainers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Institute-Recognized Certification</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal('Python with GIS Course')}
                  className="flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold tracking-wider text-primary-foreground uppercase shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/20"
                >
                  <GraduationCap className="size-4" /> Enroll Now
                </button>
                <Link
                  href="/courses"
                  className="rounded-md border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Explore Course
                </Link>
                <a
                  href="tel:7522929752"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-white transition-colors"
                >
                  <Phone className="size-3.5 text-primary" /> Call 752-2929-752
                </a>
              </div>
            </div>

            {/* Right Quick Register Card */}
            <div className="rounded-2xl border border-white/15 bg-navy/90 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                    Admissions Open
                  </span>
                  <h2 className="font-display text-xl font-bold text-white">
                    Enroll in Python with GIS
                  </h2>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Sparkles className="size-5" />
                </span>
              </div>

              <div className="mt-4 rounded-lg bg-white/5 p-3.5 text-center border border-white/10">
                <p className="text-[0.7rem] font-bold tracking-widest text-primary uppercase flex items-center justify-center gap-1.5">
                  <Zap className="size-3.5 fill-current" /> Next Pune Batch Starting Soon
                </p>
                <p className="mt-1 text-sm font-extrabold text-white">
                  Limited Batch Size for Direct Project Mentorship
                </p>
              </div>

              <p className="mt-4 text-xs text-gray-300 leading-relaxed">
                Learn Python fundamentals, GIS spatial data processing, buffer analysis, DEM terrain
                extraction, and build portfolio projects.
              </p>

              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={() => openDemoModal('Python with GIS - Free Demo')}
                  className="w-full rounded-md bg-primary py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Free Demo Class &rarr;
                </button>
                <a
                  href="https://wa.me/917522929752?text=Hi%20Galaxia%20Geotech,%20I%20want%20to%20know%20more%20about%20the%20Python%20with%20GIS%20Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  💬 Inquire on WhatsApp
                </a>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[0.65rem] text-gray-400">
                <span>📍 FC Road, Pune Center</span>
                <span>🎓 Recognized Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={modalCourse}
      />
    </>
  )
}
