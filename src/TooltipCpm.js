import React from 'react'
import './Tooltip.css'

export default function Tooltipcpm(props) {
  return (
    <div>
      <button className='btn'>{props.children}</button>
    </div>
  )
}
