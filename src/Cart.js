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
      count : 0
    }
  }

  handleSubmit = (event) => {
    event.preventdefault()
    const money = fruitList.price * this.state.count
    this.setState ({
      value : '',
      isJoin : true,
      sum : this.state.sum + money,
      [event.target.count] : event.target.value + this.state.count,
      // count : this.state.count + event.target.value
      // 我覺得我count的寫法怪怪的
    })
    console.warn(this.state.count);
    // 畫面一閃而過 出現錯誤 但也印不count
  }

  handleChange = ({target}) => {
    this.setState ({
      [target.name] : target.value,
    })
    console.warn([target.name], target.value);
    // [target.name]印不出東西來
  }
  
  render() {
    const {count} = this.state;
    const itemList = fruitList.map(fruit =>(
      <li key={fruit.name}> {fruit.name} * {count} = {fruit.price * count}</li>
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
