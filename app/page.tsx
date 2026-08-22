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
        title="Ready to Secure Your Structural &amp; Engineering Career?"
        description="Explore our industry-aligned student training tracks or talk with our academic consultants."
        primary={{ label: 'Explore All Courses', href: '/courses' }}
        secondary={{ label: 'Apply for Admission', href: '/contact' }}
      />
    </>
  )
}
