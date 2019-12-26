import React, { Component } from "react";

// const bingo = () => {
//   Math.floor(Math.random() * 1001 + 1);
// };
export default class GuessNum extends Component {
  constructor() {
    super();
    this.state = {
      bingoNum: Math.floor(Math.random() * 1001 + 1),
      value: "",
      minValue: 1,
      maxValue: 1000,
    };
  }
  handleChange = ({ target }) => {
    this.setState({
      value: target.value
    });
  };

  handleSubmit = event => {
    
    event.preventDefault();
    console.warn(this.state.bingoNum);
    const { value, bingoNum, minValue, maxValue } = this.state;
    if (bingoNum > value) {
      this.setState({
        minValue: value,
        value: ''
      });
    } else if (value > bingoNum) {
      this.setState({
        maxValue: value,
        value: ''
      });
    } else if(bingoNum === +value) {
      alert('答對了')
    }
    console.warn(minValue, maxValue);
  };

  render() {
    return (
      <div>
        <h1>
          現在範圍 :{this.state.minValue} ~ {this.state.maxValue}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
