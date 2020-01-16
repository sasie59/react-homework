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
      value : '',
      isJoin : false,
      sum : 0,
    }
  }

  handleSubmit = (event) => {
    const money = fruitList.price * this.state.count
    event.preventdefault()
    this.setState ({
      value : '',
      isJoin : true,
      [event.target.count] : +event.target.value + this.state.count,
      sum : this.state.sum + money
    })
  }

  handleChange = ({target}) => {
    this.setState ({
      [target.name] : +target.value,
    })
  }
  
  render() {
    const {count} = this.state;
    const money = fruitList.price * this.state.count
    const itemList = fruitList.map(fruit =>(
      <li key={fruit.name}> {fruit.name} * {count} = {money}</li>
      // 我這邊的count有問題 so出現nan
    ))
    return (
      <div>
        {fruitList.map(fruit => (
        <CartFruit
          count={this.state.count}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          key={fruit.name}
          name={fruit.name}
          price={fruit.price}/>
        ))}
        <ul>
          {itemList}
          <li>========</li>
          <li>${this.state.sum}</li>
        </ul>
      </div>
    )
  }
}
