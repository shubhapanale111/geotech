'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { EnrollmentModal } from '@/components/enrollment-modal'

const CORE_COURSES = [
  'GIS & RS (6 Month)',
  'GIS (3 Month)',
  'GIS & Land Surveying (3 Month)',
  'GIS Python (1 Month)',
  'Single Software (1 Month)',
]

export function HomeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalCourse, setModalCourse] = useState('Certificate Course in GIS & RS (Six Month)')

  const openDemoModal = (course = 'Certificate Course in GIS & RS (Six Month)') => {
    setModalCourse(course)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src="/images/CoverPhoto.png"
          alt="Galaxia Geotech Institute of Pune - GIS, Remote Sensing & Land Surveying"
          fill
          priority
          className="object-cover opacity-75 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/40" />

        <div className="container-page relative z-10 py-4 md:py-6 lg:py-10">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            {/* Left Content Column */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/20 px-3.5 py-1 text-xs font-bold tracking-wider text-primary uppercase backdrop-blur-sm">
                  <ShieldCheck className="size-3.5 text-emerald-400" /> An ISO 9001:2015 Certified Institute
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">
                  <MapPin className="size-3 text-primary" /> FC Road, Pune Center
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Online &amp; Offline Classes
                </span>
              </div>

              <h1 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Galaxia Geotech <span className="text-primary">Institute of Pune</span>
              </h1>

              <p className="mt-4 text-base font-semibold text-gray-100 sm:text-lg">
                Hands-on training in GIS, Remote Sensing, GPS, and spatial data analysis with a focus on practical, career-oriented learning.
              </p>

              {/* Motivational Quote from Template */}
              <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-xs font-medium italic text-gray-200 sm:text-sm">
                  &ldquo;Empower your future with the knowledge you gain today. Success begins with the courage to learn something new.&rdquo;
                </p>
              </div>

              {/* Key Offerings Badges from Template */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Expert Faculty with Academic &amp; Industry Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>100% Practical &amp; Job-Oriented Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Hands-on with Real-World Geospatial Data &amp; Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>ISO 9001:2015 Certifications &amp; Placement Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal('General Admissions & Demo')}
                  className="flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02]"
                >
                  <GraduationCap className="size-4" /> Enroll Now
                </button>
                <Link
                  href="/courses"
                  className="rounded-md border border-white/30 bg-white/10 px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Explore 5 Certified Courses
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
            <div className="rounded-2xl border border-white/15 bg-navy/95 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                    Admissions Open
                  </span>
                  <h2 className="font-display text-xl font-bold text-white">
                    Types of GIS Courses
                  </h2>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Sparkles className="size-5" />
                </span>
              </div>

              <div className="mt-4 rounded-lg bg-white/5 p-3 text-center border border-white/10">
                <p className="text-[0.7rem] font-bold tracking-widest text-emerald-400 uppercase flex items-center justify-center gap-1.5">
                  <Clock className="size-3.5" /> Regular &amp; Weekend Batches Available
                </p>
                <p className="mt-0.5 text-xs text-navy-muted">
                  Online Live Classes &amp; Offline Lab at FC Road, Pune
                </p>
              </div>

              {/* Course Selection List */}
              <div className="mt-4 space-y-2">
                {CORE_COURSES.map((course) => (
                  <button
                    key={course}
                    type="button"
                    onClick={() => openDemoModal(course)}
                    className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-left text-xs font-semibold text-white transition-colors hover:border-primary hover:bg-primary/10"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Compass className="size-3.5 text-primary shrink-0" />
                      <span className="truncate">{course}</span>
                    </span>
                    <ArrowRight className="size-3 text-primary shrink-0 ml-1" />
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-navy-muted">Need syllabus guidance?</span>
                <button
                  type="button"
                  onClick={() => openDemoModal('Book Free Demo Session')}
                  className="font-bold text-primary hover:underline uppercase text-[0.7rem]"
                >
                  Book Free Demo Class &rarr;
                </button>
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
