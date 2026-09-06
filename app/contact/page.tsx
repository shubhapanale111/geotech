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
    title: 'PUNE ACADEMY & LAB',
    value: 'Cyber City, Magarpatta Road, Hadapsar',
    sub: 'Pune, Maharashtra 411028',
  },
  {
    icon: Phone,
    title: 'DIRECT ADMISSIONS LINE',
    value: '+91 98765 43210 / +1 (555) 012-3456',
    sub: 'Available Mon - Sat, 8:00 AM - 7:00 PM',
  },
  {
    icon: Mail,
    title: 'ADMISSIONS & GENERAL EMAIL',
    value: 'admissions@galaxiageotech.com',
    sub: 'Quick response within 2-4 hours',
  },
  {
    icon: Clock,
    title: 'LAB & COUNSELING HOURS',
    value: 'Monday \u2014 Saturday: 08:00 - 19:00',
    sub: 'Weekend Lab Access: 10:00 - 18:00',
  },
]

const ROADMAP_STEPS = [
  {
    step: '01',
    title: 'Submit Online Application',
    desc: 'Fill out your basic details, qualification, and preferred training program.',
  },
  {
    step: '02',
    title: 'Academic Counseling & Assessment',
    desc: 'Speak with our technical head for a 1-on-1 session to align your career goals.',
  },
  {
    step: '03',
    title: 'Seat Reservation & Onboarding',
    desc: 'Receive your admission offer, syllabus package, and lab access credentials.',
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
          alt="Hands-on Electronics Training Lab background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        <div className="container-page relative z-10 w-full text-center">
          <div className="mx-auto max-w-3xl">
            <Eyebrow tone="white">ADMISSIONS &amp; ENGINEERING HUB</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
              Get in Touch &amp; <span className="text-primary">Apply Today</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-muted">
              Connect with our admissions team to book your free demo class, visit our offline Pune
              hardware lab, or discuss course curricula and 100% placement assistance.
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
            How to Join Galaxia Geotech Academy
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
              Academic &amp; Corporate Center
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Galaxia Geotech operates specialized training labs in Pune and consultancy hubs
              across North America, offering world-class subsurface engineering and embedded
              electronics education.
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
                Accreditations &amp; Quality Certifications
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded bg-muted px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
                  ISO 9001:2015 LABS
                </span>
                <span className="rounded bg-muted px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
                  ASCE MEMBER
                </span>
                <span className="rounded bg-muted px-4 py-2 text-xs font-bold text-muted-foreground uppercase">
                  G-G TECH CERTIFIED
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
                <FileText className="size-4" /> Corporate / Geotech
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold uppercase text-foreground">
                    Application Submitted!
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Thank you! We have received your {inquiryType === 'student' ? 'admission application' : 'inquiry'}. Our team will contact you within 2-4 hours.
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
                        ? '🔥 October 15 Batch Enrollments Open: Reserve your seat today.'
                        : 'Technical proposals delivered within 24 hours.'}
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
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
                        placeholder="+91 98765 43210"
                        className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">
                        {inquiryType === 'student' ? 'PROGRAM INTEREST *' : 'SERVICE REQUIRED *'}
                      </label>
                      <select className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary">
                        {inquiryType === 'student' ? (
                          <>
                            <option>Master Embedded Systems (Pune Lab)</option>
                            <option>Advanced IoT Systems Certification</option>
                            <option>Automotive Embedded Systems (AUTOSAR)</option>
                            <option>Custom Workshop / Other</option>
                          </>
                        ) : (
                          <>
                            <option>Site Investigation &amp; Boring</option>
                            <option>Foundation Design &amp; Shoring</option>
                            <option>Soil &amp; Rock Lab Analysis</option>
                            <option>Peer Review / Instrumentation</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-foreground">
                      {inquiryType === 'student'
                        ? 'QUALIFICATION &amp; CAREER GOAL'
                        : 'PROJECT DETAILS &amp; LOCATION'}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={
                        inquiryType === 'student'
                          ? 'Mention your degree (B.E./B.Tech/Diploma) and what skills you want to learn...'
                          : 'Describe your site conditions, location, and specific engineering requirements...'
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
                        Submit {inquiryType === 'student' ? 'Admission Request' : 'Technical Inquiry'} <Send className="size-3.5" />
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
                Find Our Facility
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our laboratory and engineering hub is located in the heart of the industrial district.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-xs font-bold tracking-wider text-foreground uppercase shadow-sm hover:bg-muted"
            >
              <FileText className="size-4" /> Download Site Access PDF
            </Link>
          </div>

          <div className="mt-8 relative overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/aerial-map.png"
              alt="Facility aerial map location"
              width={1200}
              height={700}
              className="h-[450px] w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-navy px-6 py-4 text-center text-white shadow-2xl">
              <span className="font-display text-sm font-bold uppercase text-primary">
                Galaxia Geotech HQ &amp; Lab
              </span>
              <p className="text-[0.65rem] tracking-wider text-navy-muted uppercase">
                INDUSTRIAL ZONE HUB
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
