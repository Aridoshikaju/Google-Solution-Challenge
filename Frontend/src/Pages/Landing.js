import React from 'react'
import Slideshow from './landing/Slideshow'
import Navbar from './landing/Navbar'
function Landing() {
  return (
    <div>
        <a id="scrool_to_top" href="#action1"></a>
        <Navbar/>
        <Slideshow/>
        <Slideshow/>
        <Slideshow/>
        <Slideshow/>
        <Slideshow/>
        <Slideshow/>
        <a id="scrool_to_about_us" href="#action1">
          <Navbar/>
        </a>
    </div>
  )
}

export default Landing