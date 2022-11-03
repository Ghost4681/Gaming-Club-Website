import React from 'react'
import img1 from '../white-logo.png'
import Landing from './Landing'
import About from './About/About'
import About_Us from './About_Us'
import Tourney from './Tourney'
import Footer from './Footer'

function Homepage() {
  return (
    <div>
      <Landing />
      <About_Us />
      <Tourney />
      <Footer />
    </div>
  )
}

export default Homepage