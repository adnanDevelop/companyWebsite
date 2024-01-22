import React from 'react'
import Hero from '../element/HomeSection/Hero'
import ServiceSection from '../element/HomeSection/ServiceSection'
import ProjectSection from '../element/HomeSection/ProjectSection'
import CompanySection from '../element/HomeSection/CompanySection'
import TestmonialSection from '../element/HomeSection/TestmonialSection'

const Home = () => {
  return (
    <div>
     <Hero/>
     <ServiceSection/>
     <ProjectSection/>
     <CompanySection/>
     <TestmonialSection/>
    </div>
  )
}

export default Home      