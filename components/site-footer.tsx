import Link from 'next/link'
import { Cpu, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/components/social-icons'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Embedded Courses' },
  { href: '/about', label: 'About Us' },
  { href: '/courses/embedded-course-pune', label: 'Embedded Systems Pune' },
  { href: '/services/automotive-embedded', label: 'Automotive & AUTOSAR' },
  { href: '/contact', label: 'Book Demo Class' },
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
                <Cpu className="size-4 text-primary" strokeWidth={2.2} />
              </span>
              <span className="font-display text-base font-bold tracking-wide text-foreground">
                GALAXIA GEOTECH <span className="text-xs text-primary font-semibold">ACADEMY</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Pune&apos;s leading offline training academy for Embedded Systems, Automotive AUTOSAR,
              and IoT. Hands-on hardware labs with 100% placement assistance.
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
            <h3 className="text-sm font-semibold tracking-wide text-foreground">TRAINING LAB</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Geotech Tech Park, Hadapsar / FC Road, Pune, MH 411028</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>admissions@galaxiageotech.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">FOLLOW US</h3>
            <p className="mt-4 text-xs text-muted-foreground">
              Follow our community of 5,000+ embedded developers and student placement updates.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="#"
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
          <p>© 2026 Galaxia Geotech Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
