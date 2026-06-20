import React from 'react'
import './Services.css'

function Services() {

  const services = [
    {
      title: "Recruitment & Staffing",
      desc: "End-to-end hiring solutions including bulk hiring, screening, and placement support."
    },
    {
      title: "Job Placement",
      desc: "Helping candidates find the right jobs in IT, Non-IT, and BPO sectors."
    },
    {
      title: "Career Counselling",
      desc: "Personalized guidance to help candidates choose the right career path."
    },
    {
      title: "Resume Building",
      desc: "Professional resumes and profile enhancement to stand out."
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews and training to boost confidence and performance."
    },
    {
      title: "Overseas Placement",
      desc: "Opportunities in Gulf, USA, Canada, and other global markets."
    }
  ]

  return (
    <div className='service-container'>
      <h1>Our Services</h1>
      <div className='service-list'>
        {services.map((services, index) => (
          <div className='lists' key={index}>
            <h2>{services.title}</h2>
            <p>{services.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services