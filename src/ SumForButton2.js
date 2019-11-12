import React from 'react';

export default class  SumForButton extends React.Component {
  constructor() {
    super()
    this.state ={
      sum : 0,
    }
  }
  handleClick = value => {
    this.setState({
      sum : this.state.sum + value
    });
  }


  render() {
    return (
      <div>
        <h1>加總按下的數字</h1>
          {
            [1,2,3,4,5,6,7,8,9].map(value =>
              <button
                key={value}
                onClick={this.handleClick.bind(this, value)}
              >{value}</button>
            )
          }
          <div>{this.state.sum}</div>
      </div>
    )
  }
}
