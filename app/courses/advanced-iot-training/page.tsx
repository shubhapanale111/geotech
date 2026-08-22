'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Cloud,
  Cpu,
  GraduationCap,
  Network,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'
import { EnrollmentModal } from '@/components/enrollment-modal'

const FEATURES = [
  {
    icon: Cpu,
    title: 'EDGE COMPUTING',
    description:
      'Deep dive into ARM Cortex processors and ESP32 architectures for optimized performance.',
  },
  {
    icon: Network,
    title: 'MESH NETWORKS',
    description:
      'Implementation of robust Zigbee, Thread, and LoRaWAN connectivity for critical environments.',
  },
  {
    icon: ShieldCheck,
    title: 'HARDENED SECURITY',
    description:
      'Trustzone implementation and secure boot processes for mission-critical deployments.',
  },
  {
    icon: Cloud,
    title: 'CLOUD INTEGRATION',
    description:
      'Scale device management with AWS IoT Greengrass and Azure IoT Edge frameworks.',
  },
]

const LAB_CHECKMARKS = [
  'Hands-on with industrial gateways (Siemens, Advantech)',
  'Real-time sensor calibration and signal processing',
  'Battery optimization for low-power remote nodes',
  'End-to-end integration projects (Sensor to Dashboard)',
]

const STATS = [
  { value: '1,200+', label: 'GRADUATES' },
  { value: '480+', label: 'LAB HOURS' },
  { value: '45+', label: 'PROJECTS' },
  { value: '15+', label: 'INDUSTRY PARTNERS' },
]

const PREREQUISITES = [
  'Basic understanding of C/C++ programming',
  'Foundational knowledge of Linux environments',
  'Conceptual awareness of basic electronics',
  'Interest in Industrial 4.0 trends',
]

const FAQS = [
  {
    question: 'WHAT ARE THE PREREQUISITES FOR THIS ADVANCED COURSE?',
    answer:
      'A background in computer science, electronics, or engineering, plus familiarity with basic C/C++ and Linux commands.',
  },
  {
    question: 'IS THERE ANY HANDS-ON HARDWARE PROVIDED DURING THE TRAINING?',
    answer:
      'Yes, each participant receives an IoT hardware starter kit including ESP32 boards, sensors, and gateway modules.',
  },
  {
    question: 'DOES THE COURSE COVER CLOUD PLATFORM INTEGRATION?',
    answer:
      'Yes, we cover end-to-end device connection with AWS IoT Core and Microsoft Azure IoT Hub.',
  },
  {
    question: 'ARE CERTIFICATIONS RECOGNIZED BY THE INDUSTRY?',
    answer:
      'Yes, Galaxia Geotech certifications are verified and recognized by our network of industrial R&D partners.',
  },
]

