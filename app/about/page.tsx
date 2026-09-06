import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BarChart2,
  CheckCircle2,
  Cpu,
  Eye,
  GraduationCap,
  Hammer,
  Laptop,
  Lightbulb,
  Radio,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

const VALUES = [
  {
    icon: Cpu,
    title: 'Practical Lab Rigor',
    description: '500+ hours of unrestricted lab access with real oscilloscopes, logic analyzers, and STM32 boards.',
  },
  {
    icon: ShieldCheck,
    title: 'Industry-Standard Toolchains',
    description: 'Master Vector CANalyzer, FreeRTOS, STM32CubeIDE, Keil, and Linux device drivers.',
  },
  {
    icon: Lightbulb,
    title: 'Mentorship by Industry Experts',
    description: 'Taught directly by working senior firmware developers and automotive ECU architects.',
  },
  {
    icon: GraduationCap,
    title: '100% Placement Commitment',
    description: 'Dedicated 1-on-1 resume optimization, mock technical interviews, and direct hiring drives.',
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Core Electronics & Bare-Metal C',
    description:
      'Master memory layout, pointers, data structures, register configurations, and peripheral drivers on real microcontrollers.',
  },
  {
    step: '02',
    title: 'Microcontroller Architecture & Protocols',
    description:
      'In-depth hands-on interfacing with ARM Cortex-M4, STM32, UART, SPI, I2C, and CAN communication buses.',
  },
  {
    step: '03',
    title: 'RTOS & Automotive AUTOSAR',
    description:
      'Design deterministic real-time systems using FreeRTOS kernel design, task scheduling, and AUTOSAR layered stacks.',
  },
  {
    step: '04',
    title: 'Capstone Prototyping & Placement Drives',
    description:
      'Build end-to-end hardware prototypes followed by rigorous mock interview sessions and direct campus hiring drives.',
  },
]

const EXPERTS = [
  {
    name: 'Sarah Deshmukh',
    role: 'LEAD EMBEDDED ARCHITECT',
    image: '/images/team-sarah.png',
    bio: '15+ years of R&D experience in ARM Cortex firmware, FreeRTOS kernel design, and Linux device driver architectures.',
  },
  {
    name: 'David Kulkarni',
    role: 'SENIOR AUTOMOTIVE AUTOSAR CONSULTANT',
    image: '/images/team-david.png',
    bio: 'Former Tier-1 ECU development specialist with deep expertise in CAN-FD, CAPL scripting, and ISO 26262 functional safety.',
  },
  {
    name: 'Michael Fernandes',
    role: 'DIRECTOR OF HARDWARE & IOT LABS',
    image: '/images/team-michael.png',
    bio: 'Oversees our ISO-certified offline electronics lab, ensuring every student masters advanced testbenches and real microcontrollers.',
  },
]

const ACCREDITATIONS = [
  { icon: Award, label: 'NASSCOM® ACCREDITED' },
  { icon: ShieldCheck, label: 'ISO 9001:2015 CERTIFIED LAB' },
  { icon: CheckCircle2, label: '500+ HIRING PARTNERS' },
  { icon: CheckCircle2, label: '100% PLACEMENT SUPPORT' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-navy py-16 text-navy-foreground md:min-h-[500px] md:py-24">
        <Image
          src="/images/hero-server-room.png"
          alt="Galaxia Geotech Offline Embedded Systems Lab background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        
        <div className="container-page relative z-10 w-full text-center">
          <Eyebrow tone="white">NASSCOM® ALIGNED &amp; ISO 9001:2015 ACADEMY</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            Empowering Engineers with <span className="text-primary">Hands-on Embedded</span> Mastery
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-navy-muted">
            At Galaxia Geotech Academy, we bridge the gap between college theory and real-world
            engineering through rigorous offline hardware labs, automotive toolchains, and
            dedicated placement support in Pune.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore All Courses
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/15"
            >
              Book Free Demo Class
            </Link>
          </div>
        </div>
      </section>

      {/* Core Identity - Mission & Vision */}
      <section className="bg-background py-20">
        <div className="container-page">
          <Eyebrow>CORE IDENTITY</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
            Mission &amp; Vision
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded bg-navy text-navy-foreground">
                    <Target className="size-5 text-primary" />
                  </span>
                  <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To provide industry-aligned, 100% practical hardware education in Embedded Systems,
                  Automotive AUTOSAR, and IoT, transforming fresh engineering graduates and working
                  professionals into confident, high-performing firmware developers.
                </p>
              </article>

              <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded bg-navy text-navy-foreground">
                    <Eye className="size-5 text-primary" />
                  </span>
                  <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To be India&apos;s premier offline embedded systems training academy and engineering R&amp;D
                  talent hub, recognized globally for producing world-class embedded hardware, firmware,
                  and automotive software architects.
                </p>
              </article>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-border shadow-md">
                <Image
                  src="/images/lab-cleanroom.png"
                  alt="Embedded Systems Practical Testing Lab"
                  width={800}
                  height={600}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="mt-4 rounded-lg bg-primary p-6 text-primary-foreground shadow-lg sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:max-w-xs">
                <p className="font-display text-3xl font-extrabold tracking-tight">4,850+</p>
                <p className="mt-1 text-xs font-bold tracking-wider uppercase">
                  GRADUATES PLACED IN TOP EMBEDDED &amp; AUTOMOTIVE ENTERPRISES
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
            Our commitment to excellence is reflected in every line of code our students write and
            every hardware circuit they test.
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
            <Eyebrow>PROCESS &amp; METHODOLOGY</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Our 4-Step Training to Placement Roadmap
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
                src="/images/electronics-lab.png"
                alt="Electronics and microcontrollers lab"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/firmware-coding.png"
                alt="Firmware coding and RTOS development"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/hands-on-wiring.png"
                alt="Hands-on circuit wiring and testing"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/hero-automotive-pcb.png"
                alt="Automotive ECU testing"
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
                The Mentors Guiding Your Career
              </h2>
              <p className="mt-3 max-w-xl text-sm text-navy-muted">
                Learn from seasoned industry professionals who bring real-world product design,
                automotive toolchains, and firmware architectures directly to the classroom.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Meet Our Faculty
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
                  Ready to launch your Embedded &amp; IoT career?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-muted">
                  Visit our Pune training center, attend a free demo session, and interact with our
                  senior mentors to begin your journey.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book Free Demo Class <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  Explore All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
