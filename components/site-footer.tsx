import Link from 'next/link'
import { Globe, Layers, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/components/social-icons'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Python with GIS Course' },
  { href: '/services', label: 'GIS Learning Gallery' },
  { href: '/projects', label: 'Projects & Research Ideas' },
  { href: '/about', label: 'About Galaxia Geotech' },
  { href: '/contact', label: 'Contact & Enrollment' },
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
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-md bg-navy text-navy-foreground">
                <Layers className="size-4 text-primary" strokeWidth={2.2} />
              </span>
              <span className="font-display text-base font-bold tracking-wide text-foreground">
                GALAXIA GEOTECH
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Python with GIS | GIS | Remote Sensing | Geospatial Technology. Building practical
              geospatial skills through hands-on Python programming and real-world spatial projects.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">QUICK LINKS</h3>
            <ul className="mt-4 space-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">CONTACT US</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  Shreenath Plaza, Off No. 87, C-Wing, 5th Floor, Dyaneshwar Paduka Chowk, FC Road,
                  Pune, MH - 411004
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <span>752-2929-752</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>galaxiageotech@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">GEOSPATIAL HUB</h3>
            <p className="mt-4 text-xs text-muted-foreground">
              Learn Python. Master GIS. Build Real-World Geospatial Solutions with certified
              trainers and modern GIS tools.
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
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 Galaxia Geotech. All rights reserved. Python with GIS Training Institute.</p>
          <div className="flex items-center gap-6">
            <Link href="/courses" className="transition-colors hover:text-foreground">
              Course Details
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
