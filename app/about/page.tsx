import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BarChart2,
  CheckCircle2,
  Eye,
  Hammer,
  Lightbulb,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

const VALUES = [
  {
    icon: BarChart2,
    title: 'Precision',
    description: 'Meticulous attention to detail in every calculation and report.',
  },
  {
    icon: ShieldCheck,
    title: 'Stability',
    description: 'Designing for longevity and resilience against environmental shifts.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Leveraging the latest seismic and geological technologies.',
  },
  {
    icon: Hammer,
    title: 'Safety',
    description: 'An uncompromising approach to on-site and structural safety.',
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Comprehensive Investigation',
    description:
      'Utilizing advanced CPT and boring techniques to map sub-surface profiles with 99.9% accuracy.',
  },
  {
    step: '02',
    title: 'Laboratory Analysis',
    description:
      'Certified lab testing for soil classification, shear strength, and consolidation properties.',
  },
  {
    step: '03',
    title: 'Predictive Modeling',
    description:
      'Sophisticated finite element analysis to simulate foundation behavior under extreme loads.',
  },
  {
    step: '04',
    title: 'Strategic Consultancy',
    description:
      'Delivering actionable engineering recommendations that balance safety with project budget.',
  },
]

const EXPERTS = [
  {
    name: 'Sarah Jenkins, P.E.',
    role: 'CHIEF GEOTECHNICAL ENGINEER',
    image: '/images/team-sarah.png',
    bio: 'Specializing in seismic soil-structure interaction and high-rise foundation design with 15+ years experience.',
  },
  {
    name: 'David Chen, Ph.D.',
    role: 'SENIOR GEOTECHNICAL CONSULTANT',
    image: '/images/team-david.png',
    bio: 'Leading expert in slope stability and innovative soil reinforcement technologies for infrastructure.',
  },
  {
    name: 'Michael Roberts',
    role: 'DIRECTOR OF LABORATORY SERVICES',
    image: '/images/team-michael.png',
    bio: 'Oversees our ASTM-certified laboratory, ensuring the highest standards of data integrity and material testing.',
  },
]

const ACCREDITATIONS = [
  { icon: Award, label: 'ISO 9001:2015' },
  { icon: ShieldCheck, label: 'ASTM CERTIFIED LAB' },
  { icon: CheckCircle2, label: 'ASCE PROFESSIONAL' },
  { icon: CheckCircle2, label: 'LICENSED P.E. TEAM' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-navy-foreground md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
              Established Authority Since 1998
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
              Engineering the <span className="text-primary">Foundations</span> of Tomorrow.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-navy-muted">
              At Galaxia Geotech, we combine decades of field experience with cutting-edge
              laboratory analysis to provide geotechnical certainty for the world&apos;s most
              complex infrastructure projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Our Technical Specs
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/15"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <Image
              src="/images/hero-server-room.png"
              alt="Galaxia Geotech R&D Workspace"
              width={900}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Identity - Mission & Vision */}
      <section className="bg-background py-20">
        <div className="container-page">
          <Eyebrow>CORE IDENTITY</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
            Mission & Vision
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded bg-navy text-navy-foreground">
                    <Target className="size-5" />
                  </span>
                  <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To deliver unparalleled geotechnical precision through rigorous site investigation
                  and innovative engineering design, ensuring every structure stands on an
                  unwavering foundation.
                </p>
              </article>

              <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded bg-navy text-navy-foreground">
                    <Eye className="size-5" />
                  </span>
                  <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To be the global benchmark for geotechnical reliability, pioneering sustainable
                  sub-surface engineering solutions for a safer and more resilient built environment.
                </p>
              </article>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-border shadow-md">
                <Image
                  src="/images/lab-cleanroom.png"
                  alt="Laboratory and testing facility"
                  width={800}
                  height={600}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="mt-4 rounded-lg bg-primary p-6 text-primary-foreground shadow-lg sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:max-w-xs">
                <p className="font-display text-3xl font-extrabold tracking-tight">250+</p>
                <p className="mt-1 text-xs font-bold tracking-wider uppercase">
                  SUCCESSFUL INFRASTRUCTURE PROJECTS DELIVERED NATIONWIDE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Principles */}
      <section className="bg-muted/50 py-20">
        <div className="container-page text-center">
          <Eyebrow>FOUNDATIONAL PRINCIPLES</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
            The Values That Guide Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Our commitment to excellence is reflected in every soil sample we test and every
            foundation we design.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 text-left shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded bg-muted text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>PROCESS & METHODOLOGY</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Our Technical Excellence Model
            </h2>

            <div className="mt-8 space-y-6">
              {STEPS.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="font-display text-lg font-bold text-primary">{s.step}</span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/soil-lab.png"
                alt="Microscope soil analysis"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/blueprint-desk.png"
                alt="Engineering blueprints"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/surveyor-field.png"
                alt="Field surveyor"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/bridge-construction.png"
                alt="Site drilling equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Leadership */}
      <section className="bg-navy py-20 text-navy-foreground">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="white">TECHNICAL LEADERSHIP</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl">
                The Experts Behind Our Stability
              </h2>
              <p className="mt-3 max-w-xl text-sm text-navy-muted">
                Our team comprises licensed professional engineers, geologists, and lab technicians
                dedicated to technical rigor and project success.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Join Our Team
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {EXPERTS.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto relative size-28 overflow-hidden rounded-full border-2 border-primary">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{person.name}</h3>
                <p className="mt-1 text-xs font-bold tracking-wider text-primary uppercase">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Bar */}
      <section className="border-y border-border bg-card py-6">
        <div className="container-page flex flex-wrap items-center justify-around gap-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
          {ACCREDITATIONS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-2.5">
                <Icon className="size-4 text-primary" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="bg-background py-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-xl border border-navy/20 bg-navy p-8 text-navy-foreground md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl">
                  Ready to secure your project&apos;s foundation?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-muted">
                  Consult with our geotechnical specialists today and get a comprehensive
                  evaluation for your upcoming site development.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Request Consultation <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
