import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code,
  Compass,
  FileCheck,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Radio,
  Satellite,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'

const INSTITUTE_SERVICES = [
  {
    icon: Layers,
    title: 'GIS Training (Beginner to Advanced)',
    desc: 'Structured curriculum covering spatial data models, vector geometries, raster grids, CRS coordinate projections, and spatial querying.',
  },
  {
    icon: Satellite,
    title: 'Remote Sensing & Satellite Analysis',
    desc: 'Digital image processing, multi-spectral band mathematics, NDVI/NDWI, land-use classification, and multi-temporal change detection.',
  },
  {
    icon: BarChart3,
    title: 'Geospatial Data Visualization & Mapping',
    desc: 'Thematic cartography, 3D terrain visualization, web map publishing, print composer layouts, and spatial dashboards.',
  },
  {
    icon: Code,
    title: 'Python & GIS Programming',
    desc: 'Automating vector and raster workflows with GeoPandas, Shapely, Fiona, Rasterio, and PyProj for scalable data pipelines.',
  },
  {
    icon: Compass,
    title: 'GPS & Field Survey Techniques',
    desc: 'Hands-on training with handheld GPS, Differential GPS (DGPS), total station data integration, and topographic ground truthing.',
  },
  {
    icon: GraduationCap,
    title: 'Project Guidance & Internship Support',
    desc: '1-on-1 mentorship on live capstone projects, academic thesis guidance, and internship opportunities on municipal & river datasets.',
  },
  {
    icon: FileCheck,
    title: 'Job Assessment & Career Guidance',
    desc: 'Resume preparation, GitHub portfolio review, GIS technical mock interviews, and direct referrals to hiring partners in Maharashtra.',
  },
  {
    icon: ShieldCheck,
    title: 'Job-Oriented Certification Courses',
    desc: 'ISO 9001:2015 accredited certifications that enhance your professional credibility with engineering consultancies and tech firms.',
  },
]

export function CoreCapabilities() {
  return (
    <section className="bg-card py-20 border-b border-border">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Eyebrow>OUR SERVICES &amp; OFFERINGS</Eyebrow>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-bold text-primary">
                <Sparkles className="size-3" /> ISO 9001:2015 Certified
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-4xl text-foreground">
              What Our <span className="text-primary">Institute Provides</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Galaxia Geotech Institute offers end-to-end training and consulting in GIS, Remote Sensing,
              GPS field surveying, and computational spatial automation.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold tracking-widest text-foreground hover:text-primary uppercase"
          >
            Explore All Services &rarr;
          </Link>
        </div>

        {/* 8 Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSTITUTE_SERVICES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div>
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-[0.7rem] font-bold text-primary uppercase">
                  <span>Practical Lab Training</span>
                  <ArrowRight className="size-3" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
