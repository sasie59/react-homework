import React from 'react';

export default function HW10CurrencyInput(props) {
  return (
    <div>
      <input
        value={props.value}
        type="number"
        name={props.currencyType}
        onChange={props.onChange}  
      />{props.currencyType}
    </div>
  );
}
