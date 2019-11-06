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
    let list = [1];
    const sum = this.state.sum;
    const counter = this.state.counter;
    this.setState({
      counter : counter + 1,
      // list : list.push(counter),
      sum : this.state.sum + counter
      
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
