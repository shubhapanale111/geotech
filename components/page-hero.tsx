import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type HeroAction = {
  href: string
  label: string
  tone?: 'primary' | 'secondary'
}

type HeroProof = {
  value: string
  label: string
}

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description: string
  image: string
  imageAlt: string
  imagePosition?: string
  actions?: HeroAction[]
  proof?: HeroProof[]
  aside?: ReactNode
  priority?: boolean
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'center',
  actions = [],
  proof = [],
  aside,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="hero-shell relative isolate overflow-hidden bg-navy text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="hero-image object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div aria-hidden="true" className="hero-wash absolute inset-0" />
      <div aria-hidden="true" className="map-grid hero-grid absolute inset-0" />
      <div className="container-page relative flex min-h-[570px] flex-col justify-end py-14 sm:min-h-[610px] sm:py-16 lg:min-h-[600px] lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,.42fr)] lg:items-end">
          <div className="max-w-4xl reveal">
            <p className="eyebrow text-orange-300">{eyebrow}</p>
            <h1 className="display mt-5 max-w-4xl text-5xl font-black leading-[.92] text-white sm:text-7xl lg:text-[5.5rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-100 sm:text-[1.05rem]">{description}</p>
            {actions.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map(({ href, label, tone = 'primary' }) => (
                  <Link
                    className={`focus-ring px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors ${tone === 'primary' ? 'bg-orange-600 text-white hover:bg-orange-500' : 'border border-white/50 bg-navy/20 text-white hover:bg-white hover:text-navy'}`}
                    href={href}
                    key={label}
                  >
                    {label} <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {aside && <aside className="border-l border-white/30 pl-5 text-slate-100 lg:mb-1">{aside}</aside>}
        </div>
        {proof.length > 0 && (
          <div className="mt-12 grid max-w-3xl grid-cols-3 border-t border-white/30 pt-5 sm:mt-14">
            {proof.map(({ value, label }) => (
              <div className="border-l border-orange-500 pl-3 first:border-l-0 first:pl-0" key={label}>
                <b className="block font-display text-2xl tracking-tight text-white sm:text-3xl">{value}</b>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[.16em] text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
