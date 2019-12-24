import React, { Component } from "react";

export default class GuessNum extends Component {
  constructor() {
    super();
    this.state = {
      value : '',
      minValue: 1,
      maxValue: 1000
    };
  }
  handleChange = ({target}) => {
    this.setState({
      value : target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>
          現在範圍 :{this.state.minValue} ~ {this.state.maxValue}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value}onChange={this.handleChange}/>
          <button>submit</button>
        </form>
      </div>
    );
  }
}
