import React, { Component } from 'react';

export default class HW10Currency extends Component {
  constructor() {
    super()
    this.state = {
      value : 0,
      currencyType : ''
    }
  }

  handleChange = ({target}) => {
    
    this.setState({
      value : target.value,
      currencyType : target.name
    });
  }
  render() {
    const {currencyType, value} = this.state;

    let twd = currencyType === 'twd' ? value: value * 30;
    let usd = currencyType === 'usd' ? value: value / 30;


    // if(currencyType === "twd") {
    //   twd = value;
    //   usd = value / 30;
    // } else if (currencyType === 'usd'){
    //   usd = value;
    //   twd = value * 30;
    // }
    return (
      <div>
        <input
          value={twd}
          type="text"
          name="twd"
          onChange={this.handleChange}  
          />TWD
        <br />
        <input
          value={usd}
          type="text"
          name="usd"
          onChange={this.handleChange}
          />USD
      </div>
    )
  }
}
