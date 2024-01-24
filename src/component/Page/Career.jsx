import React from 'react'
import CareerHero from '../element/careerSection/CareerHero'
import CareerTeam from '../element/careerSection/CareerTeam'
import CareerTracker from '../element/careerSection/CareerTracker'
import CareerJob from '../element/careerSection/CareerJob'
import CareerHiring from '../element/careerSection/CareerHiring'

const Career = () => {
  document.title='GoMarkho-Career Page'


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