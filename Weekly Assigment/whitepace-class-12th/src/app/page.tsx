import React from 'react'
import HeroSection from '@/components/Home/HeroSection'
import OurSponsors from '@/components/Home/OurSponsors'
import ProjectManagement from '@/components/Home/ProjectManagement'
import WorkTogether from '@/components/Home/WorkTogether'
import YourWork from '@/components/Home/YourWork'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProjectManagement />
      <WorkTogether />
      <YourWork />
      <OurSponsors />
    </div>
  )
}

export default Home
