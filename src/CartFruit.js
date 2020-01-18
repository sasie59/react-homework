import React from 'react';

export default function CartFruit(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>${props.price}</span>
      <form onSubmit={props.onSubmit}>
        <input onChange={props.onChange} count={props.count} type="number" placeholder='數量'/>
        <button>加入購物車</button>
      </form>
    </div>
  )
}
