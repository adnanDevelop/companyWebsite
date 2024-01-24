import React from 'react'
import WorkHeader from '../element/workTogether/WorkHeader'
import WorkForm from '../element/workTogether/WorkForm'

const WorkTogether = () => {
  document.title = 'GoMarkho-Work Together'

  return (
    <div>
      <WorkHeader />
      <WorkForm />
    </div>
  )
}

export default WorkTogether