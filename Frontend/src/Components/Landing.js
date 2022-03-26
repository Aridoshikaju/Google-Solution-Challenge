import React from 'react'
import Slideshow from './Shared/Slideshow'
import Navbar from './Landing/Navbar'
import Auth from './Login/Auth'
function Landing() {
  return (
    <div>
        <a id="scrool_to_top" href="#action1"></a>
        <Auth/>
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