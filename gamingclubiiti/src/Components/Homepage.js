import React from 'react'
import img1 from '../white-logo.png'
import Landing from './Landing'
import About from './About'

function Homepage() {
  return (
    <div>
      <Landing />
      <About id="about"/>
    </div>
  )
}

export default Homepage