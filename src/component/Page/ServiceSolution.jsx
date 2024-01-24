import React from 'react'
import BlogHero from '../element/BlogSection/BlogHero'
import BenefitCard from '../element/SolutionSection/BenefitCard'
import Solutions from '../element/SolutionSection/Solutions'
import FeatureCard from '../element/SolutionSection/FeatureCard'
import Help from '../utils/Help'

const ServiceSolution = () => {
  document.title='GoMarkho-Service Solution'


  const solutionTitle = {
    title: 'Communication Solution',
    content: 'Effective communication is the secret that lies at the heart of every successful business.',
  }

  const helpContent = {
    title: 'How can we help you?',
    content: 'Are you ready to push boundaries and explore new frontiers of innovation?',
  }



  return (
    <div>
      <BlogHero title={solutionTitle.title} content={solutionTitle.content} />
      <BenefitCard />
      <Solutions />
      <FeatureCard />
      <Help title={helpContent.title} content={helpContent.content} />
    </div>
  )
}

export default ServiceSolution