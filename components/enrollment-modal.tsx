'use client'

import { useState } from 'react'
import { CheckCircle2, GraduationCap, Loader2, Sparkles, X } from 'lucide-react'

export type EnrollmentModalProps = {
  isOpen: boolean
  onClose: () => void
  defaultCourse?: string
}

const COURSES_OPTIONS = [
  'Python with GIS (Full Comprehensive Program)',
  'GIS Fundamentals & Spatial Analysis (QGIS/ArcGIS)',
  'Python for Geospatial Automation (GeoPandas & Rasterio)',
  'DEM Hydrology & Terrain Modeling Masterclass',
  'Custom Academic & Capstone GIS Project Support',
]

export function EnrollmentModal({ isOpen, onClose, defaultCourse }: EnrollmentModalProps) {
  const [course, setCourse] = useState(defaultCourse || COURSES_OPTIONS[0])
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [qualification, setQualification] = useState('')
  const [preferredBatch, setPreferredBatch] = useState('Offline Classroom (FC Road Pune)')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [appId, setAppId] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setAppId(`GIS-${Math.floor(100000 + Math.random() * 900000)}`)
    }, 1000)
  }

  const handleReset = () => {
    setIsSuccess(false)
    setIsSubmitting(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setQualification('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-navy px-6 py-4 text-navy-foreground">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold uppercase text-white">
                Python with GIS Admission &amp; Demo
              </h3>
              <p className="text-[0.65rem] tracking-wider text-navy-muted uppercase">
                Galaxia Geotech \u2014 Pune FC Road Center
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md p-1.5 text-navy-muted transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-6 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <CheckCircle2 className="size-8" />
              </div>
              <h4 className="mt-4 font-display text-2xl font-extrabold text-foreground uppercase">
                Application Received!
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Thank you <strong className="text-foreground">{fullName}</strong>. Your registration for{' '}
                <strong className="text-foreground">{course}</strong> has been received.
              </p>

              <div className="mx-auto mt-5 max-w-xs rounded-lg border border-border bg-muted p-3 text-center">
                <p className="text-[0.65rem] font-bold text-muted-foreground uppercase">
                  REGISTRATION REFERENCE ID
                </p>
                <p className="font-display text-lg font-extrabold text-primary">{appId}</p>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Our counselor will call or WhatsApp you directly from{' '}
                <strong className="text-foreground">752-2929-752</strong> within 2-4 hours to schedule
                your free demo class at our FC Road center.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 rounded-md bg-navy px-6 py-2.5 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 rounded-md bg-primary/10 p-3 text-xs text-primary">
                <Sparkles className="size-4 shrink-0" />
                <span>
                  🔥 <strong>100% Practical Training:</strong> Real datasets, Python scripts, and offline lab guidance.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-foreground">
                  Select Program *
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary"
                >
                  {COURSES_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Patil"
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-foreground">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 75229 29752"
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-foreground">
                    Qualification / Background
                  </label>
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="Civil / Geo / CS / Env / Other"
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-foreground">
                  Preferred Learning Mode
                </label>
                <div className="mt-1 grid grid-cols-2 gap-2 text-xs">
                  <label
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center font-bold ${
                      preferredBatch === 'Offline Classroom (FC Road Pune)'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-background text-muted-foreground'
                    }`}
                  >
                    <input
                      type="radio"
                      name="batch"
                      value="Offline Classroom (FC Road Pune)"
                      checked={preferredBatch === 'Offline Classroom (FC Road Pune)'}
                      onChange={() => setPreferredBatch('Offline Classroom (FC Road Pune)')}
                      className="sr-only"
                    />
                    Offline (FC Road Pune)
                  </label>
                  <label
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center font-bold ${
                      preferredBatch === 'Online Interactive Batch'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-background text-muted-foreground'
                    }`}
                  >
                    <input
                      type="radio"
                      name="batch"
                      value="Online Interactive Batch"
                      checked={preferredBatch === 'Online Interactive Batch'}
                      onChange={() => setPreferredBatch('Online Interactive Batch')}
                      className="sr-only"
                    />
                    Online Live Batch
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow transition-colors hover:bg-primary/90 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Submitting Request...
                    </>
                  ) : (
                    'Register for Demo / Admission'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

