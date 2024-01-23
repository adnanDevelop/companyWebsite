import React from 'react'
import ContactHeader from '../element/ContactSection/ContactHeader'
import ContactForm from '../element/ContactSection/ContactForm'
import ContactMap from '../element/ContactSection/ContactMap'
import ContactFaq from '../element/ContactSection/ContactFaq'

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <ContactFaq />
      <ContactMap />
    </div>
  )
}

export default Contact