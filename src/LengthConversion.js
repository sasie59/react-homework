import React, { Component } from 'react';
import LengthInput from './LengthInput';

const turnLength = (value,lengthType,returntype,id) => {
  if(id === 1) 
  {const base = {
    mm : 1,
    cm : 1 / 10,
    m : 1 / 1000,
    km :1 / 1000000
  }
} else if(id === 2) {
  const base = {
    mm : 10,
    cm : 1,
    m : 1 / 100,
    km : 1 / 100000
  }
}else if(id === 3) {
  const base = {
    mm : 1000,
    cm : 100,
    m : 1,
    km : 1 / 1000
  }
}else if(id === 4) {
  const base = {
    mm : 1000000,
    cm : 100000,
    m : 1000,
    km : 1
  }
}
  return lengthType === returntype ? value : value * base[returntype] 
}

export default class LengthConversion extends Component {
  constructor(){
    super()
    this.state = {
      value : 0,
      lengthType : ''
    }
  }
  handleChange = ({target}) => {
    this.setState({
      value : target.value,
      lengthType :target.name
    })
  }
  render() {
    const {value,lengthType} = this.state;
    let mm = turnLength(value, lengthType,"mm", 1);
    let cm = turnLength(value, lengthType,"cm", 2);
    let m = turnLength(value, lengthType,"m", 3);
    let km = turnLength(value, lengthType,"km", 4);
    return (
      <div>
        <h1>長度轉換</h1>
        <form>
          <LengthInput
            id={1}
            value={mm}
            lengthType="mm"
            onChange={this.handleChange}/>
          <LengthInput
            id={2}
            value={cm}
            lengthType="cm"
            onChange={this.handleChange}/>
          <LengthInput
            id={3}
            value={m}
            lengthType="m"
            onChange={this.handleChange}/>
          <LengthInput
            id={4}
            value={km}
            lengthType="km"
            onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}
