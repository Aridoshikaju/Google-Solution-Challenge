import React, { Component } from "react";
import Slider from "react-slick";
import First from '../images/deskyop.png'
import Second from '../Shared/images/Screenshot 2021-12-06 163856.png'
import Third from '../Shared/images/Profile.png'
// import Second from '../images/Screenshot 2021-12-06 163856.png'
// import Third from '../images/Profile.jpg'
// import './Partner.css'

export default class Partner extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      
      
    };
    return (
      <div>
        <h2>Our Partners</h2>
        <Slider {...settings}>
          
            <img src={Second} />
            <img src={Second}/>
            <img src={Third}/>
            <img src={Second}/>
            <img src={Second}/>
            <img src={Third}/>
          
        </Slider>
      </div>
    );
  }
}