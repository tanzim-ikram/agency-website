'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import CareerHero from '../components/CareerHero'
import Footer from '../components/Footer'
import Openings from '../components/Openings'
import Benefits from '../components/Benefits'

const Career = () => {
  return (
    <div>
      <Navbar />
      <CareerHero />
      <Openings />
      <Benefits />
      <Footer />
    </div>
  )
}

export default Career
