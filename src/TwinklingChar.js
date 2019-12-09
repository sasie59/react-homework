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
    // 建議這邊設 1000 ~ 5000 這樣亂數感會更重!
    setInterval(this.changeNum, Math.floor(Math.random() * 1001)+ 500 )
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
  
  // 其實你的 input value 可以寫成…
  // <input value='' /> 反正你的 value 一直是空的
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
