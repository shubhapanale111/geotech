'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Code,
  Compass,
  Database,
  Download,
  ExternalLink,
  FileCheck,
  FileCode,
  FileText,
  Globe,
  GraduationCap,
  HelpCircle,
  Laptop,
  Layers,
  MapPin,
  Mountain,
  Phone,
  Radio,
  Rocket,
  Satellite,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { Eyebrow } from '@/components/primitives'
import { FaqAccordion } from '@/components/faq-accordion'
import { EnrollmentModal } from '@/components/enrollment-modal'

// ==========================================
// 5 OFFICIAL CERTIFIED COURSES (From Template Page 3)
// ==========================================
const OFFICIAL_COURSES = [
  {
    id: 'gis-rs-6m',
    tabName: 'GIS & RS (6 Month)',
    title: 'Certificate Course in GIS & RS (Six Month)',
    duration: '6 Months • 120+ Lab Hours',
    badge: 'Flagship Career Diploma',
    mode: 'Regular & Weekend Batches • Online & Offline',
    heroSubtitle:
      'Comprehensive master diploma covering GIS fundamentals, remote sensing satellite image processing, GPS field surveying, geodatabases, and Python geospatial automation.',
    eligibility: 'Students in Science, Engineering, Geography, IT, Civil, and Working Professionals',
    highlights: [
      'Comprehensive GIS & Remote Sensing Principles',
      'Satellite Image Processing & Band Math (Optical, Radar, Thermal)',
      'GPS & DGPS Field Surveying with Ground Truthing',
      'Geospatial Data Modeling & Spatial Relational Databases (PostGIS)',
      'Python Automation with GeoPandas, Shapely & Rasterio',
      '100% Job Placement Assistance & Live Project Guidance',
    ],
  },
  {
    id: 'python-gis',
    tabName: 'GIS Python (1 Month)',
    title: 'One-Month Certificate Course in GIS Python',
    duration: '1 Month • 35+ Coding Hours',
    badge: 'Geospatial Automation Track',
    mode: 'Weekday Evenings & Weekend Batches • Hybrid',
    heroSubtitle:
      'Learn Python programming specifically engineered for geospatial data science. Automate shapefile manipulation, raster algebra, DEM hydrological modeling, and buffer zones.',
    eligibility: 'Civil Engineers, Surveyors, GIS Analysts, Developers & Science Graduates',
    highlights: [
      'Core Python Programming, OOP & Data Structures',
      'Vector Processing with GeoPandas & Shapely',
      'Raster Processing with Rasterio & Fiona',
      'DEM Stream Network & Watershed Extraction',
      'Coordinate Transformations & Geodetic Heights (h = H + N)',
      '4 Portfolio Capstone Projects for GitHub',
    ],
  },
  {
    id: 'gis-survey-3m',
    tabName: 'GIS & Surveying (3 Month)',
    title: 'Three-Month Certificate Course in GIS & Land Surveying',
    duration: '3 Months • 70+ Hours',
    badge: 'Civil & Survey Specialization',
    mode: 'Regular & Weekend Batches • FC Road Pune Lab',
    heroSubtitle:
      'Bridge the gap between ground surveying and digital GIS. Learn handheld GPS & DGPS data collection, total station data integration, topographic contouring, and cadastral parcel georeferencing.',
    eligibility: 'Surveyors, Civil Draughtsmen, Civil Engineers, and Diploma Holders',
    highlights: [
      'GPS, DGPS & Field Survey Ground Truthing Techniques',
      'Total Station Survey Ingestion & Coordinate Adjustments',
      'Village Cadastral Revenue Map Digitization & Georeferencing',
      'Topographic Contour Generation & Elevation Profiles',
      'Infrastructure Corridor & Route Alignment Surveys',
      'Practical Fieldwork at FC Road Pune Center',
    ],
  },
  {
    id: 'gis-3m',
    tabName: 'GIS (3 Month)',
    title: 'Certificate Course in GIS (Three Month)',
    duration: '3 Months • 60+ Hours',
    badge: 'Core Professional Track',
    mode: 'Regular & Weekend Batches • Online & Offline',
    heroSubtitle:
      'Master spatial data structures, vector geometry models, raster grids, Coordinate Reference Systems (CRS), thematic cartography, and spatial database querying in QGIS and ArcGIS.',
    eligibility: 'Students, Urban Planners, Environmentalists, and Geologists',
    highlights: [
      'Vector Data (Points, Lines, Polygons) & Continuous Rasters',
      'Coordinate Reference Systems: Geographic (Lat/Lon) vs Projected (UTM)',
      'Spatial Queries, Multi-Ring Buffers & Proximity Operations',
      'QGIS 3 & ArcGIS Desktop Workflow Mastery',
      'Data Quality, Topology Validation & Metadata Standards',
      'Real-world Municipal Mapping Project with Certification',
    ],
  },
  {
    id: 'single-software-1m',
    tabName: 'Single Software (1 Month)',
    title: 'Certificate Course in Single Software (One Month)',
    duration: '1 Month • 25+ Hours',
    badge: 'Tool Specialization',
    mode: 'Flexible Timings • Online & Offline',
    heroSubtitle:
      'Targeted, intensive hands-on mastery in a single industry-leading GIS software tool of your choice (QGIS, ArcGIS Pro, PostGIS, or Global Mapper) for fast upskilling.',
    eligibility: 'Anyone looking to master one specific software for job requirements',
    highlights: [
      'Software Architecture, Toolboxes, Plugins & Customization',
      'Advanced Thematic Cartography, 3D Terrain & Print Layouts',
      'Geodatabase Management & Spatial Relational Queries',
      'Batch Geoprocessing & Spatial Analysis Workflows',
      'Exporting Web Maps & High-Res Presentation Cartography',
      'Software-Specific Institute Certification',
    ],
  },
]

