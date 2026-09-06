'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle2,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Info,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: 'PUNE TRAINING ACADEMY',
    value: 'Shreenath Plaza, Off No. 87, C-Wing, 5th Floor',
    sub: 'Dyaneshwar Paduka Chowk, FC Road, Pune - 411004',
  },
  {
    icon: Phone,
    title: 'STUDENT HELPLINE & WHATSAPP',
    value: '752-2929-752',
    sub: 'Direct counseling: Mon - Sat, 8:00 AM - 8:00 PM',
  },
  {
    icon: Mail,
    title: 'ACMISSIONS & INQUIRY EMAIL',
    value: 'galaxiageotech@gmail.com',
    sub: 'Official replies within 2-4 hours',
  },
  {
    icon: Clock,
    title: 'OFFLINE CLASS & LAB HOURS',
    value: 'Monday \u2014 Saturday: 08:00 AM - 07:30 PM',
    sub: 'Sunday Batches & Doubt Clearing: 09:00 AM - 05:00 PM',
  },
]

const ROADMAP_STEPS = [
  {
    step: '01',
    title: 'Submit Inquiry / Registration',
    desc: 'Fill out your basic details, qualification, and preferred Python with GIS batch mode.',
  },
  {
    step: '02',
    title: 'Free Counseling & Demo Class',
    desc: 'Meet our senior geospatial trainers for a 1-on-1 counseling session and preview live GIS workflows.',
  },
  {
    step: '03',
    title: 'Batch Enrollment & Practical Training',
    desc: 'Receive your syllabus package, datasets, and begin hands-on offline project training.',
  },
]

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<'student' | 'consultancy'>('student')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-navy py-16 text-navy-foreground md:min-h-[500px] md:py-24">
        <Image
          src="/images/hands-on-wiring.png"
          alt="Galaxia Geotech GIS Training Lab background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        <div className="container-page relative z-10 w-full text-center">
          <div className="mx-auto max-w-3xl">
            <Eyebrow tone="white">ADMISSIONS &amp; TRAINING HUB \u2014 PUNE</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
              Get in Touch &amp; <span className="text-primary">Join Us</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-muted">
              Connect with our admissions team to book your free demo class, visit our offline Pune
              computer lab on FC Road, or discuss the Python with GIS syllabus.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process Roadmap */}
      <section className="border-b border-border bg-muted/40 py-12">
        <div className="container-page">
          <p className="text-center text-xs font-bold tracking-widest text-primary uppercase">
            3-STEP ADMISSION PROCESS
          </p>
          <h2 className="mt-1 text-center font-display text-2xl font-extrabold uppercase text-foreground">
            How to Join Galaxia Geotech
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ROADMAP_STEPS.map((s) => (
              <div
                key={s.step}
                className="relative rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <span className="font-display text-2xl font-extrabold text-primary">{s.step}</span>
                <h3 className="mt-2 text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column - Contact Details */}
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Training Center &amp; Admissions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Galaxia Geotech operates a dedicated offline training facility in Pune on Fergusson
              College Road, equipped with high-performance workstations for GIS software, Python
              programming, and large spatial dataset processing.
            </p>

            <div className="mt-8 space-y-4">
              {CONTACT_CARDS.map((card) => {
                const Icon = card.icon
                return (
                  <article
                    key={card.title}
                    className="rounded-lg border border-border bg-card p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded bg-muted text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-[0.65rem] font-bold tracking-widest text-muted-foreground uppercase">
                          {card.title}
                        </p>
                        <p className="text-sm font-bold text-foreground">{card.value}</p>
                        <p className="text-xs text-muted-foreground">{card.sub}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Accreditation Badges */}
            <div className="mt-10 border-t border-border pt-6">
              <p className="text-[0.65rem] font-bold tracking-widest text-muted-foreground uppercase">
                Industry Oriented &amp; Practical Training
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded bg-muted px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
                  100% OFFLINE PRACTICALS
                </span>
                <span className="rounded bg-muted px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
                  REAL GIS DATASETS
                </span>
                <span className="rounded bg-muted px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
                  CAREER &amp; RESUME SUPPORT
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            {/* Header Tabs */}
            <div className="grid grid-cols-2 bg-navy p-1">
              <button
                type="button"
                onClick={() => setInquiryType('student')}
                className={`flex items-center justify-center gap-2 py-3.5 text-xs font-bold tracking-wider uppercase transition-colors ${
                  inquiryType === 'student'
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-navy-muted hover:text-white'
                }`}
              >
                <GraduationCap className="size-4" /> Student Admission
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('consultancy')}
                className={`flex items-center justify-center gap-2 py-3.5 text-xs font-bold tracking-wider uppercase transition-colors ${
                  inquiryType === 'consultancy'
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-navy-muted hover:text-white'
                }`}
              >
                <FileText className="size-4" /> Corporate / College
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold uppercase text-foreground">
                    Inquiry Submitted!
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Thank you! We have received your {inquiryType === 'student' ? 'admission inquiry' : 'partnership request'}. Our counselor will call you on{' '}
                    <strong>752-2929-752</strong> within 2-4 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-md bg-navy px-6 py-2.5 text-xs font-bold uppercase text-navy-foreground"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="flex items-center gap-2 rounded-md bg-primary/10 p-3 text-xs text-primary font-medium">
                    <Sparkles className="size-4 shrink-0" />
                    <span>
                      {inquiryType === 'student'
                        ? '🔥 Upcoming Batch Enrollments Open: Book your seat or free demo class today.'
                        : 'Corporate GIS training and custom college workshop solutions.'}
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amit Patil"
                        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="amit@example.com"
                        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        PHONE / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 75229 29752"
                        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        {inquiryType === 'student' ? 'PROGRAM INTEREST *' : 'REQUIREMENT TYPE *'}
                      </label>
                      <select className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary">
                        {inquiryType === 'student' ? (
                          <>
                            <option>Master Python with GIS (Comprehensive)</option>
                            <option>GIS Fundamentals &amp; QGIS Spatial Analysis</option>
                            <option>Python for Geospatial Automation (GeoPandas)</option>
                            <option>DEM Hydrology &amp; Terrain Modeling</option>
                            <option>Custom Student Project Support</option>
                          </>
                        ) : (
                          <>
                            <option>Corporate GIS Team Upskilling</option>
                            <option>College / University Workshop</option>
                            <option>Custom Geospatial Data Analysis</option>
                            <option>Other Institutional Requirement</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-foreground">
                      {inquiryType === 'student'
                        ? 'QUALIFICATION &amp; CAREER GOAL'
                        : 'TRAINING REQUIREMENTS &amp; TIMELINE'}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={
                        inquiryType === 'student'
                          ? 'Mention your background (Civil, Geography, CS, Environmental, etc.) and what you want to achieve...'
                          : 'Describe your team size, preferred batch schedule, and specific tool requirements...'
                      }
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3.5 text-xs font-bold tracking-wider text-primary-foreground uppercase transition-colors hover:bg-primary/90 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit {inquiryType === 'student' ? 'Admission Inquiry' : 'Corporate Request'} <Send className="size-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Find Our Facility */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-foreground">
                Visit Our Training Center
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Centrally located on Fergusson College (FC) Road in Pune, easily accessible by bus and metro.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Shreenath+Plaza+FC+Road+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-xs font-bold tracking-wider text-foreground uppercase shadow-sm hover:bg-muted"
            >
              <MapPin className="size-4 text-primary" /> Open in Google Maps
            </a>
          </div>

          <div className="mt-8 relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/aerial-map.png"
              alt="Galaxia Geotech Pune FC Road Location"
              width={1200}
              height={700}
              className="h-[450px] w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-navy px-6 py-4 text-center text-white shadow-2xl">
              <span className="font-display text-sm font-bold uppercase text-primary">
                Galaxia Geotech Training Institute
              </span>
              <p className="text-[0.65rem] tracking-wider text-navy-muted uppercase">
                SHREENATH PLAZA, C-WING, 5TH FLOOR, FC ROAD, PUNE
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

