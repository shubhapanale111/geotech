'use client'

import { useState } from 'react'
import { CheckCircle2, GraduationCap, Loader2, Sparkles, X } from 'lucide-react'

export type EnrollmentModalProps = {
  isOpen: boolean
  onClose: () => void
  defaultCourse?: string
}

const COURSES_OPTIONS = [
  'Master Embedded Systems (Pune Lab)',
  'Advanced IoT Systems Certification',
  'Automotive Embedded Systems (AUTOSAR)',
  'Custom Corporate / Student Workshop',
]

export function EnrollmentModal({ isOpen, onClose, defaultCourse }: EnrollmentModalProps) {
  const [course, setCourse] = useState(defaultCourse || COURSES_OPTIONS[0])
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [qualification, setQualification] = useState('')
  const [preferredBatch, setPreferredBatch] = useState('Weekday Batch')
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
      setAppId(`GGW-${Math.floor(100000 + Math.random() * 900000)}`)
    }, 1200)
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
                Student Admission Application
              </h3>
              <p className="text-[0.65rem] tracking-wider text-navy-muted uppercase">
                Galaxia Geotech Technical Academy
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
                Application Submitted!
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Thank you <strong className="text-foreground">{fullName}</strong>. Your admission
                application has been registered successfully.
              </p>

              <div className="mx-auto mt-5 max-w-xs rounded-lg border border-border bg-muted p-3 text-center">
                <p className="text-[0.65rem] font-bold text-muted-foreground uppercase">
                  APPLICATION REFERENCE ID
                </p>
                <p className="font-display text-lg font-extrabold text-primary">{appId}</p>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Our academic counselor will reach out to you via call/WhatsApp within{' '}
                <strong className="text-foreground">2 to 4 business hours</strong> to confirm batch
                timings and seat reservation.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 rounded-md bg-navy px-6 py-2.5 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90"
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 rounded-md bg-primary/10 p-3 text-xs text-primary">
                <Sparkles className="size-4 shrink-0" />
                <span>
                  🔥 <strong>Limited Seats:</strong> Apply now to reserve your seat for the upcoming
                  October 15 batch.
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
                    placeholder="Rahul Sharma"
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
                    placeholder="+91 98765 43210"
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-foreground">
                    Qualification / Degree
                  </label>
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="B.E. / B.Tech / Diploma"
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-foreground">
                  Preferred Batch Timing
                </label>
                <div className="mt-1 grid grid-cols-2 gap-2 text-xs">
                  <label
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center font-bold ${
                      preferredBatch === 'Weekday Batch'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-background text-muted-foreground'
                    }`}
                  >
                    <input
                      type="radio"
                      name="batch"
                      value="Weekday Batch"
                      checked={preferredBatch === 'Weekday Batch'}
                      onChange={() => setPreferredBatch('Weekday Batch')}
                      className="sr-only"
                    />
                    Weekday (Mon - Fri)
                  </label>
                  <label
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center font-bold ${
                      preferredBatch === 'Weekend Batch'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-background text-muted-foreground'
                    }`}
                  >
                    <input
                      type="radio"
                      name="batch"
                      value="Weekend Batch"
                      checked={preferredBatch === 'Weekend Batch'}
                      onChange={() => setPreferredBatch('Weekend Batch')}
                      className="sr-only"
                    />
                    Weekend (Sat - Sun)
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
                      <Loader2 className="size-4 animate-spin" /> Processing Application...
                    </>
                  ) : (
                    'Submit Admission Application'
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