// ==========================================
// PYTHON WITH GIS 5 CURRICULUM MODULES
// ==========================================
interface CurriculumModule {
  id: string
  number: string
  title: string
  duration: string
  badge: string
  summary: string
  topics: string[]
  practicalLab: string
  tools: string[]
}

const MODULES_DATA: CurriculumModule[] = [
  {
    id: 'module-1',
    number: 'Module 01',
    title: 'Python Fundamentals & Object-Oriented Scripting',
    duration: '3 Weeks • 25 Hours',
    badge: 'Core Programming',
    summary:
      'Master fundamental Python syntax, built-in data structures, procedural logic, file I/O, and object-oriented programming (OOP) essential for developing modular, reusable geospatial automation scripts.',
    topics: [
      'Python Syntax, Variables, Dynamic Typing & Expressions',
      'Conditional Logic (if/elif/else) & Loop Structures (for/while)',
      'Data Structures: Lists, Tuples, Dictionaries & Sets',
      'Functions, Variable Scope, *args & **kwargs',
      'File Handling (Reading/Writing TXT, CSV, JSON) & Context Managers',
      'Exception & Error Handling (try/except/finally/raise)',
      'Modules, Packages, Virtual Environments (venv/conda) & Pip',
      'Object-Oriented Programming (Classes, Methods, Inheritance & Polymorphism)',
    ],
    practicalLab:
      'Lab 1: Write an automated Python script to parse, clean, and validate 10,000+ spatial attribute records from corrupt surveyor CSV log files.',
    tools: ['Python 3.11+', 'VS Code', 'JupyterLab'],
  },
  {
    id: 'module-2',
    number: 'Module 02',
    title: 'GIS Fundamentals, Spatial Data Models & Projections',
    duration: '2.5 Weeks • 20 Hours',
    badge: 'Spatial Literacy',
    summary:
      'Understand spatial geometry models (vector points, lines, polygons) vs continuous raster grids, spatial attribute schemas, Coordinate Reference Systems (CRS), and standard GIS data formats.',
    topics: [
      'Introduction to Geographic Information Systems (GIS) & Geospatial Architecture',
      'Spatial Data Models: Vector Geometries (Point, MultiPoint, LineString, Polygon)',
      'Continuous Raster Grids: Resolution, Extent, Bands, Cell Values & NoData',
      'Attribute Tables, Relational Keys & Spatial Database Design',
      'Coordinate Reference Systems (CRS): Geographic (Lat/Lon) vs Projected (UTM/State Plane)',
      'Standard GIS Data Formats: Shapefiles (.shp), GeoJSON, GeoPackage (.gpkg), GeoTIFF',
      'Spatial Data Quality, Precision, Topology Rules & Metadata Standards (ISO 19115)',
    ],
    practicalLab:
      'Lab 2: Perform multi-format GIS data inspection, coordinate reference verification, and topological error fixing in QGIS and Python.',
    tools: ['QGIS 3.x', 'GeoPackage', 'Shapefile Inspector'],
  },
  {
    id: 'module-3',
    number: 'Module 03',
    title: 'Modern Python Geospatial Ecosystem (Vector & Raster)',
    duration: '3.5 Weeks • 30 Hours',
    badge: 'Core Automation',
    summary:
      'Harness powerful geospatial Python libraries (GeoPandas, Shapely, Fiona, Rasterio, PyProj) to load, manipulate, filter, reproject, join, and analyze complex vector and multi-band raster datasets programmatically.',
    topics: [
      'The Python GIS Stack: GeoPandas, Shapely, Fiona, Rasterio & PyProj',
      'GeoDataFrames & Series: Geometries, Spatial Indexing (R-tree) & Querying',
      'Shapely Geometric Operations: Intersection, Union, Difference, Convex Hull & Centroids',
      'Spatial Joins (sjoin) & Predicates (contains, within, intersects, overlaps)',
      'Raster Processing with Rasterio: Windowed Reads, Band Math, Masking & Clipping',
      'Coordinate Transformations & On-the-Fly Reprojections with PyProj',
      'Vectorizing Rasters & Rasterizing Vector Polygons',
      'Exploratory Spatial Data Analysis with Pandas, NumPy, and Matplotlib',
    ],
    practicalLab:
      'Lab 3: Build a production batch pipeline that reprojects, clips, and spatially joins 500+ district shapefiles with census demographic tables in under 30 seconds.',
    tools: ['GeoPandas', 'Shapely', 'Rasterio', 'PyProj', 'NumPy', 'Matplotlib'],
  },
  {
    id: 'module-4',
    number: 'Module 04',
    title: 'Map Projections, Geodesy & Elevation Reference Systems',
    duration: '1.5 Weeks • 12 Hours',
    badge: 'Geodetic Science',
    summary:
      'Understand the mathematical principles of converting the curved 3D ellipsoidal Earth to flat 2D maps, analyze distortion trade-offs, and master vertical datum height transformations.',
    topics: [
      'The Geoid, Reference Ellipsoid (WGS84, GRS80) & Actual Topographic Surface',
      'Height Systems Relationship: h = H + N (Ellipsoidal, Orthometric & Geoid Undulation)',
      'Projection Families: Cylindrical (Mercator), Conical (Lambert), Planar / Azimuthal',
      'Common Projections: Universal Transverse Mercator (UTM Zones), Robinson, Web Mercator (EPSG:3857)',
      'Distortion Analysis: Shape (Conformal), Area (Equivalent), Distance (Equidistant) & Direction',
      'Why no single map projection preserves all properties simultaneously',
      'Calculating and correcting geoid separation using EGM96 / EGM2008 gravity models',
    ],
    practicalLab:
      'Lab 4: Calculate geoid undulation corrections for GNSS elevation measurements across Maharashtra surveying benchmarks using Python scripts.',
    tools: ['PyProj Geodesy', 'EPSG Registry', 'EGM2008 Models'],
  },
  {
    id: 'module-5',
    number: 'Module 05',
    title: 'Hydrological Modeling, DEM Extraction & Buffer Workflows',
    duration: '2 Weeks • 18 Hours',
    badge: 'Advanced Capstones',
    summary:
      'Implement real-world spatial analysis workflows: Multi-ring buffer analysis for urban emergency proximity, and complete hydrological drainage extraction from Digital Elevation Models (DEM).',
    topics: [
      'Buffer Analysis Theory: Proximity, Influence Zones & Spatial Envelopes',
      'Point Buffers: Healthcare, School & Transit Service Areas (e.g. 500m / 1km)',
      'Line Buffers: Road Corridors, River Protection Zones & Railway Noise Contours',
      'Polygon Buffers: Forest Conservation Belts & Industrial Safety Perimeters',
      'Fixed Buffers vs Variable Attribute-Driven Buffers',
      'Hydrological Workflow from DEM: Sinks Identification & Sink Filling (depression removal)',
      'Calculating Flow Direction (D8 algorithm) & Upstream Flow Accumulation Grids',
      'Stream Definition Thresholds, Stream Order Linking & Watershed Basin Delineation',
      'Applications: Flood modeling, watershed management, urban stormwater planning',
    ],
    practicalLab:
      'Lab 5: End-to-end extraction of the river drainage network and watershed boundary for a Sahyadri basin from 30m SRTM DEM data.',
    tools: ['Rasterio Hydrology', 'DEM Processing', 'QGIS Flow Models'],
  },
]

