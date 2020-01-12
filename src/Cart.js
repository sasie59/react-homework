import React, { Component } from 'react';
import './Cart.css';

const fruitList = [
  {product : '橘子', price: 20},
  {product : '蓮霧', price: 30},
  {product : '哈蜜瓜', price: 40},
  {product : '蘋果', price: 50},
  {product : '葡萄柚', price: 15},
]

export default class Cart extends Component {
  constructor(){
    super()
    this.state = {
      value : ''
    }
  }
  render() {
    console.warn(fruitList[0]);
    return (
      <div>
        <form className='box'>
          <input type="number" placeholder='數量'/>
          <button>加入購物車</button>
        </form>  
      </div>
    )
  }
}
