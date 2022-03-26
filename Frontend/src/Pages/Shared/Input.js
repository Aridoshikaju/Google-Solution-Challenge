import React from 'react'

import './Input.css'

export default function Input(props) {
  return (
    <div className='default'>
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} placeholder={props.placeholder} type={props.type}/>
    </div>
  )
}
