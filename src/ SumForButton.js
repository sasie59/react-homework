import React from 'react'

export default class  SumForButton extends React.Component {
  constructor() {
    super()
    this.state =({
      sum : 0,
    });
  }
  handleClick = ({target}) => {
    const sum = this.state.sum
    this.setState({
      sum : sum + parseInt(target.name)
    });
  }


  render() {
    return (
      <div>
        <h1>加總按下的數字</h1>
          <button name={1} onClick={this.handleClick}>1</button>
          <button name={2} onClick={this.handleClick}>2</button>
          <button name={3} onClick={this.handleClick}>3</button>
          <button name={4} onClick={this.handleClick}>4</button>
          <button name={5} onClick={this.handleClick}>5</button>
          <button name={6} onClick={this.handleClick}>6</button>
          <button name={7} onClick={this.handleClick}>7</button>
          <button name={8} onClick={this.handleClick}>8</button>
          <button name={9} onClick={this.handleClick}>9</button>
          <div>{this.state.sum}</div>
      </div>
    )
  }
}
