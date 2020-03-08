import React, { Component } from 'react';

export default class HW11ColorPad extends Component {
  constructor() {
    super()
    this.state = {
      r : 0,
      g : 0,
      b : 0
    }
  }
  handleChangle = ({target}) => {
    this.setState ({
      [target.name] : target.value
    });
  }

  render() {
    const {r, g, b} = this.state;
    return (
      <div>
        <h1>調色盤</h1>
        <input name="r" value={r} type="range" min="0" max="255" onChange={this.handleChangle} />
        <input name="g" value={g} type="range" min="0" max="255" onChange={this.handleChangle} />
        <input name="b" value={b} type="range" min="0" max="255" onChange={this.handleChangle} />
        <div style={{
          width : '200px',
          height : '200px',
          backgroundColor : `rgb(${r},${g},${b})`
        }}>
        </div>
      </div>
    )
  }
}
