'use client'
import React from 'react'
import Navbar from '../../components/Navbar'
import FrontendHero from '../../components/FrontendHero'
import Footer from '../../components/Footer'
import Overview from '@/app/components/Overview'

const page = () => {
  return (
    <div>
      <Navbar />
      <FrontendHero />
      <Overview />
      <Footer />
    </div>
  )
}

export default page
