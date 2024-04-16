import Chasa from '@/components/Chasa'
import Commandi from '@/components/Commandi'
import Opengift from '@/components/Opengift'
import Project from '@/components/Project'
import Slider from '@/components/Slider'
import HomePage from '@/pages/HomePage'
import React from 'react'
import './../components/styles/App.css'

const page = () => {
  return (
    <div>
      <HomePage/>
      <Slider/>
      <Opengift/>
      <Project/>
      <Commandi/>
      <Chasa/>
    </div>
  )
}

export default page
