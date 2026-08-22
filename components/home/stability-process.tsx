import Image from 'next/image'

const STEPS = [
  {
    step: 'STEP 01',
    image: '/images/survey-tripod.png',
    title: 'Digital Site Survey',
    description:
      'Precise mapping and geophysical scanning to understand initial terrain conditions.',
  },
  {
    step: 'STEP 02',
    image: '/images/lab-vials.png',
    title: 'Advanced Lab Testing',
    description:
      'Core sampling and rigorous analysis in our ISO-certified geotechnical laboratories.',
  },
  {
    step: 'STEP 03',
    image: '/images/engineering-3d-model.png',
    title: 'Engineering Analysis',
    description:
      'Computational modeling to deliver optimized foundation designs and risk assessments.',
  },
]

export function StabilityProcess() {
  return (
    <section className="bg-[#f2f0ef] py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">
            The Galaxia Approach
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight uppercase text-gray-900 sm:text-5xl">
            How We Ensure Stability
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Our methodology combines traditional field expertise with modern computational analysis
            to eliminate ground-related risks.
          </p>
        </div>

        <div className="mt-16 relative flex flex-col md:flex-row gap-8 justify-between">
          {STEPS.map((item, index) => (
            <div key={item.step} className="flex-1 text-center relative group">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <span className="absolute top-0 left-0 bg-gray-900 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase">
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