export default function AdvancedIotTrainingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-navy-foreground md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase backdrop-blur-sm">
              <Sparkles className="size-3.5" /> 🔥 Oct 15 Batch Enrollment Open
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
              ADVANCED <span className="text-primary">IoT SYSTEMS</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-navy-muted">
              Master the full spectrum of Industrial IoT. From low-level edge device integration to
              sophisticated cloud architectures and data-driven insights.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <GraduationCap className="size-4" /> Enroll Now
              </button>
              <Link
                href="/contact"
                className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/10"
              >
                Curriculum PDF
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-4">
                <p className="text-xs font-bold text-navy-muted uppercase">NEXT BATCH</p>
                <p className="mt-1 font-display text-xl font-bold text-white">October 15, 2024</p>
              </div>
              <div>
                <p className="text-xs font-bold text-navy-muted uppercase">FORMAT</p>
                <p className="mt-1 font-display text-xl font-bold text-primary">
                  HYBRID / LAB-BASED
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Integrity */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>ARCHITECTURAL INTEGRITY</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              ENGINEERING IOT SOLUTIONS FOR SCALE
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Generic IoT tutorials end at blinking LEDs. Our program starts at production-ready
              hardware, secure communication protocols, and industrial-grade edge computing.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {FEATURES.map((f) => {
                const Icon = f.icon
                return (
                  <article key={f.title} className="rounded-lg border border-border bg-card p-4">
                    <Icon className="size-5 text-primary" />
                    <h3 className="mt-3 text-xs font-bold text-foreground uppercase">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/hero-circuit-macro.png"
              alt="IoT Gateway hardware"
              width={900}
              height={650}
              className="h-96 w-full object-cover"
            />
            <div className="absolute top-4 right-4 rounded bg-navy p-3 text-center text-white shadow-lg">
              <p className="font-display text-xl font-extrabold text-primary">98%</p>
              <p className="text-[0.6rem] font-bold tracking-wider uppercase">PLACEMENT RATE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Focused */}
      <section className="bg-muted/40 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/hands-on-wiring.png"
              alt="Hardware lab methodology"
              width={900}
              height={650}
              className="h-80 w-full object-cover sm:h-96"
            />
          </div>

          <div>
            <Eyebrow>HARDWARE FOCUSED</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Laboratory-Driven Methodology
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Theory is meaningless without practical application. Our students spend 70% of their
              time in our IoT lab, working with real-world hardware used by leading automotive and
              industrial firms.
            </p>

            <ul className="mt-6 space-y-3">
              {LAB_CHECKMARKS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs font-bold text-foreground">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-foreground uppercase hover:text-primary"
            >
              EXPLORE LAB FACILITIES <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Roadmap */}
      <section className="bg-background py-20">
        <div className="container-page">
          <div className="text-center">
            <Eyebrow>TECHNICAL ROADMAP</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              STRUCTURED FOR MASTERY
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Our curriculum is designed to take professionals from foundational concepts to advanced
              industrial deployment strategies.
            </p>

            {/* Phase Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="rounded-md bg-navy px-5 py-2.5 text-xs font-bold tracking-wider text-navy-foreground uppercase"
              >
                PHASE 01: CORE SYSTEMS
              </button>
              <button
                type="button"
                className="rounded-md border border-border bg-card px-5 py-2.5 text-xs font-bold tracking-wider text-muted-foreground uppercase hover:bg-muted"
              >
                PHASE 02: INTELLIGENCE
              </button>
              <button
                type="button"
                className="rounded-md border border-border bg-card px-5 py-2.5 text-xs font-bold tracking-wider text-muted-foreground uppercase hover:bg-muted"
              >
                PHASE 03: DEPLOYMENT
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-bold text-primary uppercase">MOD_01</span>
              <h3 className="mt-2 text-base font-bold text-foreground">IOT SYSTEMS ARCHITECTURE</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Understanding end-to-end IoT ecosystems, from sensor nodes to cloud visualization and
                decision-making logic.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] font-bold text-muted-foreground uppercase">
                <span className="rounded bg-muted px-2 py-1">OSI Model</span>
                <span className="rounded bg-muted px-2 py-1">MQTT</span>
                <span className="rounded bg-muted px-2 py-1">CoAP</span>
                <span className="rounded bg-muted px-2 py-1">Data Flow</span>
              </div>
            </article>

            <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-bold text-primary uppercase">MOD_02</span>
              <h3 className="mt-2 text-base font-bold text-foreground">EDGE NODE DEVELOPMENT</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Programming microcontrollers and microprocessors for efficient data acquisition and power
                management.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] font-bold text-muted-foreground uppercase">
                <span className="rounded bg-muted px-2 py-1">RTOS</span>
                <span className="rounded bg-muted px-2 py-1">Low Power</span>
                <span className="rounded bg-muted px-2 py-1">C/C++</span>
                <span className="rounded bg-muted px-2 py-1">Sensors</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Navy Stats Banner */}
      <section className="bg-navy py-12 text-navy-foreground">
        <div className="container-page grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold text-white">{s.value}</p>
              <p className="mt-1 text-xs font-bold tracking-widest text-navy-muted uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Specifics & Common Queries */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-foreground">
              PROGRAM SPECIFICS
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Designed for working professionals, this program balances rigorous technical depth
              with scheduling flexibility.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <Calendar className="size-5 text-primary" />
                <p className="mt-3 text-[0.65rem] font-bold text-muted-foreground uppercase">
                  COURSE DURATION
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">12 Weeks (Part-time)</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <Zap className="size-5 text-primary" />
                <p className="mt-3 text-[0.65rem] font-bold text-muted-foreground uppercase">
                  WEEKLY EFFORT
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">8-10 Hours</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <Wrench className="size-5 text-primary" />
                <p className="mt-3 text-[0.65rem] font-bold text-muted-foreground uppercase">
                  PRACTICAL CONTENT
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">70% Hands-on Labs</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <Award className="size-5 text-primary" />
                <p className="mt-3 text-[0.65rem] font-bold text-muted-foreground uppercase">
                  CERTIFICATION
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">Industry Recognized</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-bold tracking-wider uppercase text-foreground">
                TECHNICAL PREREQUISITES
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                {PREREQUISITES.map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-foreground">
              COMMON QUERIES
            </h2>
            <div className="mt-6 rounded-lg border border-border bg-card">
              <FaqAccordion items={FAQS} />
            </div>

            <div className="mt-6 rounded-xl bg-navy p-6 text-navy-foreground shadow-lg">
              <h3 className="font-display text-lg font-bold text-white uppercase">
                INQUIRE FOR CORPORATE BATCHES
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-navy-muted">
                We offer customized on-site training for engineering teams and infrastructure
                organizations.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-xs font-bold tracking-wider text-primary-foreground uppercase hover:bg-primary/90"
                >
                  <PhoneCall className="size-3.5" /> TALK TO A CONSULTANT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Bar */}
      <section className="border-y border-border bg-card py-10">
        <div className="container-page text-center">
          <p className="text-[0.65rem] font-bold tracking-widest text-muted-foreground uppercase">
            TRUSTED FOR TECHNICAL TRAINING BY
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-12 font-display text-lg font-extrabold tracking-wider text-muted-foreground/60 uppercase">
            <span>SEMICON</span>
            <span>NETGRID</span>
            <span>INFRASTAT</span>
            <span>INDUSTRIA</span>
          </div>
        </div>
      </section>

      {/* Bottom Orange Banner */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-extrabold tracking-tight uppercase sm:text-5xl">
            BUILD THE INFRASTRUCTURE OF THE FUTURE.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/90">
            Join the elite league of IoT engineers. Enrollment is limited to 20 participants per
            batch to ensure deep lab access.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-md bg-navy px-8 py-3.5 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90"
            >
              <GraduationCap className="size-4" /> RESERVE MY SEAT
            </button>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 px-8 py-3.5 text-xs font-bold tracking-wider text-primary-foreground uppercase transition-colors hover:bg-white/10"
            >
              CONTACT ADMISSIONS
            </Link>
          </div>
        </div>
      </section>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse="Advanced IoT Systems Certification"
      />
    </>
  )
}
