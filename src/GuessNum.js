import React, { Component } from "react";
import './GuessNum.css'

export default class GuessNum extends Component {
  constructor() {
    super();
    this.state = {
      bingoNum: Math.floor(Math.random() * 1001) + 1,
      value: "",
      minValue: 1,
      maxValue: 1000,
      hideAndSee : !1
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
    const { value, bingoNum} = this.state;
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
        hideAndSee : !0
      })
    }
  };

  reBingoNum = () => {
    this.setState({
      bingoNum : Math.floor(Math.random() * 1001 )+ 1,
      hideAndSee : !1
    })
  }

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
          <div className={this.state.hideAndSee ? 'see' : 'hide'}>
            答對了!答案就是{this.state.bingoNum}
            <button onClick={this.reBingoNum}>
              重新一局
            </button>
          </div>
        </form>
      </div>
    );
  }
}
