'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Cpu,
  GraduationCap,
  HelpCircle,
  Laptop,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { EnrollmentModal } from '@/components/enrollment-modal'

const FEATURED_COURSES = [
  {
    href: '/courses/embedded-course-pune',
    badge: 'Pune Premier Lab',
    rating: '4.9 ⭐ (210+ Reviews)',
    title: 'Master Embedded Systems & RTOS',
    description:
      'Firmware workflows, ARM Cortex MCUs, FreeRTOS kernel design, C/C++ optimization, and hardware-software co-design in Pune.',
    image: '/images/electronics-lab.png',
    duration: '6 Months',
    location: 'Pune Lab (Hadapsar)',
    placement: '100% Job Support',
    seats: 'Only 4 Seats Left',
  },
  {
    href: '/services/automotive-embedded',
    badge: 'Specialized R&D Track',
    rating: '4.9 ⭐ (150+ Reviews)',
    title: 'Automotive Embedded & AUTOSAR',
    description:
      'ECU architecture, CAN/CAN-FD/LIN bus protocols, AUTOSAR software layers, Vector CANalyzer labs, and ISO 26262 functional safety.',
    image: '/images/hero-automotive-pcb.png',
    duration: '240 Hours',
    location: 'On-site / Hybrid',
    placement: 'Top Tier-1 R&D',
    seats: 'Enrollment Open',
  },
  {
    href: '/courses/advanced-iot-training',
    badge: 'Industrial IoT Certification',
    rating: '4.9 ⭐ (180+ Reviews)',
    title: 'Advanced Industrial IoT Systems',
    description:
      'Edge computing, LoRaWAN mesh networks, secure boot, AWS IoT Greengrass, Azure IoT Hub, and live telemetry dashboards.',
    image: '/images/hero-circuit-macro.png',
    duration: '12 Weeks',
    location: 'Hybrid / Remote',
    placement: '98% Placement Rate',
    seats: 'Oct 15 Cohort',
  },
]

const ACADEMY_STATS = [
  { value: '4,850+', label: 'GRADUATES PLACED' },
  { value: '98.4%', label: 'PLACEMENT RATE' },
  { value: '50+', label: 'GLOBAL HIRING PARTNERS' },
  { value: '₹27.5 LPA', label: 'HIGHEST PACKAGE' },
]

const COMPARISON = [
  {
    feature: 'Practical Hardware Lab Time',
    us: '500+ Hours Unlimited Oscilloscope & Board Access',
    others: 'Strict 1-2 Hours/day batch limit',
  },
  {
    feature: 'Automotive & ECU Toolchains',
    us: 'Vector CANalyzer, CAPL, STM32 & AUTOSAR',
    others: 'Legacy 8051 / PIC microcontrollers only',
  },
  {
    feature: 'Curriculum Accreditation',
    us: 'NASSCOM® Aligned & ISO 9001:2015 Certified',
    others: 'Unverified local institute certificates',
  },
  {
    feature: 'Placement Assistance & Interviews',
    us: 'Dedicated 1-on-1 Mock Technical Interviews & Direct Drives',
    others: 'Generic resume forward without prep',
  },
]

export function StudentPrograms() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  // Live Timer State
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, mins: 22, secs: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 }
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <section className="bg-muted/40 py-24 text-foreground">
        <div className="container-page">
          {/* Header & Live Batch Timer Bar */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1 text-xs font-bold text-primary uppercase">
                🏅 NASSCOM® Aligned &amp; ISO 9001:2015 Certified Academy
              </div>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
                Featured Student Programs
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Industry-aligned technical courses with hands-on hardware labs, expert mentorship from
                senior R&amp;D developers, and direct job placement assistance.
              </p>
            </div>

            {/* Live Batch Countdown Box */}
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm text-center">
              <p className="text-[0.65rem] font-bold tracking-widest text-primary uppercase flex items-center justify-center gap-1">
                <Zap className="size-3 fill-current" /> NEXT PUNE BATCH STARTS IN
              </p>
              <div className="mt-2 flex items-center justify-center gap-2 font-display text-lg font-extrabold text-foreground">
                <div className="rounded bg-navy px-2 py-1 text-white">
                  {String(timeLeft.days).padStart(2, '0')}<span className="text-[0.6rem] block font-sans font-normal text-navy-muted">DAYS</span>
                </div>
                <span>:</span>
                <div className="rounded bg-navy px-2 py-1 text-white">
                  {String(timeLeft.hours).padStart(2, '0')}<span className="text-[0.6rem] block font-sans font-normal text-navy-muted">HRS</span>
                </div>
                <span>:</span>
                <div className="rounded bg-navy px-2 py-1 text-white">
                  {String(timeLeft.mins).padStart(2, '0')}<span className="text-[0.6rem] block font-sans font-normal text-navy-muted">MIN</span>
                </div>
                <span>:</span>
                <div className="rounded bg-primary px-2 py-1 text-primary-foreground">
                  {String(timeLeft.secs).padStart(2, '0')}<span className="text-[0.6rem] block font-sans font-normal text-primary-foreground/80">SEC</span>
                </div>
              </div>
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
                key={course.href}
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
                      <MapPin className="size-3.5 text-primary" /> {course.location}
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
                      Syllabus &rarr;
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
                      <GraduationCap className="size-4" /> Apply Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Why Galaxia Geotech Academy Beats Traditional Institutes (Comparison Matrix) */}
          <div className="mt-20 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="bg-navy p-6 text-navy-foreground text-center">
              <Eyebrow tone="white">THE UNFAIR ADVANTAGE</Eyebrow>
              <h3 className="mt-1 font-display text-2xl font-extrabold uppercase text-white">
                Why Galaxia Geotech Academy vs Traditional Institutes
              </h3>
              <p className="mt-1 text-xs text-navy-muted">
                Compare our hands-on engineering lab standards with conventional training centers.
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
