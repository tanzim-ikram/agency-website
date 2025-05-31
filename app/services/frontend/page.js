'use client'
import React from 'react'
import Navbar from '../../components/Navbar'
import FrontendHero from '../../components/FrontendHero'
import Footer from '../../components/Footer'
import Overview from '@/app/components/Overview'
import Process from '@/app/components/Process'
import FAQ from '@/app/components/FAQ'

const Frontend = () => {
  return (
    <div>
      <Navbar />
      <FrontendHero />
      <Overview />
      <Process />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Frontend
