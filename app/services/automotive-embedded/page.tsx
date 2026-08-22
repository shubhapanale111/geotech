'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code,
  Cpu,
  GraduationCap,
  Loader2,
  Network,
  Settings,
  ShieldAlert,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'
import { EnrollmentModal } from '@/components/enrollment-modal'

const FEATURES = [
  {
    icon: Cpu,
    title: 'Industry-Standard Hardware',
    description:
      'Work with real Automotive grade MCUs and development boards used by Tier-1 suppliers.',
  },
  {
    icon: Users,
    title: 'Expert Practitioners',
    description:
      'Learn from senior embedded engineers with decades of collective experience in EV and ICE platforms.',
  },
  {
    icon: Zap,
    title: 'Career Acceleration',
    description:
      'Direct placement assistance and interview preparation for top automotive R&D centers.',
  },
  {
    icon: Award,
    title: 'Accredited Certification',
    description:
      'Receive a globally recognized certification validated by Galaxia Geotech\u2019s technical board.',
  },
]

const MODULES = [
  {
    mod: 'MOD-01',
    icon: Settings,
    title: 'Automotive ECU Architecture',
    description:
      'In-depth study of Electronic Control Units, including hardware abstractions and real-time operating system (RTOS) integration.',
    bullets: [
      'Microcontroller Architecture',
      'Memory Mapping',
      'Input/Output Processing',
      'Interrupt Handling',
    ],
  },
  {
    mod: 'MOD-02',
    icon: Network,
    title: 'Communication Protocols',
    description:
      'Master the backbone of vehicle networking. Focus on deterministic communication and diagnostic services.',
    bullets: [
      'CAN & CAN-FD Bus',
      'LIN Protocol',
      'FlexRay Basics',
      'Automotive Ethernet',
    ],
  },
  {
    mod: 'MOD-03',
    icon: Cpu,
    title: 'AUTOSAR Standards',
    description:
      'Learn the industry-standard software architecture. Understanding the layered approach to automotive software development.',
    bullets: [
      'Application Layer',
      'Runtime Environment (RTE)',
      'Microcontroller Abstraction',
      'Service Layer',
    ],
  },
  {
    mod: 'MOD-04',
    icon: ShieldAlert,
    title: 'Functional Safety (ISO 26262)',
    description:
      'Crucial safety standards for automotive systems. Understanding ASIL levels and risk mitigation in software.',
    bullets: [
      'Hazard Analysis',
      'Safety Goals',
      'Redundancy Systems',
      'Software Unit Testing',
    ],
  },
  {
    mod: 'MOD-05',
    icon: Code,
    title: 'Embedded C & Optimization',
    description:
      'Professional grade programming for resource-constrained automotive environments.',
    bullets: [
      'MISRA C Guidelines',
      'Static Analysis Tools',
      'Pointer Safety',
      'Low-level Drivers',
    ],
  },
  {
    mod: 'MOD-06',
    icon: Terminal,
    title: 'Diagnostics & Testing',
    description:
      'End-to-end verification and vehicle communication diagnostics using standard industry tools.',
    bullets: [
      'UDS (ISO 14229)',
      'OBD-II Standards',
      'CAPL Scripting',
      'Hardware-in-the-Loop (HIL)',
    ],
  },
]

const HANDS_ON = [
  'HARDWARE-IN-THE-LOOP (HIL) TESTING SIMULATION',
  'AUTOSAR CONFIGURATION USING MODERN TOOLCHAINS',
  'LOW-LEVEL DRIVER DEVELOPMENT FOR ARM CORTEX-M',
  'FUNCTIONAL SAFETY ANALYSIS OF REAL-WORLD USE CASES',
]

const FAQS = [
  {
    question: 'WHO IS ELIGIBLE FOR THIS COURSE?',
    answer:
      'Degree or diploma holders in Electronics, Computer Science, Automotive, or Electrical engineering with basic C programming skills.',
  },
  {
    question: 'WILL I LEARN SOFTWARE TOOLS LIKE VECTOR CANOE OR CANALYZER?',
    answer:
      'Yes! Hands-on labs involve Vector toolchains, CAN loggers, oscilloscopes, and logic analyzers for diagnostic simulations.',
  },
  {
    question: 'WHAT ARE THE CAREER PROSPECTS AFTER COMPLETION?',
    answer:
      'Graduates qualify for roles like Automotive Software Engineer, ECU Firmware Developer, CAN Specialist, and AUTOSAR Integrator.',
  },
  {
    question: 'DOES THE COURSE COVER ELECTRIC VEHICLE (EV) SPECIFIC EMBEDDED?',
    answer:
      'Yes, module examples cover BMS (Battery Management Systems), motor controllers, and EV powertrain protocols.',
  },
]

