import React from 'react'

export default function LengthInput(props) {
  return (
    <div>
      <input       
        type="number"
        id={props.id}
        value={props.value}
        name={props.lengthType}
        onChange={props.onChange}
        />{props.lengthType}
    </div>
  )
}
