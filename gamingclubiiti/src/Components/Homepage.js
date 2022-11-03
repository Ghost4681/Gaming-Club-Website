import React from 'react'
import img1 from '../white-logo.png'
import Landing from './Landing_mobile'
import About from './About/About'
import About_Us from './About_Us_mobile'
import Tourney from './Tourney_mobile'
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