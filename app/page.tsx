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
        title="Ready to Launch Your Career in Embedded Systems &amp; IoT?"
        description="Join our upcoming offline batch in Pune. Get 500+ hours of hands-on hardware lab access, senior R&amp;D mentorship, and 100% placement assistance."
        primary={{ label: 'Explore All Courses', href: '/courses' }}
        secondary={{ label: 'Book Free Demo Class', href: '/contact' }}
      />
    </>
  )
}
