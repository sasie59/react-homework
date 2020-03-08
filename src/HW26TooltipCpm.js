import React from 'react'
import './Tooltip.css'

export default function HW26Tooltipcpm(props) {
  return (
    <span className='tooltip-wrapper'>
      {props.children}
      <div className={`tooltip ${props.at}`}>
        {props.text}
      </div>
    </span>
  )
}
