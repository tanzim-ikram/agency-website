'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import ContactFAQ from '../components/ContactFAQ'
import ShortFooter from '../components/ShortFooter'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <ShortFooter />
    </div>
  )
}

export default Contact
