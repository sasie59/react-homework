import React, { Component } from 'react';
import './Gopher.css'

export default class Gopher extends Component {
  constructor(){
    super()
    this.state ={
      count : 0,
      mouse : 'G'
    }
  }
  
  componentDidMount() {
    setInterval(this.changeNum, Math.floor(Math.random()*2501))
  }

  changeNum = () => {
    const {mouse} = this.state;
    const num = mouse === 'G' ? '-' : 'G';
    this.setState({
      mouse : num
    })
  }
  
  handleClick = () => {
    const {mouse, count} = this.state;
    const result = mouse === 'G' ? 1 : -1
    this.setState({
      count : count + result,
      mouse : '-'
    })
  }

  
  render() {
    const {count, mouse} = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <div>
          <button onClick={this.handleClick}>{mouse}</button>
          <button onClick={this.handleClick}>{mouse}</button>
          <button onClick={this.handleClick}>{mouse}</button>
        </div>
        <div>
          <button onClick={this.handleClick}>{mouse}</button>
          <button onClick={this.handleClick}>{mouse}</button>
          <button onClick={this.handleClick}>{mouse}</button>
        </div>
        <div>
          <button onClick={this.handleClick}>{mouse}</button>
          <button onClick={this.handleClick}>{mouse}</button>
          <button onClick={this.handleClick}>{mouse}</button>
        </div>
      </div>
    )
  }
}
