import React, { Component } from 'react';

export default class RandomNum extends Component {
  constructor(){
    super()
    this.state = {
      num : 1
    }
  }
  numChange = () => {
    this.setState({
      num : Math.floor(Math.random()*9+1)
      // time : Math.floor(Math.random()*499+500)
    })
  }
  componentDidMount() {
    setInterval(this.numChange, Math.floor(Math.random()*501+500))
  }
  

  render() {
    const {num} = this.state;
    return (
      <div>
        <h1>請設定一個會隨機變化的數字(1~9)</h1>
        <h2>每次變的時間介於 500ms ~ 1000ms 之間</h2>
        <h1>{num}</h1>
        
      </div>
    )
  }
}
