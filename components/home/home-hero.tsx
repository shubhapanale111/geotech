import Link from 'next/link'
import Image from 'next/image'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      <Image
        src="/images/skyscraper-steel.png"
        alt="Construction crane background"
        fill
        priority
        className="object-cover opacity-60 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />

      <div className="container-page relative py-10 md:py-32 lg:py-16">
        <span className="inline-flex rounded-full border border-primary bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase backdrop-blur-sm">
          Established Authority Since 1988
        </span>

        <h1 className="mt-8 max-w-4xl font-display text-5xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Engineering Confidence<br />
          from the <span className="text-primary">Ground Up</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
          Galaxia Geotech provides elite geotechnical consultancy and civil engineering precision
          for world-class infrastructure projects. We turn ground uncertainty into structural
          certainty.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded bg-primary px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-primary/90 uppercase tracking-wide"
          >
            Our Expertise
          </Link>
          <Link
            href="/projects"
            className="rounded border border-white bg-white/10 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/20 backdrop-blur-sm uppercase tracking-wide"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
