'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import ServiceExpertise from '../components/ServiceExpertise'
import Pros from '../components/Pros'

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <ServiceExpertise />
      <Pros />
      <Footer />
    </div>
  )
}

export default Services
