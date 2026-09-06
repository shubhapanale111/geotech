import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Database,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Mountain,
  Radio,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Waves,
  Zap,
} from 'lucide-react'
import { CheckItem, Eyebrow } from '@/components/primitives'

const GIS_LEARNING_TOPICS = [
  {
    image: '/images/aerial-map.png',
    tag: 'Spatial Proximity',
    icon: Compass,
    title: 'Buffer Analysis Explained',
    description:
      'Buffer analysis creates a zone around a geographic feature at a specified distance for studying proximity, influence, and spatial coverage across point, line, and polygon geometries.',
    features: [
      'Point Buffers: Hospitals, schools & emergency facilities (e.g. 500m zone)',
      'Line Buffers: Roads, rivers, pipelines & railway corridors (e.g. 100m zone)',
      'Polygon Buffers: Lakes, forests, parks & industrial zones (e.g. 1km zone)',
      'Fixed & Variable Buffers based on attribute values & capacities',
    ],
  },
  {
    image: '/images/engineering-3d-model.png',
    tag: 'Hydrology & DEM',
    icon: Mountain,
    title: 'Drainage Network Extraction From DEM',
    description:
      'A hydrological modeling workflow that extracts natural flow paths of water across terrain using Digital Elevation Models (DEM) to delineate watersheds and predict flood risk.',
    features: [
      'Step 1 & 2: Load DEM and Fill Sinks (removing artificial depressions)',
      'Step 3 & 4: Calculate Flow Direction & Upstream Flow Accumulation',
      'Step 5 & 6: Stream Definition Threshold & Vector Stream Linking',
      'Applications: Watershed delineation, flood modeling & sediment studies',
    ],
  },
  {
    image: '/images/surveyor-field.png',
    tag: 'Geodetic Heights',
    icon: Layers,
    title: 'Orthometric vs Ellipsoidal Height (h = H + N)',
    description:
      'Understanding vertical reference surfaces: the mathematical reference Ellipsoid, the gravity-based Geoid (mean sea level), and the physical Earth topographic surface.',
    features: [
      'Relationship Formula: h = H + N (Ellipsoidal = Orthometric + Geoid)',
      'Orthometric Height (H): Measured along gravity above geoid (Surveying)',
      'Ellipsoidal Height (h): Measured along ellipsoid normal (GNSS/GPS)',
      'Geoid Height (N): Vertical separation between ellipsoid and geoid',
    ],
  },
]

const SPECIALIZED_GIS_CONCEPTS = [
  {
    icon: Globe,
    title: 'Map Projections & Distortion',
    description:
      'Understand Cylindrical (Mercator), Conical (Lambert), and Planar projections, and how no single projection preserves shape, area, distance, and direction simultaneously.',
  },
  {
    icon: Database,
    title: 'GeoPandas & Spatial Joins',
    description:
      'Perform point-in-polygon operations, spatial intersections, spatial indexing with R-trees, and attribute merges using Python geospatial libraries.',
  },
  {
    icon: Waves,
    title: 'Rasterio & Satellite Indexing',
    description:
      'Read multi-band satellite rasters, calculate NDVI (Normalized Difference Vegetation Index), and mask imagery using vector polygons.',
  },
  {
    icon: Compass,
    title: 'PyProj Coordinate Transformation',
    description:
      'Automate on-the-fly transformations between geographic (WGS84 EPSG:4326) and projected coordinate systems (UTM Zones).',
  },
  {
    icon: Activity,
    title: 'Multi-Criteria Decision Analysis (MCDA)',
    description:
      'Combine multiple raster and vector constraint layers with weighted overlay analysis for optimal site selection.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Quality & Metadata Standards',
    description:
      'Ensure topology validation, sliver polygon removal, spatial precision, and ISO 19115 compliant geospatial metadata.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with BG Image and Overlay */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-navy py-16 text-navy-foreground md:min-h-[500px] md:py-24">
        <Image
          src="/images/hero-automotive-pcb.png"
          alt="Geospatial Analysis and GIS Learning background"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        
        <div className="container-page relative z-10 w-full text-center">
          <Eyebrow tone="white">PRACTICAL GEOSPATIAL WORKFLOWS</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
            GIS Learning Gallery &amp; <span className="text-primary">Workflows</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-navy-muted">
            Explore core spatial analysis concepts taught in our Python with GIS training program:
            from buffer analysis and DEM drainage extraction to geodetic height transformations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Python GIS Course
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

      {/* Featured Detailed Learning Modules */}
      <section className="bg-background py-20">
        <div className="container-page space-y-20">
          {GIS_LEARNING_TOPICS.map((topic, index) => {
            const Icon = topic.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={topic.title}
                className="grid gap-12 lg:grid-cols-2 lg:items-center"
              >
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="relative overflow-hidden rounded-xl border border-border shadow-md">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      width={900}
                      height={650}
                      className="h-80 w-full object-cover sm:h-[400px]"
                    />
                    <span className="absolute top-4 left-4 rounded bg-navy px-3 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow">
                      {topic.tag}
                    </span>
                  </div>
                </div>

                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <span className="flex size-10 items-center justify-center rounded bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground">
                    {topic.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {topic.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <CheckCircle2 className="size-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/courses"
                      className="rounded-md bg-navy px-6 py-3 text-xs font-bold tracking-wider text-navy-foreground uppercase transition-colors hover:bg-navy/90"
                    >
                      Learn in Full Course
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-xs font-bold tracking-wider text-foreground uppercase transition-colors hover:bg-muted"
                    >
                      Inquire for Training <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Specialized GIS Concepts */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="text-center">
            <Eyebrow>CORE GEOSPATIAL COMPETENCIES</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Advanced Spatial Data Concepts
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Master the foundational algorithms and mathematical principles behind spatial operations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SPECIALIZED_GIS_CONCEPTS.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex size-10 items-center justify-center rounded bg-navy text-navy-foreground">
                    <Icon className="size-5 text-primary" />
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

      {/* Navy CTA Section */}
      <section className="bg-navy py-16 text-navy-foreground">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl">
              Ready to Master Python with GIS?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-muted">
              Join our upcoming training batch at FC Road, Pune or attend online sessions with
              hands-on spatial programming assignments and project reviews.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="rounded-md bg-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enroll in Python with GIS
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white transition-colors hover:bg-white/10"
              >
                Book Free Demo Class
              </Link>
            </div>
          </div>

          <div className="w-full rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:w-80">
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-primary" />
                <div>
                  <p className="text-xs text-navy-muted uppercase">TRAINING LOCATION</p>
                  <p className="font-bold text-white">FC Road, Pune &amp; Online</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                <ShieldCheck className="size-5 text-primary" />
                <div>
                  <p className="text-xs text-navy-muted uppercase">CERTIFICATION</p>
                  <p className="font-bold text-white">Institute-Recognized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
