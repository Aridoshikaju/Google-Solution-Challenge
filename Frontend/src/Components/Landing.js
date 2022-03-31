import React from 'react'
import Slideshow from './Shared/Slideshow'
import Navbar from './Landing/Navbar'
import Partner from './Landing/Partner'
import Mission from './Mission'
import Footer from './Footer'
import News from './News'
function Landing() {
  return (
    <div>
        <a id="scrool_to_top" href="#action1"></a>
        <Navbar/>
        <Slideshow/>
        {/* <Partner/> */}
        <Mission/>
        <a id="scrool_to_about_us" href="#action1">
        </a>
        <News/>
        <Footer/>
    </div>
  )

}
export default Landing