export default function AutomotiveEmbeddedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-navy-foreground md:py-24">
        <div className="container-page">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase backdrop-blur-sm">
            <Sparkles className="size-3.5" /> 🔥 Automotive R&amp;D Specialization Batch
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            AUTOMOTIVE <span className="text-primary">EMBEDDED SYSTEMS</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-muted">
            Engineer the future of mobility. Master ECU architecture, automotive protocols, and
            AUTOSAR standards through rigorous, industry-aligned technical training.
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
              href="#syllabus"
              className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/10"
            >
              Curriculum Overview
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center sm:max-w-xl">
            <div>
              <p className="font-display text-3xl font-extrabold text-white">240h</p>
              <p className="mt-1 text-[0.7rem] font-bold tracking-widest text-navy-muted uppercase">
                CORE TRAINING
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-white">12+</p>
              <p className="mt-1 text-[0.7rem] font-bold tracking-widest text-navy-muted uppercase">
                INDUSTRY PROJECTS
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-white">95%</p>
              <p className="mt-1 text-[0.7rem] font-bold tracking-widest text-navy-muted uppercase">
                PLACEMENT RATE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Edge */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>ENGINEERING EDGE</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              The Foundation for Next-Gen Automotive R&amp;D
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Automotive systems are evolving rapidly toward software-defined vehicles. Our
              curriculum is designed to bridge the gap between academic theory and the high-stakes
              demands of global automotive manufacturers.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {FEATURES.map((f) => {
                const Icon = f.icon
                return (
                  <article key={f.title} className="rounded-lg border border-border bg-card p-4">
                    <Icon className="size-5 text-primary" />
                    <h3 className="mt-3 text-sm font-bold text-foreground">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </article>
                )
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-8 inline-flex rounded-md bg-navy px-6 py-3 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90"
            >
              Learn About Our Labs
            </button>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/hero-automotive-pcb.png"
              alt="Automotive ECU testing"
              width={900}
              height={650}
              className="h-96 w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-navy/90 p-4 text-xs text-white backdrop-blur-md">
              <span className="font-bold text-primary uppercase">Technical Insight:</span> Mastering
              CAN Bus Arbitration and FlexRay Scheduling paradigms.
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure - Comprehensive Syllabus */}
      <section id="syllabus" className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="text-center">
            <Eyebrow>COURSE STRUCTURE</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Comprehensive Syllabus
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Our modular approach ensures a systematic progression from fundamental hardware
              concepts to complex software integration and safety standards.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => {
              const Icon = m.icon
              return (
                <article
                  key={m.mod}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded bg-muted text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      {m.mod}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="size-1 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex rounded-md border border-border bg-card px-6 py-3 text-xs font-bold tracking-wider text-foreground uppercase shadow-sm transition-colors hover:bg-muted"
            >
              Download Full Technical Syllabus (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Hands-On Methodology */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/hands-on-wiring.png"
              alt="Hands-on lab work"
              width={900}
              height={650}
              className="h-96 w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-navy p-4 text-xs text-white">
              <p className="font-bold text-primary uppercase">ISO-Accredited Labs</p>
              <p className="mt-1 text-navy-muted">
                Our facility mirrors professional R&amp;D environments with access to Vector
                CANalyzer, oscilloscopes, and logic analyzers.
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>HANDS-ON METHODOLOGY</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Applied Engineering Focus
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Theory alone is insufficient for automotive embedded roles. We focus on Project-Based
              Learning where students build functional ECU prototypes and troubleshoot real network
              traffic.
            </p>

            <ul className="mt-6 space-y-3">
              {HANDS_ON.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs font-bold tracking-wide uppercase text-foreground">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-foreground uppercase hover:text-primary"
            >
              Explore Our Lab Facilities <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Essential Details & FAQ */}
      <section className="bg-muted/40 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>COURSE INFO</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground">
              ESSENTIAL DETAILS
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Common technical questions regarding prerequisites and industry standards covered in
              the program.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-bold text-foreground uppercase">NEED A CAREER ROADMAP?</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Our counselors provide a detailed session to align your background with automotive
                opportunities.
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-4 inline-flex rounded-md bg-navy px-5 py-2.5 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90"
              >
                Schedule a Call
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* Technical Enquiry Form Section */}
      <section id="enroll" className="bg-navy py-20 text-navy-foreground">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="white">TECHNICAL ENQUIRY</Eyebrow>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl">
              Ready to Engineer the <span className="text-primary">Future of Mobility?</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-navy-muted">
              Join the elite ranks of automotive embedded professionals. Request a consultation
              with our technical head to discuss enrollment, scholarships, and industry
              partnerships.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs font-bold text-white uppercase">NEXT BATCH</p>
                <p className="mt-1 text-sm text-primary">October 15, 2024</p>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">AVAILABLE SEATS</p>
                <p className="mt-1 text-sm text-primary">Last 5 Slots</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-card p-8 text-foreground shadow-2xl">
            {formSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold uppercase text-foreground">
                  Enrollment Requested!
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Thank you! Our admissions coordinator will contact you shortly with batch onboarding details.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 rounded-md bg-navy px-6 py-2 text-xs font-bold uppercase text-navy-foreground"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-foreground uppercase">
                  Enrollment Request
                </h3>
                <form className="mt-6 space-y-4" onSubmit={handleInlineSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-foreground">
                      Technical Background
                    </label>
                    <input
                      type="text"
                      placeholder="B.E. / B.Tech (ECE/EEE/CS)"
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-foreground">
                      Message / Area of Interest
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your career goals..."
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-primary py-3 text-xs font-bold tracking-wider text-primary-foreground uppercase transition-colors hover:bg-primary/90 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="size-4 animate-spin" /> Processing...
                      </span>
                    ) : (
                      'INITIALIZE MY ENROLLMENT'
                    )}
                  </button>
                  <p className="text-center text-[0.7rem] text-muted-foreground">
                    Protected by industrial data security standards. Average response time: 4 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse="Automotive Embedded Systems (AUTOSAR)"
      />
    </>
  )
}