// ==========================================
// CAPSTONE PROJECTS
// ==========================================
const CAPSTONE_PROJECTS = [
  {
    title: 'Pune Healthcare Service Area & 500m Buffer Mapping',
    type: 'Spatial Accessibility Analysis',
    tag: 'Urban Planning',
    image: '/images/aerial-map.png',
    description:
      'Engineered an automated multi-ring buffer analysis pipeline evaluating ambulance emergency response accessibility. Scripted variable buffer perimeters around primary hospitals and clinics to identify healthcare desert zones across municipal wards.',
    highlights: [
      'Automated Point & Line buffer generation using Shapely & GeoPandas',
      'Calculated population coverage using spatial joins with ward demographic data',
      'Exported interactive HTML maps with Folium and static publication-ready cartography',
    ],
    skills: ['GeoPandas', 'Buffer Analysis', 'Folium', 'Spatial Join'],
  },
  {
    title: 'Hydrological Drainage Network & Watershed Delineation',
    type: 'DEM Terrain Modeling',
    tag: 'Water Resources',
    image: '/images/engineering-3d-model.png',
    description:
      'Developed a hydrological processing script extracting natural river networks from Digital Elevation Models (DEM). Programmed sink filling, D8 steepest descent flow direction, flow accumulation thresholding, and stream network vectorization.',
    highlights: [
      'Processed 30m SRTM elevation raster grids with Rasterio and NumPy',
      'Extracted Strahler stream order vectors and delineated upstream watershed catchments',
      'Modeled flash flood vulnerability zones along low-lying river tributaries',
    ],
    skills: ['DEM Processing', 'Rasterio', 'NumPy Flow Models', 'Watershed'],
  },
  {
    title: 'Multi-Temporal Satellite NDVI Land-Use Change Detection',
    type: 'Remote Sensing Automation',
    tag: 'Environmental Monitoring',
    image: '/images/firmware-coding.png',
    description:
      'Built a batch satellite imagery ingestion and analysis pipeline that computes Normalized Difference Vegetation Index (NDVI) and Normalized Difference Water Index (NDWI) across multi-year Sentinel-2 scenes.',
    highlights: [
      'Automated multi-band raster stacking, radiometric scaling, and cloud masking',
      'Detected urban vegetation loss and wetland encroachment over a 5-year period',
      'Generated statistical change detection matrices and automated PDF summary reports',
    ],
    skills: ['Satellite Imagery', 'NDVI Band Math', 'Rasterio', 'Matplotlib'],
  },
  {
    title: 'Interactive Web GIS Spatial Dashboard Pipeline',
    type: 'Geospatial Web Application',
    tag: 'Full-Stack GIS',
    image: '/images/surveyor-field.png',
    description:
      'Created a full-featured geospatial visualization dashboard that dynamically queries GeoJSON infrastructure layers, executes live spatial queries, and renders real-time property buffer zones.',
    highlights: [
      'Integrated Python GeoPandas backend with interactive web mapping',
      'Provided polygon spatial query tools and coordinate projection switcher (WGS84 ↔ UTM)',
      'Portfolio-ready GitHub repository with documentation and live web deployment',
    ],
    skills: ['Web GIS', 'GeoJSON', 'Python APIs', 'GitHub Portfolio'],
  },
]

