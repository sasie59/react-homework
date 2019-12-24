import React, { Component } from "react";

export default class GuessNum extends Component {
  constructor() {
    super();
    this.state = {
      value : '',
      minValue: 1,
      maxValue: 1000,
      bingoNum : Math.floor(Math.random() * 1001) + 1
    };
  }
  handleChange = ({target}) => {
    this.setState({
      value : target.value
    })
    console.warn(target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const{minValue,maxValue,value} = this.state;
    const newMin = Math.abs(value - minValue);
    const newMax = Math.abs(value - maxValue);
    const min = newMin < newMax ? value : minValue;
    const max = newMax < newMin ? value : maxValue;
    this.setState({
      minValue : min,
      maxValue : max,
      value : ''
    })
    console.warn(value);
    console.warn(newMin);
    
  }

  render() {
    return (
      <div>
        <h1>
          現在範圍 :{this.state.minValue} ~ {this.state.maxValue}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button>submit</button>
        </form>
      </div>
    );
  }
}
