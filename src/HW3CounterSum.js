import React from 'react'

export default class HW3CounterSum extends React.Component {
  constructor(){
    super()
    this.state = ({
      sum : 0,
      counter : 1,
    });
  }

  handleClick = () => {
    const sum = this.state.sum;
    const counter = this.state.counter;
    this.setState({
      counter : counter + 1,
      sum : sum + counter
      // 本打算用梯型工式來算總和 但好像不用那麼麻煩 
      
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}><b>add it</b></button><br />
        {this.state.sum}
      </div>
    )
  }
}
