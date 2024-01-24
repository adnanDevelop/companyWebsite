import React from 'react'
import BlogHero from '../element/BlogSection/BlogHero'
import AutomationCard from '../element/serviceAutomation/AutomationCard';
import AutomationSolution from '../element/serviceAutomation/AutomationSolution';
import AutomationFeature from '../element/serviceAutomation/AutomationFeature';
import Help from '../utils/Help'

const ServiceAutomation = () => {
  document.title = 'GoMarkho-Service Automation'

  const automationTitle = {
    title: 'Process Automation',
    content: 'You need to free your teams from the drudgery of routine tasks to enhance your customers’ experience.',
  }

  const helpContent = {
    title: ' How can we help you?',
    content: 'Tell us your challenges and our experts will help you find the best approach.',
  }


  return (
    <div>
      <BlogHero title={automationTitle.title} content={automationTitle.content} />
      <AutomationCard />
      <AutomationSolution />
      <AutomationFeature />
      <Help title={helpContent.title} content={helpContent.content} />
    </div>
  )
}

export default ServiceAutomation