// ==========================================
// TOOLS & TECHNOLOGIES
// ==========================================
const TOOLS_COVERED = [
  { name: 'Python 3.11+', category: 'Core Programming', desc: 'Object-oriented scripting & automation' },
  { name: 'GeoPandas', category: 'Vector GIS', desc: 'Spatial DataFrames & geometric operations' },
  { name: 'Shapely', category: 'Computational Geometry', desc: 'Planar features, buffers & intersections' },
  { name: 'Rasterio', category: 'Raster Processing', desc: 'Multiband satellite imagery & DEM analysis' },
  { name: 'Fiona', category: 'Data I/O', desc: 'Reading & writing vector geospatial formats' },
  { name: 'PyProj', category: 'Cartographic Projections', desc: 'CRS transformations & geodetic math' },
  { name: 'QGIS 3.x', category: 'Desktop GIS & Visuals', desc: 'Validation, styling & map composition' },
  { name: 'GDAL / OGR', category: 'Geospatial Engine', desc: 'Core geospatial data translation library' },
  { name: 'NumPy & Pandas', category: 'Data Science', desc: 'High-performance matrix & array computations' },
  { name: 'Matplotlib', category: 'Spatial Visuals', desc: 'Cartographic thematic maps & histograms' },
  { name: 'PostGIS / SQL', category: 'Spatial Databases', desc: 'Spatial indexing & relational querying' },
  { name: 'JupyterLab', category: 'Dev Environment', desc: 'Interactive notebook prototyping & docs' },
]

