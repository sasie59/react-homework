import React, { Component } from 'react';

export default class TwinklingChar extends Component {
  constructor(){
    super()
    this.state = {
      value : '',
      count : 0,
      hideAndSeeNum : 'Q'
    }
  }
  componentDidMount() {
    setInterval(this.changeNum, Math.floor(Math.random() * 5001)+ 1000)
  }
  
  handleChange = ({target}) => {
    const {hideAndSeeNum,count} = this.state;
    // console.warn(hideAndSeeNum, target.value);
    const result = target.value.toUpperCase() === hideAndSeeNum ? 1 : -1;
    // console.warn(result);
    this.setState({
      count : count + result,
      hideAndSeeNum : '-'
    })
  }
  changeNum = () => {
    const {hideAndSeeNum} = this.state;
    const num = hideAndSeeNum === 'Q' ? '-' : 'Q';
    this.setState({
      hideAndSeeNum : num
    })
  }
  
  render() {
    const {value,count,hideAndSeeNum} = this.state;
    return (
      <div>
        <h1>{hideAndSeeNum}</h1>
        <h1>分數 : {count}</h1>
        <h2>出現Q按Q</h2>
        <input
        type="text"
        value={value}
        onChange={this.handleChange}
        placeholder="todo..."
        />
      </div>
    )
  }
}
