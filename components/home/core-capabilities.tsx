import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Layers, Microscope } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Microscope,
    image: '/images/soil-lab.png',
    title: 'Soil Analysis',
    description:
      'Comprehensive laboratory testing and field investigation to determine subsurface mechanical properties and load-bearing capacity.',
  },
  {
    icon: Layers,
    image: '/images/blueprint-desk.png',
    title: 'Foundation Design',
    description:
      'Expert engineering solutions for deep and shallow foundations, retaining structures, and ground improvement techniques.',
  },
  {
    icon: Building2,
    image: '/images/surveyor-field.png',
    title: 'Site Investigation',
    description:
      'Detailed geophysical surveys and drilling programs to mitigate risk and ensure structural integrity before construction.',
  },
]

export function CoreCapabilities() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <p className="text-xs font-bold tracking-widest text-primary uppercase">
          Technical Excellence
        </p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold tracking-tight uppercase text-gray-900 sm:text-5xl">
              Our Core Capabilities
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Leveraging cutting-edge subsurface scanning and rigorous laboratory analysis to
              deliver ground engineering solutions that stand the test of time.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold tracking-widest text-gray-900 hover:text-primary uppercase"
          >
            View All Services <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CAPABILITIES.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="overflow-hidden rounded border border-gray-100 bg-white shadow-sm"
              >
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <span className="absolute top-4 left-4 flex size-10 items-center justify-center rounded bg-gray-900 text-white">
                    <Icon className="size-5" />
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-8 flex w-full items-center justify-center rounded bg-gray-50 px-4 py-3 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-100"
                  >
                    Learn More
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