// ==========================================
// COURSE FAQS
// ==========================================
const COURSE_FAQS = [
  {
    question: 'Which of the 5 certified courses is right for my background?',
    answer:
      'If you want a complete career transformation, the 6-Month GIS & Remote Sensing Diploma is the gold standard. If you come from a civil or surveying background, the 3-Month GIS & Land Surveying course gives you direct field-to-GIS skills. If you already know GIS and want automation, the 1-Month GIS Python fast-track is ideal. Our counselors at FC Road Pune can help you pick the best track.',
  },
  {
    question: 'Are regular and weekend batches available for working professionals?',
    answer:
      'Yes! All 5 courses offer both Regular Batches (Tuesday to Friday) and Weekend Intensive Batches (Saturdays and Sundays). You can attend in-person at our FC Road, Pune center or join live online with interactive lab guidance.',
  },
  {
    question: 'Is the certification recognized by industry and employers?',
    answer:
      'Yes. Galaxia Geotech Institute of Pune is an ISO 9001:2015 Certified Institute. You receive an official certificate with a verifiable credential ID and QR code, recognized by geospatial engineering consultancies across India.',
  },
  {
    question: 'Do I need prior programming experience for the GIS Python course?',
    answer:
      'No! The GIS Python course starts from scratch with core Python syntax, variables, loops, and functions before moving to spatial libraries like GeoPandas and Rasterio. Beginners are fully supported.',
  },
  {
    question: 'What placement and internship support is provided?',
    answer:
      'We offer 100% placement assistance, resume optimization for GIS Analyst and Developer roles, GitHub portfolio development for your capstone projects, and direct interview scheduling with hiring partners in Pune, Bengaluru, and Mumbai.',
  },
  {
    question: 'Can I pay fees in installments or through zero-cost EMI?',
    answer:
      'Yes! Flexible installment plans and 0% interest EMI options starting at ₹3,500/month are available for all multi-month courses.',
  },
]

