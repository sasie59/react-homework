import React, { Component } from "react";
import './GuessNum.css'

const MIN = 1;
const MAX = 1000;

export const makeRand = (min = MIN, max = MAX) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class GuessNum extends Component {
  constructor() {
    super();
    this.state = {
      bingoNum: makeRand(MIN, MAX),
      value: "",
      minValue: MIN,
      maxValue: MAX,
      hideAndSee : false
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
    const { value, bingoNum } = this.state;
    if (bingoNum > value) {
      this.setState({
        minValue: +value,
        value: ''
      });
    } else if (value > bingoNum) {
      this.setState({
        maxValue: +value,
        value: ''
      });
    } else if(bingoNum === +value) {
      this.setState({
        hideAndSee : true,
        value: ''
      })
    }
  };

  reBingoNum = () => {
    this.setState({
      bingoNum : makeRand(MIN, MAX),
      hideAndSee : false,
      minValue : MIN,
      maxValue : MAX
    })
  }
  // 按下重新一局時 minValue跟maxValue不會變成1跟1000?

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
            disabled={this.state.hideAndSee}
          />
          <button disabled={this.state.hideAndSee}>submit</button>
        </form>
        <div className={this.state.hideAndSee ? 'see' : 'hide'}>
          答對了!答案就是{this.state.bingoNum}
          <button onClick={this.reBingoNum}>
            重新一局
          </button>
        </div>
      </div>
    );
  }
}
