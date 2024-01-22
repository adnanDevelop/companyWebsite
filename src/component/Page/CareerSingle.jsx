import React from 'react'
import { useParams } from 'react-router-dom'
import { jobContent } from '../Data/Api';
import JobDetail from '../element/CareerSingle/JobDetail';

const CareerSingle = () => {
  const { userId } = useParams();

  const singleJob = jobContent.filter((element, index) => {
    return element.id === +userId
  })

  return (
    <div>
      <JobDetail data={singleJob} />
      
    </div>
  )
}

export default CareerSingle