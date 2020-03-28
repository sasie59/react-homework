import React, { Component } from "react";
import './HW20GuessNum.scss';

const MIN = 1;
const MAX = 1000;

export const makeRand = (min = MIN, max = MAX) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const resetData = () => {
  return {
    value: "",
    minValue: MIN,
    maxValue: MAX,
    hideAndSee : false,
    bingoNum: makeRand(MIN, MAX),
  };
};

export default class HW20GuessNum extends Component {
  constructor() {
    super();
    this.state = resetData();
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { bingoNum } = this.state;
    const value = +this.state.value;

    let updateState = {
      value: ''
    };

    if(bingoNum > value) {
      updateState.minValue = value;
    } else if (bingoNum < value) {
      updateState.maxValue = value;
    } else {
      updateState.hideAndSee = true;
    }

    // 看一下 updateState是什麼
    console.warn(updateState);
    this.setState(updateState);
  };

  reBingoNum = () => {
    this.setState(resetData());
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
