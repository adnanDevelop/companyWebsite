import React from 'react'
import BlogHero from '../element/BlogSection/BlogHero'
import Help from '../utils/Help'
import DevelopmentCard from '../element/softwareDevelopment/DevelopmentCard'
import DevelopmentSolution from '../element/softwareDevelopment/DevelopmentSolution'
import DevelopmentFeature from '../element/softwareDevelopment/DevelopmentFeature'

const ServiceSoftware = () => {
  document.title='GoMarkho-Service Software'

  const solutionTitle = {
    title: 'Software Development',
    content: 'Any business that aims to offer a personalized services needs to cater to its own specific needs first.”',
  }

  const helpContent = {
    title: 'How can we help you?',
    content: 'Tell us your challenges and our experts will help you find the best approach.',
  }



  return (
    <div>
      <BlogHero title={solutionTitle.title} content={solutionTitle.content} />
      <DevelopmentCard />
      <DevelopmentSolution />
      <DevelopmentFeature />
      <Help title={helpContent.title} content={helpContent.content} />
    </div>
  )
}

export default ServiceSoftware