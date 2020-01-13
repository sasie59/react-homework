import React, { Component } from 'react';
import './Cart.css';
import CartFruit from './CartFruit.js'

const fruitList = [
  {name: '橘子', price: 20},
  {name: '蓮霧', price: 30},
  {name: '哈蜜瓜', price: 40},
  {name: '蘋果', price: 50},
  {name: '葡萄柚', price: 15},
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
        {fruitList.map(fruit => (
        <CartFruit  key={fruit.name} name={fruit.name} price={fruit.price}/>
        ))}
      </div>
    )
  }
}
