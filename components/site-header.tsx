'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  Clock,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { EnrollmentModal } from '@/components/enrollment-modal'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses', isHot: true },
  { href: '/services', label: 'GIS Learning' },
  { href: '/projects', label: 'Projects & Research' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [defaultCourse, setDefaultCourse] = useState<string | undefined>(undefined)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const handleOpenDemoModal = (courseName?: string) => {
    setDefaultCourse(courseName)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Top Announcement & Helpline Notice Bar */}
      <div className="bg-navy border-b border-white/10 text-navy-foreground py-2 text-[0.7rem] font-medium">
        <div className="container-page flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-400 uppercase">
              🏆 ISO 9001:2015 Certified Institute
            </span>
            <span className="hidden md:inline-block text-navy-muted">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-white">
              <MapPin className="size-3 text-primary" /> Shreenath Plaza, FC Road, Pune
            </span>
            <span className="hidden lg:inline-block text-navy-muted">|</span>
            <span className="hidden lg:inline-block text-gray-300">
              Regular &amp; Weekend Batches (Online &amp; Offline)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href="tel:7522929752"
              className="inline-flex items-center gap-1 text-white hover:text-primary transition-colors"
            >
              <Phone className="size-3 text-primary" /> 752-2929-752
            </a>
            <span className="text-white/20">|</span>
            <button
              type="button"
              onClick={() => handleOpenDemoModal('Free Demo Class Inquiry')}
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline uppercase"
            >
              <Sparkles className="size-3" /> Book Free Demo Class &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Galaxia Geotech home">
            <span className="flex size-8 items-center justify-center rounded-md bg-navy text-navy-foreground">
              <Layers className="size-4 text-primary" strokeWidth={2.2} />
            </span>
            <div>
              <span className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground block leading-none">
                Galaxia Geotech <span className="text-xs font-bold text-primary uppercase">Institute</span>
              </span>
              <span className="text-[0.6rem] font-semibold text-muted-foreground tracking-wide block">
                ISO 9001:2015 Certified • Pune
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground',
                  isActive(link.href) ? 'font-bold text-foreground' : 'text-muted-foreground',
                )}
              >
                <span>{link.label}</span>
                {link.isHot && (
                  <span className="relative flex size-2 shrink-0 items-center justify-center">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleOpenDemoModal('Free Demo Class')}
              className="hidden rounded-md border border-border bg-card px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-muted sm:inline-flex"
            >
              Book Free Demo
            </button>

            <button
              type="button"
              onClick={() => handleOpenDemoModal('Python with GIS Course')}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <GraduationCap className="size-4" /> Enroll Now
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="container-page flex flex-col py-3" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium',
                    isActive(link.href)
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground',
                  )}
                >
                  <span>{link.label}</span>
                  {link.isHot && (
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[0.65rem] font-bold text-primary uppercase">
                      Featured
                    </span>
                  )}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    handleOpenDemoModal('Free Demo Class')
                  }}
                  className="rounded-md border border-border bg-card px-3 py-2.5 text-center text-xs font-bold uppercase text-foreground"
                >
                  Free Demo Class
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    handleOpenDemoModal('Python with GIS Course')
                  }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-center text-xs font-bold uppercase text-primary-foreground"
                >
                  <GraduationCap className="size-4" /> Enroll Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Global Enrollment & Demo Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={defaultCourse}
      />
    </>
  )
}
