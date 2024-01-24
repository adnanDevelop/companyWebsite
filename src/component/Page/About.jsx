import React from 'react'
import AboutHero from '../element/about/AboutHero'
import AboutCounter from '../element/about/AboutCounter'
import AboutMission from '../element/about/AboutMission'
import AboutStory from '../element/about/AboutStory'
import AboutWork from '../element/about/AboutWork'

const About = () => {
  document.title='GoMarkho-About Page'
  return (
    <div>
      <AboutHero/>
      <AboutCounter/>
      <AboutMission/>
      <AboutStory/>
      <AboutWork/>
    </div>
  )
}

export default About