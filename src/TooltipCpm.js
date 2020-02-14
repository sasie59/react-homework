import React from 'react'
import './Tooltip.css'

export default function Tooltipcpm(props) {
  return (
    <div>
      <button className='btn tooltip'>{props.children}</button>
    </div>
  )
}
