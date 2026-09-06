'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Download,
  Filter,
  GraduationCap,
  Layers,
  Radio,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { EnrollmentModal } from '@/components/enrollment-modal'

const CATEGORIES = [
  'All Projects',
  'Automotive & EV',
  'Industrial IoT',
  'RTOS & Firmware',
  'Medical Devices',
]

const PROJECTS = [
  {
    image: '/images/hero-automotive-pcb.png',
    status: 'Completed',
    statusTone: 'navy',
    category: 'Automotive & EV',
    year: '2024',
    title: 'Automotive CAN-FD Diagnostic Gateway',
    description:
      'High-speed CAN-FD vehicle telemetry gateway with UDS diagnostic stack (ISO 14229), Vector CANalyzer testing, and ISO 26262 functional safety.',
    spec1Label: 'PROTOCOL',
    spec1Value: 'CAN-FD 5Mbps',
    spec2Label: 'MCU',
    spec2Value: 'STM32F7 Cortex-M7',
    location: 'Pune Automotive Lab',
  },
  {
    image: '/images/hero-circuit-macro.png',
    status: 'Completed',
    statusTone: 'navy',
    category: 'Industrial IoT',
    year: '2024',
    title: 'LoRaWAN Industrial Smart Factory Gateway',
    description:
      'Multi-channel low-power wireless sensor edge node with FreeRTOS kernel multitasking, hardware AES-128 encryption, and AWS IoT Core MQTT syncing.',
    spec1Label: 'RANGE',
    spec1Value: '15 km Mesh',
    spec2Label: 'OS',
    spec2Value: 'FreeRTOS Kernel',
    location: 'IoT Systems Lab',
  },
  {
    image: '/images/electronics-lab.png',
    status: 'Completed',
    statusTone: 'navy',
    category: 'RTOS & Firmware',
    year: '2023 - 2024',
    title: 'STM32 Bare-Metal Digital Storage Oscilloscope',
    description:
      'Custom 2-channel 20MSPS digital oscilloscope built with bare-metal C, circular DMA ADC capture buffers, and high-speed SPI TFT graphical rendering.',
    spec1Label: 'SAMPLE RATE',
    spec1Value: '20 MSPS',
    spec2Label: 'ARCHITECTURE',
    spec2Value: 'ARM Cortex-M4',
    location: 'Hardware R&D Lab',
  },
  {
    image: '/images/hands-on-wiring.png',
    status: 'In Progress',
    statusTone: 'orange',
    category: 'Automotive & EV',
    year: '2024 - Present',
    title: '48V EV Battery Management System (BMS)',
    description:
      'Li-ion battery pack monitoring unit featuring active cell balancing, I2C/SPI analog front-end (AFE), thermal protection, and CAN state-of-charge broadcast.',
    spec1Label: 'VOLTAGE',
    spec1Value: '48V Nominal',
    spec2Label: 'SAFETY',
    spec2Value: 'ASIL-C Ready',
    location: 'EV Powertrain Lab',
  },
  {
    image: '/images/lab-cleanroom.png',
    status: 'Completed',
    statusTone: 'navy',
    category: 'Medical Devices',
    year: '2023',
    title: 'Wearable Patient ECG & SpO2 Telemetry Unit',
    description:
      'Low-latency clinical vitals monitor with continuous photoplethysmography (PPG), I2C biometric acquisition, and encrypted Bluetooth Low Energy medical profiles.',
    spec1Label: 'LATENCY',
    spec1Value: '< 50ms',
    spec2Label: 'STANDARDS',
    spec2Value: 'IEC 60601',
    location: 'Medical Electronics Lab',
  },
  {
    image: '/images/firmware-coding.png',
    status: 'In Progress',
    statusTone: 'orange',
    category: 'RTOS & Firmware',
    year: '2024 - Present',
    title: 'Autonomous Drone Flight Controller & Sensor Fusion',
    description:
      '6-DOF IMU sensor fusion using extended Kalman filtering (EKF) and deterministic 1 kHz PID motor control loops executing in zero-jitter RTOS tasks.',
    spec1Label: 'LOOP RATE',
    spec1Value: '1 kHz PID',
    spec2Label: 'COMMUNICATION',
    spec2Value: 'MAVLink Protocol',
    location: 'Embedded Robotics Lab',
  },
]

const CASE_STUDY_BULLETS = [
  'Register-Level Schematic & PCB Layout Verification',
  'Oscilloscope & Logic Analyzer Bus Timing Reports',
  'FreeRTOS Task Latency & Memory Profiling',
  'Direct GitHub Repositories for Placement Interviews',
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('All Projects')
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesTab =
      activeTab === 'All Projects' || p.category.toLowerCase() === activeTab.toLowerCase()
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <>
      {/* Hero Section with Same Theme: Image + Overlay */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-navy py-16 text-navy-foreground md:min-h-[500px] md:py-24">
        <Image
          src="/images/hero-circuit-macro.png"
          alt="Hardware Projects and Circuit Architecture background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        
        <div className="container-page relative z-10 w-full text-center">
          <Eyebrow tone="white">PORTFOLIO OF INNOVATION</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            Live Embedded &amp; <span className="text-primary">Automotive Projects</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-navy-muted">
            Explore industrial hardware capstones, automotive ECU prototypes, and IoT edge deployments
            engineered by our students and senior R&amp;D teams in Pune.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Sparkles className="size-4" /> Book Lab Demo &amp; Review Projects
            </button>
            <Link
              href="/courses"
              className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/15"
            >
              Explore Course Syllabus
            </Link>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="border-b border-border bg-card py-6">
        <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === cat
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search project, MCU, protocol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-border bg-background py-2 pr-4 pl-9 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background py-16">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded bg-navy px-2.5 py-1 text-[0.65rem] font-bold tracking-wider text-white uppercase shadow">
                    {project.category}
                  </span>
                  <span
                    className={`absolute top-3 right-3 rounded px-2.5 py-1 text-[0.65rem] font-bold uppercase shadow ${
                      project.statusTone === 'orange'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-[0.7rem] text-muted-foreground">
                    <span className="font-semibold text-primary">{project.location}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-border bg-muted/50 p-3 text-[0.7rem]">
                    <div>
                      <p className="text-[0.6rem] font-bold text-muted-foreground uppercase">
                        {project.spec1Label}
                      </p>
                      <p className="font-bold text-foreground">{project.spec1Value}</p>
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-bold text-muted-foreground uppercase">
                        {project.spec2Label}
                      </p>
                      <p className="font-bold text-foreground">{project.spec2Value}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-card py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
                  >
                    Inquire About Project <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Engineering Standards */}
      <section className="bg-muted/40 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>PORTFOLIO RIGOR</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              How Student Projects Drive Top Placements
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Hiring managers at automotive Tier-1 and semiconductor companies value candidates who
              have written bare-metal drivers, configured RTOS queues, and debugged hardware with
              real oscilloscopes.
            </p>

            <ul className="mt-6 space-y-3">
              {CASE_STUDY_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="rounded-md bg-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-navy-foreground transition-colors hover:bg-navy/90"
              >
                Apply for Course &amp; Lab Access
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/electronics-lab.png"
                alt="Electronics hardware lab"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/hero-automotive-pcb.png"
                alt="Automotive PCB"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/firmware-coding.png"
                alt="Firmware coding"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/hero-circuit-macro.png"
                alt="Circuit macro"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Enrollment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse="Embedded Capstone Projects Inquiry"
      />
    </>
  )
}
