import Link from 'next/link'
import { Globe, Layers, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/components/social-icons'

const COURSES_NAV = [
  { href: '/courses', label: 'GIS & RS Diploma (6 Month)' },
  { href: '/courses', label: 'GIS Certificate (3 Month)' },
  { href: '/courses', label: 'GIS & Land Surveying (3 Month)' },
  { href: '/courses', label: 'GIS Python Fast-Track (1 Month)' },
  { href: '/courses', label: 'Single Software Track (1 Month)' },
]

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'All Certified Courses' },
  { href: '/services', label: 'GIS Learning Gallery' },
  { href: '/projects', label: 'Projects & Research Ideas' },
  { href: '/about', label: 'About Our Institute' },
  { href: '/contact', label: 'Contact & Admissions' },
]

const SOCIALS = [
  { label: 'LinkedIn', icon: LinkedInIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Website', icon: Globe },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Institute Brand & Certification */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-md bg-navy text-navy-foreground">
                <Layers className="size-4 text-primary" strokeWidth={2.2} />
              </span>
              <div>
                <span className="font-display text-base font-bold tracking-wide text-foreground block leading-tight">
                  GALAXIA GEOTECH
                </span>
                <span className="text-[0.65rem] font-semibold text-primary block">
                  Institute of Pune
                </span>
              </div>
            </div>

            <div className="mt-3 inline-flex items-center gap-1.5 rounded bg-emerald-500/10 px-2.5 py-1 text-[0.7rem] font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-3.5" /> An ISO 9001:2015 Certified Institute
            </div>

            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Hands-on training in GIS, Remote Sensing, GPS, and spatial data analysis with a focus on practical, career-oriented learning.
            </p>
          </div>

          {/* Col 2: Certified Programs */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              TYPES OF GIS COURSES
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COURSES_NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-primary font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Center Location */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              PUNE TRAINING CENTER
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  Shreenath Plaza, Off No. 87, C-Wing, 5th Floor, Dyaneshwar Paduka Chowk, Fergusson College Rd,
                  Pune, Maharashtra - 411004
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href="tel:7522929752" className="hover:text-foreground font-semibold">
                  752-2929-752
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:galaxiageotech@gmail.com" className="hover:text-foreground">
                  galaxiageotech@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Socials */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              QUICK LINKS &amp; CONNECT
            </h3>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Regular &amp; Weekend Batches Available. Online &amp; Offline Classes.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="https://galaxiageotech.com"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-md bg-navy px-3.5 py-1.5 text-xs font-bold uppercase text-white hover:bg-navy/90 transition-colors dark:bg-primary dark:text-primary-foreground"
              >
                Book Free Demo Class &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 Galaxia Geotech Institute of Pune. (An ISO 9001:2015 Certified Institute). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/courses" className="transition-colors hover:text-foreground font-medium">
              Course Details
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground font-medium">
              About Us
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
