import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Drill,
  FileCheck,
  Layers,
  MapPin,
  Microscope,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { CheckItem, Eyebrow } from '@/components/primitives'

const FEATURED_SERVICES = [
  {
    image: '/images/soil-lab.png',
    tag: 'Laboratory & Field',
    icon: Microscope,
    title: 'Advanced Soil Analysis',
    description:
      'Comprehensive laboratory testing and field analysis to determine the mechanical and physical properties of soil. Essential for determining load-bearing capacity and ground stability.',
    features: [
      'Atterberg Limits Testing',
      'Triaxial Shear Strength',
      'Hydraulic Conductivity',
      'Compaction Testing',
    ],
  },
  {
    image: '/images/blueprint-desk.png',
    tag: 'Structural Geotech',
    icon: Layers,
    title: 'Foundation Design & Engineering',
    description:
      'Precision engineering for shallow and deep foundation systems. We provide optimized designs that ensure structural integrity while minimizing material waste and construction costs.',
    features: [
      'Pile Foundation Design',
      'Raft & Spread Footings',
      'Settlement Analysis',
      'Retaining Wall Systems',
    ],
  },
  {
    image: '/images/surveyor-field.png',
    tag: 'Field Operations',
    icon: MapPin,
    title: 'Site Investigation & Surveying',
    description:
      'Systematic exploration of site conditions using state-of-the-art drilling and geophysical techniques. We mitigate risk by providing clear visibility into subsurface conditions.',
    features: [
      'Borehole Drilling',
      'SPT & CPT Testing',
      'Geophysical Surveys',
      'Rock Core Sampling',
    ],
  },
]

const SPECIALIZED_SERVICES = [
  {
    icon: Activity,
    title: 'Slope Stability Analysis',
    description:
      'Numerical modeling and field assessment to prevent landslides and ensure the safety of embankments and excavations.',
  },
  {
    icon: Wrench,
    title: 'Ground Improvement',
    description:
      'Techniques including soil stabilization, grouting, and stone columns to enhance poor ground conditions for construction.',
  },
  {
    icon: ShieldCheck,
    title: 'Environmental Geotechnics',
    description:
      'Assessment of contaminated land and design of remediation strategies for sustainable urban development.',
  },
  {
    icon: Clock,
    title: 'Dewatering Solutions',
    description:
      'Design and implementation of groundwater control systems for deep excavations and underground structures.',
  },
  {
    icon: Drill,
    title: 'Pavement Engineering',
    description:
      'Subgrade evaluation and structural design for highways, airports, and heavy industrial pavements.',
  },
  {
    icon: FileCheck,
    title: 'Technical Audits',
    description:
      'Independent review and verification of geotechnical designs and construction quality control measures.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16 text-navy-foreground md:py-24">
        <div className="container-page text-center">
          <Eyebrow tone="white">PROFESSIONAL ENGINEERING SERVICES</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            Expert Geotechnical Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-navy-muted">
            Galaxia Geotech delivers high-precision geotechnical consultancy, from initial site
            investigation to final foundation design. We specialize in complex infrastructure
            projects requiring absolute stability and architectural rigor.
          </p>
        </div>
      </section>

      {/* Featured Detailed Service Cards */}
      <section className="bg-background py-20">
        <div className="container-page space-y-20">
          {FEATURED_SERVICES.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={service.title}
                className="grid gap-12 lg:grid-cols-2 lg:items-center"
              >
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="relative overflow-hidden rounded-xl border border-border shadow-md">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={900}
                      height={650}
                      className="h-80 w-full object-cover sm:h-[400px]"
                    />
                    <span className="absolute top-4 left-4 rounded bg-navy px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow">
                      {service.tag}
                    </span>
                  </div>
                </div>

                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <span className="flex size-10 items-center justify-center rounded bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <CheckCircle2 className="size-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="rounded-md bg-navy px-6 py-3 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90"
                    >
                      Inquire for Project
                    </Link>
                    <Link
                      href="/services/automotive-embedded"
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-xs font-bold tracking-wider text-foreground uppercase transition-colors hover:bg-muted"
                    >
                      View Technical Specs <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Specialized Expertise */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="text-center">
            <Eyebrow>SPECIALIZED EXPERTISE</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Comprehensive Technical Support
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Beyond core geotechnical investigations, we provide a full suite of specialized
              consultancy services to support complex civil engineering challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SPECIALIZED_SERVICES.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex size-10 items-center justify-center rounded bg-navy text-navy-foreground">
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

      {/* The Foundation of Your Project's Success */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              The Foundation of Your Project&apos;s Success
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              At Galaxia Geotech, we understand that every infrastructure project is only as stable
              as the ground it stands on. Our methodology combines decades of field engineering
              experience with cutting-edge analytical tools.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={3} />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">ISO 9001 Certified Labs</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Rigorous quality control and standardized testing protocols.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={3} />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Risk Mitigation Experts</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Identifying subsurface hazards before they become costly liabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={3} />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Rapid Mobilization</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Responsive field teams capable of deploying to remote sites quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-muted p-8 text-center">
              <p className="font-display text-4xl font-extrabold text-foreground">15+</p>
              <p className="mt-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                YEARS EXPERIENCE
              </p>
            </div>

            <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground shadow-md">
              <p className="font-display text-4xl font-extrabold">98%</p>
              <p className="mt-2 text-xs font-bold tracking-wider uppercase">CLIENT RETENTION</p>
            </div>

            <div className="rounded-lg bg-navy p-8 text-center text-navy-foreground shadow-md">
              <p className="font-display text-4xl font-extrabold">500</p>
              <p className="mt-2 text-xs font-bold tracking-wider text-navy-muted uppercase">
                PROJECTS COMPLETED
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-8 text-center">
              <p className="font-display text-4xl font-extrabold text-foreground">24h</p>
              <p className="mt-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                EMERGENCY SUPPORT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navy CTA Section */}
      <section className="bg-navy py-16 text-navy-foreground">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl">
              Ready to Discuss Your Next Infrastructure Project?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-muted">
              Our team of senior geotechnical consultants is available for preliminary site
              assessments and project reviews. Partner with us for precision-engineered
              foundations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/10"
              >
                Contact Our Office
              </Link>
            </div>
          </div>

          <div className="w-full rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:w-80">
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-primary" />
                <div>
                  <p className="text-xs text-navy-muted uppercase">RESPONSE TIME</p>
                  <p className="font-bold text-white">Under 24 Hours</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                <ShieldCheck className="size-5 text-primary" />
                <div>
                  <p className="text-xs text-navy-muted uppercase">QUOTE ACCURACY</p>
                  <p className="font-bold text-white">99.9% Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
