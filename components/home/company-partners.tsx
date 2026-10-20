'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Building2,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

// Primary partner logos with explicit brand names
const NAMED_PARTNERS = [
  {
    name: 'Tech Mahindra',
    logo: '/companylogos/Tech Mahindra.JPG',
    category: 'IT & MNC',
  },
  {
    name: 'STP Pune',
    logo: '/companylogos/STP Pune.jpg',
    category: 'Geospatial Engineering',
  },
  {
    name: 'The Nisarga Consultancy',
    logo: '/companylogos/The Nisarga Consultancy.webp',
    category: 'Remote Sensing & GIS',
  },
  {
    name: 'ACS Technologies',
    logo: '/companylogos/ACS Tecg.JPG',
    category: 'Geospatial Solutions',
  },
]

// Additional enterprise partner logos from /public/companylogos/
const ADDITIONAL_LOGOS = [
  '/companylogos/logo_1.png',
  '/companylogos/logo_2.png',
  '/companylogos/logo_3.png',
  '/companylogos/logo_4.png',
  '/companylogos/logo_5.png',
  '/companylogos/logo_6.png',
  '/companylogos/logo_7.png',
  '/companylogos/logo_8.png',
  '/companylogos/logo_9.png',
  '/companylogos/logo_10.png',
  '/companylogos/logo_11.png',
  '/companylogos/logo_12.png',
  '/companylogos/logo_13.png',
  '/companylogos/logo_14.png',
  '/companylogos/logo_15.png',
  '/companylogos/logo_16.png',
  '/companylogos/logo_17.png',
  '/companylogos/logo_18.png',
]

const ECOSYSTEM_SECTORS = [
  {
    title: 'IT & Global MNCs',
    companies: 'Cognizant • Tech Mahindra • Reliance Jio • Innover Systems',
    description: 'Enterprise GIS data integration, Python automation, and spatial cloud databases.',
    badge: 'MNC Tech Placements',
  },
  {
    title: 'Geospatial & Engineering Firms',
    companies: 'ACS Technologies • The Nisarga Consultancy • STP Pune • Monarch',
    description: 'QGIS, ArcGIS Pro, and satellite image classification for government & infrastructure projects.',
    badge: 'Spatial Engineering',
  },
  {
    title: 'Survey & Infrastructure Enterprises',
    companies: 'Prashant Advance Survey LLP • Technoland Engineering • JMK Geospatial',
    description: 'DGPS field surveying, cadastral revenue parcel mapping, and total station integration.',
    badge: 'Field Survey & Cadastre',
  },
]

export function CompanyPartners() {
  return (
    <section className="relative overflow-hidden bg-background py-20 border-b border-border">
      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Eyebrow>HIRING PARTNERS &amp; ALUMNI NETWORK</Eyebrow>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-bold text-primary">
                <Sparkles className="size-3" /> 100% Placement Support
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-4xl text-foreground">
              Where Our <span className="text-primary">Alumni Work</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Our students get placed across top IT enterprises, geospatial consultancies, and survey infrastructure firms across Pune and India.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-foreground hover:bg-navy/90 transition-colors dark:bg-primary dark:text-primary-foreground"
            >
              Recruit From Galaxia &rarr;
            </Link>
          </div>
        </div>

        {/* Featured Named Partner Logos Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {NAMED_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 text-center"
            >
              <div className="relative h-14 w-full flex items-center justify-center overflow-hidden">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={56}
                  className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-xs font-bold text-foreground">
                {partner.name}
              </h3>
              <span className="mt-0.5 text-[0.68rem] font-semibold text-primary">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Partner Logos Marquee */}
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card py-5">
          <div className="flex items-center justify-between px-6 pb-3 border-b border-border/60">
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
              Corporate &amp; Geospatial Partner Logos
            </span>
            <span className="text-[0.7rem] font-bold text-primary">
              30+ Active Industry Associates
            </span>
          </div>

          <div className="mt-4 overflow-hidden">
            <div className="animate-marquee-ltr-row1 flex items-center gap-8 px-4">
              {[...ADDITIONAL_LOGOS, ...ADDITIONAL_LOGOS].map((logo, index) => (
                <div
                  key={`partner-logo-${index}`}
                  className="flex h-14 w-28 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background/50 p-2 shadow-xs transition-transform hover:scale-110"
                >
                  <Image
                    src={logo}
                    alt="Corporate Geospatial Partner Logo"
                    width={90}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Sectors Ecosystem Breakdown */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {ECOSYSTEM_SECTORS.map((sector) => (
            <div
              key={sector.title}
              className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-[0.68rem] font-bold uppercase text-primary tracking-wide">
                  {sector.badge}
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-foreground">
                  {sector.title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-foreground/90">
                  {sector.companies}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {sector.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center gap-1.5 text-[0.7rem] font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-3.5" /> Direct Campus Placement Pipeline
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
