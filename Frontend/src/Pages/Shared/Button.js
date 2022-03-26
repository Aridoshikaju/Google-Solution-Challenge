import React from 'react'

import './Button.css'

export default function Button(props) {
  return (
    <div>
        {/* <button className={props.className} */}
        <button className="default"
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    </div>
  )
}
