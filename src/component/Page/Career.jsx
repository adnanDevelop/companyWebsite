import React from 'react'
import CareerHero from '../careerSection/CareerHero'
import CareerTeam from '../careerSection/CareerTeam'
import CareerTracker from '../careerSection/CareerTracker'
import CareerJob from '../careerSection/CareerJob'
import CareerHiring from '../careerSection/CareerHiring'

const Career = () => {
  return (
    <div>
      <CareerHero/>
      <CareerTeam/>
      <CareerTracker/>
      <CareerJob/>
      <CareerHiring/>
    </div>
  )
}

export default Career