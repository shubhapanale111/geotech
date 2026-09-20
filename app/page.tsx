import { CoreCapabilities } from '@/components/home/core-capabilities'
import { FeedbackQueries } from '@/components/home/feedback-queries'
import { HomeHero } from '@/components/home/home-hero'
import { IndustriesServed } from '@/components/home/industries-served'
import { InstituteImageCarousel } from '@/components/home/institute-image-carousel'
import { SignatureProjects } from '@/components/home/signature-projects'
import { StudentPrograms } from '@/components/home/student-programs'
import { StudentTestimonialsCarousel } from '@/components/home/student-testimonials-carousel'
import { OrangeCta } from '@/components/orange-cta'

export default function HomePage() {
  return (
    <>
      {/* <InstituteImageCarousel /> */}
      <HomeHero />
      <StudentPrograms />
      <InstituteImageCarousel />
      <CoreCapabilities />
      <IndustriesServed />
      <SignatureProjects />
      <StudentTestimonialsCarousel />
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
