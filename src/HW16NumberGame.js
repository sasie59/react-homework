import React, { Component } from 'react';

const getRandomNumber = () => {
  return Math.floor(Math.random()*10);
}

export default class HW16NumberGame extends Component {
  constructor(){
    super();
    this.state = {
      random : getRandomNumber(),
      bingoCount : 0,
      failCount :0,
      value :''
    }
  }
  handleChange = ({target}) => {
    const { random } = this.state;
    const result = +target.value === random ? 'bingoCount': 'failCount';

    this.setState({
      random : getRandomNumber(),
      [result]: this.state[result] + 1
      // this.state.bingoCount or this.state.failCont
    });

    // if(+target.value === random) {
    //   this.setState({
    //     random : getRandomNumber(),
    //     bingoCount : bingoCount + 1
    //   });
    // }
    // else {
    //   this.setState({
    //     random : getRandomNumber(),
    //     failCount : failCount + 1
    //   });
    // }
  }


  render() {
    const {random,bingoCount,failCount,value} = this.state;
    return (
      <h1>
        {random}<br />
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <div>答對: {bingoCount}</div>
        <div>答錯: {failCount}</div>
      </h1>
    )
  }
}
