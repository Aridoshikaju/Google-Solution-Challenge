import React from 'react'
import Vision_img from '../images/glass1.jpeg'
import {Card} from 'react-bootstrap'
import './Vision.css'

function Vision() {
  return (
    <div className='container m-5'>
        <div className='row h2'><div className='col'><h2>Our Vision</h2></div></div>
        <div className='row mt-2'>
            <div className='col-sm-4'>
                <Card.Img src={Vision_img} />
            </div>
            <div className='col-sm-8 text-left'>
                <p className='text-left'>
                The Akshaya Patra Foundation is a not-for-profit organisation headquartered in Bengaluru, India. The Foundation strives to eliminate classroom hunger by implementing the Mid-Day Meal Programme. It provides nutritious meals to children studying in Government schools and Government-aided schools. Akshaya Patra also aims to counter malnutrition and support right to education of children hailing from socio-economically challenging backgrounds.
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Vision