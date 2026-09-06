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
  Download,
  Filter,
  GraduationCap,
  HelpCircle,
  Laptop,
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
  'All Programs',
  'Embedded C / RTOS',
  'Automotive R&D / AUTOSAR',
  'Industrial IoT',
  'MBD MATLAB & EV',
]

const COURSES = [
  {
    href: '/courses/embedded-course-pune',
    category: 'Embedded C / RTOS',
    badge: 'Pune Premier Lab',
    rating: '4.9',
    reviews: '280+ Reviews',
    title: 'Master Embedded Systems & RTOS',
    description:
      'Firmware workflows, ARM Cortex-M MCUs, FreeRTOS kernel design, C/C++ optimization, I2C/SPI/UART drivers, and hardware-software co-design in Pune.',
    image: '/images/electronics-lab.png',
    duration: '6 Months',
    location: 'Pune Lab (Hadapsar)',
    mode: '100% Offline / Lab',
    placement: '100% Job Support',
    seats: 'Only 4 Seats Left',
    prereq: 'Basic C Programming',
    feeNote: 'Starting at ₹4,999/mo (Zero-Cost EMI)',
    highlights: [
      '500+ Hours Oscilloscope & Board Lab Time',
      'FreeRTOS Multitasking & Kernel Design',
      'Direct Job Interviews at 50+ Hiring Partners',
    ],
  },
  {
    href: '/services/automotive-embedded',
    category: 'Automotive R&D / AUTOSAR',
    badge: 'Specialized R&D Track',
    rating: '4.9',
    reviews: '190+ Reviews',
    title: 'Automotive Embedded & AUTOSAR Systems',
    description:
      'Master ECU architecture, CAN/CAN-FD/LIN protocols, AUTOSAR software layers, Vector CANalyzer labs, and ISO 26262 functional safety.',
    image: '/images/hero-automotive-pcb.png',
    duration: '240 Hours',
    location: 'On-site / Hybrid',
    mode: 'Hands-on HIL Testing',
    placement: 'Top Tier-1 Suppliers',
    seats: 'Enrollment Open',
    prereq: 'Microcontroller Fundamentals',
    feeNote: 'Merit Scholarships Available',
    highlights: [
      'Vector CANalyzer & CAPL Scripting Labs',
      'AUTOSAR Layered Architecture Practice',
      'ISO 26262 ASIL Functional Safety Review',
    ],
  },
  {
    href: '/courses/advanced-iot-training',
    category: 'Industrial IoT',
    badge: 'Industrial IoT Certification',
    rating: '4.9',
    reviews: '210+ Reviews',
    title: 'Advanced Industrial IoT Systems',
    description:
      'Designed for engineering graduates & teams: edge computing, LoRaWAN mesh networks, secure boot, AWS IoT Greengrass, Azure IoT Hub, and telemetry dashboards.',
    image: '/images/hero-circuit-macro.png',
    duration: '12 Weeks',
    location: 'Hybrid / Remote',
    mode: 'Hybrid (Live + Lab)',
    placement: '98% Placement Rate',
    seats: 'Oct 15 Cohort',
    prereq: 'C/C++ & Linux Basics',
    feeNote: 'Starting at ₹3,999/mo (Zero-Cost EMI)',
    highlights: [
      'Real Hardware Gateway Kit Included',
      'AWS IoT Core & Azure IoT Cloud Telemetry',
      'Industrial Protocols (MQTT, CoAP, LoRaWAN)',
    ],
  },
  {
    href: '/services/automotive-embedded',
    category: 'MBD MATLAB & EV',
    badge: 'EV & Control Track',
    rating: '4.8',
    reviews: '120+ Reviews',
    title: 'Model-Based Design (MBD) MATLAB / Simulink',
    description:
      'Automotive EV control systems design, Battery Management Systems (BMS), Simulink stateflow logic, and MIL/SIL automated testing.',
    image: '/images/hero-server-room.png',
    duration: '16 Weeks',
    location: 'Hybrid / Lab',
    mode: 'Simulink & Hardware Testing',
    placement: 'EV R&D Centers',
    seats: 'Limited Seats',
    prereq: 'Control Systems Basics',
    feeNote: 'Installment Options',
    highlights: [
      'MATLAB Simulink Stateflow Logic',
      'BMS & Motor Control Simulation',
      'MIL/SIL Code Generation & Testing',
    ],
  },
]

