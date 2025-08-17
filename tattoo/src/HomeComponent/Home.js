import React from 'react'
import Frontpic from './Frontpic'
import Skills from './Skills'
import About from './About'
import Service from './Service'
import Gallery from './Gallery'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
      <Frontpic/>
      <Skills/>
      <About/>
      <Service/>
      <Gallery/>
      <Contact/>
    </div>
  )
}
