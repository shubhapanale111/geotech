'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Award,
  CheckCircle2,
  Clock,
  Cpu,
  GraduationCap,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import { EnrollmentModal } from '@/components/enrollment-modal'

export function HomeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalCourse, setModalCourse] = useState('Free Demo Class')

  const openDemoModal = (course = 'Free Demo Class') => {
    setModalCourse(course)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src="/images/electronics-lab.png"
          alt="Hands-on Embedded Systems and Electronics Lab"
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
                  <Award className="size-3.5" /> NASSCOM® Aligned &amp; ISO 9001:2015 Lab
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-300">
                  <MapPin className="size-3 text-primary" /> Pune Offline Training Center
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Master Embedded Systems &amp; IoT with{' '}
                <span className="text-primary">100% Practical Labs</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
                Galaxia Geotech Academy is Pune&apos;s premier offline embedded systems training
                institute. Gain job-ready expertise on ARM Cortex, STM32, RTOS, AUTOSAR, and
                real-time hardware toolchains under senior R&amp;D industry mentors.
              </p>

              {/* Key Trust Points */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>500+ Hours Unlimited Hardware Lab Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>100% Placement Support &amp; Direct Drives</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Working Tier-1 Industry Mentors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Vector CANalyzer, Oscilloscopes &amp; STM32 Kits</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal('Free Demo Class')}
                  className="flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold tracking-wider text-primary-foreground uppercase shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/20"
                >
                  <Sparkles className="size-4" /> Book Free Demo Class
                </button>
                <Link
                  href="/courses"
                  className="rounded-md border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Explore All Courses
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="size-3.5 text-primary" /> Speak with Counselor
                </a>
              </div>
            </div>

            {/* Right Quick Register Card (High-Converting for Students) */}
            <div className="rounded-2xl border border-white/15 bg-gray-900/90 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                    Admissions Open
                  </span>
                  <h2 className="font-display text-xl font-bold text-white">
                    Apply for Free Career Counselling
                  </h2>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <GraduationCap className="size-5" />
                </span>
              </div>

              <div className="mt-4 rounded-lg bg-white/5 p-3.5 text-center border border-white/10">
                <p className="text-[0.7rem] font-bold tracking-widest text-primary uppercase flex items-center justify-center gap-1.5">
                  <Zap className="size-3.5 fill-current" /> Next Offline Batch Starts In
                </p>
                <p className="mt-1 text-sm font-extrabold text-white">
                  Limited to 15 Students / Batch for Personal Mentorship
                </p>
              </div>

              <p className="mt-4 text-xs text-gray-300 leading-relaxed">
                Connect with our academic advisor to discuss course syllabus, batch timings (weekday/weekend),
                hardware lab facilities, and placement opportunities.
              </p>

              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={() => openDemoModal('Master Embedded Systems')}
                  className="w-full rounded-md bg-primary py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book 1-on-1 Free Demo &amp; Lab Visit &rarr;
                </button>
                <a
                  href="https://wa.me/919876543210?text=Hi%20Galaxia%20Geotech,%20I%20want%20to%20know%20more%20about%20the%20Embedded%20Systems%20Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[0.65rem] text-gray-400">
                <span>⚡ Instant Call Back in 30 Mins</span>
                <span>🔒 100% Free &amp; No Obligation</span>
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
