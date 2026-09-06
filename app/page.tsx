import { HomeHero } from '@/components/home/home-hero'
import { StudentPrograms } from '@/components/home/student-programs'
import { CoreCapabilities } from '@/components/home/core-capabilities'
import { StabilityProcess } from '@/components/home/stability-process'
import { IndustriesServed } from '@/components/home/industries-served'
import { SignatureProjects } from '@/components/home/signature-projects'
import { FeedbackQueries } from '@/components/home/feedback-queries'
import { OrangeCta } from '@/components/orange-cta'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StudentPrograms />
      <CoreCapabilities />
      <StabilityProcess />
      <IndustriesServed />
      <SignatureProjects />
      <FeedbackQueries />
      <OrangeCta
        title="Ready to Build Your GIS Career?"
        description="Learn Python, GIS and geospatial analysis through practical projects with institute-recognized certification."
        primary={{ label: 'Enroll in Python with GIS →', href: '/contact' }}
        secondary={{ label: 'Talk to an Instructor', href: '/contact' }}
      />
    </>
  )
}