const PARTNERS = [
  'SIEMENS',
  'BOSCH',
  'CONTINENTAL',
  'TATA ELXSI',
  'ADVANTECH',
  'VALEO',
  'QUALCOMM',
  'NXP SEMI',
]

const STUDENT_REVIEWS = [
  {
    name: 'Anand Kulkarni',
    role: 'Embedded Software Engineer',
    company: 'Bosch Global Software',
    before: 'Fresh Graduate (ECE)',
    image: '/images/team-sarah.png',
    quote:
      'The hands-on lab in Pune gave me confidence with oscilloscopes and STM32 drivers. I cleared my technical interview at Bosch in the very first attempt!',
    rating: 5,
  },
  {
    name: 'Priya Deshmukh',
    role: 'IoT Solutions Architect',
    company: 'Siemens Advanta',
    before: 'Junior Systems Dev',
    image: '/images/team-david.png',
    quote:
      'Designing AWS IoT pipelines and LoRaWAN gateways during the project phase was the turning point. The mentorship quality is top-notch.',
    rating: 5,
  },
  {
    name: 'Rohan Verma',
    role: 'AUTOSAR ECU Specialist',
    company: 'Continental Automotive',
    before: 'Hardware Testing Engineer',
    image: '/images/team-michael.png',
    quote:
      'Learning CAN bus arbitration, CAPL scripting, and ISO 26262 safety standards opened doors for high-paying R&D roles in mobility.',
    rating: 5,
  },
]

