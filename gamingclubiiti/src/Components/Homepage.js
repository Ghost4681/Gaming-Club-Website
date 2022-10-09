import React from 'react'
import img1 from '../white-logo.png'
import Landing from './Landing'
import About from './About'
import Tourney from './Tourney'
import Footer from './Footer'

function Homepage() {
  return (
    <div>
      <Landing />
      <About id="about"/>
      <Tourney />
      <Footer />
    </div>
  )
}

export default Homepage