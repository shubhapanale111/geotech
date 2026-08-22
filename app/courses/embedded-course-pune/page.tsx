'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Cpu,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Wrench,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'
import { EnrollmentModal } from '@/components/enrollment-modal'

const MODULES = [
  {
    mod: 'Module 01',
    icon: Terminal,
    title: 'EMBEDDED C FUNDAMENTALS',
    bullets: [
      'Data Types & Operators',
      'Control Statements',
      'Functions & Storage Classes',
      'Pointers & Arrays',
      'Structures & Unions',
    ],
  },
  {
    mod: 'Module 02',
    icon: Cpu,
    title: 'MCU ARCHITECTURE & INTERFACING',
    bullets: [
      'ARM Cortex-M Series',
      'GPIO Programming',
      'Interrupt Handling',
      'Timers & PWM',
      'ADC/DAC Integration',
    ],
  },
  {
    mod: 'Module 03',
    icon: Network,
    title: 'COMMUNICATION PROTOCOLS',
    bullets: [
      'UART / RS232',
      'I2C Bus Protocol',
      'SPI Interface',
      'CAN Bus Basics',
      'USB Connectivity',
    ],
  },
  {
    mod: 'Module 04',
    icon: CodeIcon,
    title: 'RTOS & SYSTEM DESIGN',
    bullets: [
      'FreeRTOS Fundamentals',
      'Task Management',
      'Semaphores & Mutex',
      'Message Queues',
      'Memory Management',
    ],
  },
  {
    mod: 'Module 05',
    icon: Wrench,
    title: 'HARDWARE DEBUGGING',
    bullets: [
      'Oscilloscope Usage',
      'Logic Analyzers',
      'JTAG/SWD Debugging',
      'PCB Design Basics',
      'Soldering Techniques',
    ],
  },
  {
    mod: 'Module 06',
    icon: Trophy,
    title: 'INDUSTRY CAPSTONE',
    bullets: [
      'End-to-End System Design',
      'Project Documentation',
      'Code Optimization',
      'Testing & Verification',
      'Deployment Strategies',
    ],
  },
]

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

const FAQS = [
  {
    question: 'IS THERE A PLACEMENT GUARANTEE?',
    answer:
      'We offer 100% placement support with direct interview scheduling at over 50+ hiring partner companies in Pune and Bengaluru.',
  },
  {
    question: 'DO I NEED TO BRING MY OWN HARDWARE?',
    answer:
      'No. All development boards (STM32, ESP32, PIC), oscilloscopes, and debugging tools are provided in the lab.',
  },
  {
    question: 'WHAT IS THE BATCH SIZE?',
    answer:
      'To ensure personalized mentorship during lab hours, each cohort is strictly limited to 20 students.',
  },
  {
    question: 'ARE THERE WEEKEND BATCHES FOR WORKING PROFESSIONALS?',
    answer:
      'Yes, we offer weekend-only tracks with extended lab access on Saturdays and Sundays.',
  },
]

