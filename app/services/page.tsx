import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Cpu,
  FileCheck,
  GraduationCap,
  Layers,
  MapPin,
  Radio,
  ShieldCheck,
  Smartphone,
  Wrench,
  Zap,
} from 'lucide-react'
import { CheckItem, Eyebrow } from '@/components/primitives'

const FEATURED_SERVICES = [
  {
    image: '/images/hero-automotive-pcb.png',
    tag: 'Automotive R&D',
    icon: Layers,
    title: 'Automotive ECU & AUTOSAR Prototyping',
    description:
      'Turnkey automotive electronic control unit (ECU) firmware architecture, Vector CANalyzer CAPL testing, diagnostic stack integration (UDS), and ISO 26262 functional safety compliance for mobility and EV systems.',
    features: [
      'Vector CANalyzer & CAPL Testing',
      'CAN, CAN-FD & LIN Protocol Stacks',
      'AUTOSAR Classic Layered Architecture',
      'ISO 26262 ASIL Functional Safety',
    ],
  },
  {
    image: '/images/hero-circuit-macro.png',
    tag: 'Industrial IoT',
    icon: Radio,
    title: 'Industrial IoT & Edge Computing Systems',
    description:
      'Design of mission-critical IoT gateways, ultra-low-power sensor nodes, and real-time edge computing solutions with FreeRTOS multitasking and direct AWS IoT Core / Azure IoT telemetry streams.',
    features: [
      'LoRaWAN, Zigbee & Cellular Mesh',
      'FreeRTOS Real-Time Kernel Design',
      'AWS IoT Greengrass & Azure Hub',
      'Hardware Cryptography & Secure Boot',
    ],
  },
  {
    image: '/images/electronics-lab.png',
    tag: 'Corporate Academy',
    icon: Cpu,
    title: 'Corporate Training & Embedded Lab Setup',
    description:
      'Custom upskilling programs and turnkey electronics lab setup for engineering enterprises, OEMs, and Tier-1 automotive teams. Tailored hardware workbenches with oscilloscopes, STM32 kits, and bus analyzers.',
    features: [
      'Custom Tier-1 Corporate Syllabus',
      'Turnkey Electronics Lab Infrastructure',
      'Hands-on Workbenches & DSOs',
      '1-on-1 Code Reviews & Assessments',
    ],
  },
]

const SPECIALIZED_SERVICES = [
  {
    icon: Activity,
    title: 'Firmware Code Audits',
    description:
      'MISRA-C static analysis, memory leak detection, and deterministic performance profiling for mission-critical firmware.',
  },
  {
    icon: Wrench,
    title: 'Hardware-in-the-Loop (HIL) Testing',
    description:
      'Automated test rig development simulating real automotive sensors, actuators, and CAN bus traffic for validation.',
  },
  {
    icon: ShieldCheck,
    title: 'Board Bring-Up & Debugging',
    description:
      'Initial PCB prototype bring-up, JTAG/SWD debugging, signal integrity analysis, and clock tree verification.',
  },
  {
    icon: Zap,
    title: 'FreeRTOS Kernel Optimization',
    description:
      'Context switch tuning, task priority design, mutex deadlock prevention, and deterministic ISR latency reduction.',
  },
  {
    icon: Smartphone,
    title: 'Protocol Stack Integration',
    description:
      'Custom device driver development for SPI, I2C, UART, Ethernet, and BLE communication modules.',
  },
  {
    icon: FileCheck,
    title: 'MBD & MATLAB Simulink',
    description:
      'Model-Based Design, auto-code generation with Embedded Coder, and MIL/SIL/PIL verification pipelines.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with BG Image and Overlay */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-navy py-16 text-navy-foreground md:min-h-[500px] md:py-24">
        <Image
          src="/images/hero-automotive-pcb.png"
          alt="Automotive Embedded Systems and ECU background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        
        <div className="container-page relative z-10 w-full text-center">
          <Eyebrow tone="white">EMBEDDED R&amp;D &amp; CORPORATE ACADEMY</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            Enterprise Embedded Solutions &amp; <span className="text-primary">Training Labs</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-navy-muted">
            Galaxia Geotech delivers high-precision embedded systems prototyping, automotive AUTOSAR
            consultancy, industrial IoT architecture, and tailored corporate engineering training
            programs in Pune.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Inquire for Corporate Training
            </Link>
            <Link
              href="/courses"
              className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/15"
            >
              View Student Courses
            </Link>
          </div>
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

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                      Inquire for Training &amp; Services
                    </Link>
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-xs font-bold tracking-wider text-foreground uppercase transition-colors hover:bg-muted"
                    >
                      View Lab Curriculum <ArrowRight className="size-4" />
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
            <Eyebrow>TECHNICAL CAPABILITIES</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Specialized Engineering Support
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              From low-level firmware architecture to complete automotive testbench setup, our team
              provides end-to-end embedded technical consultancy.
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
                    <Icon className="size-5 text-primary" />
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
              The Standard of Engineering Excellence
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              At Galaxia Geotech, we combine senior R&amp;D industry veterans with modern laboratory
              toolchains to deliver unmatched reliability in embedded firmware, automotive ECUs,
              and IoT deployments.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={3} />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">ISO 9001:2015 Certified Laboratories</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Fully equipped testing workbenches with digital oscilloscopes, logic analyzers, and CAN tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={3} />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Senior R&amp;D Industry Mentors</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Engineers with 15+ years of production experience in automotive and semiconductor leaders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={3} />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">100% Practical Hands-On Training</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      500+ hours of individual hardware lab time on real STM32, ARM Cortex, and CANalyzer toolchains.
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
              <p className="font-display text-4xl font-extrabold">98.4%</p>
              <p className="mt-2 text-xs font-bold tracking-wider uppercase">PLACEMENT RATE</p>
            </div>

            <div className="rounded-lg bg-navy p-8 text-center text-navy-foreground shadow-md">
              <p className="font-display text-4xl font-extrabold text-white">500+</p>
              <p className="mt-2 text-xs font-bold tracking-wider text-navy-muted uppercase">
                HIRING PARTNERS
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-8 text-center">
              <p className="font-display text-4xl font-extrabold text-foreground">500h+</p>
              <p className="mt-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                HARDWARE LAB TIME
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
              Ready to Discuss Your Corporate Training or Project?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-muted">
              Connect with our academic directors and technical consultants for custom training
              modules or hardware laboratory visits at our Pune facility.
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
                Book Free Demo Class
              </Link>
            </div>
          </div>

          <div className="w-full rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:w-80">
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-primary" />
                <div>
                  <p className="text-xs text-navy-muted uppercase">COUNSELING RESPONSE</p>
                  <p className="font-bold text-white">Under 30 Minutes</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                <ShieldCheck className="size-5 text-primary" />
                <div>
                  <p className="text-xs text-navy-muted uppercase">ACCREDITATION</p>
                  <p className="font-bold text-white">NASSCOM® &amp; ISO 9001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
