import React, { Component } from 'react';
import CurrencyInput from './CurrencyInput';

const turnCurrency = (value, currencyType, returnType) => {
  const base = {
    twd: 30,
    usd: 1 / 30,
  };
  return currencyType === returnType ? value : value * base[returnType];
};

export default class HW10Currency2 extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      currencyType: ''
    };
  }

  handleChange = ({ target }) => {

    this.setState({
      value: target.value,
      currencyType: target.name
    });
  }
  render() {
    const { currencyType, value } = this.state;

    let twd = turnCurrency(value, currencyType, 'twd');
    let usd = turnCurrency(value, currencyType, 'usd');

    // let twd = currencyType === 'twd' ? value: value * 30;
    // let usd = currencyType === 'usd' ? value: value / 30;

    return (
      <div>
        <CurrencyInput
          value={twd}
          currencyType="twd"
          onChange={this.handleChange}
        />
        <CurrencyInput
          value={usd}
          currencyType="usd"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