export default function CourseDetailsPage() {
  const [selectedCourseModal, setSelectedCourseModal] = useState<string | null>(null)
  const [activeCourseTab, setActiveCourseTab] = useState<string>('gis-rs-6m')
  const [expandedModule, setExpandedModule] = useState<string | null>('module-1')

  const toggleExpandModule = (id: string) => {
    setExpandedModule((prev) => (prev === id ? null : id))
  }

  const currentCourse = OFFICIAL_COURSES.find((c) => c.id === activeCourseTab) || OFFICIAL_COURSES[0]

  return (
    <>
      {/* Main Course Hero Banner */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground py-14 lg:py-16">
        <Image
          src="/images/CoverPhoto.png"
          alt="Galaxia Geotech GIS Training Environment"
          fill
          priority
          className="object-cover opacity-75 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/40" />

        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            {/* Left Content Column */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-400 uppercase border border-emerald-500/30">
                  <ShieldCheck className="size-3.5" /> ISO 9001:2015 Certified Institute
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary uppercase">
                  {currentCourse.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-300">
                  <MapPin className="size-3 text-primary" /> FC Road, Pune &amp; Online
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight uppercase text-white sm:text-4xl md:text-5xl leading-tight">
                {currentCourse.title}
              </h1>

              {/* Tagline */}
              <p className="mt-4 text-base font-medium text-gray-200 sm:text-lg leading-relaxed">
                {currentCourse.heroSubtitle}
              </p>

              {/* Course Meta Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-y border-white/10 py-5">
                <div>
                  <p className="font-display text-lg font-bold text-white">{currentCourse.duration.split('•')[0]}</p>
                  <p className="text-[0.65rem] font-bold tracking-wider text-navy-muted uppercase">
                    Course Duration
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Regular &amp; Weekend</p>
                  <p className="text-[0.65rem] font-bold tracking-wider text-navy-muted uppercase">
                    Batch Schedules
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Online &amp; Offline</p>
                  <p className="text-[0.65rem] font-bold tracking-wider text-navy-muted uppercase">
                    Training Mode
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">100%</p>
                  <p className="text-[0.65rem] font-bold tracking-wider text-navy-muted uppercase">
                    Practical &amp; Job-Ready
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedCourseModal(currentCourse.title)}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02]"
                >
                  <GraduationCap className="size-4" /> Enroll in This Track
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCourseModal(`Free Demo - ${currentCourse.title}`)}
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <Sparkles className="size-4 text-primary" /> Book Free Demo Class
                </button>

                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors"
                >
                  <Download className="size-3.5 text-primary" /> View Syllabus &darr;
                </a>
              </div>
            </div>

            {/* Right Quick Enrollment Card */}
            <div className="rounded-2xl border border-white/15 bg-navy/95 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                    Admissions Open
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    Next Batch Starting Soon
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[0.7rem] font-bold text-emerald-400">
                  Seats Filling Fast
                </span>
              </div>

              <div className="mt-4 space-y-3 text-xs text-gray-200">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-navy-muted">
                    <Clock className="size-4 text-primary" /> Formats
                  </span>
                  <span className="font-bold text-white">Regular &amp; Weekend Batches</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-navy-muted">
                    <Laptop className="size-4 text-primary" /> Training Lab
                  </span>
                  <span className="font-bold text-white">FC Road Pune / Live Online</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-navy-muted">
                    <ShieldCheck className="size-4 text-primary" /> Accreditation
                  </span>
                  <span className="font-bold text-emerald-400">ISO 9001:2015 Institute</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-navy-muted">
                    <Award className="size-4 text-primary" /> Fee Assistance
                  </span>
                  <span className="font-bold text-white">Zero-Cost EMI from ₹3,500/mo</span>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-[0.7rem] text-navy-muted">Speak Directly to Course Counselor:</p>
                <a
                  href="tel:7522929752"
                  className="mt-1 inline-flex items-center gap-1.5 font-display text-base font-bold text-primary hover:underline"
                >
                  <Phone className="size-4" /> 752-2929-752
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCourseModal(currentCourse.title)}
                className="mt-4 w-full rounded-md bg-primary py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Apply for Batch Seat &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Switcher Selector Bar */}
      <nav className="sticky top-16 z-30 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container-page flex items-center justify-between overflow-x-auto py-2.5 text-xs font-bold uppercase tracking-wider no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[0.7rem] font-bold text-muted-foreground mr-2 hidden md:inline-block">
              SELECT PROGRAM:
            </span>
            {OFFICIAL_COURSES.map((course) => (
              <button
                key={course.id}
                type="button"
                onClick={() => setActiveCourseTab(course.id)}
                className={`rounded-lg px-3.5 py-1.5 transition-all text-xs ${activeCourseTab === course.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
              >
                {course.tabName}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setSelectedCourseModal(currentCourse.title)}
            className="hidden lg:inline-flex items-center gap-1 rounded bg-navy px-3.5 py-1.5 text-xs font-bold uppercase text-white hover:bg-navy/90 transition-colors dark:bg-primary dark:text-primary-foreground shrink-0 ml-4"
          >
            Enroll in Selected Track &rarr;
          </button>
        </div>
      </nav>

      {/* Selected Course Overview Section */}
      <section className="bg-background py-16 border-b border-border">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>COURSE OVERVIEW &amp; SYLLABUS</Eyebrow>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-foreground">
                {currentCourse.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {currentCourse.heroSubtitle}
              </p>

              <div className="mt-6 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Core Syllabus &amp; Practical Training Highlights:
                </p>
                {currentCourse.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-xs font-medium text-foreground">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-border bg-card p-4">
                <p className="text-xs font-bold text-foreground uppercase">
                  🎯 Target Audience &amp; Eligibility:
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {currentCourse.eligibility}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCourseModal(currentCourse.title)}
                  className="rounded-md bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Enroll in {currentCourse.tabName}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCourseModal(`Syllabus Request - ${currentCourse.title}`)}
                  className="rounded-md border border-border bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted transition-colors"
                >
                  <Download className="size-3.5 inline mr-1 text-primary" /> Request Full Syllabus PDF
                </button>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                Why Choose Galaxia Geotech for {currentCourse.tabName}?
              </h3>

              <div className="mt-6 space-y-4 text-xs">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-3.5">
                  <ShieldCheck className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground uppercase">ISO 9001:2015 Certified Curriculum</h4>
                    <p className="mt-0.5 text-muted-foreground">
                      Structured curriculum aligned with current industry standards in Pune and international GIS workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-3.5">
                  <Laptop className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground uppercase">100% Practical Hands-on Labs</h4>
                    <p className="mt-0.5 text-muted-foreground">
                      Dedicated high-performance workstations with dual monitors at Shreenath Plaza, FC Road, Pune.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-3.5">
                  <Compass className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground uppercase">Real Geospatial &amp; Field Data</h4>
                    <p className="mt-0.5 text-muted-foreground">
                      Work with actual satellite rasters, DEM elevation models, and GPS survey data across Maharashtra.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-3.5">
                  <GraduationCap className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground uppercase">Job Guidance &amp; Placement Support</h4>
                    <p className="mt-0.5 text-muted-foreground">
                      Resume preparation, GIS interview questions, and direct references to hiring partner companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Deep-Dive Python with GIS Modules Accordion */}
      <section id="curriculum" className="bg-muted/30 py-20 border-b border-border">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>COMPREHENSIVE CURRICULUM MODULES</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight uppercase text-foreground sm:text-4xl">
              Python with GIS <span className="text-primary">Curriculum Modules</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Explore the five comprehensive modules included in our flagship GIS Python and 6-Month Diploma tracks.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {MODULES_DATA.map((mod) => {
              const isExpanded = expandedModule === mod.id
              return (
                <div
                  key={mod.id}
                  className="rounded-xl border border-border bg-card shadow-sm transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleExpandModule(mod.id)}
                    className="flex w-full items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <span className="rounded bg-navy px-3 py-1 text-xs font-bold uppercase tracking-wider text-white dark:bg-primary dark:text-primary-foreground shrink-0">
                        {mod.number}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                          {mod.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1 font-semibold text-primary">
                            <Clock className="size-3.5" /> {mod.duration}
                          </span>
                          <span>•</span>
                          <span className="font-medium">{mod.badge}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-block text-xs font-bold text-muted-foreground uppercase">
                        {isExpanded ? 'Collapse' : 'Expand Topics'}
                      </span>
                      <span className="flex size-8 items-center justify-center rounded-full border border-border bg-background">
                        {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border p-6 sm:p-8 bg-muted/20">
                      <p className="text-sm text-foreground leading-relaxed font-medium">
                        {mod.summary}
                      </p>

                      <div className="mt-6 grid gap-8 lg:grid-cols-2">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                            <BookOpen className="size-4" /> Detailed Topics Covered:
                          </h4>
                          <ul className="mt-3 space-y-2 text-xs">
                            {mod.topics.map((t) => (
                              <li key={t} className="flex items-start gap-2 text-foreground font-medium">
                                <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-5">
                          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                              <Terminal className="size-4" /> Hands-On Practical Lab Assignment:
                            </h4>
                            <p className="mt-2 text-xs leading-relaxed font-medium text-foreground">
                              {mod.practicalLab}
                            </p>
                          </div>

                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                              Tools &amp; Libraries Practiced:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {mod.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="rounded-md border border-border bg-card px-3 py-1 text-xs font-bold text-foreground"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section: Capstone Projects */}
      <section id="projects" className="bg-background py-20 border-b border-border">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>REAL-WORLD PORTFOLIO</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-4xl text-foreground">
              Hands-On <span className="text-primary">Capstone Projects</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Build GitHub-ready geospatial projects with real Maharashtra river basin and municipal GIS data.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {CAPSTONE_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden border-b border-border bg-navy">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      {proj.tag}
                    </span>
                    <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase">
                      {proj.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {proj.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {proj.description}
                    </p>

                    <div className="mt-5 space-y-1.5 border-t border-border pt-4">
                      <p className="text-[0.7rem] font-bold uppercase tracking-wider text-foreground">
                        Key Outcomes:
                      </p>
                      {proj.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs font-medium text-foreground">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border bg-muted/40 p-4 px-6 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded bg-background border border-border px-2 py-0.5 text-[0.65rem] font-bold text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-[0.7rem] font-bold text-primary uppercase">
                    Portfolio Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Geospatial Tools */}
      <section id="tools" className="bg-muted/30 py-20 border-b border-border">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>TOOLS &amp; LIBRARIES</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-4xl text-foreground">
              Master the Modern <span className="text-primary">Geospatial Stack</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Industry-standard open-source libraries, desktop GIS software, and spatial database tools.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TOOLS_COVERED.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-sm"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary block">
                  {tool.category}
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-foreground">
                  {tool.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: FAQs */}
      <section id="faqs" className="bg-background py-20 border-b border-border">
        <div className="container-page max-w-4xl">
          <div className="text-center">
            <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-4xl text-foreground">
              Courses &amp; <span className="text-primary">Admissions FAQ</span>
            </h2>
          </div>

          <div className="mt-10 rounded-xl border border-border bg-card">
            <FaqAccordion items={COURSE_FAQS} />
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Still have questions about batch timings or fees? Talk to our counselors at FC Road Pune.
            </p>
            <div className="mt-3 flex justify-center gap-4">
              <a
                href="tel:7522929752"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline uppercase"
              >
                <Phone className="size-3.5" /> Call 752-2929-752
              </a>
              <span className="text-border">|</span>
              <Link
                href="/contact"
                className="text-xs font-bold text-foreground hover:text-primary transition-colors uppercase"
              >
                Schedule Lab Visit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Bottom Banner */}
      <section className="bg-navy py-16 text-navy-foreground text-center">
        <div className="container-page max-w-3xl">
          <Eyebrow>GALAXIA GEOTECH INSTITUTE OF PUNE</Eyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white">
            Ready to Build Your Career in GIS &amp; Remote Sensing?
          </h2>
          <p className="mt-3 text-sm text-navy-muted">
            Regular &amp; Weekend Batches Available. Online &amp; Offline Classes at FC Road, Pune.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setSelectedCourseModal(currentCourse.title)}
              className="rounded-md bg-primary px-8 py-3.5 text-xs font-bold tracking-wider text-primary-foreground uppercase shadow-lg transition-colors hover:bg-primary/90"
            >
              Enroll in {currentCourse.tabName} &rarr;
            </button>
            <button
              type="button"
              onClick={() => setSelectedCourseModal('Book Free Demo Session')}
              className="rounded-md border border-white/30 bg-white/10 px-8 py-3.5 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Book Free Demo Session
            </button>
          </div>
        </div>
      </section>

      {/* Global Enrollment Modal */}
      <EnrollmentModal
        isOpen={selectedCourseModal !== null}
        onClose={() => setSelectedCourseModal(null)}
        defaultCourse={selectedCourseModal || currentCourse.title}
      />
    </>
  )
}