export default function EmbeddedCoursePunePage() {
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
            <Sparkles className="size-3.5" /> 🔥 Only 4 Seats Remaining for Oct 15 Batch
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            MASTER <span className="text-primary">EMBEDDED SYSTEMS</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-muted">
            Bridge the gap between hardware and software. Join an elite training program designed for
            industry-ready embedded engineers in Pune.
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
              href="#enquiry"
              className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/10"
            >
              Download Syllabus
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4 sm:max-w-2xl">
            <div>
              <p className="font-display text-2xl font-extrabold text-white">100%</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-navy-muted uppercase">
                HANDS-ON LAB
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-white">DIRECT</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-navy-muted uppercase">
                JOB ASSISTANCE
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-white">6 Months</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-navy-muted uppercase">
                COURSE DURATION
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-white">G-G Tech</p>
              <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-navy-muted uppercase">
                CERTIFIED BY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Excellence */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>PRACTICAL EXCELLENCE</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Why Choose Embedded Course Pune?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We don&apos;t just teach theory. Our program is built around the &quot;Galaxia Geotech&quot;
              philosophy of technical rigor, focused on creating engineers who can design reliable,
              mission-critical systems.
            </p>

            <div className="mt-8 space-y-4">
              <article className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded bg-muted text-primary">
                    <Wrench className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase">STATE-OF-THE-ART LABS</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Access our specialized laboratory equipped with high-end oscilloscopes, logic
                      analyzers, and industry-standard development boards.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded bg-muted text-primary">
                    <GraduationCap className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase">EXPERT MENTORSHIP</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Learn directly from senior firmware developers with decades of experience in
                      geotechnical and automotive sectors.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded bg-muted text-primary">
                    <BookOpen className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase">
                      PROJECT-BASED LEARNING
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Build a robust portfolio through real-world projects, from smart sensor
                      networks to automated control systems.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/electronics-lab.png"
              alt="Pune Lab facility"
              width={900}
              height={650}
              className="h-96 w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-navy p-4 text-center text-white">
              <p className="font-display text-2xl font-extrabold text-primary">500+</p>
              <p className="text-[0.65rem] font-bold tracking-widest uppercase">
                HOURS OF PRACTICAL LAB TRAINING
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>CURRICULUM BREAKDOWN</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
                Comprehensive Learning Modules
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our curriculum is meticulously structured to take you from C programming basics to
                advanced real-time operating system implementations.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-xs font-bold tracking-wider text-foreground uppercase shadow-sm hover:bg-muted"
            >
              <GraduationCap className="size-4 text-primary" /> Apply for Admission
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => {
              const Icon = m.icon
              return (
                <article
                  key={m.mod}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      {m.mod}
                    </span>
                    <Icon className="size-5 text-muted-foreground" />
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-foreground">{m.title}</h3>

                  <ul className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Depth */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/firmware-coding.png"
              alt="Firmware engineering workspace"
              width={900}
              height={650}
              className="h-80 w-full object-cover sm:h-96"
            />
            <div className="absolute top-4 right-4 rounded bg-navy px-3 py-1 text-xs font-bold text-white uppercase">
              C/C++ Excellence
            </div>
          </div>

          <div>
            <Eyebrow>TECHNICAL DEPTH</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Firmware Engineering Focus
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Embedded systems are only as good as the firmware that drives them. We emphasize
              high-quality coding standards (MISRA C), architectural design patterns, and rigorous
              testing methodologies used in aviation and medical technology.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-foreground uppercase">MISRA C Compliance</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Learn to write safe, portable, and reliable code for mission-critical systems.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-foreground uppercase">
                  Hardware-Software Co-Design
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Understand how to optimize firmware for specific microcontroller architectures.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-foreground uppercase">Low-Level Drivers</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Develop drivers from scratch for I2C, SPI, and UART peripherals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Journey Today & Form */}
      <section id="enquiry" className="bg-navy py-20 text-navy-foreground">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl">
              Start Your Journey Today
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-muted">
              Have questions about the curriculum, fees, or batch timings? Connect with our career
              counselor for a free technical assessment.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <MapPin className="mt-1 size-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">PUNE TRAINING HUB</p>
                  <p className="text-xs text-navy-muted">
                    Cyber City, Magarpatta Road, Hadapsar, Pune
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <Phone className="mt-1 size-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">DIRECT ADMISSIONS</p>
                  <p className="text-xs text-navy-muted">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <Mail className="mt-1 size-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">COURSE ENQUIRY</p>
                  <p className="text-xs text-navy-muted">pune.embedded@galaxiageotech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <Clock className="mt-1 size-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">NEXT BATCH</p>
                  <p className="text-xs text-primary font-bold">Starts October 15, 2024</p>
                </div>
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
                  Consultation Booked!
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  We have received your details. Our Pune academic lead will call you shortly to confirm your counselling session.
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
                  Course Enquiry Form
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
                        placeholder="Vivek Sharma"
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
                        placeholder="vivek@example.com"
                        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98000 00000"
                        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        Academic Background *
                      </label>
                      <select className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary">
                        <option>Select Degree</option>
                        <option>B.E. / B.Tech (ECE)</option>
                        <option>B.E. / B.Tech (CS/IT)</option>
                        <option>B.E. / B.Tech (Electrical)</option>
                        <option>Diploma / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-foreground">
                      Your Career Goals / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your interest in embedded systems..."
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy py-3 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        BOOK TECHNICAL CONSULTATION <Send className="size-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Clarifications / FAQ */}
      <section className="bg-background py-20">
        <div className="container-page max-w-4xl text-center">
          <Eyebrow>CLARIFICATIONS</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="mt-10 text-left rounded-lg border border-border bg-card">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-navy py-16 text-navy-foreground">
        <div className="container-page">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
            <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl">
              Ready to secure your future in Engineering?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-muted">
              Join the most comprehensive embedded systems course in Pune and gain the technical
              edge needed for high-stakes product development.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <GraduationCap className="size-4" /> Secure Your Seat &rarr;
              </button>
              <Link
                href="/contact"
                className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/10"
              >
                Visit Pune Lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse="Master Embedded Systems (Pune Lab)"
      />
    </>
  )
}
