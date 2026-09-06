import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BarChart2,
  CheckCircle2,
  Code,
  Compass,
  Database,
  Eye,
  Globe,
  GraduationCap,
  Layers,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

const WHY_CHOOSE_US = [
  {
    icon: Code,
    title: 'Practical Training',
    description: 'Hands-on programming with actual geospatial datasets and Python automation scripts.',
  },
  {
    icon: Globe,
    title: 'Real-World Projects',
    description: 'Build portfolio projects like DEM drainage extraction, buffer analysis, and change detection.',
  },
  {
    icon: Layers,
    title: 'Modern GIS Technologies',
    description: 'Master industry-standard spatial tools, raster and vector processing, and map projections.',
  },
  {
    icon: Database,
    title: 'Python GIS Libraries',
    description: 'Deep dive into GeoPandas, Shapely, Fiona, Rasterio, PyProj, Matplotlib, and NumPy.',
  },
  {
    icon: Target,
    title: 'Industry-Oriented Curriculum',
    description: 'Curriculum designed to meet modern geospatial analyst and spatial data science requirements.',
  },
  {
    icon: Users,
    title: 'Experienced Instructors',
    description: 'Learn directly from instructors with practical field and research project experience.',
  },
  {
    icon: Award,
    title: 'Recognized Certification',
    description: 'Receive an institute-recognized Python with GIS certification upon course completion.',
  },
  {
    icon: Sparkles,
    title: 'Project-Based Learning',
    description: 'Solve real geographic problems and build 40+ research topics for your technical portfolio.',
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Python Programming Fundamentals',
    description:
      'Master variables, data structures, conditional logic, loops, functions, file handling, and object-oriented programming.',
  },
  {
    step: '02',
    title: 'Spatial Data & Coordinate Systems',
    description:
      'Understand vector geometries, raster grid structures, attribute management, and Coordinate Reference Systems (CRS).',
  },
  {
    step: '03',
    title: 'Python Geospatial Ecosystem',
    description:
      'Automate spatial joins, geometry manipulation, coordinate transformations, and raster masking with GeoPandas and Rasterio.',
  },
  {
    step: '04',
    title: 'Applied Projects & Certification',
    description:
      'Deliver real-world hydrological and spatial proximity models to earn your institute-recognized GIS certification.',
  },
]

const EXPERTS = [
  {
    name: 'Dr. Sarah Deshmukh',
    role: 'LEAD GEOSPATIAL SCIENTIST',
    image: '/images/team-sarah.png',
    bio: 'Specialist in remote sensing image classification, spatial automation with Python, and environmental change modeling.',
  },
  {
    name: 'Prof. David Kulkarni',
    role: 'SENIOR GIS & HYDROLOGY CONSULTANT',
    image: '/images/team-david.png',
    bio: '15+ years of experience in hydrological modeling, DEM drainage network analysis, and geodetic reference systems.',
  },
  {
    name: 'Michael Fernandes',
    role: 'SPATIAL DATA SCIENCE INSTRUCTOR',
    image: '/images/team-michael.png',
    bio: 'Expert in Python geospatial libraries (GeoPandas, Shapely, Rasterio), spatial databases (PostGIS), and Web GIS development.',
  },
]

const ACCREDITATIONS = [
  { icon: Award, label: 'INSTITUTE RECOGNIZED' },
  { icon: ShieldCheck, label: 'HANDS-ON PYTHON LAB' },
  { icon: CheckCircle2, label: '40+ RESEARCH TOPICS' },
  { icon: CheckCircle2, label: 'FC ROAD, PUNE CENTER' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-navy py-16 text-navy-foreground md:min-h-[500px] md:py-24">
        <Image
          src="/images/hero-server-room.png"
          alt="Galaxia Geotech Geospatial Lab background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        
        <div className="container-page relative z-10 w-full text-center">
          <Eyebrow tone="white">ABOUT GALAXIA GEOTECH</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            Building Practical <span className="text-primary">Geospatial Skills</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-navy-muted">
            Galaxia Geotech provides GIS and geospatial technology learning focused on practical
            applications, modern tools, and industry-oriented Python programming projects in Pune.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore All Courses
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/15"
            >
              Book Free Demo Class
            </Link>
          </div>
        </div>
      </section>

      {/* Core Identity - Mission & Vision */}
      <section className="bg-background py-20">
        <div className="container-page">
          <Eyebrow>CORE IDENTITY</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
            Mission &amp; Vision
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded bg-navy text-navy-foreground">
                    <Target className="size-5 text-primary" />
                  </span>
                  <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To combine Python programming with spatial analysis so learners can automate
                  complex GIS workflows, process multi-terabyte spatial datasets, and solve
                  real-world geographic problems with technical confidence.
                </p>
              </article>

              <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded bg-navy text-navy-foreground">
                    <Eye className="size-5 text-primary" />
                  </span>
                  <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To be India&apos;s leading geospatial technology institute, empowering engineers,
                  geographers, and data scientists with modern open-source GIS libraries and spatial
                  automation capabilities.
                </p>
              </article>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-border shadow-md">
                <Image
                  src="/images/aerial-map.png"
                  alt="Geospatial analysis workspace"
                  width={800}
                  height={600}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="mt-4 rounded-lg bg-primary p-6 text-primary-foreground shadow-lg sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:max-w-xs">
                <p className="font-display text-3xl font-extrabold tracking-tight">40+</p>
                <p className="mt-1 text-xs font-bold tracking-wider uppercase">
                  PRACTICAL GIS RESEARCH TOPICS &amp; WORKFLOWS COVERED
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? (8 Features from content.md) */}
      <section className="bg-muted/50 py-20">
        <div className="container-page text-center">
          <Eyebrow>WHY CHOOSE US</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
            Why Learn Python with GIS at Galaxia Geotech?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Our training is built around hands-on practice, modern spatial toolchains, and real-world
            geospatial applications.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 text-left shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded bg-muted text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>LEARNING ROADMAP</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              From Beginner to Spatial Automation Expert
            </h2>

            <div className="mt-8 space-y-6">
              {STEPS.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="font-display text-lg font-bold text-primary">{s.step}</span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/firmware-coding.png"
                alt="Python coding"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/aerial-map.png"
                alt="Aerial map analysis"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/engineering-3d-model.png"
                alt="DEM 3D terrain"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image
                src="/images/survey-tripod.png"
                alt="Survey tripod equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faculty / Mentors */}
      <section className="bg-navy py-20 text-navy-foreground">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="white">EXPERT MENTORSHIP</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl">
                Learn From Geospatial Practitioners
              </h2>
              <p className="mt-3 max-w-xl text-sm text-navy-muted">
                Our faculty brings real-world remote sensing, GIS programming, and spatial data science
                expertise directly into the classroom.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Talk to an Instructor
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {EXPERTS.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto relative size-28 overflow-hidden rounded-full border-2 border-primary">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{person.name}</h3>
                <p className="mt-1 text-xs font-bold tracking-wider text-primary uppercase">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Bar */}
      <section className="border-y border-border bg-card py-6">
        <div className="container-page flex flex-wrap items-center justify-around gap-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
          {ACCREDITATIONS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-2.5">
                <Icon className="size-4 text-primary" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="bg-background py-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-xl border border-navy/20 bg-navy p-8 text-navy-foreground md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl">
                  Ready to Build Your GIS Career?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-muted">
                  Learn Python, GIS and geospatial analysis through practical projects with institute-recognized certification at FC Road, Pune.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Enroll Now <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  Explore Curriculum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
