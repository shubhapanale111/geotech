import Image from 'next/image'

const STEPS = [
  {
    step: 'STEP 01',
    image: '/images/engineering-3d-model.png',
    title: 'Input DEM & Fill Sinks',
    description:
      'Load Digital Elevation Model (DEM) data representing terrain elevation and remove artificial depressions that interrupt water flow.',
  },
  {
    step: 'STEP 02',
    image: '/images/surveyor-field.png',
    title: 'Flow Direction & Accumulation',
    description:
      'Determine the direction of steepest descent for each grid cell and calculate upstream contributing flow volumes.',
  },
  {
    step: 'STEP 03',
    image: '/images/aerial-map.png',
    title: 'Stream Definition & Network Output',
    description:
      'Apply accumulation thresholds to derive connected vector stream lines, assign stream orders, and delineate watersheds.',
  },
]

export function StabilityProcess() {
  return (
    <section className="bg-[#f2f0ef] py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">
            Practical GIS Hydrological Workflow
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight uppercase text-gray-900 sm:text-4xl">
            Drainage Network Extraction From DEM
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Learn the step-by-step DEM processing workflow used in watershed delineation, flood
            modeling, water resource management, and environmental planning.
          </p>
        </div>

        <div className="mt-16 relative flex flex-col md:flex-row gap-8 justify-between">
          {STEPS.map((item, index) => (
            <div key={item.step} className="flex-1 text-center relative group">
              <div className="relative h-56 w-full overflow-hidden rounded-lg shadow-sm">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <span className="absolute top-0 left-0 bg-navy px-4 py-2 text-xs font-bold tracking-widest text-white uppercase">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 px-4">
                {item.description}
              </p>

              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-28 -right-8 z-10 translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
