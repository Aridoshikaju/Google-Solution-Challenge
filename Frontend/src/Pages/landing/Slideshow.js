import React from 'react'
import First from './images/deskyop.png'
import Second from './images/Screenshot 2021-12-06 163856.png'
import Third from './images/Profile.jpg'
import {Carousel} from 'react-bootstrap'


function Slideshow() {
  return (
<div style={{width: "100%",align: "center"}}>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={First}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Second}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Third}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
}


export default Slideshow