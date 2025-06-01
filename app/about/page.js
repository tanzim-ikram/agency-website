'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import WhatWeDo from '../components/WhatWeDo'
import AboutFooter from '../components/AboutFooter'

const About = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <WhatWeDo />
        <AboutFooter />
    </div>
  )
}

export default About