const FAQS = [
  {
    question: 'HOW DOES THE ADMISSION PROCESS WORK?',
    answer:
      '1. Submit your online application or register for a free demo class. 2. Connect with an academic counselor for a 1-on-1 technical background review. 3. Reserve your seat with an advance enrollment token.',
  },
  {
    question: 'ARE SCHOLARSHIPS OR FLEXIBLE FEE INSTALMENTS AVAILABLE?',
    answer:
      'Yes! We offer merit-based scholarships up to 25% for top academic performers, plus zero-cost monthly EMI options starting from ₹3,999/month.',
  },
  {
    question: 'CAN FINAL YEAR COLLEGE STUDENTS JOIN?',
    answer:
      'Absolutely. Over 40% of our enrolled students are final year engineering students doing their capstone project alongside course training.',
  },
  {
    question: 'WHAT KIND OF PLACEMENT SUPPORT IS PROVIDED?',
    answer:
      'We conduct 1-on-1 mock technical interviews, resume building sessions, C/C++ coding assessments, and direct placement drives with 50+ hiring partners.',
  },
  {
    question: 'CAN I ATTEND A FREE DEMO CLASS BEFORE ENROLLING?',
    answer:
      'Yes! Click on "Book Free Demo Class" to attend an interactive live or offline lab session at our Pune facility with zero commitment.',
  },
]

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('All Programs')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const filteredCourses = COURSES.filter((c) => {
    const matchesTab =
      activeTab === 'All Programs' || c.category.toLowerCase() === activeTab.toLowerCase()
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase())
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
              🏅 NASSCOM® Accredited
            </span>
            <span className="rounded bg-white/10 px-3 py-1 text-xs font-bold text-white uppercase">
              ✅ ISO 9001:2015 Certified Labs
            </span>
            <span className="rounded bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 uppercase">
              ⭐ 4.9/5 Rating (450+ Reviews)
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            Pune&apos;s #1 Academy for <span className="text-primary">Embedded &amp; Automotive R&amp;D</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-navy-muted">
            100% job-oriented engineering courses designed with unlimited hardware lab access, Vector
            CANalyzer toolchains, AUTOSAR layers, and guaranteed placement assistance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setSelectedCourse('Master Embedded Systems & RTOS')}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow-lg transition-colors hover:bg-primary/90"
            >
              <GraduationCap className="size-4" /> Apply for Admission
            </button>
            <button
              type="button"
              onClick={() => setSelectedCourse('Free Demo Class')}
              className="rounded-md border border-white/30 bg-white/5 px-8 py-3.5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/15"
            >
              <Sparkles className="size-4 inline mr-1 text-primary" /> Book Free Demo Class
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:grid-cols-4 max-w-4xl mx-auto shadow-2xl">
            <div>
              <p className="font-display text-3xl font-extrabold text-white">4,850+</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-navy-muted uppercase">
                ALUMNI PLACED
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-emerald-400">98.4%</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-navy-muted uppercase">
                PLACEMENT RECORD
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-primary">₹27.5 LPA</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-navy-muted uppercase">
                HIGHEST PACKAGE
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-white">500+</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-navy-muted uppercase">
                LAB HOURS / STUDENT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome & Proof Bar */}
      <section className="bg-background py-14 border-b border-border">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <TrendingUp className="size-6 text-primary" />
              <p className="mt-3 font-display text-2xl font-extrabold text-foreground">140% Avg</p>
              <p className="mt-1 text-xs font-bold text-muted-foreground uppercase">
                Salary Hike Post Training
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Award className="size-6 text-primary" />
              <p className="mt-3 font-display text-2xl font-extrabold text-foreground">NASSCOM®</p>
              <p className="mt-1 text-xs font-bold text-muted-foreground uppercase">
                Accredited Syllabus
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Users className="size-6 text-primary" />
              <p className="mt-3 font-display text-2xl font-extrabold text-foreground">50+ Companies</p>
              <p className="mt-1 text-xs font-bold text-muted-foreground uppercase">
                Direct Placement Drives
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Laptop className="size-6 text-primary" />
              <p className="mt-3 font-display text-2xl font-extrabold text-foreground">Unlimited</p>
              <p className="mt-1 text-xs font-bold text-muted-foreground uppercase">
                Oscilloscope &amp; MCU Lab Time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog & Directory Section */}
      <section id="catalog" className="bg-muted/30 py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>CHOOSE YOUR CAREER TRACK</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Featured Programs &amp; Placement Tracks
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Filter by domain or search for specific microcontrollers, RTOS kernels, or protocols.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search C, RTOS, AUTOSAR, MBD..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {filteredCourses.map((course) => (
              <article
                key={course.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-60 w-full">
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
                  {/* Rating & Location */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 font-bold text-amber-500">
                      <Star className="size-3.5 fill-current" /> {course.rating}{' '}
                      <span className="font-normal text-muted-foreground">({course.reviews})</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5 text-primary" /> {course.location}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-xl font-bold text-foreground">
                    {course.title}
                  </h2>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mt-4 space-y-1.5 rounded-lg bg-muted/50 p-3 text-xs text-foreground">
                    {course.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-[0.7rem] font-medium">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-1.5 border-t border-border pt-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-bold text-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Placement:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {course.placement}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Fee Plan:</span>
                      <span className="font-bold text-primary">{course.feeNote}</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(`Free Demo - ${course.title}`)}
                      className="inline-flex items-center justify-center gap-1 rounded-md border border-border bg-card py-2.5 text-xs font-bold tracking-wider text-foreground uppercase hover:bg-muted"
                    >
                      Book Free Demo
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(course.title)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary py-2.5 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow transition-colors hover:bg-primary/90"
                    >
                      <GraduationCap className="size-4" /> Apply Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Reviews */}
      <section className="bg-background py-20">
        <div className="container-page">
          <div className="text-center">
            <Eyebrow>ALUMNI PLACEMENT PROOF</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              What Our Graduates Say
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Real stories from graduates placed at global engineering firms.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STUDENT_REVIEWS.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div>
                  <div className="flex text-amber-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-xs leading-relaxed text-foreground italic">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="relative size-10 overflow-hidden rounded-full border border-primary">
                    <Image src={review.image} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{review.name}</p>
                    <p className="text-[0.7rem] font-bold text-primary">{review.role}</p>
                    <p className="text-[0.65rem] text-muted-foreground">{review.company}</p>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners Logos Bar */}
      <section className="border-y border-border bg-card py-10">
        <div className="container-page text-center">
          <p className="text-[0.65rem] font-bold tracking-widest text-muted-foreground uppercase">
            OUR STUDENTS ARE HIRED BY 50+ INDUSTRY LEADERS
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-10 font-display text-lg font-extrabold tracking-wider text-muted-foreground/60 uppercase">
            {PARTNERS.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-20">
        <div className="container-page max-w-4xl text-center">
          <Eyebrow>STUDENT CLARIFICATIONS</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
            Admission &amp; Enrollment FAQ
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Have questions about how to enroll, batch schedules, or placement assistance?
          </p>

          <div className="mt-10 text-left rounded-lg border border-border bg-card shadow-sm">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        defaultCourse={selectedCourse || undefined}
      />
    </>
  )
}
