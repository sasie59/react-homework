import React from 'react';

export default function CurrencyInput(props) {
  return (
    <div>
      <input
        value={props.value}
        type="number"
        name={props.currencyType}
        onChange={props.onChange}  
        />{props.currencyType}
    </div>
  )
}
