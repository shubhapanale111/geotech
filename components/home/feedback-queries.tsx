import Link from 'next/link'
import { Star } from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'

const TESTIMONIALS = [
  {
    quote:
      'The offline hardware lab in Pune gave me hands-on confidence with ARM Cortex and CAN protocols that college never provided. Secured an Embedded Firmware Engineer role at Bosch with 8.5 LPA within 2 weeks of finishing!',
    name: 'Rohan Deshmukh',
    role: 'Embedded Firmware Engineer, Bosch',
    initials: 'RD',
  },
  {
    quote:
      'The AUTOSAR and Vector CANalyzer practicals were game changers for me. Mentors are senior developers who explain real ECU architectures with live debugging. Best decision for my automotive career.',
    name: 'Pooja Kulkarni',
    role: 'Automotive ECU Developer, Continental',
    initials: 'PK',
  },
]

const QUERIES = [
  {
    question: 'Who is eligible for the Offline Embedded Systems course in Pune?',
    answer:
      'Graduates and final-year students with BE/B.Tech/Diploma/M.Tech in E&TC, Electronics, Electrical, Computer Science, IT, Instrumentation, or working professionals looking to transition into Embedded, Automotive, and IoT domains.',
  },
  {
    question: 'Are individual hardware kits and lab equipment provided for practice?',
    answer:
      'Yes. Our offline Pune lab is equipped with individual workstations containing STM32 development boards, ARM Cortex controllers, digital storage oscilloscopes (DSO), logic analyzers, and Vector CANalyzer setups.',
  },
  {
    question: 'How does the 100% Placement Assistance work?',
    answer:
      'We provide dedicated placement support including 1-on-1 resume optimization, GitHub project portfolio reviews, mock technical interviews, and direct interview opportunities with over 500+ hiring partners across Pune, Bangalore, and Hyderabad.',
  },
  {
    question: 'Can I attend a Free Demo Class and visit the offline lab?',
    answer:
      'Yes, absolutely! You can register for a free live demo class to interact directly with our mentors, experience our hands-on teaching methodology, and inspect our offline hardware lab before making any enrollment decision.',
  },
]

export function FeedbackQueries() {
  return (
    <section className="bg-background py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Student Reviews</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Success Stories From Our Alumni
          </h2>
          <div className="mt-8 space-y-5">
            {TESTIMONIALS.map((item) => (
              <figure key={item.name} className="rounded-lg border border-border bg-card p-6">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-navy text-xs font-semibold text-navy-foreground">
                    {item.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Student FAQs
          </h2>
          <div className="mt-8 rounded-lg border border-border bg-card">
            <FaqAccordion items={QUERIES} />
          </div>

          <div className="mt-6 rounded-lg border border-border bg-muted p-6">
            <h3 className="text-sm font-semibold tracking-wide uppercase">Have more questions about batches?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our academic counselors are available to guide you on syllabus details and batch timings.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-md bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-foreground transition-colors hover:bg-navy/90"
            >
              Contact Academic Counselor
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
