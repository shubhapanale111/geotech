import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Cpu, Layers, Radio, Wrench } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Cpu,
    image: '/images/electronics-lab.png',
    title: 'ARM Cortex & STM32 Firmware Lab',
    description:
      'Master bare-metal C programming, register-level peripherals (GPIO, Timer, ADC, DMA), and serial communication protocols (UART, SPI, I2C) on real STM32 microcontrollers.',
  },
  {
    icon: Layers,
    image: '/images/hero-automotive-pcb.png',
    title: 'Automotive ECU & AUTOSAR Protocols',
    description:
      'Hands-on ECU development with CAN/CAN-FD, LIN bus analyzers, Vector CANalyzer toolchain, CAPL scripting, and AUTOSAR layered software architecture.',
  },
  {
    icon: Radio,
    image: '/images/hero-circuit-macro.png',
    title: 'FreeRTOS & Industrial IoT Lab',
    description:
      'Build deterministic real-time systems using FreeRTOS kernel (tasks, queues, semaphores, mutexes) integrated with ESP32, LoRaWAN, MQTT, and AWS IoT cloud telemetry.',
  },
]

export function CoreCapabilities() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <p className="text-xs font-bold tracking-widest text-primary uppercase">
          Hardware Lab Infrastructure
        </p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-gray-900 sm:text-4xl">
              Our Core Practical Labs &amp; Toolchains
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Unlike theoretical coaching classes, our students spend 500+ hours working directly
              with digital oscilloscopes, logic analyzers, development boards, and industry-standard
              ECU diagnostic software.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold tracking-widest text-gray-900 hover:text-primary uppercase"
          >
            View All Courses <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CAPABILITIES.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <span className="absolute top-4 left-4 flex size-10 items-center justify-center rounded bg-gray-900 text-white">
                    <Icon className="size-5 text-primary" />
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    href="/courses"
                    className="mt-8 flex w-full items-center justify-center rounded bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-gray-100"
                  >
                    Explore Lab Curriculum &rarr;
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
